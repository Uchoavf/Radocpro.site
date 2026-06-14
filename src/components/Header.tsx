import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ufra-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RD</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline text-ufra-green">RADOC Service</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-ufra-green transition">
              Início
            </Link>
            <Link href="/sobre" className="text-sm font-medium text-gray-700 hover:text-ufra-green transition">
              Sobre
            </Link>
            <Link href="/como-funciona" className="text-sm font-medium text-gray-700 hover:text-ufra-green transition">
              Como funciona
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/app"
            className="px-4 py-2 text-sm font-medium text-white bg-ufra-green rounded-lg hover:bg-opacity-90 transition"
          >
            Acessar App
          </Link>
        </div>
      </nav>
    </header>
  )
}
