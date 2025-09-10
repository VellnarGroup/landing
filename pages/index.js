import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Hero from '../components/ui/Hero'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (router.query.focus === 'newsletter') {
      setTimeout(() => {
        const newsletterInput = document.getElementById('newsletter-input')

        if (newsletterInput) {
          newsletterInput.focus()
          newsletterInput.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }
      }, 100)
    }
  }, [router.query.focus])

  return (
    <>
      <Head>
        <title>Vellnar Group - Innovazione. Crescita. Futuro.</title>
        <meta
          name="description"
          content="Costruiamo il futuro digitale attraverso webapp, SaaS e mobile app innovative. Unisciti alla nostra community per rimanere aggiornato sui nostri progetti."
        />
        <meta name="robots" content="index" />
      </Head>
      <Hero />
    </>
  )
}
