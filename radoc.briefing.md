# radoc.pro — Briefing Completo

> **Documento de resumo de desenvolvimento** — Leia antes de continuar o projeto.  
> **Data:** 15 de junho de 2026  
> **Status:** Fase 1 (Frontend + Identidade Visual) ✅ Concluída

---

## 1. Visão Geral do Projeto

**Nome:** radoc.pro  
**Tipo:** SaaS para preenchimento automatizado de RADOCs  
**Escopo:** Serviço independente (não afiliado a instituições)  
**Modelo:** Freemium → Pago (futuro)  
**Tecnologia:** Next.js 15 + React 19 + TypeScript + Tailwind CSS  
**Repositório:** https://github.com/Uchoavf/Radocpro.site (privado)

**O que é RADOC?**  
Relatório de Atividades Docentes — documento que docentes universitários preenchem anualmente com suas atividades em Ensino, Pesquisa, Extensão e Gestão.

**Problema:**
- RADOCs são complexos e demorados de preencher
- Exigem compilação de múltiplos comprovantes em PDF
- Cálculos de CHS (carga horária) são manuais e propensos a erros

**Solução:**
- Plataforma web que extrai dados de PDFs via IA
- Preenche automaticamente o RADOC
- Gera PDF pronto para envio

---

## 2. Arquitetura de Projeto

```
radoc-service/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Layout raiz + fontes
│   │   ├── globals.css               # Estilos globais + paleta
│   │   ├── page.tsx                  # Homepage (redesenhada)
│   │   ├── app/page.tsx              # Página do app (placeholder)
│   │   ├── sobre/page.tsx            # Sobre
│   │   ├── como-funciona/page.tsx    # Como funciona
│   │   └── contato/page.tsx          # Contato (redesenhada)
│   └── components/
│       ├── Header.tsx                # Navegação (redesenhada)
│       ├── Footer.tsx                # Rodapé (redesenhada)
│       ├── Button.tsx                # Botão reutilizável
│       └── WhatsAppButton.tsx        # Botão WhatsApp (novo)
├── public/                           # Assets estáticos
├── package.json                      # Dependências
├── next.config.js                    # Config Next.js
├── tsconfig.json                     # Config TypeScript
├── tailwind.config.ts                # Paleta de cores + fonts
├── postcss.config.js                 # Processamento CSS
├── README.md                         # Documentação técnica
├── SETUP.md                          # Guia de instalação
├── ARCHITECTURE.md                   # Roadmap de escalabilidade
└── radoc.briefing.md                 # Este arquivo
```

---

## 3. Identidade Visual (radoc.pro)

### 3.1 Paleta de cores

| Token | Hex | Nome | Uso |
|-------|-----|------|-----|
| `--radoc-green` | `#1c5640` | Verde principal | Títulos, CTA, headers |
| `--radoc-green-deep` | `#143c2d` | Verde-escuro | Sombras, texto secundário |
| `--radoc-gold` | `#bd9748` | Dourado | Acentos, regras, bordas |
| `--radoc-gold-soft` | `#d8bd86` | Dourado-soft | Monograma, detalhes |
| `--radoc-red` | `#a8392e` | Vermelho | Separadores, avisos |
| `--radoc-cream` | `#f7f3ea` | Creme | Fundo, texto claro |
| `--radoc-cream-2` | `#efe8d8` | Creme-2 | Fundo secundário |
| `--radoc-ink` | `#22312a` | Ink | Texto principal |

**Gradiente de fundo (hero):**
```css
bg-gradient-to-br from-radoc-green via-radoc-green to-radoc-green-deep
```

### 3.2 Tipografia

| Fonte | Variante | Uso |
|-------|----------|-----|
| **Cormorant Garamond** | 400, 500, 600, 500i | Headlines, logomarca, títulos |
| **Hanken Grotesk** | 400, 500, 600, 700 | Labels, CTA, rodapé, corpo |
| **JetBrains Mono** | 400, 500 | Telefone, tags técnicas, código |

**Google Fonts (carregada em layout.tsx):**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### 3.3 Logomarca

