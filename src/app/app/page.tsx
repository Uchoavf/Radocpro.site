import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function AppPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-blue-900 mb-2">🚀 App em desenvolvimento</h2>
            <p className="text-blue-800">
              O RADOC App será integrado aqui. Por enquanto, você pode acessar a versão standalone.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">RADOC App</h1>
            <p className="text-gray-600 mb-6">
              O aplicativo para preenchimento automático de RADOC será carregado nesta página.
            </p>

            <div className="bg-gray-50 rounded p-6 font-mono text-sm mb-6">
              <p className="text-gray-700 mb-4">
                Para integrar o RADOC App, você pode:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Copiar o conteúdo de <code className="bg-white px-2 py-1">radoc_app.html</code></li>
                <li>Criar componentes React a partir do HTML/CSS/JS</li>
                <li>Integrar como iframe (solução rápida)</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-ufra-green p-4">
                <h3 className="font-bold mb-2">Opção 1: Iframe (Rápido)</h3>
                <p className="text-sm text-gray-600">
                  Carregue o radoc_app.html diretamente em um iframe. Mantém tudo isolado.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 p-4">
                <h3 className="font-bold mb-2">Opção 2: React (Escalável)</h3>
                <p className="text-sm text-gray-600">
                  Converta o HTML/JS para componentes React para melhor integração com Next.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
