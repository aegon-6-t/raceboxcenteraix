import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo R en haut à gauche */}
        <div className="mb-8">
          <img
            src="/r.svg"
            alt="R Logo"
            className="h-8 w-auto filter invert"
          />
        </div>

        {/* Grille des liens */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Site Map */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Site Map
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm"></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Become racing driver</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Compte</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Become racing driver */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Become racing driver
            </h3>
            <ul className="space-y-2">
              <li><Link to="/fastlap" className="text-gray-300 hover:text-white text-sm">Session d'essai - Fastlap</Link></li>
              <li><Link to="/rookie" className="text-gray-300 hover:text-white text-sm">Abonnement Bronze - Rookie</Link></li>
              <li><Link to="/challenger" className="text-gray-300 hover:text-white text-sm">Abonnement Argent - Challenger</Link></li>
              <li><Link to="/leader" className="text-gray-300 hover:text-white text-sm">Abonnement Or - Leader</Link></li>
            </ul>
          </div>

          {/* About Redline */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              About CRONOS
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Entreprise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Newsroom</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">CRONOS Leadership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Opportunités de carrière</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact CRONOS</a></li>
            </ul>
          </div>

          {/* Racebox Center */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Racebox Center
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Événements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Découvrir le centre</a></li>
            </ul>
          </div>

          {/* Compte */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Compte
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Compte Racebox</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Gérer votre compte Racebox</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Créer votre compte Racebox</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 