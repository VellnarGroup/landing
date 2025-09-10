const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="custom-screen">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/vellnar-icon.svg"
                width={40}
                height={40}
                alt="Vellnar logo"
                className="flex-shrink-0"
              />
              <h3 className="text-gray-800 font-semibold text-lg">
                Vellnar Group
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sviluppiamo soluzioni digitali che creano valore reale. Ogni
              prodotto che costruiamo è pensato per essere effettivamente
              utilizzato e per risolvere problemi concreti delle persone.
            </p>
          </div>

          <div>
            <h4 className="text-gray-800 font-medium mb-3">Contatti</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <a
                  href="mailto:info@vellnar.com"
                  className="hover:text-gray-800 transition-colors"
                >
                  info@vellnar.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-medium mb-3">Legale</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-gray-800 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-gray-800 transition-colors"
                >
                  Termini di Servizio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 py-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Vellnar Group. Tutti i diritti riservati.
          </p>
          <p className="text-gray-500 text-xs">Made with ❤️ in Italy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
