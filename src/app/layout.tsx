import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RADOC Service',
  description: 'Preencha seu RADOC automaticamente com IA',
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
        <meta name="theme-color" content="#2e7d32" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