**Monograma Rp** (adotado)
- **R:** Creme (#f7f3ea)
- **p:** Dourado-soft (#d8bd86)
- **Fundo:** Verde (#1c5640)
- **Tamanho padrão:** 12×12px (w-12 h-12)
- **Borderradius:** rounded-lg

**Chip da logomarca:**
```tsx
<div className="w-12 h-12 bg-radoc-green rounded-lg flex items-center justify-center shadow-md">
  <span className="font-serif font-bold text-xl">
    <span className="text-radoc-cream">R</span>
    <span className="text-radoc-gold-soft">p</span>
  </span>
</div>
```

---

## 4. Componentes Desenvolvidos

### 4.1 Header.tsx
- Logomarca Rp + "radoc.pro" + "Para Docentes"
- Menu de navegação (Início, Sobre, Como funciona)
- CTA "Acessar App" (botão verde arredondado)
- Sticky, z-50, border-bottom dourado

### 4.2 Footer.tsx
- Logomarca + descrição (serviço independente)
- 3 colunas: Produto, Empresa, Contato
- Ícone de WhatsApp clicável
- Link WhatsApp na seção Contato
- Número: (91) 9 8156-3432
- Divider com border-top dourado

### 4.3 Button.tsx
- 4 variantes: primary (verde), secondary, outline (dourado), danger (vermelho)
- 3 tamanhos: sm, md, lg
- Borderradius: rounded-full (pill style)
- Shadow + hover effects

### 4.4 WhatsAppButton.tsx (novo)
- 3 variantes:
  - **icon:** Ícone pequeno (6×6, usado no footer)
  - **button:** Botão completo com texto
  - **floating:** Flutuante no canto inferior direito (fixed bottom-8 right-8)
- Link: `https://wa.me/5591981563432?text=<mensagem>`
- Mensagem padrão: "Olá! Gostaria de mais informações sobre radoc.pro"
- Hover: scale-110 (floating), bg-green-600 (button)

---

## 5. Páginas Criadas

### 5.1 Homepage (/)
**Seções:**
1. **Hero** — "Faço o seu RADOC" + CTA
2. **Features** — 3 cards (IA, Rápido, Completo)
3. **Como funciona** — 5 passos enumerados
4. **CTA Final** — Botão "Acessar radoc.pro"

**Elementos visuais:**
- Marca d'água "Rp" no fundo (opacidade 5%)
- Régua decorativa com losangos (CSS)
- Gradiente verde no hero
- Eyebrow "PREENCHA SEU RADOC EM MINUTOS"

### 5.2 Sobre (/sobre)
- Informações sobre o projeto
- Missão e visão
- Privacidade e segurança

### 5.3 Como funciona (/como-funciona)
- 6 passos do processo
- Tecnologia por trás (Claude API)
- Explicação de recursos

### 5.4 Contato (/contato) — REDESENHADA
**Sections:**
1. **Fale conosco** (esquerda)
   - WhatsApp como opção principal
   - Número: (91) 9 8156-3432
   - Horário: Seg-sex 9h-18h
   - Botão WhatsAppButton

2. **Informações Úteis** (direita)
   - Sobre radoc.pro
   - Por que WhatsApp
   - Dica de salvamento

3. **FAQs** — 4 perguntas frequentes

---

## 6. Integrações Implementadas

### 6.1 WhatsApp
**Número:** +55 91 9 8156-3432  
**Pontos de contato:**
- ✅ Footer: Ícone + link "Abrir WhatsApp"
- ✅ Página /contato: Botão principal + CTA
- ✅ Página /app: Floating button no canto inferior direito

**Padrão de link:**
```
https://wa.me/5591981563432?text=Olá! Gostaria de saber mais sobre radoc.pro
```

### 6.2 Google Fonts
3 fontes carregadas em `layout.tsx`:
- Cormorant Garamond (serif)
- Hanken Grotesk (sans)
- JetBrains Mono (mono)

### 6.3 GitHub
- Repositório privado: https://github.com/Uchoavf/Radocpro.site
- SSH configurado (chave Ed25519)
- Descrição atualizada para "serviço independente"

---

## 7. Mudanças Importantes (UFRA → Genérico)

**Por quê?** Projeto pessoal, privado e monetizável. Usar nome de instituição federal para monetizar pode trazer problemas legais.

| Item | Antes | Depois |
|------|-------|--------|
| Header | DOCENTES · UFRA | Para Docentes |
| Descrição | RADOCs da UFRA | RADOCs de docentes universitários |
| GitHub | Com referência a UFRA | Serviço independente |
| Disclaimer | Nenhum | Adicionado no README |

**Novo disclaimer no README:**
```
⚠️ radoc.pro é um serviço INDEPENDENTE
   Não é afiliado a nenhuma instituição de ensino superior
```

---

## 8. Stack Técnico

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| **Framework** | Next.js | 15.0.0 |
| **UI Library** | React | 19.0.0-rc.1 |
| **Language** | TypeScript | 5.6.3 |
| **Styling** | Tailwind CSS | 3.4.3 |
| **CSS Processing** | PostCSS + Autoprefixer | 8.4.38 |
| **Package Manager** | npm | (latest) |
| **Node** | (recomendado) | 18+ |

**Fonts externas:**
- Google Fonts (Cormorant Garamond, Hanken Grotesk, JetBrains Mono)

---

## 9. Configuração Local

### 9.1 Instalação
```bash
cd ~/radoc-service
npm install
npm run dev
```

**Acesso:** http://localhost:3000

### 9.2 Desenvolvimento
```bash
npm run dev          # Server com hot reload
npm run build        # Build de produção
npm start            # Rodar versão build
npm run lint         # Verificar código
```

### 9.3 Deploy
Recomendado: **Vercel**
```bash
npm install -g vercel
vercel
```

---

## 10. Git & GitHub

**Repositório:** https://github.com/Uchoavf/Radocpro.site (privado)

**Commits realizados hoje:**
1. `42b52f0` - Initial commit: estrutura Next.js com páginas
2. `0c188f4` - Aplica identidade visual radoc.pro
3. `99531ae` - Adiciona integração WhatsApp
4. `62ea99d` - Remove referências a UFRA: torna projeto genérico

**SSH:** Configurada (chave Ed25519)  
**Email:** 135286722+Uchoavf@users.noreply.github.com

---

## 11. Status Atual

### ✅ Concluído (Fase 1)
- [x] Estrutura Next.js criada
- [x] Identidade visual (paleta, tipografia, logomarca)
- [x] Header redesenhado
- [x] Footer redesenhado
- [x] Homepage redesenhada
- [x] Página de contato otimizada
- [x] WhatsApp integrado (3 pontos de contato)
- [x] Remover referências a UFRA
- [x] Disclaimer adicionado
- [x] GitHub sincronizado (privado)
- [x] SSH configurado

### ⏳ Próximos passos (Fase 2)
- [ ] Integrar RADOC App (/app) — iframe ou React component
- [ ] Testes de usabilidade (UI)
- [ ] Deploy em Vercel
- [ ] Apontar domínio radoc.pro
- [ ] Backend + Banco de dados (PostgreSQL)
- [ ] Autenticação (NextAuth)
- [ ] Sistema de pagamento (Stripe)
- [ ] Dashboard do usuário

---

## 12. Credenciais & Contatos

**WhatsApp:**
- Número: (91) 9 8156-3432
- Link: https://wa.me/5591981563432

**GitHub:**
- Repositório: https://github.com/Uchoavf/Radocpro.site
- SSH: Configurada

**Domínio (futuro):**
- radoc.pro (a apontar para Vercel)

---

## 13. Observações Importantes

### Segurança
- ✅ Projeto privado no GitHub
- ✅ Sem dados sensíveis commitados
- ✅ SSH em vez de HTTPS
- ✅ Token de API (GitHub) em variável de ambiente

### Performance
- ✅ Next.js com otimizações built-in
- ✅ Tailwind CSS (tree-shaking)
- ✅ Lazy loading de fontes Google
- ✅ Shadow + hover effects (sem overhead)

### Acessibilidade
- ✅ Semântica HTML (header, main, footer, nav)
- ✅ Contraste de cores (WCAG AA mínimo)
- ✅ Links com title/aria-label
- ✅ Responsividade (mobile-first)

### SEO
- ✅ Meta tags (title, description, robots)
- ✅ Sitemap (futuro com next-sitemap)
- ✅ Structured data (futuro)
- ✅ URLs limpas (next/link)

---

## 14. Comandos Úteis

```bash
# Desenvolvimento
cd ~/radoc-service && npm run dev

# Verificar sintaxe
npm run lint

# Build
npm run build && npm start

# Git
git status
git add .
git commit -m "Mensagem"
git push

# GitHub CLI
gh repo view
gh repo edit
```

---

## 15. Links & Referências

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com
- **TypeScript:** https://www.typescriptlang.org/docs
- **GitHub SSH:** https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- **Google Fonts:** https://fonts.google.com

---

## 16. Notas para Continuação

### Ao retomar o projeto:
1. Leia este documento completamente
2. Execute `npm install` para garantir dependências
3. Execute `npm run dev` para verificar se tudo compila
4. Verifique se servidor está em http://localhost:3000
5. Teste os botões de WhatsApp (devem abrir wa.me)

### Próxima prioridade:
**Integrar o RADOC App** na página `/app`:
- Opção A: Iframe do `radoc_app.html` (rápido, isolado)
- Opção B: Converter para componentes React (escalável, melhor UX)

---

## 17. Checklist Final

- ✅ Estrutura Next.js
- ✅ Identidade visual aplicada
- ✅ Componentes reutilizáveis
- ✅ Páginas estáticas
- ✅ WhatsApp integrado
- ✅ Sem referências a UFRA
- ✅ GitHub sincronizado
- ✅ Documentação completa
- ✅ Servidor rodando

**Status:** 🟢 **PRONTO PARA FASE 2**

---

**Última atualização:** 15 de junho de 2026  
**Próxima revisão:** Quando integrar o RADOC App  
**Responsável:** Ewerton Uchôa

