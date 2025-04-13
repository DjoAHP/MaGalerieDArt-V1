import React, { useState } from 'react';

    function Mythologie() {
      const [venusOpen, setVenusOpen] = useState(false);
      const [adonisOpen, setAdonisOpen] = useState(false);

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
          <nav className="bg-black/20 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-10">
            <div className="max-w-[2000px] mx-auto px-4 py-3 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <div className="rounded-full overflow-hidden h-10 w-10 mr-3">
                  <a href="/">
                    <img
                      src="your-logo.jpeg"
                      alt="Logo"
                      className="object-cover w-full h-full"
                    />
                  </a>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center space-x-4">
                <a
                  href="/musees"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
                >
                  Les musées du monde
                </a>
                <a
                  href="/mythologie"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
                >
                  Reference Mythologique
                </a>
              </div>
            </div>
          </nav>
          <div className="max-w-6xl mx-auto py-20">
            <h1 className="text-3xl font-bold mb-4">Reference Mythologique</h1>
            <p className="text-gray-300">
              Bienvenue sur la page de référence mythologique.
            </p>

            {/* La Naissance de Vénus */}
            <div className="mt-8">
              <button
                onClick={() => setVenusOpen(!venusOpen)}
                className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                La Naissance de Vénus
              </button>
              {venusOpen && (
                <div className="mt-2">
                  <p className="text-gray-300">
                    La Naissance de Vénus (italien : Nascita di Venere [ˈnaʃʃita
                    di ˈvɛːnere]) est un tableau de Sandro Botticelli, peint
                    vers 1484-1485 et conservé à la galerie des Offices. Il a
                    été peint selon la technique de la tempera. Il représente la
                    déesse Vénus arrivant sur le rivage après sa naissance.
                    <br />
                    <br />
                    Cette œuvre était révolutionnaire à l'époque, car elle
                    présentait un corps nu sans aucune justification religieuse,
                    ainsi qu'un thème mythologique issu de la culture
                    gréco-romaine antérieure au christianisme. Son
                    interprétation est liée à l'Académie platonicienne de
                    Florence, un cercle intellectuel parrainé par la famille
                    Médicis qui s'est consacré aux domaines de la philosophie,
                    de la littérature et de l'art. La signification est liée au
                    néoplatonisme et à la formulation par Marsilio Ficino d'un
                    concept idéalisé de l'amour où la figure de Vénus est
                    divisée en deux versions complémentaires, la Vénus céleste
                    et la Vénus terrestre, symbolisant l'amour spirituel et
                    l'amour matériel, théorie dérivée du Banquet de Platon.
                  </p>
                </div>
              )}
            </div>

            {/* Vénus et Adonis */}
            <div className="mt-8">
              <button
                onClick={() => setAdonisOpen(!adonisOpen)}
                className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Vénus et Adonis
              </button>
              {adonisOpen && (
                <div className="mt-2">
                  <p className="text-gray-300">
                    Dans la mythologie grecque, Adonis Écouter (en grec ancien
                    Ἄδωνις / Ádônis) est le fils de Cinyras et de sa fille
                    Myrrha. Il existe plusieurs versions sur l'identité de ses
                    parents, d'après Apollodore, il est le fils de Cinyras et de
                    Matharmé ou Métharmé, d'après Hésiode, cité par Apollodore
                    (III, 14, 4), il est le fils de Phoenix et Alphésibée.
                    Adonis est un humain, amant d'Aphrodite. Il est associé à la
                    rose et au myrte.
                    <br />
                    <br />
                    Adonis est une divinité d'origine orientale, dont le nom est
                    certainement sémitique, la racine « Adon » signifiant «
                    seigneur ». Il apparaît en Orient, avec le même mythe à peu
                    de détails près, sous les noms de Tammouz ou de Thamous.
                  </p>
                  <p>
                    Adonis est fils de Cinyras, roi de Chypre et fondateur de la
                    ville de Paphos dans l’île de Chypre, et de la fille de
                    celui-ci, Myrrha, qu'il eut avec son épouse Cenchreis. La
                    femme du roi attira un jour la haine d'Aphrodite en
                    affirmant que sa fille Myrrha était plus belle qu'elle. La
                    déesse lança alors une malédiction afin de se venger en
                    faisant naitre un amour incestueux de Myrrha pour son père.
                    Réalisant l'horreur de cet amour interdit, elle voulut
                    mettre fin à ses jours. Sa nourrice réussit à l'en empêcher
                    en lui promettant de l'aider à assouvir son désir et, par
                    une nuit très sombre, elle la fit entrer dans le lit de son
                    père, qu'elle avait enivré au point de ne plus savoir ce
                    qu'il faisait. Quand Cinyras s'aperçut qu'il était à la fois
                    le père et le grand-père de l'enfant à naître de Myrrha, fou
                    de rage, il saisit une épée pour tenter de tuer sa fille,
                    qui s'enfuit en suppliant les dieux de la rendre invisible.
                    <br />
                    <br />
                    Prise de pitié, Aphrodite changea promptement Myrrha en
                    arbre à myrrhe (une autre version du mythe existe où c'est
                    Zeus qui changea Myrrha en arbre). L'épée du roi, en
                    s'abattant, fendit le tronc en deux et le bébé Adonis en
                    sortit. Une autre version existe où l'écorce de l'arbre se
                    fendit lorsque la grossesse fut terminée. Cinyras ne fut pas
                    réprimandé pour son inceste, mais son fils et petit-fils
                    Adonis, devenu adulte, le défia en concours pour déterminer
                    lequel d'eux était meilleur joueur de lyre : Cinyras perdit
                    et se suicida.
                  </p>
                  <br />
                  <br />
                  Dès sa naissance, Adonis est d'une grande beauté : « il
                  pourrait plaire même aux yeux de l’Envie. » (Ovide, les
                  Métamorphoses). Il fut aimé d'Aphrodite. Selon le
                  pseudo-Apollodore, touchée par la beauté de l'enfant,
                  Aphrodite l'envoya dans un coffre en bois à Perséphone, afin
                  que celle-ci le garde en sécurité. Perséphone eut la curiosité
                  d'ouvrir le coffre et, trouvant Adonis, s'en éprit et le
                  disputa à Aphrodite, qui s'était rendue aux Enfers pour le
                  reprendre. Perséphone refusa de le rendre. Aphrodite en appela
                  à Zeus tout puissant afin de régler le différend entre les
                  deux déesses. Zeus refusa d'être juge dans une querelle aussi
                  déplaisante aussi confia-t-il l'affaire à un tribunal
                  inférieur, présidé par la Muse Calliope.
                  <br />
                  <br />
                  Celle-ci ordonna au jeune homme de passer un tiers de l'année
                  avec Aphrodite, un autre tiers avec Perséphone et le dernier
                  avec la personne de son choix. La décision de Calliope sembla,
                  dans un premier temps, apaiser les tensions entre les deux
                  déesses. Cependant, si Adonis respecta à la lettre les
                  exigences du roi des dieux, il choisit de consacrer le tiers
                  de l'année restant à Aphrodite, afin de vivre pleinement son
                  amour pour elle. Dès lors, le partage n'était plus équitable
                  et l'amour qui liait Aphrodite à Adonis attisa la colère de
                  Perséphone et des autres dieux. Car si la déesse de l'Amour,
                  épouse légitime d'Héphaïstos, avait coutume de multiplier les
                  infidélités, elle semblait cette fois-ci véritablement éprise
                  de son jeune amant. Un jour Adonis, qui parcourait la forêt
                  idalienne pour chasser, fut mortellement blessé à la jambe par
                  le sanglier qu'il avait touché. Une goutte de son sang tomba
                  par terre et Aphrodite versa une larme sur cette goutte de
                  sang, qui donna naissance à l'adonis goutte-de-sang. Monument
                  funéraire en terre cuite polychrome représentant Adonis
                  mourant, entre 250 et 100 av. J.-C. Musée grégorien étrusque
                  Toutes les légendes s'accordent sur cette fin tragique, mais
                  elles diffèrent quant à l'instigateur de ce drame. Certains
                  mythes affirment qu'Arès (dieu de la Guerre), l'amant officiel
                  d'Aphrodite, ne supportait pas d'être ainsi délaissé au profit
                  d'un autre. Fou de jalousie, il décida de reconquérir la
                  déesse de l'Amour en éliminant Adonis qu'il fit tuer par un
                  sanglier. D'autres prétendent qu'Apollon (dieu des Arts et de
                  la Divination entre autres) fut à l'origine de la mort
                  d'Adonis.
                  <br />
                  <br />
                  Furieux contre Aphrodite, qui avait rendu aveugle son fils,
                  Érymanthe, pour l'avoir surprise dans son bain, Apollon aurait
                  arraché son bel amant à la déesse. Dans une autre version
                  (Apol. III, 183) c'est Artémis, peut-être jalouse de son
                  habileté de chasseur, qui lança contre lui un sanglier
                  furieux. Une version indique que c'est le sang d'Adonis qui
                  donne sa couleur brun-rouge à la rivière Adonis du Liban, lors
                  des crues (cette rivière prend source dans la grotte d'Aphaca
                  où Adonis est censé être né). Les amours d'Adonis avec
                  Aphrodite et Perséphone symbolisent les cycles des saisons et
                  de leurs capacités à produire des richesses dont pouvaient
                  profiter les hommes. « On reconnaît dans ce mythe une
                  personnification des forces productrices de la nature et une
                  image du rythme des saisons. » On a aussi rapproché le
                  mythe de la mort d'Adonis par les faits d'un sanglier, de
                  celui du sanglier d'Érymanthe où c'est l'animal qui succombe.
                  Une autre version, rapportée par Servius, indique que ce sont
                  plutôt les roses qui apparaissent grâce au sang d'Adonis et
                  aux larmes d'Aphrodite.
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    export default Mythologie;
