import React, { useState } from "react";

function Musees() {
  const [menuOpen, setMenuOpen] = useState(false);

  // NAV HUMBURGER
  function NavLinks() {
    return (
      <>
        <a
          href="./dessins"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
        >
          Dessins
        </a>
        <a
          href="./livres"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
        >
          Livres
        </a>
        <a
          href="./scultures"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
        >
          Scultures
        </a>
        <a
          href="./musees"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
        >
          Musées
        </a>
        <a
          href="./mythologie"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
        >
          Ref. Mythologie
        </a>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* // NAV HUMBURGER  */}
      <nav className="bg-black/20 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-10">
        <div className="max-w-[2000px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden h-10 w-10 mr-3">
              <a href="/">
                <img
                  src="https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2021/02/marbres-thasos-main-1-tt-width-1200-height-900-fill-0-crop-1-bgcolor-ffffff.jpg"
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
            <NavLinks />
          </div>
        )}
      </nav>
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4">Les Musées du monde</h1>
        <p className="text-gray-300">
          Bienvenue sur la page des Musées du monde.
        </p>
        {/* LOUVRE  */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Le Louvre</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/9/9f/Musee_du_Louvre_1992_logo.png"
            alt="Louvre"
            className="w-full h-auto rounded-lg object-cover mb-4"
          />
          <p className="text-gray-300">
            Le Louvre est l'un des plus grands musées du monde.
          </p>
          <a
            href="https://www.louvre.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
          >
            Visiter le site du Louvre
          </a>
        </div>
        {/* FIN  */}

        {/* Galerie Borghèse  */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Galerie Borghèse</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Galleria_Borghese_-_logo_%28Italy%2C_2022-%29.svg/1200px-Galleria_Borghese_-_logo_%28Italy%2C_2022-%29.svg.png"
            alt="Galerie Borghèse"
            className="w-full h-auto rounded-lg object-cover mb-4"
          />
          <p className="text-gray-300">
            La Galerie Borghèse est l’une des galeries d’art les plus connues au
            monde. Elle est située à Rome, en Italie, et installée dans
            l’ancienne Villa Borghese Pinciana.
          </p>
          <a
            href="https://fr.borghese.gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
          >
            Visiter le site de la Galerie Borghèse
          </a>
        </div>
        {/* FIN  */}

        {/* Palais Farnèse  */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Palais Farnèse</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Volta_della_Galleria_Farnese_dopo_il_restauro_del_2015.jpg/960px-Volta_della_Galleria_Farnese_dopo_il_restauro_del_2015.jpg"
            alt="Palais Farnèse"
            className="w-full h-auto rounded-lg object-cover mb-4"
          />
          <p className="text-gray-300">
            Le Palais Farnèse est un des plus beaux et des plus importants
            édifices de Rome. Anciennement considéré comme une des « quatre
            merveilles de Rome », c’est un joyau d’architecture qui renferme
            d’extraordinaires œuvres d’art.
          </p>
          <a
            href="https://visite-palazzofarnese.it/palais-farnese/?lang=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
          >
            Visiter le site du Palais Farnèse
          </a>
        </div>
        {/* FIN  */}
        {/* National Gallery  */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">National Gallery</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/National_Gallery_London_logo.svg/2560px-National_Gallery_London_logo.svg.png"
            alt="Palais Farnèse"
            className="w-full h-auto rounded-lg object-cover mb-4"
          />
          <p className="text-gray-300">
            La National Gallery (en français, la Galerie nationale) fondée en
            1824, est un musée situé à Londres en Angleterre et occupant le nord
            de Trafalgar Square depuis 1838. Elle détient un patrimoine
            artistique composé principalement de peintures datant de 1250 à
            1900, les œuvres plus récentes étant abritées à la Tate Modern. La
            collection permanente de 2 300 peintures appartient à l'État
            britannique et son accès est gratuit. Seules les expositions
            temporaires sont soumises à un prix d'entrée. La Gallery est un «
            organisme public non ministériel » rattaché au département du
            Numérique, de la Culture, des Médias et du Sport britannique.
          </p>
          <a
            href="https://www.nationalgallery.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
          >
            Visiter le site de la National Gallery
          </a>
        </div>
        {/* FIN  */}
        {/* The Uffizi  */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">The Uffizi</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Uffizi_Galleres_logo.svg/2880px-Uffizi_Galleres_logo.svg.png"
            alt="Palais Farnèse"
            className="w-full h-auto rounded-lg object-cover mb-4"
          />
          <p className="text-gray-300">
            La Galerie des Offices est un important musée d'art situé à côté de
            la Piazza della Signoria dans le centre historique de Florence en
            Toscane , en Italie. L'un des musées italiens les plus importants et
            les plus visités, il est également l'un des plus grands et des plus
            connus au monde et abrite une collection d'œuvres inestimables,
            notamment de la période de la Renaissance italienne .
          </p>
          <a
            href="https://www.uffizi.it/en/the-uffizi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
          >
            Visiter le site de La Galerie des Offices
          </a>
        </div>
        {/* FIN  */}
      </div>
    </div>
  );
}

export default Musees;
