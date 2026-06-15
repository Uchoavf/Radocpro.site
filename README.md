# radoc.pro

Plataforma web independente para preenchimento automatizado de RADOCs (Relatório de Atividades Docentes) usando IA.

## ⚠️ Disclaimer

**radoc.pro** é um serviço **independente** e não é afiliado a nenhuma instituição de ensino superior. É desenvolvido para auxiliar docentes no preenchimento de RADOCs de forma geral, seguindo normas e padrões de relatórios acadêmicos.

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone ou navegue para o diretório do projeto
cd radoc-service

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
radoc-service/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── globals.css         # Estilos globais
│   │   ├── page.tsx            # Homepage
│   │   ├── app/page.tsx        # Página do RADOC App
│   │   ├── sobre/page.tsx      # Sobre
│   │   ├── como-funciona/page.tsx
│   │   └── ...
│   └── components/
│       ├── Header.tsx          # Navegação
│       ├── Footer.tsx          # Rodapé
│       ├── Button.tsx          # Botão reutilizável
│       └── ...
├── public/                     # Arquivos estáticos
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## 🔧 Desenvolvimento

### Comandos disponíveis

```bash
# Servidor de desenvolvimento com hot reload
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Lint de código
npm run lint
```

## 📦 Dependências principais

- **Next.js 15**: Framework React com SSR/SSG
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Tailwind UI**: Componentes pré-built (opcional)

## 🔌 Integração do RADOC App

O RADOC App será integrado na página `/app`. Existem 3 abordagens:

### 1. **Iframe (Rápido)**
Carregue o `radoc_app.html` como iframe:
```tsx
export default function AppPage() {
  return (
    <iframe 
      src="/radoc_app.html" 
      style={{ width: '100%', height: '100vh', border: 'none' }}
    />
  )
}
```

### 2. **React Component (Recomendado)**
Converta o HTML/JS para componentes React:
```tsx
// src/components/RadocApp.tsx
export default function RadocApp() {
  // Conteúdo do app como componentes React
}

// src/app/app/page.tsx
import RadocApp from '@/src/components/RadocApp'
export default function AppPage() {
  return <RadocApp />
}
```

### 3. **Server-side rendering**
Para futuro com backend, componentes podem renderizar lado do servidor.

## 🗄️ Roadmap de Escalabilidade

### Fase 1 (Atual)
- ✅ Landing page
- ✅ Estrutura Next.js
- ⏳ Integração do RADOC App
- ⏳ Páginas estáticas

### Fase 2 (Backend + DB)
- API GraphQL ou REST
- Banco de dados (PostgreSQL)
- Autenticação (JWT/OAuth)
- Dashboard do usuário
- Histórico de RADOCs

### Fase 3 (SaaS)
- Sistema de pagamento (Stripe)
- Planos de assinatura
- Suporte multi-tenant
- Admin panel

## 🎨 Design System

### Cores
- Verde UFRA: `#2e7d32`
- Ouro UFRA: `#DAA520`
- Erro: `#c62828`
- Aviso: `#e65100`

### Componentes reutilizáveis
- `Button`: Botão com variantes (primary, secondary, outline, danger)
- `Header`: Navegação principal
- `Footer`: Rodapé

## 📝 Convenções

- Componentes em `src/components/`
- Páginas em `src/app/*/page.tsx`
- Estilos globais em `src/app/globals.css`
- Imagens em `public/`
- TypeScript obrigatório

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Railway, Netlify, etc.
Segue padrão Next.js standard.

## 📞 Suporte

Para dúvidas sobre integração, consulte:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [BRIEFING_RADOC_APP.md](../RADOC.V2/radoc%20v2%2024.05%20-%20v03/BRIEFING_RADOC_APP.md)

---

**Desenvolvido por**: Ewerton Uchôa  
**Baseado em**: RADOC App (HTML Single-File)  
**Status**: Em desenvolvimento
