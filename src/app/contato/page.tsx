import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import WhatsAppButton from '@/src/components/WhatsAppButton'

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="font-serif text-5xl font-bold text-radoc-green mb-4">Entre em contato</h1>
          <p className="text-lg text-radoc-ink mb-16">
            Fale conosco de forma rápida e direta pelo WhatsApp.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contato Direto */}
            <div className="bg-gradient-to-br from-radoc-cream to-radoc-cream-2 p-12 rounded-lg border-l-4 border-radoc-gold">
              <h2 className="font-serif text-3xl font-bold text-radoc-green mb-8">Fale conosco</h2>

              <div className="space-y-8 mb-12">
                <div>
                  <p className="font-sans font-semibold text-radoc-green mb-2">WhatsApp (Recomendado)</p>
                  <p className="font-mono text-lg text-radoc-green-deep mb-4">(91) 9 8156-3432</p>
                  <p className="text-sm text-radoc-ink mb-4">
                    Resposta rápida, direto ao ponto. Ideal para tirar dúvidas sobre seu RADOC.
                  </p>
                  <WhatsAppButton message="Olá! Gostaria de saber mais sobre radoc.pro" />
                </div>

                <div className="border-t border-radoc-gold pt-8">
                  <p className="font-sans font-semibold text-radoc-green mb-2">Horário de Atendimento</p>
                  <p className="text-radoc-ink">
                    Segunda a sexta<br />
                    <span className="font-mono text-radoc-green-deep">9:00 - 18:00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-radoc-green mb-8">Informações Úteis</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-sans font-semibold text-radoc-green mb-3">Sobre radoc.pro</h3>
                  <p className="text-radoc-ink leading-relaxed">
                    Somos especialistas em preenchimento de RADOCs para docentes universitários.
                    Utilizamos IA para extrair dados de comprovantes e gerar relatórios
                    completos, de acordo com as normas de cada instituição.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-radoc-green mb-3">Por que WhatsApp?</h3>
                  <p className="text-radoc-ink leading-relaxed">
                    WhatsApp oferece comunicação instantânea, permite compartilhamento de arquivos
                    e histórico de conversa. Perfeito para discutir detalhes do seu RADOC em tempo real.
                  </p>
                </div>

                <div className="bg-radoc-cream-2 p-6 rounded-lg">
                  <p className="text-sm text-radoc-green-deep font-mono">
                    📌 Dica: Salve nosso número (91) 9 8156-3432 no seu contato como "radoc.pro" para
                    localizar rapidamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-20 pt-12 border-t-2 border-radoc-gold">
            <h2 className="font-serif text-3xl font-bold text-radoc-green mb-12">Perguntas Frequentes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: 'Quanto tempo leva para montar um RADOC?',
                  a: 'Depende da quantidade de comprovantes e informações disponíveis. Em média, 2-3 dias úteis.',
                },
                {
                  q: 'Posso acompanhar o progresso?',
                  a: 'Sim! Pelo WhatsApp você recebe atualizações em tempo real e pode fazer ajustes conforme necessário.',
                },
                {
                  q: 'Qual é o valor?',
                  a: 'Consulte nosso catálogo de preços ou envie uma mensagem no WhatsApp para uma cotação personalizada.',
                },
                {
                  q: 'Vocês lidam com RADOCs complexos?',
                  a: 'Sim! Temos experiência com RADOCs com múltiplos projetos, orientações e atividades diversas.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-radoc-cream rounded-lg">
                  <h3 className="font-sans font-semibold text-radoc-green mb-3">{item.q}</h3>
                  <p className="text-sm text-radoc-ink">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
