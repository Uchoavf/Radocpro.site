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
        <section className="bg-gradient-to-br from-radoc-green via-radoc-green to-radoc-green-deep py-32 px-4 relative overflow-hidden">
          {/* Decoração de fundo */}
          <div className="absolute top-0 right-0 opacity-5 text-9xl font-serif font-bold">
            <span className="text-radoc-gold-soft">R</span>
            <span>p</span>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="font-mono text-radoc-gold-soft text-sm tracking-widest mb-4">
              PREENCHA SEU RADOC EM MINUTOS
            </p>

            <h1 className="font-serif text-6xl md:text-7xl font-bold text-radoc-cream mb-6 leading-tight">
              Faço o seu<br /><span className="text-radoc-gold">RADOC</span>
            </h1>

            <div className="w-20 h-0.5 bg-radoc-gold mx-auto mb-8"></div>

            <p className="font-serif text-2xl text-radoc-cream-2 mb-10 max-w-2xl mx-auto">
              Você reúne os comprovantes. Eu organizo, monto e entrego seu relatório completo, com todos os cálculos no padrão CPPD.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/app">
                <Button size="lg">
                  Acessar o App →
                </Button>
              </Link>
              <Link href="/como-funciona">
                <Button variant="outline" size="lg">
                  Como funciona
                </Button>
              </Link>
            </div>

            <p className="font-mono text-radoc-cream-2 text-sm">
              ENSINO · PESQUISA · EXTENSÃO · GESTÃO
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-radoc-cream">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-5xl font-bold text-center text-radoc-green mb-20">
              Por que usar radoc.pro?
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {features.map((feature, i) => (
                <div key={i} className="p-8 bg-white rounded-lg border-l-4 border-radoc-gold hover:shadow-lg transition">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-radoc-green mb-3">{feature.title}</h3>
                  <p className="text-radoc-ink leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl font-bold text-center text-radoc-green mb-20">
              Como funciona?
            </h2>

            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-radoc-green to-radoc-green-deep text-radoc-cream flex items-center justify-center font-serif font-bold text-2xl shadow-md">
                    {i + 1}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-2xl font-bold text-radoc-green mb-2">{step.title}</h3>
                    <p className="text-radoc-ink text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-radoc-cream-2">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-5xl font-bold text-radoc-green mb-6">
              Pronto para começar?
            </h2>
            <p className="font-serif text-xl text-radoc-ink mb-12">
              Acesse o app e veja como é simples preencher seu RADOC de forma profissional.
            </p>
            <Link href="/app">
              <Button size="lg">
                Acessar radoc.pro →
              </Button>
            </Link>

            <div className="mt-16 pt-12 border-t-2 border-radoc-gold">
              <p className="font-mono text-radoc-green-deep text-sm tracking-wider">
                RADOC.PRO — SERVIÇO INDEPENDENTE
              </p>
            </div>
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
    description: 'Extrai automaticamente dados de seus comprovantes em PDF com precisão avançada.',
  },
  {
    icon: '⚡',
    title: 'Rápido & Eficiente',
    description: 'Preencha seu relatório em minutos. Todos os cálculos de CHS são automáticos e validados.',
  },
  {
    icon: '📄',
    title: 'Completo & Pronto',
    description: 'PDF pronto para SIPAC com formulário, comprovantes e assinatura digital integrada.',
  },
]

const steps = [
  {
    title: 'Reúna os comprovantes',
    description: 'Extratos do SIGAA, portarias de pesquisa e extensão, relatórios de gestão. Em PDFs.',
  },
  {
    title: 'Acesse o app',
    description: 'Plataforma web segura. Seus dados ficam locais — você controla tudo.',
  },
  {
    title: 'IA processa',
    description: 'Extraímos dados de cada comprovante e preenchemos os campos do RADOC automaticamente.',
  },
  {
    title: 'Você revisa',
    description: 'Verifique os dados, faça ajustes finos, valide o checklist conforme normas CPPD.',
  },
  {
    title: 'Gere e envie',
    description: 'PDF completo e pronto para upload no SIPAC. Relatório + comprovantes mesclados.',
  },
]
