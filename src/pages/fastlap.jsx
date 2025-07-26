import React from 'react'

export default function fastlap() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section héro */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Session d'essai<br />
            Fastlap
          </h1>
        </div>
      </section>

      {/* Section contenu principal */}
      <section className="relative bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Description */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight">
              Votre première expérience de pilotage
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              La session Fastlap est conçue pour vous faire découvrir l'univers de la simulation de course automobile.
              En 15 minutes, plongez dans l'action et ressentez les sensations authentiques du pilotage sur nos simulateurs de dernière génération.
            </p>
          </div>

          {/* Carte Fastlap */}
          <div className="flex justify-center mb-16">
            <img
              src="/fastlap.webp"
              alt="Session d'essai - Fastlaps"
              className="max-w-md w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Détails de la session */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Durée</h3>
              <p className="text-gray-700">Session de découverte de 15 minutes</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Simulateur</h3>
              <p className="text-gray-700">Pilotage sur nos simulateurs Accès type F1 / GT / WEC</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">Tarification</h3>
              <p className="text-gray-700">19 euros TTC</p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-black mb-6">
              Prêt à vivre l'expérience ?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Réservez dès maintenant votre session Fastlap et découvrez pourquoi Racebox redéfinit l'expérience de la simulation automobile.
            </p>
          </div>
        </div>
      </section>

      {/* Section valeurs */}
      <section className="relative bg-gray-100 text-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-medium text-black mb-8 leading-tight">
            Une porte d'entrée vers la passion automobile
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            La session Fastlap n'est que le début de votre aventure chez Racebox.
            Découvrez nos offres d'abonnement pour une expérience encore plus poussée.
          </p>
        </div>
      </section>
    </div>
  )
}
