import Head from 'next/head'
import Hero from '../components/ui/Hero'

export default function Home() {
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
