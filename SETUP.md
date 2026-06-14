# 🚀 Guia de Setup - RADOC Service

## Passo 1: Verifique os pré-requisitos

```bash
# Verifique Node.js (versão 18+)
node --version

# Verifique npm
npm --version
```

Se não tiver Node.js, instale em [nodejs.org](https://nodejs.org)

---

## Passo 2: Instale as dependências

```bash
cd radoc-service
npm install
```

Isso vai instalar:
- Next.js
- React
- TypeScript
- Tailwind CSS
- E outras dependências

⏱️ Leva ~2-3 minutos na primeira vez.

---

## Passo 3: Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Você verá algo como:
```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 2.5s
```

Abra [http://localhost:3000](http://localhost:3000) no navegador! 🎉

---

## Passo 4: Explore a estrutura

A estrutura foi criada com as seguintes pastas:

```
radoc-service/
├── src/app/                    # Páginas (Next.js App Router)
│   ├── page.tsx               # Homepage
│   ├── app/page.tsx           # Página do app RADOC
│   ├── sobre/page.tsx         # Página Sobre
│   └── como-funciona/page.tsx # Como funciona
├── src/components/            # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Button.tsx
├── public/                    # Arquivos estáticos (imagens, etc)
└── README.md                  # Documentação
```

**Para adicionar uma nova página**, crie um arquivo `src/app/minha-pagina/page.tsx`:

```tsx
export default function MinhaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Seu conteúdo */}
      </main>
      <Footer />
    </>
  )
}
```

---

## Passo 5: Integre o RADOC App

O RADOC App original está em:
```
~/Downloads/RADOC.V2/radoc v2 24.05 - v03/radoc_app.html
```

### Opção A: Usar como iframe (rápido)

1. Copie `radoc_app.html` para `public/radoc_app.html`
2. Edite `src/app/app/page.tsx`:

```tsx
export default function AppPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <iframe
          src="/radoc_app.html"
          style={{
            width: '100%',
            minHeight: '100vh',
            border: 'none'
          }}
        />
      </main>
      <Footer />
    </>
  )
}
```

✅ Pronto! O app funciona em `/app`

### Opção B: Converter para React (melhor arquitetura)

Isso é mais trabalho mas é escalável. Deixe para depois.

---

## Passo 6: Customize o site

### Cores
Edite `tailwind.config.ts` para mudar cores:
```ts
extend: {
  colors: {
    ufra: {
      green: '#2e7d32',
      gold: '#DAA520',
    },
  },
}
```

### Logo
Adicione uma logo em `public/logo.png` e use em componentes:
```tsx
<img src="/logo.png" alt="Logo" className="h-8" />
```

### Conteúdo
Edite as páginas em `src/app/*/page.tsx` diretamente.

---

## Passo 7: Build de produção

Quando estiver pronto para lançar:

```bash
# Otimiza o build
npm run build

# Testa a versão de produção
npm start
```

Abre em [http://localhost:3000](http://localhost:3000) - verá a versão otimizada.

---

## Passo 8: Deploy na nuvem

### Vercel (Recomendado - grátis)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático a cada push ✨

### Alternativas
- **Railway**: railway.app
- **Netlify**: netlify.com
- **AWS Amplify**: aws.amazon.com/amplify

---

## Troubleshooting

### "Cannot find module"
```bash
npm install
npm run dev
```

### Porta 3000 já em uso
```bash
npm run dev -- --port 3001
```

### Problemas com TypeScript
```bash
npm run build  # Verifica erros de tipo
```

---

## Próximos passos

1. ✅ Setup básico completo
2. ⏳ Integrar o RADOC App (Opção A ou B)
3. ⏳ Customizar cores e conteúdo
4. ⏳ Configurar domínio próprio
5. ⏳ Adicionar backend (Fase 2)

---

## Documentação útil

- **README.md** - Visão geral do projeto
- **ARCHITECTURE.md** - Como escalar para backend
- **[Next.js Docs](https://nextjs.org/docs)** - Documentação oficial
- **[Tailwind CSS](https://tailwindcss.com)** - Estilos

---

💡 **Dica**: Use `npm run dev` sempre que estiver desenvolvendo. As mudanças aparecem automaticamente no navegador!

Sucesso! 🚀
