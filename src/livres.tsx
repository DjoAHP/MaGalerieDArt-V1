import React, { useState } from "react";

function Mythologie() {
    const [edfigOpen, setEdfigOpen] = useState(false);


  // CODE
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <nav className="bg-black/20 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-10">
        <div className="max-w-[2000px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden h-10 w-10 mr-3">
              <a href="/">
                <img
                  src="https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2020/05/cda2020_diapo_2019_heros-mythologie-museum-week-2-tt-width-1200-height-630-fill-0-crop-1-bgcolor-ffffff.jpg"
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
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
              href="/musees"
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
            >
              Musées
            </a>
            <a
              href="/mythologie"
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
            >
              Livres et Ouvrages
            </a>
          </div>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4">Livres et Ouvrages</h1>
        <p className="text-gray-300">
          Bienvenue sur la page des Livres et des Ouvrages.
        </p>

        {/*---------- LIVRES ---------- */}

        {/* Cours complet d'études pour la figure */}
        <div className="mt-8">
          <button
            onClick={() => setEdfigOpen(!edfigOpen)}
            className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Cours complet d'études pour la figure:
          </button>
          {edfigOpen && (
            <div className="mt-2">
              <p className="text-gray-300">
                Cours complet d'études pour la figure : d'après les plus beaux
                modèles de l'antiquité et les tableaux des grands maîtres.
                <br />
                <br />
                Date de publication: 1830 <br />
                Thèmes Dessin de la figure , Dessin -- Technique Éditeur [A
                Paris ;<br />A Genève : Chez Reverdin ; A Londres : Chez M.
                Lévèque] Collection Getty ; Americana Donateur Institut de
                recherche Getty Langue Français.
              </p>
              <a
                href="https://archive.org/details/gri_33125009329638/mode/2up"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
              >
                Voir l' ouvrage
              </a>
            </div>
          )}
        </div>
        {/* FIN  */}
      </div>
    </div>
  );
}

export default Mythologie;
