import React, { useState } from "react";

function Mythologie() {
  // NAV HUMBURGER ⬎
  const [menuOpen, setMenuOpen] = useState(false);
  {
    /* /// LIVRES (Lecture) ///  */
  }
  const [metaovidOpen, setMetaOvidOpen] = useState(false);
    const [iliadeOpen, setIliadeOpen] = useState(false);
        const [odysseeOpen, setOdysseeOpen] = useState(false);

  //   -----
  const [edfigOpen, setEdfigOpen] = useState(false);
  const [collmaitresOpen, setCollMaitresOpen] = useState(false);
  const [recueilaOpen, setRecueilAOpen] = useState(false);
  const [dessmaitresaOpen, setDessMaitresAOpen] = useState(false);
  const [artdessaOpen, setArtDessAOpen] = useState(false);
  const [mythepeintureOpen, setMythePeintureOpen] = useState(false);
  {
    /* /// Cours de dessins ///  */
  }
  const [desspaspasOpen, setDessPasPasOpen] = useState(false);
  const [principeiOpen, setPrincipeIOpen] = useState(false);
  const [estampesiOpen, setEstampesIOpen] = useState(false);
  {
    /* /// Cours de peinture///  */
  }
  const [courspeintiOpen, setCoursPeintIOpen] = useState(false);
  {
    /* /// Léonard de Vinci ///  */
  }
  const [carnetiOpen, setCarnetIOpen] = useState(false);
  const [carnetiiOpen, setCarnetIIOpen] = useState(false);
  const [traitepeintiOpen, setTraitePeintIOpen] = useState(false);
  const [biovinciiOpen, setBioVinciIOpen] = useState(false);
  // -----
  /* /// Sandro Botticelli ///  */
  const [dessbotticelliiOpen, setDessBotticelliIOpen] = useState(false);
  // -----
  /* /// CLe Caravage ///  */
  const [caravageliensOpen, setCaravageLiensOpen] = useState(false);
  const [agecaravageOpen, setAgeCaravageOpen] = useState(false);
  const [realismecaravageOpen, setRealismeCaravageOpen] = useState(false);
  // -----

  // DEBUT NAVBAR

  // NAV HUMBURGER
  function NavLinks() {
    const linkClass =
      "w-60 px-2 py-1 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors";

    return (
      <>
        <a href="./" className={linkClass}>
          Galerie des peintures
        </a>
        <a href="./dessins" className={linkClass}>
          Dessins & Estampes
        </a>
        <a href="./livres" className={linkClass}>
          Livres
        </a>
        <a href="./scultures" className={linkClass}>
          Scultures
        </a>
        <a href="./musees" className={linkClass}>
          Musées
        </a>
        <a href="./mythologie" className={linkClass}>
          Ref. Mythologie
        </a>
        <a
          href="https://maitrecappelli.fr/frises-chrono/frise-01.html"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 text-blue-400 underline hover:text-blue-300 text-sm text-center mt-2"
        >
          Chrono. Arts
        </a>
        <a
          href="https://ulysse-voyage.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 text-blue-400 underline hover:text-blue-300 text-sm text-center"
        >
          Le Voyage d'Ulysse
        </a>
        <a
          href="https://www.europeana.eu/fr/themes/art"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 text-blue-400 underline hover:text-blue-300 text-sm text-center"
        >
          Europeana
        </a>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Navbar */}
      {/* // NAV HUMBURGER  */}
      <nav className="bg-black/20 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-10">
        <div className="max-w-[2000px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden h-10 w-10 mr-3">
              <a href="/">
                <img
                  src="https://www.vice.com/wp-content/uploads/sites/2/2018/04/1523290548731-medusablack.jpeg"
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>

          {/* Bouton hamburger – positionné à droite */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
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
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu déroulant centré sous la navbar */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 flex flex-col items-end space-y-2">
            <NavLinks />
          </div>
        </div>
      </nav>
      {/* FIN NAVBAR  */}

      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Livres et Ouvrages
        </h1>
        {/* FIN CODE  */}
        {/* -------------------------LECTURE---------------------------  */}

        {/* vignette LECTURE  */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://img.freepik.com/photos-premium/composition-livres-table_756748-63684.jpg" // ou un lien complet vers ton image
            alt="Catégorie Lecture"
            className="w-10 h-10 rounded" // taille et arrondis
          />
          <h1 className="text-white text-2xl">༺𓆩 𝑳𝒆𝒄𝒕𝒖𝒓𝒆 𓆪༻</h1>
        </div>
        {/* FIN vignette LECTURE  */}

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
          
          {/* HOMERE - L' ILIADE (entre -850 et -750) */}
          <div className="mt-8">
            <button
              onClick={() => setIliadeOpen(!iliadeOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              HOMERE - L' ILIADE (entre -850 et -750) ⮯
            </button>
            {iliadeOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - La guerre de Troie dure depuis bientôt dix ans. Elle oppose
                  les Achéens venus de toute la Grèce, aux Troyens et à leurs
                  alliés. Face à la cité fortifiée, les centaines de navires des
                  assiégeants reposent sur la plage et leur servent de
                  campement. L’Iliade relate, dans l'ordre chronologique, six
                  journées et nuits de la guerre ; le chant XXIV se déroule
                  douze jours après les événements du chant XXIII. En aucune
                  partie du texte n’est annoncée la prise de Troie grâce à la
                  ruse du cheval de bois.
                  <br />
                  <br />- Date de publication: entre -850 et -750
                </p>
                <a
                  href="https://archive.org/details/A316390/mode/2up"
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

          {/* HOMERE - L' ODYSSEE (fin du VIIIe siècle av. J.-C) */}
          <div className="mt-8">
            <button
              onClick={() => setOdysseeOpen(!odysseeOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              HOMERE - L' ODYSSEE (fin du VIIIe siècle av. J.-C) ⮯
            </button>
            {odysseeOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - L’Odyssée raconte le retour d’Ulysse, roi d’Ithaque, dans
                  son pays, après la guerre de Troie dont l’Iliade ne raconte
                  qu'une petite partie. L'Odyssée contient aussi un certain
                  nombre d'épisodes qui complètent le récit de la guerre, par
                  exemple la construction du cheval de Troie et la chute de la
                  ville, qui ne sont pas évoquées dans l’Iliade.
                  <br />
                  <br />- Date de publication: fin du VIIIe siècle av. J.-C
                </p>
                <a
                  href="https://archive.org/details/lodyssee0000home_c9b5/page/10/mode/thumb?q=%22pas+si+sot%22"
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
        {/* -------------------------OUVRAGES DIVERS---------------------------  */}

        {/* vignette OUVRAGES DIVERS  */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://img.freepik.com/photos-premium/bibliotheque-medievale-contient-vieux-textes-religieux-sombres-ai-generative_188544-8956.jpg"
            alt="Catégorie Ouvrages divers"
            className="w-10 h-10 rounded" // taille et arrondis
          />
          <h1 className="text-white text-2xl">༺𓆩 𝑶𝒖𝒗𝒓𝒂𝒈𝒆𝒔 𝑫𝒊𝒗𝒆𝒓𝒔 𓆪༻</h1>
        </div>
        {/* FIN vignette OUVRAGES DIVERS  */}

        <div className="OUVRAGES DIVERS">
          {/* FIN  */}
          {/* La mythologie expliquée par la peinture (2017) */}
          <div className="mt-8">
            <button
              onClick={() => setMythePeintureOpen(!mythepeintureOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              La mythologie expliquée par la peinture (2017) ⮯
            </button>
            {mythepeintureOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  La 4e de couv. indique : "Chronique des âges farouches qui
                  mènent de la création du monde aux civilisations antiques, la
                  mythologie ignore la demi-mesure. Les monstres les plus
                  terrifiants y sont vaincus par des héros à la force
                  titanesque, à l'image de l'effroyable Hydre de Lerne dont
                  Héraclès parvient à trancher les cinquante têtes! Les déesses
                  y sont aussi belles qu'inflexibles, les dieux aussi cruels que
                  sournois, les hommes aussi faibles qu'ingénieux. Apprenez à
                  lire et déchiffrer les tableaux des plus grands peintres,
                  commentés du double point de vue mythologique et artistique.
                  De la sombre apparition des divinités premières jusqu'à la
                  dictature de l'empire romain, en passant par la victoire des
                  Dieux sur les Géants, ce sont cinquante épisodes majeurs de la
                  mythologie que vous allez redécouvrir au travers de
                  chefs-d'œuvre répartis sur deux millénaires. Un ouvrage clé
                  pour connaître et décrypter les plus belles œuvres picturales
                  portant sur la mythologie gréco-romaine."
                </p>
                <a
                  href="https://archive.org/details/lamythologieexpl0000deni/mode/2up"
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

        {/* -------------------------COURS DE DESSIN---------------------------  */}

        {/* vignette COURS DE DESSINS  */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://www.shutterstock.com/image-illustration/black-white-sketch-two-horse-600nw-2430175799.jpg"
            alt="Catégorie Cours de dessins"
            className="w-10 h-10 rounded" // taille et arrondis
          />
          <h1 className="text-white text-2xl">༺𓆩 𝑪𝒐𝒖𝒓𝒔 𝒅𝒆 𝒅𝒆𝒔𝒔𝒊𝒏𝒔 𓆪༻</h1>
        </div>
        {/* FIN vignette COURS DE DESSINS  */}

        <div className="COURS DE DESSINS">
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
          {/* Dessiner pas à pas (2009) */}
          <div className="mt-8">
            <button
              onClick={() => setDessPasPasOpen(!desspaspasOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Dessiner pas à pas (2009) ⮯
            </button>
            {desspaspasOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Méthode d'apprentissage décrivant les techniques basiques de
                  représentation (croquis, ombres, pointillé, etc.). Avec plus
                  de 1.000 illustrations, une introduction aux principes de la
                  perspective et des conseils pratiques, le guide montre pas à
                  pas comment maîtriser les structures, les motifs et les lignes
                  afin de donner vitalité et profondeur à ses dessins.
                  <br />
                  <br />- Date de publication: 2009
                </p>
                <a
                  href="https://archive.org/details/dessinerpasapas0000dubo/page/10/mode/thumb"
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
          {/* Les principes de la figure, anatomie & perspective (1803) */}
          <div className="mt-8">
            <button
              onClick={() => setPrincipeIOpen(!principeiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Les principes de la figure, anatomie & perspective (1803) ⮯
            </button>
            {principeiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Cours de dessin : comprenant les principes de la figure,
                  dans les trois états d'enfance, de virilité et de décrépitude
                  : l'anatomie (myologie et osteologie), la perspective, un
                  traité des ombres et du clairobscur, et une méthode pour
                  dessiner les paysages, les fleurs et les ornemens, avec un
                  grand nombre de figures en tailledouce, pour l'application des
                  principes : précédé de réflexions sur une nouvelle méthode,
                  propre à accélérer l'avancement de la jeunesse dans l'étude du
                  dessin.
                  <br />
                  <br />- Date de publication: 1803
                </p>
                <a
                  href="https://archive.org/details/nouveaucoursdede00pine/page/n11/mode/thumb"
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
          {/* Recueil d'estampes (1729) */}
          <div className="mt-8">
            <button
              onClick={() => setEstampesIOpen(!estampesiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Recueil d'estampes (1729) ⮯
            </button>
            {estampesiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Planches gravées par Chereau, Surugue, Edelinck, Valée,
                  Simonneau, Cochin, Tardieu, Le Sueur, et al. d'après des
                  peintures de Raphaël, Michel-Ange, Titien, Véronèse, et al. ;
                  coiffe de F. Horthemels d'après JB Van Loo Connu sous le nom
                  de Cabinet de Crozat ou Recueil de Crozat. Recueilli par
                  Joseph Antoine Crozat, ou selon une opinion plus récente, par
                  Pierre Crozat 2 volumes : 53 cm (fol.) Un certain nombre de
                  planches sont montées et en états multiples Planches gravées
                  par Chereau, Surugue, Edelinck, Valée, Simonneau, Cochin,
                  Tardieu, Le Sueur, et al. d'après des peintures de Raphaël,
                  Michel-Ange, Titien, Véronèse, et al. ; coiffe de F.
                  Horthemels d'après JB Van Loo Connu sous le nom de Cabinet de
                  Crozat ou Recueil de Crozat. Recueilli par Joseph Antoine
                  Crozat, ou, selon une opinion exprimée plus récemment, par
                  Pierre Crozat.
                  <br />
                  <br />- Date de publication: 1729
                </p>
                <a
                  href="https://archive.org/details/gri_33125008635365/page/n11/mode/thumb"
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

        {/* -------------------------COURS DE PEINTURE (HUILE)---------------------------  */}

        {/* vignette COURS DE PEINTURE  */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Oil_painting_palette.jpg/250px-Oil_painting_palette.jpg"
            alt="Catégorie Cours de peinture"
            className="w-10 h-10 rounded" // taille et arrondis
          />
          <h1 className="text-white text-2xl">
            ༺𓆩 𝑪𝒐𝒖𝒓𝒔 𝒅𝒆 𝒑𝒆𝒊𝒏𝒕𝒖𝒓𝒆 (𝑯𝒖𝒊𝒍𝒆) 𓆪༻
          </h1>
        </div>
        {/* FIN vignette COURS DE PEINTURE  */}

        <div className="COURS DE PEINTURE">
          {/* Cours complet de peinture a l'huile Ⅰ (1900) */}
          <div className="mt-8">
            <button
              onClick={() => setCoursPeintIOpen(!courspeintiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Cours complet de peinture a l'huile Ⅰ (1900) ⮯
            </button>
            {courspeintiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - pt. 1. L'outillage et materiel -- pt. 2. Natures mortes --
                  pt. 3. Fleurs, fruits, legumes et gibier -- pt. 4. Paysages --
                  pt. 5. Marines -- pt. 6. Animaux -- pt. 7. Figures
                  <br />
                  <br />- Date de publication: 1900
                </p>
                <a
                  href="https://archive.org/details/courscompletdepe02hare/page/n11/mode/thumb"
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

        {/* -------------------------LEONAD DE VINCI---------------------------  */}

        {/* vignette LEONAD DE VINCI  */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://www.singulart.com/blog/wp-content/uploads/2023/12/Leonardo-Da-Vinci-1024x1024.webp"
            alt="Catégorie LEONAD DE VINCI"
            className="w-10 h-10 rounded" // taille et arrondis
          />
          <h1 className="text-white text-2xl">༺𓆩 𝑳𝒆𝒐𝒏𝒂𝒓𝒅 𝑫𝒆 𝑽𝒊𝒏𝒄𝒊 𓆪༻</h1>
        </div>
        {/* FIN vignette LEONAD DE VINCI  */}

        <div className="Léonard de Vinci">
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

        {/* -------------------------SANDRO BOTTICELLI---------------------------  */}

        {/* vignette BOTTICELLI  */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Sandro_Botticelli_Self-portrait_ca_1475.jpg/1200px-Sandro_Botticelli_Self-portrait_ca_1475.jpg"
            alt="Catégorie BOTTICELLI"
            className="w-10 h-10 rounded" // taille et arrondis
          />
          <h1 className="text-white text-2xl">༺𓆩 𝑺𝒂𝒏𝒅𝒓𝒐 𝑩𝒐𝒕𝒕𝒊𝒄𝒆𝒍𝒍𝒊 𓆪༻</h1>
        </div>
        {/* FIN vignette BOTTICELLI  */}

        <div className="LECTURE">
          {/* Dessins Ⅰ de Sandro Botticelli  (1896) */}
          <div className="mt-8">
            <button
              onClick={() => setDessBotticelliIOpen(!dessbotticelliiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Dessins Ⅰ de Sandro Botticelli (1896) ⮯
            </button>
            {dessbotticelliiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Dessins de Sandro Botticelli pour la Divina commedia de
                  Dante : fac-similés réduits d'après les originaux conservés au
                  Musée royal de Berlin et à la Bibliothèque du Vatican.
                  <br />
                  <br />- Date de publication: 1896
                </p>
                <a
                  href="https://archive.org/details/drawingsbysandro00bott/mode/thumb"
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

        {/* -------------------------CARAVAGE---------------------------  */}

        {/* vignette CARAVAGE  */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://media.beauxarts.com/uploads/2018/09/portrait-de-michelangelo-merisi-da-caravaggio-recadree-964x1273.jpg"
            alt="Catégorie CARAVAGE"
            className="w-10 h-10 rounded" // taille et arrondis
          />
          <h1 className="text-white text-2xl">༺𓆩 𝑳𝒆 𝑪𝒂𝒓𝒂𝒗𝒂𝒈𝒆 𓆪༻</h1>
        </div>
        {/* FIN vignette CARAVAGE  */}

        <div className="Le Caravage">
          {/* Liens utile */}
          <div className="mt-8">
            <button
              onClick={() => setCaravageLiensOpen(!caravageliensOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Liens utile ⮯
            </button>
            {caravageliensOpen && (
              <div className="mt-2">
                <a
                  href="https://archive.org/details/caravaggio0000gash/mode/thumb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Toutes ces oeuvres
                </a>
                <br />
                <a
                  href="https://archive.org/details/caravaggio_201908/mode/thumb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Toutes ces oeuvres 2
                </a>
              </div>
            )}
          </div>
          {/* FIN  */}
          {/* L'Âge du Caravage  (1985) */}
          <div className="mt-8">
            <button
              onClick={() => setAgeCaravageOpen(!agecaravageOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              L'Âge du Caravage (1985) ⮯
            </button>
            {agecaravageOpen && (
              <div className="mt-2">
                <p className="text-gray-300">- L'Âge du Caravage 1985</p>
                <a
                  href="https://archive.org/details/theageofcaravaggio1985/mode/thumb"
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
          {/* L'art du réalisme  (2006) */}
          <div className="mt-8">
            <button
              onClick={() => setRealismeCaravageOpen(!realismecaravageOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              L'art du réalisme (2006) ⮯
            </button>
            {realismecaravageOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  - Le réalisme dramatique de l'art de Caravage fascine les
                  spectateurs depuis le XVIIe siècle. Pourtant, aucune
                  monographie antérieure ne présente l'analyse approfondie du «
                  réalisme » de Caravage entreprise dans le remarquable ouvrage
                  de John Varriano.
                </p>
                <a
                  href="https://archive.org/details/caravaggioartofr0000varr/page/n11/mode/thumb"
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
