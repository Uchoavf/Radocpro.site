import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-radoc-cream border-b-2 border-radoc-gold sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo e marca */}
        <Link href="/" className="flex items-center gap-3">
          {/* Monograma Rp */}
          <div className="w-12 h-12 bg-radoc-green rounded-lg flex items-center justify-center shadow-md">
            <span className="font-serif font-bold text-xl">
              <span className="text-radoc-cream">R</span>
              <span className="text-radoc-gold-soft">p</span>
            </span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-serif font-semibold text-lg text-radoc-green">radoc.pro</span>
            <span className="font-mono text-xs text-radoc-green-deep tracking-wide">Docentes · UFRA</span>
          </div>
        </Link>

        {/* Menu navegação */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="font-sans font-medium text-sm text-radoc-ink hover:text-radoc-green transition duration-200">
            Início
          </Link>
          <Link href="/sobre" className="font-sans font-medium text-sm text-radoc-ink hover:text-radoc-green transition duration-200">
            Sobre
          </Link>
          <Link href="/como-funciona" className="font-sans font-medium text-sm text-radoc-ink hover:text-radoc-green transition duration-200">
            Como funciona
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/app"
            className="px-5 py-2.5 font-sans font-semibold text-sm text-radoc-cream bg-radoc-green rounded-full hover:bg-radoc-green-deep transition duration-200 shadow-md"
          >
            Acessar App
          </Link>
        </div>
      </nav>
    </header>
  )
}
