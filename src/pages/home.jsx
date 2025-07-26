import React, { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  // Gestionnaire de scroll optimisé - DIRECT sans inertie
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          console.log(`Scroll position: ${window.scrollY}px`) // Debug du scroll
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculs pour l'animation basée sur le scroll DIRECT - ultra-fluide
  const maxScroll = 1300 // Animation longue mais réactive
  const extendedScroll = maxScroll + 100
  const scrollProgress = Math.min(scrollY / maxScroll, 1) // Scroll DIRECT

  // Calcul pour le masque
  const maskEndPoint = 1300 // Le masque finit de grandir à 1300px comme observé
  const maskProgress = Math.min(scrollY / maskEndPoint, 1) // Scroll DIRECT

  // Courbes d'animation optimisées
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  const easeLinear = (t) => t // Courbe linéaire pour une croissance régulière

  // Courbe personnalisée : un peu plus vite au début, puis explosion vers 500px
  const easeSlowThenFast = (t) => {
    const explosionPoint = 500 / maskEndPoint // 500px sur 1300px = ~38.5% du scroll

    if (t < explosionPoint) {
      // Première partie (0-500px) : croissance un peu plus rapide qu'avant
      return 0.35 * t / explosionPoint // 35% de la croissance sur les premiers 38.5%
    } else {
      // Deuxième partie (500px-1300px) : EXPLOSION !
      const remaining = (t - explosionPoint) / (1 - explosionPoint) // Normalise le reste vers 0-1
      return 0.35 + 0.65 * remaining * remaining // 65% restant avec accélération quadratique forte
    }
  }

  // Animation du masque - DIRECTE avec courbe personnalisée
  const maskScale = 0.8 + easeSlowThenFast(maskProgress) * 50 // Lent puis rapide

  // Animation de l'image - DIRECTE
  const imageEndPoint = maxScroll * 0.08
  const imageProgress = Math.min(scrollY / imageEndPoint, 1) // Scroll DIRECT
  const imageScale = 1.0 // Image à taille entière dès le début

  // Animation du texte - DIRECTE
  const textStartPoint = maxScroll * 0.02 // Le texte commence à bouger dès 2% du scroll (très tôt !)
  const textProgress = Math.min(scrollY / textStartPoint, 1)
  const textOpacity = textProgress < 0.7 ? 1 - easeInOutCubic(textProgress) * 1.2 : 0
  const textTransform = easeInOutCubic(textProgress) * 130 // Utilise la progression rapide du texte

  // Animation du texte final "VOTRE CARRIÈRE DE PILOTE COMMENCE ICI"
  const finalTextStartPoint = maskEndPoint + 200 // Commence 200px après la fin du masque
  const finalTextProgress = Math.max(0, Math.min((scrollY - finalTextStartPoint) / 400, 1))
  const finalTextOpacity = easeInOutCubic(finalTextProgress)

  // Animation du dégradé et du texte qui montent depuis le bas
  const overlayStartPoint = maskEndPoint + 10 // Commence 100px après la fin du masque
  const overlayProgress = Math.max(0, Math.min((scrollY - overlayStartPoint) / 600, 1))
  const overlayTransform = (1 - easeInOutCubic(overlayProgress)) * 100 // Monte de 100% vers 0%

  // Animation du flou qui commence dès que l'animation du masque est terminée
  const blurStartPoint = maskEndPoint // Commence dès que le masque finit (1300px)
  const blurProgress = Math.max(0, Math.min((scrollY - blurStartPoint) / 800, 1)) // Flou progressif sur 800px
  const blurAmount = easeInOutCubic(blurProgress) * 10 // Flou jusqu'à 10px maximum

  const fadeProgress = Math.min((scrollY - maxScroll) / 600, 1) // Scroll DIRECT
  const showMask = scrollY < maskEndPoint // Scroll DIRECT

  return (
    <div>
      {/* Section principale avec effet de stencil */}
      <div className="relative" style={{ height: `${extendedScroll / 4}vh` }}>
        <div className="sticky top-20 w-full overflow-hidden" style={{ height: 'calc(100vh - 5rem)' }}>
          {/* Background gris - disparait complètement */}
          <div
            className="absolute inset-0 bg-gray-100"
            style={{
              opacity: scrollY < maxScroll ? 1 : Math.max(0, 1 - fadeProgress * 2)
            }}
          ></div>

          {/* Image avec masque - Style Lightship */}
          {showMask ? (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                willChange: 'transform'
              }}
            >
              <img
                src="/piloteF1.webp"
                alt="Pilote F1"
                className="object-cover"
                style={{
                  width: `${100 * imageScale}%`,
                  height: `${100 * imageScale}%`,
                  WebkitMask: `url(/r.svg) center/contain no-repeat`,
                  mask: `url(/r.svg) center/contain no-repeat`,
                  WebkitMaskSize: `${320 * maskScale}px auto`,
                  maskSize: `${320 * maskScale}px auto`,
                  willChange: 'transform, -webkit-mask-size, mask-size'
                }}
              />
            </div>
          ) : (
            /* Image complète qui apparaît instantanément */
            <div className="absolute inset-0">
              <img
                src="/piloteF1.webp"
                alt="Pilote F1"
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Effet de "flou" simulé par un fade progressif vers le noir */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to bottom, 
                      transparent 0%, 
                      transparent 60%, 
                      rgba(0,0,0,${blurProgress * 0.3}) 70%, 
                      rgba(0,0,0,${blurProgress * 0.5}) 75%,
                      rgba(0,0,0,${blurProgress * 0.7}) 80%, 
                      rgba(0,0,0,${blurProgress * 0.8}) 85%,
                      rgba(0,0,0,${blurProgress * 0.9}) 90%,
                      rgba(0,0,0,${blurProgress * 0.95}) 95%,
                      rgba(0,0,0,${blurProgress * 0.98}) 98%,
                      rgba(0,0,0,${blurProgress * 1.0}) 100%
                    ),
                    radial-gradient(ellipse at center, 
                      transparent 0%, 
                      transparent ${Math.max(0, 40 - blurProgress * 30)}%, 
                      rgba(0,0,0,${blurProgress * 0.1}) ${Math.max(10, 50 - blurProgress * 20)}%, 
                      rgba(0,0,0,${blurProgress * 0.3}) ${Math.max(20, 60 - blurProgress * 15)}%, 
                      rgba(0,0,0,${blurProgress * 0.6}) ${Math.max(30, 75 - blurProgress * 10)}%, 
                      rgba(0,0,0,${blurProgress * 0.8}) ${Math.max(40, 85 - blurProgress * 5)}%, 
                      rgba(0,0,0,${blurProgress * 0.95}) 100%
                    )
                  `,
                  willChange: 'background'
                }}
              ></div>

              {/* Texte final qui monte depuis le bas */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transform: `translateY(${overlayTransform}%)`,
                  willChange: 'transform'
                }}
              >
                <div className="text-center px-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                    VOTRE CARRIÈRE DE PILOTE
                  </h1>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                    COMMENCE ICI
                  </h2>
                </div>
              </div>
            </div>
          )}

          {/* Texte - Style Lightship */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textTransform + 150}px)`, // Texte positionné sous le logo
              willChange: 'opacity, transform'
            }}
          >
            <div className="text-center">
              {/* Texte en dessous du logo */}
              <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold text-black mb-4">
                  Bienvenu chez Racebox
                </h1>
                <p className="text-xl text-gray-600">
                  au-delà de la simulation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section contenu principal - Fond noir */}
      <section className="relative z-10 bg-black text-white py-30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Titre principal */}
          <h2 className="text-2xl font-bold text-white mb-12">
            Racebox simracing center
          </h2>

          {/* Titre principal large */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            La ou la piste disparait<br />
            derrière la technologie<br />
            Faites vibrer la passion et devenez<br />
            la prochaine génération de pilote
          </h2>

          <h2 className="text-2xl font-bold text-white mb-12">
            <br />
            Un lieu où immersion, performance et passion s'unissent<br />
            pour redéfinir l'expérience de la simulation de course<br />
            automobile
          </h2>
          {/* Paragraphe descriptif */}
          {/*<p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Un lieu où immersion, performance et passion s'unissent<br />
            pour redéfinir l'expérience de la simulation de course<br />
            automobile
          </p>*/}
        </div>
      </section>

      {/* Section texte sur fond clair */}
      <section className="relative z-10 bg-gray-100 text-black pb-50">
        <div className="max-w-5xl pl-6 pr-6 pt-45 -mt-10">
          {/* Texte principal */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-medium text-black mb-8 leading-tight text-left">
              Nous ne faisons pas simplement de la <br />
              simulation. Nous créons un espace unique,<br />
              magique qui vous permet de baisser<br />
              la visière et foncer vers la victoire
            </h2>
          </div>

          {/* Sous-titre */}
          <div>
            <p className="text-lg md:text-xl text-black font-medium text-left">
              Racebox center
            </p>
          </div>
        </div>
      </section>

      {/* Section sur fond blanc */}
      <section className="relative z-10 bg-white text-black py-50">
        <div className="max-w-4xl -mt-15 mx-auto px-6 text-center">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 leading-tight">
            Une révolution<br />
            dans la course automobile virtuelle
          </h2>

          {/* Texte descriptif */}
          <p className="text-lg md:text-xl text-black leading-relaxed mb-16 max-w-3xl mx-auto">
            Dans tout ce que nous faisons nous<br />
            apportons un brain d'innovation, y compris<br />
            dans l'expérience de course
          </p>

          {/* Logo et texte Racebox */}
          <div className="flex flex-col items-center mb-20">
            <img src="/racebox.svg" alt="Racebox" className="h-20 md:h-24 w-auto -mb-6" />
            <div className="text-xl md:text-2xl text-black font-normal -ml-3">
              Experience
            </div>
          </div>

          {/* Section Session */}
          <div className="mt-30">
            {/* Titre Session */}
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-12">
              Sessions
            </h3>

            {/* Carte tarifaire */}
            <div className="flex justify-center">
              <img
                src="/fastlap.webp"
                alt="Session d'essai - Fastlaps"
                className="max-w-xs w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Section Offres d'abonnement */}
          <div className="mt-30">
            {/* Titre Offres d'abonnement */}
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-16">
              Offres d'abonnement
            </h3>

            {/* Carrousel des cartes d'abonnement */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center max-w-6xl mx-auto">
              {/* Carte Bronze */}
              <div className="flex-shrink-0">
                <img
                  src="/bronze.webp"
                  alt="Abonnement Bronze - Rookie"
                  className="max-w-xs w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Carte Argent */}
              <div className="flex-shrink-0">
                <img
                  src="/argent.webp"
                  alt="Abonnement Argent - Challenger"
                  className="max-w-xs w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Carte Or */}
              <div className="flex-shrink-0">
                <img
                  src="/or.webp"
                  alt="Abonnement Or - Leader"
                  className="max-w-xs w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Section texte final */}
          <div className="mt-32 max-w-4xl mx-auto">
            {/* Texte principal */}
            <h3 className="text-3xl md:text-4xl font-medium text-black mb-12 leading-tight text-center">
              Racebox permet à chacun de vivre la<br />
              passion de l'automobile la plus authentique<br />
              possible
            </h3>

            {/* Texte secondaire */}
            <div className="text-center">
              <p className="text-xl md:text-2xl text-black -mb-15 leading-relaxed">
                Nous fournissons des solutions<br />
                d'abonnement adapté à tous.<br />
                Etes vous pret à courir ?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-gray-100 text-black pb-60">
        <div className="text-center py-5">
          <h2 className="text-4xl md:text-5xl font-medium text-black mt-40 leading-tight">
            Nos valeurs sont les fondations de tout ce<br />
            que nous réalisons
          </h2>
        </div>
      </section>
    </div>
  )
}
