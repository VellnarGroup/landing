const Quote = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="custom-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extrabold italic text-gray-800 leading-relaxed mb-8">
              Il successo non si misura in linee di codice, ma in problemi
              risolti.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <cite className="text-gray-600 font-medium not-italic text-sm">
                Vellnar Group
              </cite>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                0%
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Progetti inutili
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Solo soluzioni che risolvono problemi reali
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                100%
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Focus sull'utente
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Ogni feature ha un motivo di esistere
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                ∞
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Valore generato
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Prodotti che crescono e scalano
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote
