export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">RADOC Service</h3>
            <p className="text-sm">Preencha seu RADOC automaticamente com IA da Anthropic.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/app" className="hover:text-ufra-green transition">App</a></li>
              <li><a href="/como-funciona" className="hover:text-ufra-green transition">Como funciona</a></li>
              <li><a href="/precos" className="hover:text-ufra-green transition">Preços</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/sobre" className="hover:text-ufra-green transition">Sobre</a></li>
              <li><a href="/contato" className="hover:text-ufra-green transition">Contato</a></li>
              <li><a href="/privacidade" className="hover:text-ufra-green transition">Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/termos" className="hover:text-ufra-green transition">Termos de uso</a></li>
              <li><a href="/privacidade" className="hover:text-ufra-green transition">Política de privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; 2025 RADOC Service. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
