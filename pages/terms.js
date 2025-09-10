import Head from 'next/head'

export default function Terms() {
  const lastUpdated = '9 Ottobre 2025'

  return (
    <>
      <Head>
        <title>Termini di Servizio - Vellnar Group</title>
        <meta
          name="description"
          content="Termini di Servizio di Vellnar Group - Condizioni d'uso del nostro sito web"
        />
        <meta name="robots" content="index" />
      </Head>

      <div className="custom-screen py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Termini di Servizio
          </h1>
          <p className="text-gray-600 mb-8">
            Ultimo aggiornamento: {lastUpdated}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Accettazione dei Termini
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizzando il sito web di Vellnar Group, accetti
                automaticamente questi Termini di Servizio. Se non accetti
                questi termini, ti preghiamo di non utilizzare il nostro sito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Descrizione del Servizio
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vellnar Group è un'azienda tecnologica in fase di sviluppo.
                Attualmente offriamo:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Informazioni sui nostri progetti futuri</li>
                <li>Servizio di newsletter per aggiornamenti</li>
                <li>Contenuti informativi sui nostri piani di sviluppo</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                I prodotti e servizi descritti sono in fase di sviluppo e
                potrebbero subire modifiche.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Newsletter
              </h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Iscrizione
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Iscrivendoti alla nostra newsletter, accetti di ricevere
                comunicazioni periodiche riguardanti i nostri progetti,
                aggiornamenti e opportunità.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Contenuti
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                La newsletter può includere:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Aggiornamenti sui progetti in sviluppo</li>
                <li>Annunci di nuovi prodotti o servizi</li>
                <li>Inviti a eventi o programmi beta</li>
                <li>Contenuti educativi e insights del settore</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Disiscrizione
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Puoi disiscriverti in qualsiasi momento cliccando il link
                presente in ogni email o contattandoci a{' '}
                <a
                  href="mailto:info@vellnar.com"
                  className="text-gray-800 hover:underline"
                >
                  info@vellnar.com
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Uso Accettabile
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ti impegni a:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Fornire informazioni accurate durante l'iscrizione</li>
                <li>Non utilizzare il sito per attività illegali</li>
                <li>Non tentare di compromettere la sicurezza del sito</li>
                <li>Rispettare i diritti di proprietà intellettuale</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Proprietà Intellettuale
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tutti i contenuti del sito (testi, immagini, loghi, design) sono
                di proprietà di Vellnar Group e protetti da copyright. È vietata
                la riproduzione senza autorizzazione.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le informazioni sui progetti futuri sono fornite "così come
                sono" e potrebbero subire modifiche. Vellnar Group non
                garantisce la realizzazione di tutti i progetti descritti nei
                tempi indicati.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Limitazione di Responsabilità
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vellnar Group non sarà responsabile per danni diretti,
                indiretti, incidentali o consequenziali derivanti dall'uso del
                sito o delle informazioni contenute.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Modifiche ai Termini
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ci riserviamo il diritto di modificare questi termini in
                qualsiasi momento. Le modifiche saranno pubblicate su questa
                pagina con la data di aggiornamento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                9. Legge Applicabile
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Questi termini sono regolati dalla legge italiana. Eventuali
                controversie saranno risolte presso i tribunali competenti
                italiani.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                10. Contatti
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Per domande sui Termini di Servizio, contattaci:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li>
                  Email:{' '}
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
