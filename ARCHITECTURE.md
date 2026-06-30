# Arquitetura - RADOC Service

## Visão geral

RADOC Service é um projeto escalável que evolui em fases:

```
Fase 1 (Atual)          Fase 2 (Backend)        Fase 3 (SaaS)
├─ Next.js frontend    ├─ API GraphQL/REST    ├─ Multi-tenant
├─ Tailwind CSS        ├─ PostgreSQL           ├─ Stripe integration
├─ RADOC App           ├─ JWT Auth            ├─ Admin dashboard
└─ localStorage        ├─ User dashboard      └─ Advanced analytics
                       └─ File storage
```

## Fase 1: Frontend Estático (Atual)

### Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Database**: localStorage (navegador)
- **API**: Claude API (side-client)

### Estrutura
```
src/
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Homepage
│   ├── app/page.tsx        # RADOC App
│   ├── sobre/page.tsx      # Páginas estáticas
│   └── como-funciona/page.tsx
└── components/
    ├── Header.tsx          # Componentes reutilizáveis
    ├── Footer.tsx
    └── Button.tsx
```

### Fluxo de dados
```
User → Browser (localStorage) → Claude API → IA extrai dados → PDF gerado localmente
```

### Limitações conhecidas
- Sem persistência entre dispositivos
- Sem autenticação
- Sem histórico
- Sem múltiplos usuários

---

## Fase 2: Backend + Banco de Dados

### Quando migrar?
- Quando houver múltiplos usuários
- Quando precisar histórico/recuperação
- Quando implementar pagamento

### Mudanças arquiteturais

#### A. Adicionar Backend Node.js/Express

```bash
mkdir -p backend
cd backend
npm init -y
npm install express pg dotenv cors
```

**Estrutura**:
```
backend/
├── src/
│   ├── server.ts           # Entry point
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── radocs.ts
│   │   └── users.ts
│   ├── controllers/        # Lógica de negócio
│   ├── models/             # DB models
│   ├── middleware/
│   ├── types/
│   └── utils/
├── .env
├── package.json
└── Dockerfile
```

#### B. Configurar Banco de Dados

```sql
-- Exemplo com PostgreSQL
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE radocs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  data JSONB,
  status VARCHAR(50),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE attachments (
  id SERIAL PRIMARY KEY,
  radoc_id INTEGER REFERENCES radocs(id),
  file_data BYTEA,
  filename VARCHAR(255),
  uploaded_at TIMESTAMP
);
```

#### C. Implementar APIs

Exemplo com Express:

```typescript
// backend/src/routes/radocs.ts
import express from 'express'
import { authenticate } from '../middleware/auth'

const router = express.Router()

// GET /api/radocs - Lista RADOCs do usuário
router.get('/', authenticate, async (req, res) => {
  // Busca RADOCs do usuário autenticado
})

// POST /api/radocs - Cria novo RADOC
router.post('/', authenticate, async (req, res) => {
  // Salva RADOC e comprovantes no DB
})

// GET /api/radocs/:id - Carrega RADOC específico
router.get('/:id', authenticate, async (req, res) => {
  // Retorna dados completos
})

// PUT /api/radocs/:id - Atualiza RADOC
router.put('/:id', authenticate, async (req, res) => {
  // Atualiza dados
})

// POST /api/radocs/:id/pdf - Gera PDF
router.post('/:id/pdf', authenticate, async (req, res) => {
  // Chama geradorPDF e retorna arquivo
})

export default router
```

#### D. Migrar dados do localStorage

```typescript
// No frontend, após login:
export async function migrarDadosLocal() {
  const radoc = JSON.parse(localStorage.getItem('radoc') || '{}')
  const response = await fetch('/api/radocs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(radoc),
  })
  if (response.ok) {
    localStorage.removeItem('radoc') // Limpar após migração
  }
}
```

---

## Fase 3: SaaS + Scalability

### Adições

#### A. Autenticação (NextAuth.js)

```typescript
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
        })
        return res.json()
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
}

export default NextAuth(authOptions)
```

#### B. Dashboard do Usuário

```typescript
// src/app/dashboard/page.tsx
import { getSession } from 'next-auth/react'

export default async function Dashboard() {
  const session = await getSession()
  // Listar RADOCs salvos do usuário
  // Permitir edição/reutilização
  // Mostrar histórico
}
```

#### C. Pagamento (Stripe)

