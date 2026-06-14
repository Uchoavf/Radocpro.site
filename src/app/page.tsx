import Link from 'next/link'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import Button from '@/src/components/Button'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ufra-green to-green-700 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Preencha seu RADOC em minutos</h1>
            <p className="text-xl text-gray-100 mb-8">
              Use IA para extrair dados de comprovantes e gere seu relatório de atividades docentes automaticamente.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/app">
                <Button variant="secondary" size="lg">
                  Acessar o App →
                </Button>
              </Link>
              <Link href="/como-funciona">
                <Button variant="outline" size="lg">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Por que usar RADOC Service?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Como funciona?</h2>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ufra-green text-white flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Acesse o app gratuitamente e veja como é simples preencher seu RADOC.
            </p>
            <Link href="/app">
              <Button size="lg">
                Acessar agora →
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const features = [
  {
    icon: '🤖',
    title: 'IA Inteligente',
    description: 'Extrai automaticamente dados de seus comprovantes PDF usando IA avançada.',
  },
  {
    icon: '⚡',
    title: 'Rápido',
    description: 'Preencha seu relatório em minutos, não em horas. Calcula CHS automaticamente.',
  },
  {
    icon: '📄',
    title: 'Completo',
    description: 'Gera PDF pronto para envio ao SIPAC com todos os dados e comprovantes mesclados.',
  },
]

const steps = [
  {
    title: '1. Abra o app',
    description: 'Acesse a plataforma e insira sua chave de API (Claude). Seus dados ficam locais e seguros.',
  },
  {
    title: '2. Anexe comprovantes',
    description: 'Faça upload de PDFs com seus comprovantes (SIGAA, portarias, relatórios de pesquisa).',
  },
  {
    title: '3. IA processa',
    description: 'A IA extrai automaticamente os dados relevantes e preenche os campos do RADOC.',
  },
  {
    title: '4. Revise e ajuste',
    description: 'Verifique os dados, faça correções se necessário e valide o checklist.',
  },
  {
    title: '5. Gere o PDF',
    description: 'Clique um botão e seu RADOC completo é gerado pronto para SIPAC.',
  },
]
