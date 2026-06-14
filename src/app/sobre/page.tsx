import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Sobre RADOC Service</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p>
              RADOC Service é uma plataforma desenvolvida para simplificar o processo de preenchimento
              do Relatório de Atividades Docentes (RADOC) da Universidade Federal Rural da Amazônia (UFRA).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Missão</h2>
            <p>
              Automatizar e simplificar o processo de preenchimento de RADOCs usando inteligência artificial,
              permitindo que docentes dediquem mais tempo ao que realmente importa: ensino, pesquisa e extensão.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Tecnologia</h2>
            <p>
              Utilizamos a Claude API da Anthropic para extrair inteligentemente dados de comprovantes em PDF,
              validar informações e gerar relatórios completos conforme as normas da UFRA.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Privacidade e Segurança</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Dados processados localmente no navegador (localStorage)</li>
              <li>Conexão segura com API Claude (HTTPS)</li>
              <li>Nenhum armazenamento de dados em servidores nossos (fase 1)</li>
              <li>Você controla sua chave de API</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
