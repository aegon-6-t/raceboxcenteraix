import React from 'react'

export default function rookie() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section héro */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Abonnement<br />
            Rookie - Bronze
          </h1>
        </div>
      </section>

      {/* Section contenu principal */}
      <section className="relative bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Description */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight">
              Découvrez le pilotage avec l'abonnement Rookie
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              L'abonnement Rookie est parfait pour les débutants qui souhaitent s'initier à la simulation de course.
              Profitez d'un accès régulier aux simulateurs et développez vos compétences de pilotage dans un environnement professionnel.
            </p>
          </div>

          {/* Carte Bronze */}
          <div className="flex justify-center mb-16">
            <img
              src="/bronze.webp"
              alt="Abonnement Bronze - Rookie"
              className="max-w-md w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Détails de l'abonnement */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Accès</h3>
              <p className="text-gray-700">Accès aux différents espaces du salon</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Simulateur</h3>
              <p className="text-gray-700">Pilotage sur nos simulateurs Accès type F1 / GT / WEC</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Tarification</h3>
              <p className="text-gray-700">
                Sans engagement : 29.99 euros TTC<br />
                Avec engagement 12 mois : 26.99 euros TTC
              </p>
            </div>
          </div>

          {/* Avantages inclus */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Ce qui est inclus</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-gray-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Accès aux différents espaces du salon</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Sessions sur simulateurs professionnels</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Accès aux voitures F1, GT et WEC</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Support technique inclus</p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-black mb-6">
              Prêt à commencer votre aventure ?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              L'abonnement Rookie est votre passerelle vers l'univers de la simulation professionnelle.
              Rejoignez la communauté Racebox dès aujourd'hui !
            </p>
          </div>
        </div>
      </section>

      {/* Section évolution */}
      <section className="relative bg-gray-100 text-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight">
            Évoluez vers les niveaux supérieurs
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Une fois maître de votre Rookie, découvrez nos abonnements Challenger et Leader
            pour des expériences encore plus immersives et des fonctionnalités avancées.
          </p>
        </div>
      </section>
    </div>
  )
}
