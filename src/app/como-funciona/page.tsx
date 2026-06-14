import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function ComoFuncionaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Como funciona</h1>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ufra-green text-white text-lg font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  {step.details && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {step.details.map((detail, j) => (
                        <li key={j}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Tecnologia por trás</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos o modelo Claude Sonnet da Anthropic, que é capaz de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ler e interpretar PDFs com alta precisão</li>
              <li>Extrair dados estruturados automaticamente</li>
              <li>Validar informações conforme regras da UFRA</li>
              <li>Processar múltiplos comprovantes em paralelo</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const steps = [
  {
    title: 'Configure sua chave de API',
    description: 'Você precisará de uma chave de API da Claude (Anthropic). Crie uma gratuitamente no site deles.',
    details: [
      'Vá em console.anthropic.com',
      'Crie uma conta ou faça login',
      'Gere uma chave de API',
      'Insira no aplicativo (dados ficam locais)',
    ],
  },
  {
    title: 'Preencha os dados básicos',
    description: 'Insira informações do docente e período de referência do RADOC.',
    details: [
      'Nome e matrícula do docente',
      'Ano de referência',
      'Departamento/Unidade',
      'Regime de trabalho',
    ],
  },
  {
    title: 'Anexe comprovantes',
    description: 'Faça upload dos PDFs com seus comprovantes, um por um.',
    details: [
      'Extratos SIGAA (aulas, orientações)',
      'Portarias de pesquisa (PROPED)',
      'Portarias de extensão (PROEX)',
      'Relatórios de gestão/comissões',
    ],
  },
  {
    title: 'IA processa automaticamente',
    description: 'O app envia cada PDF para a IA, que extrai os dados relevantes.',
    details: [
      'Cargas horárias (CHS) são extraídas',
      'Dados preenchidos automaticamente',
      'Totalizações são calculadas',
      'Erros óbvios são sinalizados',
    ],
  },
  {
    title: 'Revise e valide',
    description: 'Você revisa todos os dados extraídos e faz ajustes se necessário.',
    details: [
      'Verifique as CHS extraídas',
      'Corrija dados imprecisos',
      'Use botões de auto-ajuste (Equilibrar CHS)',
      'Valide o checklist antes de gerar',
    ],
  },
  {
    title: 'Gere e envie',
    description: 'Gere o PDF final com o formulário e comprovantes e envie ao SIPAC.',
    details: [
      'PDF formulário + comprovantes mesclados',
      'Pronto para upload no SIPAC',
      'Seus dados são salvos localmente',
      'Você pode reabrir e editar a qualquer momento',
    ],
  },
]
