import React, { useState } from "react";

function Mythologie() {
  const [edfigOpen, setEdfigOpen] = useState(false);
  const [collmaitresOpen, setCollMaitresOpen] = useState(false);
  const [recueilaOpen, setRecueilAOpen] = useState(false);

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
              Ref. Mythologie
            </a>
          </div>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4">Livres et Ouvrages</h1>
        <p className="text-gray-300">
          Bienvenue sur la page des Livres et des Ouvrages.
        </p>
        {/* FIN CODE  */}

        {/* //---------- LIVRES ----------// */}
        {/* Cours complet d'études pour la figure (1830) */}
        <div className="mt-8">
          <button
            onClick={() => setEdfigOpen(!edfigOpen)}
            className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Cours complet d'études pour la figure (1830):
          </button>
          {edfigOpen && (
            <div className="mt-2">
              <p className="text-gray-300">
                - Cours complet d'études pour la figure : d'après les plus beaux
                modèles de l'antiquité et les tableaux des grands maîtres.
                <br />
                - Date de publication: 1830
                <br />
                - Thèmes Dessin de la figure , Dessin -- Technique Éditeur [A
                Paris ;
                <br />- A Genève : Chez Reverdin ; A Londres : Chez M. Lévèque]
                Collection Getty ; Americana Donateur Institut de recherche
                Getty Langue Français.
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
        {/* --------------------  */}
        {/* /// COLLECTIONS ///  */}
        {/*  Collection I (Dessins des maîtres anciens 1910) */}
        <div className="mt-8">
          <button
            onClick={() => setCollMaitresOpen(!collmaitresOpen)}
            className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Collection I (Dessins des maîtres anciens 1910):
          </button>
          {collmaitresOpen && (
            <div className="mt-2">
              <p className="text-gray-300">
                Une sélection de la collection de dessins des maîtres anciens
                constituée par C. Fairfax Murray.
                <br />
                Date de publication: 1910
                <br />
                Bibliothèque de référence d'art Frick
              </p>
              <a
                href="https://archive.org/details/frick-31072001181264/page/n49/mode/2up"
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
        {/* --------------------  */}
        {/*  Recueil de dessins I (1780) */}
        <div className="mt-8">
          <button
            onClick={() => setRecueilAOpen(!recueilaOpen)}
            className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Recueil de dessins I (1780):
          </button>
          {recueilaOpen && (
            <div className="mt-2">
              <p className="text-gray-300">
                - Recueil de desseins gravés d'après les fameux maitres : tirés
                de la collection de l'Academie Electorale Palatine des beaux
                Arts à Düsseldorff
                <br />
                - Date de publication: 1780
                <br />- Institut de recherche Getty
              </p>
              <a
                href="https://archive.org/details/gri_33125008513414/page/n84/mode/thumb"
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
