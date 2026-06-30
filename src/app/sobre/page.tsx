import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="font-serif text-5xl font-bold text-radoc-green mb-4">Sobre o radoc.pro</h1>
          <p className="text-lg text-radoc-ink mb-12">
            Plataforma independente para preenchimento automatizado de RADOCs de docentes universitários.
          </p>

          <div className="space-y-8 text-radoc-ink leading-relaxed">
            <div>
              <h2 className="font-serif text-3xl font-bold text-radoc-green mb-4">Missão</h2>
              <p>
                Automatizar e simplificar o processo de preenchimento de RADOCs usando inteligência artificial,
                permitindo que docentes dediquem mais tempo ao que realmente importa: ensino, pesquisa e extensão.
              </p>
            </div>

            <div className="border-t border-radoc-gold pt-8">
              <h2 className="font-serif text-3xl font-bold text-radoc-green mb-4">Tecnologia</h2>
              <p>
                Utilizamos IA avançada para extrair inteligentemente dados de comprovantes em PDF,
                validar informações e gerar relatórios completos conforme as normas de cada instituição.
              </p>
            </div>

            <div className="border-t border-radoc-gold pt-8">
              <h2 className="font-serif text-3xl font-bold text-radoc-green mb-4">Privacidade e Segurança</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Dados processados localmente no navegador (localStorage)</li>
                <li>Conexão segura com API de IA (HTTPS)</li>
                <li>Nenhum armazenamento de dados em servidores próprios</li>
                <li>Você controla suas informações</li>
              </ul>
            </div>

            <div className="border-t border-radoc-gold pt-8">
              <h2 className="font-serif text-3xl font-bold text-radoc-green mb-4">Serviço Independente</h2>
              <p>
                O radoc.pro não é afiliado a nenhuma instituição de ensino superior.
                Atendemos docentes de qualquer universidade que utilize o sistema RADOC.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
