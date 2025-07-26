import React from 'react'

export default function leader() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section héro */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Abonnement<br />
            Leader - Or
          </h1>
        </div>
      </section>

      {/* Section contenu principal */}
      <section className="relative bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Description */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight">
              Devenez un Leader avec l'abonnement premium
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              L'abonnement Leader vous offre l'expérience ultime de la simulation automobile. Profitez d'un accès illimité aux simulateurs Ultimate,
              participez aux journées Gold avec coaching personnalisé et bénéficiez d'équipements exclusifs et de privilèges VIP.
            </p>
          </div>

          {/* Carte Or */}
          <div className="flex justify-center mb-16">
            <img
              src="/or.webp"
              alt="Abonnement Or - Leader"
              className="max-w-md w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Détails de l'abonnement */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Coaching</h3>
              <p className="text-gray-700">Participation aux journées Gold avec séance de coaching par un pilote automobile</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Simulateur</h3>
              <p className="text-gray-700">Pilotage sur nos simulateurs Ultimate type F1 / GT / WEC</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Tarification</h3>
              <p className="text-gray-700">
                Sans engagement : 69.99 euros TTC<br />
                Avec engagement 12 mois : 63.99 euros TTC
              </p>
            </div>
          </div>

          {/* Avantages inclus */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-16 border border-yellow-200">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Expérience Premium Exclusive</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Accès aux différents espaces du salon</p>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Participation aux événements du centre</p>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Journées Gold avec coaching professionnel</p>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Simulateurs Ultimate F1, GT et WEC</p>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Équipement simracing Battlefins</p>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Gants et t-shirt exclusifs</p>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Support technique VIP</p>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Engagement 12 mois inclus</p>
              </div>
            </div>
          </div>

          {/* Coaching professionnel */}
          <div className="bg-black text-white rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Coaching avec un Pilote Professionnel</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Avec l'abonnement Leader, bénéficiez de sessions de coaching exclusives lors de nos journées Gold.
              Un pilote automobile professionnel vous accompagne pour perfectionner votre technique et
              vous faire progresser vers l'excellence.
            </p>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-black mb-6">
              Rejoignez l'élite des pilotes
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              L'abonnement Leader vous ouvre les portes de l'excellence. Coaching professionnel, équipements exclusifs,
              accès VIP... Vivez la simulation automobile comme jamais auparavant.
            </p>
          </div>
        </div>
      </section>

      {/* Section exclusivité */}
      <section className="relative bg-gray-100 text-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight">
            Une expérience sur mesure pour les leaders
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Avec l'abonnement Leader, vous ne faites pas que piloter, vous évoluez.
            Coaching personnalisé, équipements premium et accès VIP font de chaque session
            une expérience inoubliable.
          </p>
        </div>
      </section>
    </div>
  )
}
