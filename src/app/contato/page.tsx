import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import Button from '@/src/components/Button'

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Entre em contato</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-bold mb-4">Informações</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">Email</p>
                  <p>contato@radoc.service</p>
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p>(92) 98888-0000</p>
                </div>
                <div>
                  <p className="font-semibold">Horário</p>
                  <p>Seg-sex: 9h às 18h</p>
                </div>
              </div>
            </div>

            <form className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ufra-green"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ufra-green"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ufra-green"
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
