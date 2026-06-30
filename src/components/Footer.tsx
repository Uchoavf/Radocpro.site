import WhatsAppButton from './WhatsAppButton'

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
            <p className="text-sm text-radoc-cream-2 mb-6">
              Assessoria especializada para preenchimento de RADOCs. Serviço independente.
            </p>
            <div className="flex gap-3">
              <WhatsAppButton variant="icon" message="Olá! Gostaria de saber mais sobre radoc.pro" />
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-sans font-semibold text-radoc-gold-soft mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-radoc-cream-2">
              <li><a href="/app" className="hover:text-radoc-gold transition">App</a></li>
              <li><a href="/como-funciona" className="hover:text-radoc-gold transition">Como funciona</a></li>
              <li><a href="/contato" className="hover:text-radoc-gold transition">Preços</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-sans font-semibold text-radoc-gold-soft mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-radoc-cream-2">
              <li><a href="/sobre" className="hover:text-radoc-gold transition">Sobre</a></li>
              <li><a href="/contato" className="hover:text-radoc-gold transition">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-sans font-semibold text-radoc-gold-soft mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-radoc-cream-2">
              <li>
                <p className="font-mono text-radoc-gold-soft mb-1">(91) 9 8156-3432</p>
                <a
                  href="https://wa.me/5591981563432?text=Olá! Gostaria de mais informações sobre radoc.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition text-xs font-semibold"
                >
                  Abrir WhatsApp →
                </a>
              </li>
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
