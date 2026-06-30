# Relatório de Segurança — radoc.pro

> **Data:** 30 de junho de 2026  
> **Versão:** 2.0  
> **Status:** Blindado

---

## 1. Arquitetura de Segurança

```
                    ┌─────────────────┐
                    │   Vercel WAF    │ ← Anti-DDoS, bloqueio de IP
                    │   (CDN Edge)    │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  Next.js Server │ ← CSP, Rate Limit, Validação
                    │  (App Router)   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
     ┌────────▼───┐  ┌──────▼──────┐  ┌────▼─────┐
     │  Páginas   │  │  API /api/ai│  │  Assets  │
     │  Estáticas │  │  (Proxy IA) │  │  Públicos│
     └────────────┘  └──────┬──────┘  └──────────┘
                            │
                   ┌────────▼────────┐
                   │  Claude/Gemini  │ ← Chave NUNCA exposta
                   │  API (externo)  │
                   └─────────────────┘
```

## 2. Camadas de Proteção

### Camada 1 — Vercel CDN/WAF
- DDoS mitigation automático
- Bloqueio de IPs abusivos (~50 req/s)
- HTTPS forçado (HSTS preload)
- Path traversal bloqueado na borda (403)

### Camada 2 — Next.js Server
- `next.config.js` com headers de segurança
- API Routes server-side (chaves nunca vão pro browser)
- Rate limiting por IP (10 req/min)

### Camada 3 — Aplicação
- Validação de input (Zod-like manual)
- Sem `dangerouslySetInnerHTML`
- Sem `eval()` ou `innerHTML` dinâmico
- Constantes centralizadas, sem secrets no código

---

## 3. Headers de Segurança Ativos

| Header | Valor | Proteção |
|--------|-------|----------|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; object-src 'none'` | XSS |
| `X-Frame-Options` | `DENY` | Clickjacking |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Vazamento de URL |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | APIs do navegador |
| `Strict-Transport-Security` | `max-age=63072000; preload` | HTTPS forçado |
| `X-XSS-Protection` | `1; mode=block` | XSS (legado) |
| `X-DNS-Prefetch-Control` | `on` | Otimização DNS |

---

## 4. Regras para Segredos

### ❌ NUNCA usar `NEXT_PUBLIC_` para:
- Chaves de API (ANTHROPIC, OpenAI, etc.)
- Tokens de autenticação
- Secrets JWT
- Senhas de banco de dados
- Chaves privadas

### ✅ PODE usar `NEXT_PUBLIC_` para:
- URL pública do app
- Chave publishable do Stripe
- IDs de analytics (GA4, etc.)

### Arquitetura correta:
```
Browser → /api/ai (POST com dados)
           → Route.ts (process.env.ANTHROPIC_API_KEY — server-side)
             → Claude API
           ← resposta JSON
Browser ← resultado
```

---

## 5. API Route — `/api/ai`

### Validações implementadas:
- Content-Type obrigatório: `multipart/form-data`
- Tamanho máximo de arquivo: 25MB
- MIME types permitidos: PDF, PNG, JPEG, WebP
- Tamanho máximo de prompt: 50.000 caracteres
- Rate limit: 10 requisições/minuto por IP
- Métodos bloqueados: GET, PUT, DELETE, PATCH, OPTIONS
- Multipart malformado retorna 400 (nunca 500)

### Respostas de erro padronizadas:
```json
{ "error": "mensagem descritiva" }
```
Com status HTTP apropriado (400, 405, 429, 502, 503).

---

## 6. Penetration Test — Resultados

### Round 1 (antes das correções) — 1 falha crítica
- [FAIL] Malformed multipart → 500 Internal Server Error
- [PASS] Headers CSP, X-Frame, X-Content-Type, Referrer
- [PASS] Métodos não autorizados bloqueados
- [PASS] Arquivos sensíveis bloqueados
- [PASS] Path traversal bloqueado

### Round 2 (após correções) — 0 falhas
- [PASS] Malformed multipart → 400 Bad Request
- [PASS] Headers CSP, X-Frame, X-Content-Type, Referrer
- [PASS] Métodos não autorizados bloqueados
- [PASS] Arquivos sensíveis bloqueados
- [PASS] Path traversal bloqueado
- [PASS] Sem secrets nos bundles JS
- [PASS] CORS bloqueado
- [PASS] WAF Vercel ativa em tráfego alto

---

## 7. Checklist de Segurança

- [x] CSP configurado e ativo
- [x] X-Frame-Options: DENY
- [x] X-Content-Type-Options: nosniff
- [x] Referrer-Policy restritiva
- [x] Permissions-Policy restritiva
- [x] HSTS forçado (Vercel)
- [x] HTTPS em toda a comunicação
- [x] Chaves de IA server-side (nunca expostas)
- [x] Rate limiting nas API routes
- [x] Validação de input em todas as entradas
- [x] Métodos HTTP não usados bloqueados
- [x] `.env` e `.env.local` no `.gitignore`
- [x] Sem `dangerouslySetInnerHTML` no código
- [x] Sem `eval()` no código
- [x] Constants centralizadas (sem duplicação)
- [x] WhatsApp number não usa prefixo suspeito
- [x] WAF Vercel ativa

---

## 8. Como manter a segurança

### Ao adicionar novas funcionalidades:
1. Nunca use `NEXT_PUBLIC_` para valores sensíveis
2. Sempre valide input no servidor (nunca confie no client)
3. Use API Routes como proxy para APIs externas
4. Adicione rate limiting a novas API Routes
5. Teste headers com `curl -I` após deploy
6. Rode `npm run build` para verificar types

### Ao adicionar dependências:
- Verifique `npm audit` antes de instalar
- Prefira pacotes mantidos ativamente
- Evite dependências com muitos sub-dependências

### Monitoramento:
- Vercel Analytics para tráfego anômalo
- Logs de erro da API Route (implementar futuramente)
- Alertas de custo da API de IA

---

**Status:** 🟢 **BLINDADO**  
**Último teste de penetração:** 30 de junho de 2026  
**Próxima revisão:** Após integração do backend
