import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'radoc.pro — Preencha seu RADOC automaticamente',
  description: 'Serviço independente de preenchimento de RADOCs. Extraímos dados de comprovantes com IA e geramos relatórios completos prontos para envio.',
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${cormorantGaramond.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        <div className="min-h-screen flex flex-col bg-radoc-cream text-radoc-ink">
          {children}
        </div>
      </body>
    </html>
  )
}
