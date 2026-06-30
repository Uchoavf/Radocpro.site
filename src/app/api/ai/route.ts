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

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown'

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Muitas requisições. Tente novamente em alguns minutos.' },
      { status: 429 }
    )
  }

  try {
    const contentType = request.headers.get('content-type') || ''

    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: 'Formato inválido. Envie multipart/form-data.' },
        { status: 400 }
      )
    }

    const formData = await request.formData()
    const prompt = formData.get('prompt') as string | null
    const file = formData.get('file') as File | null

    if (!prompt && !file) {
      return NextResponse.json(
        { error: 'Envie um prompt ou arquivo para processamento.' },
        { status: 400 }
      )
    }

    if (prompt && prompt.length > 50_000) {
      return NextResponse.json(
        { error: 'Prompt excede o tamanho máximo de 50.000 caracteres.' },
        { status: 400 }
      )
    }

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: 'Arquivo excede o tamanho máximo de 25MB.' },
          { status: 400 }
        )
      }

      if (!ALLOWED_MIME_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: 'Tipo de arquivo não permitido. Envie PDF, PNG, JPEG ou WebP.' },
          { status: 400 }
        )
      }
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API de IA não configurada no servidor.' },
        { status: 503 }
      )
    }

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
      const errBody = await response.text().catch(() => '')
      return NextResponse.json(
        { error: `Erro na API de IA: ${response.status}` },
        { status: 502 }
      )
    }

    const data = await response.json()
    return NextResponse.json({ result: data })
  } catch (err) {
    return NextResponse.json(
      { error: 'Erro interno ao processar a requisição.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Método não permitido. Use POST.' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Método não permitido. Use POST.' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Método não permitido. Use POST.' },
    { status: 405 }
  )
}
