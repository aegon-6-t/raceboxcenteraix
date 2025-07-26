import React from 'react'
import { Link } from 'react-router-dom'

function Menu({ isOpen, onClose }) {
  // Si le menu n'est pas ouvert, on n'affiche rien
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed top-20 left-0 w-full h-full bg-white shadow-lg z-50"
      onClick={onClose}
    >
      {/* Navigation du menu */}
      <nav
        className="py-6 px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="space-y-6">
          <li>
            <Link
              to="/"
              onClick={onClose}
              className="inline-block px-9 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-md transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#"
              onClick={onClose}
              className="inline-block px-9 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-md transition-all duration-200"
            >
              Company
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={onClose}
              className="inline-block px-9 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-md transition-all duration-200"
            >
              Become racing driver
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={onClose}
              className="inline-block px-9 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-md transition-all duration-200"
            >
              Compte
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={onClose}
              className="inline-block px-9 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-md transition-all duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
