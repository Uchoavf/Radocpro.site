import { type NextRequest, NextResponse } from 'next/server'

const MAX_FILE_SIZE = 25 * 1024 * 1024

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/webp',
]

const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 10

const requestCounts = new Map<string, { count: number; resetAt: number }>()

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

function cleanupRateLimitMap() {
  const now = Date.now()
  for (const [ip, record] of requestCounts) {
    if (now > record.resetAt) {
      requestCounts.delete(ip)
    }
  }
}

export async function POST(request: NextRequest) {
  cleanupRateLimitMap()

  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown'

  if (!rateLimit(ip)) {
    return json(
      { error: 'Muitas requisições. Tente novamente em alguns minutos.' },
      429
    )
  }

  const contentType = request.headers.get('content-type') || ''

  if (!contentType.includes('multipart/form-data')) {
    return json(
      { error: 'Formato inválido. Envie multipart/form-data.' },
      400
    )
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return json(
      { error: 'Body multipart inválido ou corrompido.' },
      400
    )
  }

  const prompt = formData.get('prompt') as string | null
  const file = formData.get('file') as File | null

  if (!prompt && !file) {
    return json(
      { error: 'Envie um prompt ou arquivo para processamento.' },
      400
    )
  }

  if (prompt && prompt.length > 50_000) {
    return json(
      { error: 'Prompt excede o tamanho máximo de 50.000 caracteres.' },
      400
    )
  }

  if (file) {
    if (file.size > MAX_FILE_SIZE) {
      return json(
        { error: 'Arquivo excede o tamanho máximo de 25MB.' },
        400
      )
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return json(
        { error: 'Tipo de arquivo não permitido. Envie PDF, PNG, JPEG ou WebP.' },
        400
      )
    }
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return json(
      { error: 'API de IA nao configurada no servidor.' },
      503
    )
  }

  try {
    const apiUrl = 'https://api.anthropic.com/v1/messages'
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        messages: [{ role: 'user', content: prompt || 'Processe este arquivo e extraia os dados estruturados.' }],
      }),
    })

    if (!response.ok) {
      return json(
        { error: `Erro na API de IA: ${response.status}` },
        502
      )
    }

    const data = await response.json()
    return json({ result: data }, 200)
  } catch {
    return json(
      { error: 'Falha ao comunicar com a API de IA.' },
      502
    )
  }
}

export async function GET() {
  return json(
    { error: 'Método não permitido. Use POST.' },
    405
  )
}

export async function PUT() {
  return json(
    { error: 'Método não permitido. Use POST.' },
    405
  )
}

export async function DELETE() {
  return json(
    { error: 'Método não permitido. Use POST.' },
    405
  )
}

export async function OPTIONS() {
  return json(
    { error: 'Método não permitido. Use POST.' },
    405
  )
}
