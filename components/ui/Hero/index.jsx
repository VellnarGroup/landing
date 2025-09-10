import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const Hero = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Email iscrizione:', email)

    setEmail('')
  }

  return (
    <section>
      <div className="custom-screen py-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Innovazione. Crescita. Vellnar.
          </h1>
          <p className="max-w-xl mx-auto">
            Stiamo costruendo il gruppo che porterà sul mercato nuove soluzioni
            digitali. Rimani connesso, il futuro di Vellnar è appena iniziato.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-x-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Inserisci la tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button
              type="submit"
              className="bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
            >
              Iscriviti
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
