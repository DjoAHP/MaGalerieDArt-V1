import React, { useState } from "react";

function Mythologie() {
  {
    /* /// LIVRES (Lecture) ///  */
  }
  const [metaovidOpen, setMetaOvidOpen] = useState(false);

  //   -----
  const [edfigOpen, setEdfigOpen] = useState(false);
  const [collmaitresOpen, setCollMaitresOpen] = useState(false);
  const [recueilaOpen, setRecueilAOpen] = useState(false);
  const [dessmaitresaOpen, setDessMaitresAOpen] = useState(false);
  const [artdessaOpen, setArtDessAOpen] = useState(false);
  {
    /* /// Léonard de Vinci ///  */
  }
  const [carnetiOpen, setCarnetIOpen] = useState(false);
  const [carnetiiOpen, setCarnetIIOpen] = useState(false);
  const [traitepeintiOpen, setTraitePeintIOpen] = useState(false);
  const [biovinciiOpen, setBioVinciIOpen] = useState(false);
  // -----

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
        {/* -------------------------ELLEMENTS---------------------------  */}
        {/* //---------- LECTURE ----------// */}
        <div className="LECTURE">
          {/* OVIDE - LES METAMORPHOSES (8 ap.J-C) */}
          <div className="mt-8">
            <button
              onClick={() => setMetaOvidOpen(!metaovidOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              OVIDE - LES METAMORPHOSES (8 ap.J-C) ⮯
            </button>
            {metaovidOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Faite essentiellement sur le texte latin du site The Latin
                  Library, parfois légèrement modifié à partir de celui de
                  l'édition G. Lafaye dans la Collection des Universités de
                  France (Ovide. Les Métamorphoses, 3 tomes, Paris, 1925-1930),
                  cette traduction nouvelle se veut assez proche de l'original,
                  tout en offrant un texte clair et coulant. Un hexamètre latin
                  correspond plus ou moins exactement à une ligne de texte
                  français, et tous les cinq vers, la référence est indiquée.
                  Les auteurs ont introduit des subdivisions et des résumés
                  destinés à faciliter la lecture.
                  <br />
                  <br />- Date de publication: 8 ap.J-C
                </p>
                <a
                  href="https://bcs.fltr.ucl.ac.be/METAM/Met00-Intro.html"
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
        {/* //---------- OUVRAGE DIVERS ----------// */}
        <div className="OUVRAGES DIVERS">
          {/* Cours complet d'études pour la figure (1830) */}
          <div className="mt-8">
            <button
              onClick={() => setEdfigOpen(!edfigOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Cours complet d'études pour la figure (1830) ⮯
            </button>
            {edfigOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Cours complet d'études pour la figure : d'après les plus
                  beaux modèles de l'antiquité et les tableaux des grands
                  maîtres.
                  <br />
                  - Date de publication: 1830
                  <br />
                  - Thèmes Dessin de la figure , Dessin -- Technique Éditeur [A
                  Paris ;
                  <br />- A Genève : Chez Reverdin ; A Londres : Chez M.
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
        {/* /// ---------COLLECTIONS--------- ///  */}
        <div className="COLLECTIONS">
          {/*  Collection I (Dessins des maîtres anciens 1910) */}
          <div className="mt-8">
            <button
              onClick={() => setCollMaitresOpen(!collmaitresOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Collection I (Dessins des maîtres anciens 1910) ⮯
            </button>
            {collmaitresOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Une sélection de la collection de dessins des maîtres
                  anciens constituée par C. Fairfax Murray.
                  <br />
                  - Date de publication: 1910
                  <br />- Bibliothèque de référence d'art Frick
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
          {/*  Recueil de dessins I (1780) */}
          <div className="mt-8">
            <button
              onClick={() => setRecueilAOpen(!recueilaOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Recueil de dessins I (1780) ⮯
            </button>
            {recueilaOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Recueil de desseins gravés d'après les fameux maitres :
                  tirés de la collection de l'Academie Electorale Palatine des
                  beaux Arts à Düsseldorff
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
          {/*  Dessins de maîtres anciens I (1989) */}
          <div className="mt-8">
            <button
              onClick={() => setDessMaitresAOpen(!dessmaitresaOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Dessins de maîtres anciens I (1989) ⮯
            </button>
            {dessmaitresaOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Dessins de maîtres anciens
                  <br />
                  - Date de publication: 1989
                  <br />- Le Metropolitan Museum of Art
                </p>
                <a
                  href="https://archive.org/details/oldmasterdrawing00soth_13/mode/2up"
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
          {/*  L'art du dessin I (1987) */}
          <div className="mt-8">
            <button
              onClick={() => setArtDessAOpen(!artdessaOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              L'art du dessin I (1987) ⮯
            </button>
            {artdessaOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - L'art du dessin démontré d'une manière claire et précise par
                  Jean Cousin, peintre français : revu corrigé et augmentée
                  d'après les ouvrages de ce mâitre et les meilleurs éditions
                  qui argent paru jusqu'à ce jour.
                  <br />
                  - Date de publication: ?
                  <br />- Getty Research Institute
                </p>
                <a
                  href="https://archive.org/details/gri_33125008463644/mode/2up"
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
        {/* ---------Léonard de Vinci-----------  */}
        <div className="Léonard de Vinci">
          <h2>꧁༺𓆩 Léonard de Vinci 𓆪༻꧂</h2>
          <a
            href="https://archive.org/details/leonardo_da_vinci_paintings/468px-Verrocchio%20workshop%20-%20Tobias%20and%20the%20Angel%20-%20NG%20%5BWww.Etoile.App%5D.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
          >
            Léonard de Vinci (Toutes ces oeuvres) 
          </a>
          {/*  Léonard de Vinci / Biographie I (2024) */}
          <div className="mt-8">
            <button
              onClick={() => setBioVinciIOpen(!biovinciiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Léonard de Vinci / Biographie (2024)⮯
            </button>
            {biovinciiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Léonard de Vinci (Walter Isaacson, 2017) / Il a été le génie
                  le plus créatif de l'histoire quels secrets peut-il encore
                  nous apprendre ? Walter Isaacson, auteur best-seller de Steve
                  Jobs, tisse dans cet ouvrage unanimement salué par la critique
                  un récit de la vie intime et publique de Léonard de Vinci.
                  <br />- Date de publication: 2024
                </p>
                <a
                  href="https://archive.org/details/leonard-de-vinci-walter-isaacson-2017/mode/1up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Voir l' ouvrage
                </a>
                <br />
                <a
                  href="https://archive.org/details/leonardo_da_vinci_paintings/468px-Verrocchio%20workshop%20-%20Tobias%20and%20the%20Angel%20-%20NG%20%5BWww.Etoile.App%5D.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Toutes ces oeuvres
                </a>
              </div>
            )}
          </div>
          {/* FIN  */}
          {/*  Carnet I (Léonard de Vinci 1921) */}
          <div className="mt-8">
            <button
              onClick={() => setCarnetIOpen(!carnetiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Carnet I (Léonard de Vinci 1921) ⮯
            </button>
            {carnetiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Les dessins de Léonard de Vinci.
                  <br />
                  - Date de publication: 1921
                  <br />- Robarts - University of Toronto
                </p>
                <a
                  href="https://archive.org/details/lesdessinsdelo00leonuoft/mode/2up"
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
          {/*  Carnet II (Léonard de Vinci 1994) */}
          <div className="mt-8">
            <button
              onClick={() => setCarnetIIOpen(!carnetiiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Carnet II (Léonard de Vinci 1994) ⮯
            </button>
            {carnetiiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Les dessins de Léonard de Vinci.
                  <br />
                  - Date de publication: 1994
                  <br />- Londres : Pimlico
                </p>
                <a
                  href="https://archive.org/details/lesdessinsdelo00leonuoft/mode/2up"
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
          {/*  Traité élémentaire de la peinture (Léonard de Vinci 1803) */}
          <div className="mt-8">
            <button
              onClick={() => setTraitePeintIOpen(!traitepeintiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Traité élémentaire de la peinture (Léonard de Vinci 1803) ⮯
            </button>
            {traitepeintiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Traité élémentaire de la peinture / Texte entier.
                  <br />- Date de publication: 1803
                </p>
                <a
                  href="https://fr.wikisource.org/wiki/Trait%C3%A9_%C3%A9l%C3%A9mentaire_de_la_peinture/Texte_entier"
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
    </div>
  );
}

export default Mythologie;
