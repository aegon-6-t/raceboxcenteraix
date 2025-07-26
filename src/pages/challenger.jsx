import React from 'react'

export default function challenger() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section héro */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Abonnement<br />
            Challenger - Argent
          </h1>
        </div>
      </section>

      {/* Section contenu principal */}
      <section className="relative bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Description */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight">
              Relevez le défi avec l'abonnement Challenger
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Passez au niveau supérieur avec l'abonnement Challenger. Bénéficiez d'un accès privilégié aux simulateurs Ultimate,
              participez aux événements du centre et profitez de 20 heures de simulation mensuelle pour perfectionner votre technique.
            </p>
          </div>

          {/* Carte Argent */}
          <div className="flex justify-center mb-16">
            <img
              src="/argent.webp"
              alt="Abonnement Argent - Challenger"
              className="max-w-md w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Détails de l'abonnement */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Simulation</h3>
              <p className="text-gray-700">20 heures mensuel - Limite de 02h00 consécutif</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Simulateur</h3>
              <p className="text-gray-700">Pilotage sur nos simulateurs ULTIMATE type F1 / GT / WEC</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Tarification</h3>
              <p className="text-gray-700">
                Sans engagement : 49.99 euros TTC<br />
                Avec engagement 12 mois : 46.99 euros TTC
              </p>
            </div>
          </div>

          {/* Avantages inclus */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Ce qui est inclus</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-gray-400 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Accès aux différents espaces du salon</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-400 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Participation aux événements du centre</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-400 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Simulateurs Ultimate F1, GT et WEC</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-400 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">20 heures de simulation mensuelle</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-400 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Sessions jusqu'à 2h consécutives</p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-black mb-6">
              Prêt à relever le défi ?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              L'abonnement Challenger vous offre l'équilibre parfait entre performance et accessibilité.
              Rejoignez les événements et perfectionnez vos compétences sur nos simulateurs ULTIMATE.
            </p>
          </div>
        </div>
      </section>

      {/* Section avantages exclusifs */}
      <section className="relative bg-gray-100 text-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight">
            Des avantages exclusifs vous attendent
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Avec l'abonnement Challenger, participez aux événements du centre,
            profitez de nos simulateurs ULTIMATE.
          </p>
        </div>
      </section>
    </div>
  )
}
