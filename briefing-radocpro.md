# 📋 Briefing Completo — radoc.pro Site

> **Versão:** 1.0  
> **Data de Criação:** 15 de junho de 2026  
> **Última Modificação:** 15 de junho de 2026  
> **Status:** ✅ Fase 1 Concluída

---

## 📑 Índice

1. [Visão Geral](#visão-geral)
2. [Cronograma de Desenvolvimento](#cronograma-de-desenvolvimento)
3. [Stack Técnico](#stack-técnico)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Identidade Visual Implementada](#identidade-visual-implementada)
6. [Componentes Desenvolvidos](#componentes-desenvolvidos)
7. [Páginas Criadas](#páginas-criadas)
8. [Integrações Implementadas](#integrações-implementadas)
9. [Design Assets](#design-assets)
10. [Git & Repositório](#git--repositório)
11. [Status Atual](#status-atual)
12. [Próximos Passos](#próximos-passos)
13. [Observações Importantes](#observações-importantes)

---

## 🎯 Visão Geral

### O Projeto

**Nome:** radoc.pro  
**Tipo:** SaaS para preenchimento automatizado de RADOCs  
**Público:** Docentes universitários  
**Modelo:** Freemium (futuro) → Pago  
**Status:** Fase 1 (Frontend + Identidade Visual) — ✅ Concluída  

### O Problema Resolvido

RADOCs (Relatório de Atividades Docentes) são:
- Complexos e demorados de preencher (5-10 horas)
- Exigem compilação de múltiplos comprovantes em PDF
- Cálculos manuais de CHS (carga horária) propensos a erros
- Exigem conhecimento das normas de cada instituição

### A Solução

**radoc.pro** oferece:
- ✅ Extração automática de dados de PDFs via IA
- ✅ Preenchimento automático do RADOC
- ✅ Cálculos validados de CHS
- ✅ Geração de PDF pronto para SIPAC
- ✅ Redução de tempo para 30-60 minutos

### Diferencial

- 🔐 **Serviço independente** — Não afiliado a instituições (removido UFRA)
- 💚 **Seguro** — Dados processados localmente (fase 1)
- ⚡ **Rápido** — Uso de IA Claude para extração inteligente
- 💰 **Escalável** — Arquitetura pronta para SaaS

---

## 📅 Cronograma de Desenvolvimento

### Sessão Única — 15 de junho de 2026

| Horário | Tarefa | Status | Tempo |
|---------|--------|--------|-------|
| 10:00 | Criar estrutura Next.js | ✅ | 30min |
| 10:30 | Aplicar identidade visual | ✅ | 1h |
| 11:30 | Integrar WhatsApp | ✅ | 45min |
| 12:15 | Remover UFRA + genérico | ✅ | 20min |
| 12:35 | Criar radoc.briefing.md | ✅ | 30min |
| 13:05 | Adicionar design assets | ✅ | 15min |
| 13:20 | Criar favicon Rp | ✅ | 20min |
| 13:40 | Atualizar documentação | ✅ | 10min |
| 13:50 | **CONCLUÍDO** | ✅ | **~3h50min** |

---

## 💻 Stack Técnico

### Frontend
- **Framework:** Next.js 15.0.0
- **UI Library:** React 19.0.0-rc.1
- **Language:** TypeScript 5.6.3
- **Styling:** Tailwind CSS 3.4.3
- **CSS Processing:** PostCSS 8.4.38 + Autoprefixer 10.4.19
- **Linting:** ESLint 8.57.0

### Fonts Externas
- **Google Fonts:**
  - Cormorant Garamond (serif) — Headlines
  - Hanken Grotesk (sans) — Body
  - JetBrains Mono (mono) — Code

### Version Control
- **Git:** SSH (Ed25519)
- **Repository:** GitHub privado
- **URL:** https://github.com/Uchoavf/Radocpro.site

### Hospedagem (Futuro)
- **Recomendado:** Vercel (Next.js native)
- **Alternativas:** Railway, Netlify, AWS Amplify

---

## 📁 Estrutura do Projeto

```
radoc-service/
├── public/
│   └── favicon.svg                   # Monograma Rp (512×512, SVG)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Layout raiz + Google Fonts + favicon
│   │   ├── globals.css               # CSS global + paleta de cores
│   │   ├── page.tsx                  # Homepage (redesenhada)
│   │   ├── app/page.tsx              # App placeholder (para RADOC App)
│   │   ├── sobre/page.tsx            # Sobre
│   │   ├── como-funciona/page.tsx    # Como funciona
│   │   └── contato/page.tsx          # Contato (redesenhada)
│   │
│   └── components/
│       ├── Header.tsx                # Nav com logo Rp
│       ├── Footer.tsx                # Rodapé com WhatsApp
│       ├── Button.tsx                # Botão reutilizável
│       └── WhatsAppButton.tsx        # Botão WhatsApp (novo)
│
├── design-assets/                    # 🆕 Assets de design
│   ├── docs/
│   │   ├── Guia radoc.pro - Identidade Visual.html
│   │   └── Story RADOC - Guia de Replicação.md
│   ├── logo/
│   │   └── Logo radoc-pro.html
│   ├── profile/
│   │   └── Foto de Perfil radoc.pro.html
│   └── story/
│       ├── Story RADOC - Standalone.html
│       └── Story RADOC.html
│
├── .gitignore                        # Git ignore rules
├── .eslintrc.json                    # ESLint config
├── next.config.js                    # Next.js config
├── tsconfig.json                     # TypeScript config
├── tailwind.config.ts                # Tailwind + cores custom
├── postcss.config.js                 # PostCSS config
├── package.json                      # Dependências
│
├── README.md                         # Documentação técnica
├── SETUP.md                          # Guia de instalação
├── ARCHITECTURE.md                   # Roadmap de escalabilidade
├── radoc.briefing.md                 # Briefing original (Fase 1)
└── briefing-radocpro.md             # Este arquivo (versão detalhada)
```

---

## 🎨 Identidade Visual Implementada

### 3.1 Paleta de Cores

| Nome | Hex | CSS Variable | Uso |
|------|-----|--------------|-----|
| Verde | `#1c5640` | `--radoc-green` | Primária, CTA, headers |
| Verde-deep | `#143c2d` | `--radoc-green-deep` | Sombras, hover |
| Dourado | `#bd9748` | `--radoc-gold` | Acentos, regras, bordas |
| Dourado-soft | `#d8bd86` | `--radoc-gold-soft` | Monograma p, detalhes |
| Vermelho | `#a8392e` | `--radoc-red` | Separadores, avisos |
| Creme | `#f7f3ea` | `--radoc-cream` | Fundo, texto claro |
| Creme-2 | `#efe8d8` | `--radoc-cream-2` | Fundo secundário |
| Ink | `#22312a` | `--radoc-ink` | Texto principal |

**Implementação:**
- Tailwind: `bg-radoc-green`, `text-radoc-cream`, etc.
- CSS: `:root { --radoc-green: #1c5640; }` em `globals.css`

### 3.2 Tipografia

| Fonte | Variante | Peso | Uso |
|-------|----------|------|-----|
| Cormorant Garamond | Serif | 400, 500, 600, 500i | Headlines, logomarca |
| Hanken Grotesk | Sans | 400, 500, 600, 700 | Body, labels, CTA |
| JetBrains Mono | Mono | 400, 500 | Código, telefone |

**Carregamento:**
- `layout.tsx` → Google Fonts API
- Tailwind: `font-serif` (Cormorant), `font-sans` (Hanken), `font-mono` (JetBrains)

### 3.3 Logomarca

**Monograma Rp:**
```
Fundo: Verde (#1c5640)
R: Creme (#f7f3ea)
p: Dourado-soft (#d8bd86)
Tamanho: 12×12px (Tailwind: w-12 h-12)
Border radius: rounded-lg
```

**Uso:**
- Header/Footer
- Favicon SVG
- Design assets

### 3.4 Favicon (🆕)

**Arquivo:** `public/favicon.svg`

```svg
<svg viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#1c5640" rx="100"/>
  <text x="256" y="256" font-size="320" font-weight="600">
    <tspan fill="#f7f3ea">R</tspan>
    <tspan fill="#d8bd86">p</tspan>
  </text>
</svg>
```

**Características:**
- ✅ Monograma Rp centralizado (256, 256)
- ✅ Font-size: 320px
- ✅ SVG escalável (sem perda de qualidade)
- ✅ Aparece em: aba do navegador, favoritos, histórico

---

## 🧩 Componentes Desenvolvidos

### Header.tsx
**Props:** Nenhuma (componente estático)

**Features:**
- Logo Rp com texto "radoc.pro" + "Para Docentes"
- Menu de navegação (Início, Sobre, Como funciona)
- CTA "Acessar App" (botão verde arredondado)
- Sticky (top-0, z-50)
- Border-bottom dourado (2px)
- Responsivo (menu oculto em mobile)

**Código:**
```tsx
<header className="bg-radoc-cream border-b-2 border-radoc-gold sticky top-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    {/* Logo */}
    <div className="w-12 h-12 bg-radoc-green rounded-lg flex items-center justify-center shadow-md">
      <span className="font-serif font-bold text-xl">
        <span className="text-radoc-cream">R</span>
        <span className="text-radoc-gold-soft">p</span>
      </span>
    </div>
    {/* Menu */}
    {/* CTA */}
  </nav>
</header>
```

### Footer.tsx
**Props:** Nenhuma (componente estático)

**Features:**
- Logo Rp + descrição (serviço independente)
- 3 colunas: Produto, Empresa, Contato
- Ícone de WhatsApp clicável (verde, 48px)
- Link "Abrir WhatsApp" na seção Contato
- Fundo: Verde-deep (#143c2d)
- Texto: Creme + Creme-2
- Divider: Border-top dourado

**Contato:**
- Número: (91) 9 8156-3432
- Link: `https://wa.me/5591981563432`

### Button.tsx
**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `children`: React.ReactNode
- `...props`: HTMLButtonElement attributes

**Variantes:**
```
primary   → Verde (#1c5640) com hover
secondary → Creme-2 com hover
outline   → Borda dourada, texto dourado
danger    → Vermelho (#a8392e)
```

**Tamanhos:**
```
sm → px-3 py-1.5 text-sm
md → px-5 py-2.5 text-base
lg → px-8 py-4 text-lg
```

**Features:**
- `rounded-full` (pill style)
- `shadow-md` + `hover:shadow-lg`
- Transição suave (200ms)
- Disabled state (opacity-50)

### WhatsAppButton.tsx (🆕)
**Props:**
- `variant`: 'icon' | 'button' | 'floating' (default: 'button')
- `message`: string (default: "Olá! Gostaria de mais informações sobre radoc.pro")

**Variantes:**

1. **icon** — Ícone pequeno (48px)
   - Usado no Footer
   - Ícone SVG branco
   - Hover: bg-green-600

2. **button** — Botão completo
   - Texto "WhatsApp" + ícone
   - Fundo verde
   - Hover efeito

3. **floating** — Flutuante no canto (🆕)
   - Posição: `fixed bottom-8 right-8`
   - Tamanho: 64px
   - Hover: `scale-110`
   - Z-index: 40

**Link WhatsApp:**
```
https://wa.me/5591981563432?text=<mensagem_codificada>
```

---

## 📄 Páginas Criadas

### 1. Homepage (/)
**Route:** `src/app/page.tsx`

**Seções:**

#### Hero Section
```
Fundo: Gradiente verde
Eyebrow: "PREENCHA SEU RADOC EM MINUTOS"
Headline: "Faço o seu" + "RADOC" (dourado)
Subheadline: "Você reúne os comprovantes. Eu organizo..."
CTA: 2 botões (Acessar App + Como funciona)
Escopo: "ENSINO · PESQUISA · EXTENSÃO · GESTÃO"
```

#### Features Section (3 cards)
```
1. 🤖 IA Inteligente → Extração automática de PDFs
2. ⚡ Rápido & Eficiente → Cálculos automáticos
3. 📄 Completo & Pronto → PDF para SIPAC
```

#### Como funciona (5 passos)
```
1. Reúna os comprovantes
2. Acesse o app
3. IA processa
4. Você revisa
5. Gere e envie
```

#### CTA Final
```
Headline: "Pronto para começar?"
Subheadline: "Acesse o app..."
Botão: "Acessar radoc.pro →"
```

**Elementos visuais:**
- ✅ Marca d'água "Rp" no fundo (opacidade 5%)
- ✅ Régua decorativa com losangos (CSS)
- ✅ Números de passos em círculos coloridos
- ✅ Responsive (mobile-first)

### 2. Sobre (/sobre)
**Route:** `src/app/sobre/page.tsx`

**Conteúdo:**
- Informações sobre o projeto
- Missão e visão
- Privacidade e segurança
- Declaração de independência

### 3. Como funciona (/como-funciona)
**Route:** `src/app/como-funciona/page.tsx`

**Conteúdo:**
- 6 passos do processo
- Tecnologia por trás (Claude API)
- Explicação de recursos
- Perguntas frequentes

### 4. Contato (/contato) — REDESENHADA
**Route:** `src/app/contato/page.tsx`

**Sections:**

#### Fale Conosco (esquerda)
```
WhatsApp como opção principal
Número: (91) 9 8156-3432
Botão WhatsAppButton (variant="button")
Horário: Seg-sex 9h-18h
```

#### Informações Úteis (direita)
```
• Sobre radoc.pro
• Por que WhatsApp?
• Dica de salvamento (salvar número)
```

#### FAQs (4 perguntas)
```
1. Quanto tempo leva para montar um RADOC?
2. Posso acompanhar o progresso?
3. Qual é o valor?
4. Vocês lidam com RADOCs complexos?
```

---

## 🔌 Integrações Implementadas

### 1. WhatsApp
**Número:** +55 (91) 9 8156-3432

**Pontos de contato:**
- ✅ **Footer:** Ícone + link "Abrir WhatsApp"
- ✅ **Página /contato:** Botão principal + CTA
- ✅ **Página /app:** Floating button no canto inferior direito

**Padrão de link:**
```
https://wa.me/5591981563432?text=<mensagem_codificada>
```

**Mensagens padrão:**
- Header/Footer: "Olá! Gostaria de saber mais sobre radoc.pro"
- /app: "Olá! Preciso de ajuda com o RADOC"
- /contato: "Olá! Gostaria de mais informações sobre radoc.pro"

### 2. Google Fonts
**Carregamento:** `layout.tsx` → `<link>` tag

**Fontes:**
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap
```

### 3. GitHub (Version Control)
**Repositório:** https://github.com/Uchoavf/Radocpro.site (privado)

**SSH:** Configurado (chave Ed25519)

**Email:** 135286722+Uchoavf@users.noreply.github.com

---

## 📦 Design Assets

**Localização:** `design-assets/`

### Conteúdo:

```
design-assets/
├── docs/
│   ├── Guia radoc.pro - Identidade Visual.html
│   └── Story RADOC - Guia de Replicação.md
├── logo/
│   └── Logo radoc-pro.html
│       (Monograma Rp em 3 variações: Verde, Ouro, Claro)
├── profile/
│   └── Foto de Perfil radoc.pro.html
│       (800×800px, circular, para WhatsApp)
└── story/
    ├── Story RADOC - Standalone.html
    └── Story RADOC.html
        (1080×1920px, stories para WhatsApp Status)
```

**Commit:** `edfa39d` — "Add: design assets - Story, Logo, Profile, Docs"

---

## 🔗 Git & Repositório

### Repositório
**URL:** https://github.com/Uchoavf/Radocpro.site (privado)

**Branch:** master

### Commits Realizados (Ordem cronológica)

| Hash | Mensagem | Data |
|------|----------|------|
| `42b52f0` | Initial commit: estrutura Next.js com páginas | 15/jun |
| `0c188f4` | Aplica identidade visual radoc.pro | 15/jun |
| `99531ae` | Adiciona integração WhatsApp | 15/jun |
| `62ea99d` | Remove referências a UFRA | 15/jun |
| `9ba7f05` | Adiciona radoc.briefing.md | 15/jun |
| `edfa39d` | Add: design assets | 15/jun |
| `ba72aba` | Add: favicon Rp | 15/jun |
| `cc6f676` | Fix: centralize Rp no favicon | 15/jun |
| `723619f` | Fix: posiciona Rp no centro | 15/jun |
| `1cf428a` | Docs: atualiza briefing | 15/jun |

### SSH Configuration
**Tipo:** Ed25519  
**Arquivo privado:** `~/.ssh/id_ed25519`  
**Arquivo público:** `~/.ssh/id_ed25519.pub`  
**GitHub:** Chave adicionada em SSH and GPG keys

---

## ✅ Status Atual

### Concluído (Fase 1)
- [x] Estrutura Next.js criada
- [x] Identidade visual implementada (paleta, tipografia, logomarca)
- [x] Header redesenhado com logo Rp
- [x] Footer redesenhado com WhatsApp
- [x] Homepage redesenhada (hero, features, como funciona)
- [x] Página de contato otimizada para WhatsApp
- [x] WhatsApp integrado (3 pontos de contato)
- [x] Remover referências a UFRA (genérico agora)
- [x] Disclaimer adicionado no README
- [x] GitHub sincronizado (privado, SSH)
- [x] Design assets (Story, Logo, Profile, Docs) adicionados
- [x] Favicon Rp criado e centralizado
- [x] Documentação completa (briefings)

### Em Progresso
- ⏳ Nenhum

### Próximos (Fase 2)
- [ ] Página de Preços (/precos) — 3 tiers (Basic, Pro, Enterprise)
- [ ] Homepage mais vendedora — Social proof, case studies, comparações
- [ ] Blog/SEO — 5+ posts otimizados
- [ ] Google Analytics — Rastreamento de conversão
- [ ] Sitemap + robots.txt
- [ ] Performance optimization
- [ ] Integrar RADOC App na página /app
- [ ] Backend + Banco de dados (PostgreSQL)
- [ ] Autenticação (NextAuth)
- [ ] Sistema de pagamento (Stripe)

---

## 🔍 Observações Importantes

### Segurança
- ✅ Repositório privado no GitHub
- ✅ Sem dados sensíveis commitados
- ✅ SSH em vez de HTTPS (mais seguro)
- ✅ Token de API armazenado em variáveis de ambiente

### Performance
- ✅ Next.js com otimizações built-in
- ✅ Tailwind CSS (tree-shaking)
- ✅ Lazy loading de Google Fonts (`display=swap`)
- ✅ SVG favicon (escalável, sem perda)
- ✅ Image optimization (futuro com `next/image`)

### Acessibilidade
- ✅ Semântica HTML5 (header, main, footer, nav)
- ✅ Contraste de cores (WCAG AA mínimo)
- ✅ Links com `title` e `aria-label`
- ✅ Responsividade (mobile-first)
- ✅ Teclado navegável

### SEO
- ✅ Meta tags (title, description, robots, theme-color)
- ✅ URLs limpas (Next.js next/link)
- ✅ Sitemap (futuro com `next-sitemap`)
- ✅ Structured data (futuro com `schema.org`)
- ✅ Open Graph tags (futuro)

### Decisões Importantes

#### 1. Remover UFRA
**Razão:** Projeto pessoal, privado e monetizável. Usar nome de instituição federal para monetizar pode trazer problemas legais.

**Mudanças:**
- Header: "DOCENTES · UFRA" → "Para Docentes"
- Footer: "Docentes da UFRA" → "Serviço independente"
- Homepage: "DOCENTES · UFRA" → "PREENCHA SEU RADOC EM MINUTOS"
- Disclaimer adicionado no README

#### 2. SVG para Favicon
**Razão:** Escalável, sem perda de qualidade, suporta cores, arquivo pequeno (< 1KB).

**Alternativa rejeitada:** PNG/ICO (fixo, maior tamanho).

#### 3. Tailwind + CSS Variables
**Razão:** Combinação oferece poder do Tailwind + flexibilidade de CSS variables para dark mode (futuro).

**Exemplo:**
```css
/* Tailwind: */
<div className="bg-radoc-green text-radoc-cream">

/* CSS Variable (alternativa): */
<div style="background: var(--radoc-green); color: var(--radoc-cream);">
```

---

## 📋 Checklist de Continuação

Quando retomar este projeto:

- [ ] Ler este briefing completamente
- [ ] Executar `npm install` (se não feito)
- [ ] Executar `npm run dev`
- [ ] Verificar se servidor está em http://localhost:3000
- [ ] Testar botões de WhatsApp
- [ ] Testar responsividade (mobile)
- [ ] Revisar design assets
- [ ] Próximo passo: Página de Preços

---

## 📞 Contatos & Credenciais

**WhatsApp:**
- Número: (91) 9 8156-3432
- Link: https://wa.me/5591981563432

**GitHub:**
- Repositório: https://github.com/Uchoavf/Radocpro.site
- SSH: Configurada (Ed25519)
- Email: 135286722+Uchoavf@users.noreply.github.com

**Domínio (Futuro):**
- radoc.pro (a apontar para Vercel)

---

## 📚 Documentação Complementar

- **README.md** — Documentação técnica e instruções
- **SETUP.md** — Guia de instalação passo-a-passo
- **ARCHITECTURE.md** — Roadmap de escalabilidade (Fases 2 e 3)
- **radoc.briefing.md** — Briefing original da Fase 1

---

**Desenvolvido por:** Ewerton Uchôa  
**Versão:** 1.0  
**Status:** ✅ Concluído — Pronto para Fase 2  
**Última Modificação:** 15 de junho de 2026

---

## 🚀 Próximos Passos (Resumo)

1. **Semana 1:** Página de Preços + Social Proof
2. **Semana 2:** Blog SEO + Formulário de contato alternativo
3. **Semana 3:** Google Analytics + Performance
4. **Semana 4:** API skeleton + Deploy Vercel
5. **Fase 2:** Backend + Banco de dados
6. **Fase 3:** SaaS completo + Pagamentos

