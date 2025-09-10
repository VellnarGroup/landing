import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const Hero = () => {
  const [email, setEmail] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Iscrizione completata! Controlla la tua email.')

        setEmail('')
      } else {
        setMessage(data.message || "Errore durante l'iscrizione")
      }
    } catch (error) {
      setMessage('Errore di connessione. Riprova più tardi.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section>
      <div className="custom-screen py-10 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Innovazione. Crescita. Vellnar.
          </h1>
          <p className="max-w-xl mx-auto">
            Stiamo costruendo il gruppo che porterà sul mercato nuove soluzioni
            digitali. Rimani connesso, il futuro di Vellnar è appena iniziato.
          </p>
          <div className="max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center gap-x-3"
            >
              <Input
                id="newsletter-input"
                type="email"
                placeholder="Inserisci la tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gray-800 hover:bg-gray-600 active:bg-gray-900 disabled:opacity-50"
              >
                {isLoading ? 'Invio...' : 'Iscriviti'}
              </Button>
            </form>
            {message && (
              <p
                className={`mt-3 text-sm ${
                  message.includes('completata')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {message}
              </p>
            )}
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <img
              src="/hero.svg"
              alt="Coming Soon"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
