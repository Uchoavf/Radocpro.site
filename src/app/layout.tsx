import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'radoc.pro — Preencha seu RADOC automaticamente',
  description: 'Serviço independente de preenchimento de RADOCs. Extraímos dados de comprovantes com IA e geramos relatórios completos prontos para envio.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1c5640" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <div className="min-h-screen flex flex-col bg-radoc-cream text-radoc-ink">
          {children}
        </div>
      </body>
    </html>
  )
}
