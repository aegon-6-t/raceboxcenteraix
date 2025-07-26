import React from 'react'
import { Link } from 'react-router-dom'

function Header({ toggleMenu, isMenuOpen }) {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-40">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative flex items-center h-20">
          {/* Menu hamburger à gauche qui change selon l'état */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">
                {isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              </span>

              {/* Affichage conditionnel : hamburger ou croix */}
              {isMenuOpen ? (
                // Croix quand le menu est ouvert
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger quand le menu est fermé
                <div className="space-y-1">
                  <div className="w-6 h-0.5 bg-gray-600"></div>
                  <div className="w-6 h-0.5 bg-gray-600"></div>
                  <div className="w-6 h-0.5 bg-gray-600"></div>
                </div>
              )}
            </button>
            <span className="ml-2 text-sm font-medium text-gray-700">MENU</span>
          </div>

          {/* Logo Racebox au centre - Position absolue pour un centrage parfait */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img
                src="/racebox.svg"
                alt="Racebox Logo"
                className="h-22 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header