import Head from 'next/head'

export default function Privacy() {
  const lastUpdated = '9 Ottobre 2025'

  return (
    <>
      <Head>
        <title>Privacy Policy - Vellnar Group</title>
        <meta
          name="description"
          content="Privacy Policy di Vellnar Group - Come trattiamo i tuoi dati personali"
        />
        <meta name="robots" content="index" />
      </Head>

      <div className="custom-screen py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Ultimo aggiornamento: {lastUpdated}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Chi Siamo
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vellnar Group è un'azienda tecnologica in fase di sviluppo che
                si occupa della creazione di webapp, SaaS e applicazioni mobile
                innovative. Questa Privacy Policy descrive come raccogliamo,
                utilizziamo e proteggiamo le tue informazioni personali.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Informazioni che Raccogliamo
              </h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Newsletter
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Quando ti iscrivi alla nostra newsletter, raccogliamo:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Il tuo indirizzo email</li>
                <li>Data e ora di iscrizione</li>
                <li>Indirizzo IP (per scopi di sicurezza)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Dati di Navigazione
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Durante la navigazione del sito, potrebbero essere raccolti
                automaticamente:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Informazioni sul browser e dispositivo</li>
                <li>Pagine visitate e tempo di permanenza</li>
                <li>Referrer (sito da cui provieni)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Come Utilizziamo le Tue Informazioni
              </h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Newsletter
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Invio di aggiornamenti sui nostri progetti e prodotti</li>
                <li>Comunicazioni su nuovi lanci e opportunità</li>
                <li>Contenuti esclusivi per la community</li>
                <li>Inviti a eventi o beta testing</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Non condividiamo mai</strong> il tuo indirizzo email con
                terze parti per scopi commerciali. Le tue informazioni rimangono
                private e sicure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Base Legale del Trattamento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Il trattamento dei tuoi dati si basa sul{' '}
                <strong>consenso esplicito</strong> che fornisci iscrivendoti
                alla newsletter. Puoi revocare il consenso in qualsiasi momento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. I Tuoi Diritti
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hai il diritto di:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>
                  <strong>Accesso:</strong> Richiedere una copia dei tuoi dati
                </li>
                <li>
                  <strong>Rettifica:</strong> Correggere dati inesatti
                </li>
                <li>
                  <strong>Cancellazione:</strong> Richiedere la rimozione dei
                  tuoi dati
                </li>
                <li>
                  <strong>Disiscrizione:</strong> Annullare l'iscrizione alla
                  newsletter in qualsiasi momento
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Per esercitare questi diritti, contattaci a:{' '}
                <a
                  href="mailto:privacy@vellnar.com"
                  className="text-gray-800 hover:underline"
                >
                  privacy@vellnar.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Sicurezza dei Dati
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizziamo misure di sicurezza appropriate per proteggere le
                tue informazioni, inclusi servizi di email sicuri (Resend) e
                connessioni crittografate (HTTPS).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Conservazione dei Dati
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conserviamo i tuoi dati della newsletter fino a quando non
                richiedi la disiscrizione o la cancellazione. I dati di
                navigazione vengono conservati per un massimo di 24 mesi.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Modifiche alla Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Potremmo aggiornare questa Privacy Policy periodicamente. Ti
                informeremo di eventuali modifiche significative tramite email o
                avviso sul sito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                9. Contatti
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Per domande su questa Privacy Policy, contattaci:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li>
                  Email:{' '}
                  <a
                    href="mailto:privacy@vellnar.com"
                    className="text-gray-800 hover:underline"
                  >
                    privacy@vellnar.com
                  </a>
                </li>
                <li>
                  Email generale:{' '}
                  <a
                    href="mailto:info@vellnar.com"
                    className="text-gray-800 hover:underline"
                  >
                    info@vellnar.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
