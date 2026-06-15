export default function Footer() {
  return (
    <footer className="bg-radoc-green-deep text-radoc-cream mt-auto border-t-2 border-radoc-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-radoc-gold rounded-lg flex items-center justify-center">
                <span className="font-serif font-bold text-lg">
                  <span className="text-radoc-green-deep">R</span>
                  <span className="text-radoc-cream">p</span>
                </span>
              </div>
              <span className="font-serif font-semibold text-lg">radoc.pro</span>
            </div>
            <p className="text-sm text-radoc-cream-2">
              Assessoria especializada para preenchimento de RADOCs de docentes da UFRA.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-sans font-semibold text-radoc-gold-soft mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-radoc-cream-2">
              <li><a href="/app" className="hover:text-radoc-gold transition">App</a></li>
              <li><a href="/como-funciona" className="hover:text-radoc-gold transition">Como funciona</a></li>
              <li><a href="/precos" className="hover:text-radoc-gold transition">Preços</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-sans font-semibold text-radoc-gold-soft mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-radoc-cream-2">
              <li><a href="/sobre" className="hover:text-radoc-gold transition">Sobre</a></li>
              <li><a href="/contato" className="hover:text-radoc-gold transition">Contato</a></li>
              <li><a href="/privacidade" className="hover:text-radoc-gold transition">Privacidade</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans font-semibold text-radoc-gold-soft mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-radoc-cream-2">
              <li><a href="/termos" className="hover:text-radoc-gold transition">Termos de uso</a></li>
              <li><a href="/privacidade" className="hover:text-radoc-gold transition">Política de privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-radoc-green opacity-30 pt-8">
          <p className="text-sm text-radoc-cream-2 text-center">
            © 2026 radoc.pro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
