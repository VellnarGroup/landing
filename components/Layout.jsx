import Head from 'next/head'
import Footer from './ui/Footer'
import Navbar from './ui/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vellnar</title>
        <meta
          name="description"
          content="Vellnar making it simple for you to build and grow your SaaS applications, or any business idea"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
