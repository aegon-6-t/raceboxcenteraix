import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu.jsx';
import Home from './pages/home';
import Fastlap from './pages/fastlap';
import Challenger from './pages/challenger';
import Leader from './pages/leader';
import Rookie from './pages/rookie';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  // État pour savoir si le menu est ouvert ou fermé
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log('Menu ouvert :', !isMenuOpen) // Pour tester
  }

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col pt-20">
        {/* Header avec la fonction toggleMenu et l'état isMenuOpen passés en props */}
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        {/* Menu qui s'affiche seulement si isMenuOpen est true */}
        <Menu isOpen={isMenuOpen} onClose={closeMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fastlap" element={<Fastlap />} />
          <Route path="/rookie" element={<Rookie />} />
          <Route path="/challenger" element={<Challenger />} />
          <Route path="/leader" element={<Leader />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