```typescript
// backend/src/routes/payments.ts
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

router.post('/checkout', authenticate, async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1234567890',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.APP_URL}/precos`,
  })
  res.json({ url: session.url })
})
```

#### D. File Storage (S3 / Cloud Storage)

```typescript
// backend/src/utils/storage.ts
import AWS from 'aws-sdk'

const s3 = new AWS.S3()

export async function uploadFile(file: Buffer, filename: string) {
  return s3.upload({
    Bucket: process.env.AWS_BUCKET!,
    Key: `attachments/${filename}`,
    Body: file,
  }).promise()
}
```

---

## Padrões de código

### Frontend (React/TypeScript)

```typescript
// Sempre tipado
interface RadocData {
  id: string
  docente: string
  ano: number
  secoes: Section[]
}

// Componentes isolados
export default function RadocForm() {
  const [data, setData] = useState<RadocData>()
  return <form>{/* ... */}</form>
}
```

### Backend (Node.js)

```typescript
// Middleware de erro centralizado
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

// Validação de input
import { z } from 'zod'
const RadocSchema = z.object({ /* ... */ })
```

---

## Segurança

### Segredos — Regra de ouro
- **Nunca** use prefixo `NEXT_PUBLIC_` para chaves de API, tokens, secrets
- `NEXT_PUBLIC_` injeta o valor no bundle JavaScript do navegador → **visível para qualquer um**
- Apenas use `NEXT_PUBLIC_` para valores públicos: URL do app, chave publishable do Stripe
- Chaves de IA (`ANTHROPIC_API_KEY`) e secrets ficam sem prefixo → disponíveis apenas server-side

### Arquitetura segura para chamadas de IA
```
Browser (NUNCA vê a chave)
  → POST /api/ai (com PDF/dados)
    → API Route server-side (chave no process.env)
      → Claude/Gemini API
    ← resposta JSON
  ← resultado
```

### Headers de segurança (aplicados via next.config.js)
- `Content-Security-Policy` — bloqueia XSS, inline scripts não autorizados
- `X-Content-Type-Options: nosniff` — previne MIME sniffing
- `X-Frame-Options: DENY` — previne clickjacking
- `Referrer-Policy: strict-origin-when-cross-origin` — limita vazamento de URL
- `Permissions-Policy` — restringe API do navegador (câmera, microfone, geolocalização)
- HSTS via Vercel — força HTTPS

### Rate limiting
- API Route `/api/ai` tem rate limit de 10 req/min por IP
- Impede abuso e protege custos de API de IA

### Validação de input
- API Route `/api/ai` valida:
  - Tipo de conteúdo (multipart/form-data)
  - Tamanho máximo de arquivo (25MB)
  - MIME types permitidos (PDF, PNG, JPEG, WebP)
  - Tamanho máximo de prompt (50.000 caracteres)

### Fase 1
- ✅ HTTPS obrigatório (Vercel)
- ✅ CSP + headers de segurança
- ✅ API proxy server-side (chave nunca exposta)
- ✅ Rate limiting nas API routes
- ✅ Validação de input nas API routes
- ✅ Nenhum dado sensível em localStorage (apenas estado do RADOC)
- ✅ Número WhatsApp centralizado em variável de ambiente

### Fase 2+
- 🔒 JWT com expiração
- 🔒 Rate limiting nas APIs
- 🔒 CORS configurado
- 🔒 Hash de senhas com bcrypt
- 🔒 Variáveis de ambiente protegidas

---

## Deploy

### Fase 1: Vercel
```bash
vercel deploy
```
Conecta ao GitHub, deploy automático.

### Fase 2: Backend separado
```bash
# Backend em Railway, Heroku, ou AWS
# Frontend continua em Vercel
```

### Fase 3: Escalável
```bash
# Kubernetes, Docker, load balancing
# CDN para assets
# Cache Redis para sessões
```

---

## Checklist de migração Fase 1 → Fase 2

- [ ] Configurar banco PostgreSQL
- [ ] Criar backend Express/Node
- [ ] Implementar autenticação (JWT)
- [ ] Adicionar API de CRUD para RADOCs
- [ ] Migrar localStorage → servidor
- [ ] Adicionar NextAuth no frontend
- [ ] Testar fluxo completo
- [ ] Deploy do backend
- [ ] Documentar APIs (Swagger/OpenAPI)

---

## Links úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Última atualização**: 2025-06-13  
**Responsável**: Ewerton Uchôa
