import React, { useState } from "react";

function Mythologie() {
  // BARRE DE RECHERCHE ⬎
  const [searchTerm, setSearchTerm] = useState("");

  // NAV HUMBURGER ⬎
  const [menuOpen, setMenuOpen] = useState(false);

  // MYTHES ⬎
  const [venusOpen, setVenusOpen] = useState(false);
  const [adonisOpen, setAdonisOpen] = useState(false);
  const [prometheeOpen, setPrometheeOpen] = useState(false);
  const [perséeetandromèdeOpen, setPerséeetAndromèdeOpen] = useState(false);
  const [endymionOpen, setEndymionOpen] = useState(false);
  const [cupidonOpen, setCupidonOpen] = useState(false);
  const [judholoOpen, setJudHoloOpen] = useState(false);
  const [dianeacteOpen, setDianeActeOpen] = useState(false);
  const [eduachilleOpen, setEduAchilleOpen] = useState(false);
  const [perseeandroOpen, setPerseeAndroOpen] = useState(false);
  const [enleveeuropeOpen, setEnleveEuropeOpen] = useState(false);
  const [armideiOpen, setArmideIOpen] = useState(false);
  const [jupithetisOpen, setJupiThetisOpen] = useState(false);
  const [ganymedeOpen, setGanymedeOpen] = useState(false);
  const [davgoOpen, setDavGoOpen] = useState(false);
  const [apomasOpen, setApoMasOpen] = useState(false);
  const [lothOpen, setLothOpen] = useState(false);
  const [oedipeOpen, setOedipeOpen] = useState(false);
  const [semeleOpen, setSemeleOpen] = useState(false);
  const [cupsyOpen, setCuPsyOpen] = useState(false);
  const [rogerOpen, setRogerOpen] = useState(false);

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

      {/* ------------------------  */}

      {/* MYTHES & HISTOIRES & BARRE DE RECHERCHE  */}
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Référence Mythologique & Histoires
        </h1>

        {/* ---------- BARRE DE RECHERCHE ---------  */}
        <div className="relative w-80 mb-6">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pr-10 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
            >
              ✕
            </button>
          )}
        </div>

        {/*---------- MYTHES & HISTOIRES ---------- */}

        {/* La Naissance de Vénus */}
        {"La Naissance de Vénus"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setVenusOpen(!venusOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              La Naissance de Vénus ↓
            </button>
            {venusOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  La Naissance de Vénus (italien : Nascita di Venere [ˈnaʃʃita
                  di ˈvɛːnere]) est un tableau de Sandro Botticelli, peint vers
                  1484-1485 et conservé à la galerie des Offices. Il a été peint
                  selon la technique de la tempera. Il représente la déesse
                  Vénus arrivant sur le rivage après sa naissance.
                  <br />
                  <br />
                  Cette œuvre était révolutionnaire à l'époque, car elle
                  présentait un corps nu sans aucune justification religieuse,
                  ainsi qu'un thème mythologique issu de la culture
                  gréco-romaine antérieure au christianisme. Son interprétation
                  est liée à l'Académie platonicienne de Florence, un cercle
                  intellectuel parrainé par la famille Médicis qui s'est
                  consacré aux domaines de la philosophie, de la littérature et
                  de l'art. La signification est liée au néoplatonisme et à la
                  formulation par Marsilio Ficino d'un concept idéalisé de
                  l'amour où la figure de Vénus est divisée en deux versions
                  complémentaires, la Vénus céleste et la Vénus terrestre,
                  symbolisant l'amour spirituel et l'amour matériel, théorie
                  dérivée du Banquet de Platon.
                  <br />
                  <br />
                  Selon la légende, Vénus (Aphrodite dans la mythologie
                  grecque), déesse de l'amour, est née des parties génitales du
                  dieu Uranus, coupées par son fils Saturne puis jetées à la
                  mer. Selon le mythe, la déesse fut transportée par Zéphyr,
                  dieu du vent d'ouest, jusqu'à la terre ferme, et accueillie
                  par les Heures, déesses des saisons, qui l'habillèrent et la
                  conduisirent à la demeure des dieux. Par exemple: Botticelli
                  se concentre sur la sortie de la déesse de la mer et son
                  arrivée sur la terre ferme poussée par les vents, au milieu
                  d'une pluie de fleurs symbolisant la fécondation de la mer par
                  le ciel.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Vénus et Adonis */}
        {"Vénus et Adonis".toLowerCase().includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setAdonisOpen(!adonisOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Vénus et Adonis ↓
            </button>
            {adonisOpen && (
              <div className="mt-2">
                <p className="text-gray-300 ">
                  Dans la mythologie grecque, Adonis Écouter (en grec ancien
                  Ἄδωνις / Ádônis) est le fils de Cinyras et de sa fille Myrrha.
                  Il existe plusieurs versions sur l'identité de ses parents,
                  d'après Apollodore, il est le fils de Cinyras et de Matharmé
                  ou Métharmé, d'après Hésiode, cité par Apollodore (III, 14,
                  4), il est le fils de Phoenix et Alphésibée. Adonis est un
                  humain, amant d'Aphrodite. Il est associé à la rose et au
                  myrte.
                  <br />
                  <br />
                  Adonis est une divinité d'origine orientale, dont le nom est
                  certainement sémitique, la racine « Adon » signifiant «
                  seigneur ». Il apparaît en Orient, avec le même mythe à peu de
                  détails près, sous les noms de Tammouz ou de Thamous.
                  <br />
                  <br />
                  Adonis est fils de Cinyras, roi de Chypre et fondateur de la
                  ville de Paphos dans l’île de Chypre, et de la fille de
                  celui-ci, Myrrha, qu'il eut avec son épouse Cenchreis. La
                  femme du roi attira un jour la haine d'Aphrodite en affirmant
                  que sa fille Myrrha était plus belle qu'elle. La déesse lança
                  alors une malédiction afin de se venger en faisant naitre un
                  amour incestueux de Myrrha pour son père. Réalisant l'horreur
                  de cet amour interdit, elle voulut mettre fin à ses jours. Sa
                  nourrice réussit à l'en empêcher en lui promettant de l'aider
                  à assouvir son désir et, par une nuit très sombre, elle la fit
                  entrer dans le lit de son père, qu'elle avait enivré au point
                  de ne plus savoir ce qu'il faisait. Quand Cinyras s'aperçut
                  qu'il était à la fois le père et le grand-père de l'enfant à
                  naître de Myrrha, fou de rage, il saisit une épée pour tenter
                  de tuer sa fille, qui s'enfuit en suppliant les dieux de la
                  rendre invisible.
                  <br />
                  <br />
                  Prise de pitié, Aphrodite changea promptement Myrrha en arbre
                  à myrrhe (une autre version du mythe existe où c'est Zeus qui
                  changea Myrrha en arbre). L'épée du roi, en s'abattant, fendit
                  le tronc en deux et le bébé Adonis en sortit. Une autre
                  version existe où l'écorce de l'arbre se fendit lorsque la
                  grossesse fut terminée. Cinyras ne fut pas réprimandé pour son
                  inceste, mais son fils et petit-fils Adonis, devenu adulte, le
                  défia en concours pour déterminer lequel d'eux était meilleur
                  joueur de lyre : Cinyras perdit et se suicida.
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
                  image du rythme des saisons. » On a aussi rapproché le mythe
                  de la mort d'Adonis par les faits d'un sanglier, de celui du
                  sanglier d'Érymanthe où c'est l'animal qui succombe. Une autre
                  version, rapportée par Servius, indique que ce sont plutôt les
                  roses qui apparaissent grâce au sang d'Adonis et aux larmes
                  d'Aphrodite.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Prométhée */}
        {"Prométhée".toLowerCase().includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setPrometheeOpen(!prometheeOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Prométhée ↓
            </button>
            {prometheeOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Provoqué trop de fois par l'insolent Prométhée, Zeus décide de
                  se venger sur ses protégés, les hommes. Il demande à son fils
                  Héphaïstos de modeler la première femme, Prométhée n'ayant
                  créé que des hommes. Chaque dieu et déesse offre une qualité à
                  la créature : Athéna lui offre de beaux vêtements, Aphrodite
                  la grâce et la beauté, les Moires des colliers... et Hermès la
                  curiosité, sur ordre de Zeus. Puis, le roi des dieux nomme la
                  femme Pandore, ce qui signifie « cadeau de tous »
                  (sous-entendu : de tous les dieux), et charge Hermès de
                  l'offrir à Épiméthée. Celui-ci hésite, car son frère lui a
                  ordonné de n'accepter aucun cadeau qui vienne des dieux. Mais
                  celui-ci est subjugué devant la beauté de Pandore, et accepte.
                  <br />
                  <br />
                  Pour avoir défié Zeus et son ordre, Prométhée est enchainé à
                  un rocher ou à une montagne (en fonction des versions) avec
                  des chaines forgées par Héphaistos. Pour le punir de son
                  affection pour les humains à la durée de vie limitée, son foie
                  est dévoré chaque jour par un aigle. L'organe repoussant
                  chaque nuit, le titan Prométhée, immortel par nature subit le
                  supplice renouvelé chaque jour.
                  <br />
                  <br />
                  Héraclès délivre Prométhée au cours de ses douze travaux, mais
                  pour ne pas déroger au serment de Zeus qui avait juré que le
                  Titan resterait à jamais enchaîné au Caucase, Prométhée dut
                  porter durant toute sa vie une bague de fer provenant de ses
                  chaînes, accolée à un morceau de pierre du Caucase. D’autre
                  part, lorsque Zeus déclare vouloir anéantir l’espèce humaine
                  dans un déluge, il épargne finalement Deucalion, fils de
                  Prométhée, et sa femme Pyrrha. Prométhée devient immortel
                  grâce au centaure Chiron : celui-ci, blessé accidentellement
                  par les flèches empoisonnées d’Héraclès, ne supportant plus la
                  souffrance mais ne pouvant ni guérir ni mourir, demande la
                  mort aux dieux. Zeus la lui accorde après que Chiron a légué
                  son immortalité à Prométhée, car Zeus est alors reconnaissant
                  envers Prométhée de lui avoir prédit que, s’il avait épousé la
                  Néréide Thétis, le fils qu’ils auraient eu ensemble aurait été
                  plus puissant que lui et l'aurait détrôné.
                  <br />
                  <br />
                  Le châtiment de Prométhée a peu de chances d'être un motif
                  hérité. Dès l'Antiquité, cet épisode de la légende a été lié
                  au Caucase. Georges Charachidzé a mis en évidence les liens
                  étroits qui existent entre les récits grecs et géorgiens
                  montrant comment les deux légendes se sont interpénétrées et
                  peut-être se sont élaborées conjointement. Ces concordances
                  s'étendent jusqu'au détail de certaines expressions comme
                  l'aigle désigné par Eschyle comme un « chien volant » qui fait
                  le pendant du chien ailé du héros géorgien Amirani.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Persée et Andromède */}
        {"Persée et Andromède"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setPerséeetAndromèdeOpen(!perséeetandromèdeOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Persée et Andromède ↓
            </button>
            {perséeetandromèdeOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Le Catalogue des femmes mentionne le mariage de Persée et
                  d'Andromède et l'épisode d'Andromède apparaît pour la première
                  fois sur un vase corinthien à figures noires de 575-570 av.
                  J.-C. environ, c'est-à-dire avant les premières traces de
                  l'histoire de Méduse. Le premier récit développé semble être
                  celui de Phérécyde, préservé chez Apollodore, puis Sophocle et
                  Euripide consacrent à la légende des tragédies intitulées
                  Andromède, dont il ne subsiste plus que des fragments.
                  <br />
                  <br />
                  Cassiopée, mère d'Andromède, s'est vantée que sa fille soit
                  plus belle que les Néréides. En punition, Poséidon envoie un
                  monstre marin qui ravage le pays. Après avoir interrogé
                  l'oracle d'Ammon, Céphée, roi d'Éthiopie et mari de Cassiopée,
                  doit offrir sa fille en sacrifice. Persée arrive et, après
                  avoir débattu avec Céphée, libère la jeune fille. Des amphores
                  corinthiennes du VIe siècle av. J.-C. montrent Persée tenant
                  Andromède par la main et repoussant le monstre marin à coups
                  de pierre. Chez Ovide et les peintres sur vase postérieurs,
                  Persée le tue à coups d'épée. Le recours à la tête de Méduse
                  pour pétrifier le monstre n'apparaît pas avant Lucien de
                  Samosate (IIe siècle).
                  <br />
                  <br />
                  Persée épouse Andromède bien qu'elle ait été promise à Phinée,
                  le frère de Céphée. Une querelle éclate lors des noces entre
                  les deux hommes et Persée change Phinée en pierre grâce à la
                  tête de la Gorgone. Chez Hygin, Agénor et non Phinée est le
                  prétendant malheureux d'Andromède ; il est difficile de
                  déterminer s'il s'agit d'une véritable variante ou d'une
                  confusion de l'auteur. Andromède donne à Persée plusieurs
                  enfants. Homère et le Catalogue des femme citent seulement
                  Sthénélos. La tradition ultérieure, notamment Apollodore,
                  nomment également Persès, que Persée confie à Céphée, Alcée,
                  Héléos, Mestor, Électryon, et une fille, Gorgophoné (« la
                  tueuse de Gorgone »).
                </p>
              </div>
            )}
          </div>
        )}

        {/* Endymion */}
        {"Endymion".toLowerCase().includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setEndymionOpen(!endymionOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Endymion ↓
            </button>
            {endymionOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Il est le fils d'Éthlios, premier souverain d'Élide, et de
                  Calycé; d'autres versions en font un fils de Zeus. Il a trois
                  fils : Étolos, Péon et Épéios. Il choisit son héritier parmi
                  ces trois en les soumettant à une course à pied qu'Épéios
                  remporte. Il passe aussi pour le père de Narcisse.
                  <br />
                  <br />
                  Il est l'amant de Séléné (Luna, chez les Latins), dont il a
                  cinquante filles rattachées au calendrier de la Grèce antique.
                  Elles présidaient aux cinquante mois du calendrier lunaire qui
                  séparaient deux sessions de Jeux olympiques.
                  <br />
                  <br />
                  La tombe d'Endymion se trouve à Olympie. Selon certaines
                  traditions, Séléné obtient pour lui qu'il conserve sa beauté
                  dans un sommeil éternel, dans une grotte du mont Latmos, en
                  Carie.
                  <br />
                  <br />
                  Selon une version minoritaire, Endymion est élevé par Zeus
                  dans l'Olympe, où il s'éprend d'Héra. Furieux, le roi des
                  dieux le jette dans les Enfers, ou encore le punit par un
                  sommeil sans fin.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Cupidon */}
        {"Cupidon".toLowerCase().includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setCupidonOpen(!cupidonOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Cupidon ↓
            </button>
            {cupidonOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Cupidon, d'après Platon, naquit de Mars et de Vénus. Dès qu'il
                  eut vu le jour, Jupiter, qui connut à sa physionomie tous les
                  troubles qu'il causerait, voulut obliger Vénus à s'en défaire.
                  Pour le dérober à la colère de Jupiter, elle le cacha dans les
                  bois. Aussitôt que Cupidon put manier l'arc, il s'en fit un de
                  frêne, employa le cyprès à faire des flèches, et essaya sur
                  les animaux les coups qu'il destinait aux hommes.
                  <br />
                  <br />
                  Puis, il échangea son arc et son carquois contre d'autres en
                  or et en plomb. Les flèches d'or font naître la passion
                  amoureuse dans le cœur de ceux qui sont touchés contrairement
                  aux flèches de plomb qui chassent cette passion. Vénus se
                  plaignit à Thémis que Cupidon, son fils, restait toujours
                  enfant.
                  <br />
                  <br />
                  La déesse consultée répondit alors qu'il ne grandirait point
                  tant qu'elle n'aurait pas d'autre enfant. Alors sa mère lui
                  donna pour frère Antéros — littéralement l'opposé d'Éros —
                  avec lequel il commença à grandir. Par cette jolie fiction,
                  les poètes ont voulu faire entendre que l'amour, pour croître,
                  a besoin de retour. On représentait Antéros, comme son frère,
                  sous la figure d'un petit enfant, avec des ailes, un carquois,
                  des flèches et un baudrier.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Judith et Holopherne */}
        {"Judith et Holopherne"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setJudHoloOpen(!judholoOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Judith et Holopherne ↓
            </button>
            {judholoOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Holopherne est un personnage du livre de Judith, qui fait
                  partie des livres deutérocanoniques de l'Ancien Testament.
                  C'est un général envoyé en campagne par le roi Nabuchodonosor
                  II.
                  <br />
                  Nabuchodonosor II, qui désigne ailleurs dans la Bible un roi
                  des Chaldéens régnant sur Babylone de 605 à 562 av. J.-C., est
                  présenté dans ce texte comme roi d'Assyrie.
                  <br />
                  <br />
                  Nabuchodonosor II a envoyé Holopherne, un de ses généraux,
                  châtier les peuples de l'ouest parce qu'ils ont refusé de le
                  soutenir dans la guerre qu'il a menée contre le roi perse
                  Arphaxad (cf. Judith I, 1). Après avoir pillé, tué et ravagé
                  tout le Proche-Orient, Holopherne assiège Béthulie, une ville
                  juive (probablement Massalah) qui barre un passage dans les
                  montagnes de Judée. Comme l'eau vient à manquer, les habitants
                  sont sur le point de se rendre, mais une jeune veuve, Judith,
                  d'une extraordinaire beauté et d'une richesse considérable,
                  prend la décision de sauver la ville. Avec sa servante et des
                  cruches de vin elle pénètre dans le camp d'Holopherne ; ce
                  dernier est tout de suite ensorcelé par la beauté et
                  l'intelligence de cette femme ; il organise en son honneur un
                  grand banquet à la fin duquel ses domestiques se retirent
                  discrètement pour ne pas troubler la nuit d'amour qui,
                  pensent-ils, attend leur maître. Mais elle continue à
                  l'enivrer et, quand il est hors d'état de se défendre, elle le
                  décapite avec l'aide de sa servante et revient à Béthulie avec
                  la tête. Quand les soldats découvrent au matin leur chef
                  assassiné, ils sont pris de panique : beaucoup s'enfuient et
                  les juifs vainquent facilement ceux qui restent.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Jupiter et Thétis */}
        {"Jupiter et Thétis"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setJupiThetisOpen(!jupithetisOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Jupiter et Thétis ↓
            </button>
            {jupithetisOpen && (
              <div className="mt-2">
                <a
                  href="https://archive.org/details/lamythologieexpl0000deni/page/16/mode/2up?view=theater"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Lien Larousse
                </a>
              </div>
            )}
          </div>
        )}

        {/* Diane et Actéon */}
        {"Diane et Actéon".toLowerCase().includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setDianeActeOpen(!dianeacteOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Diane et Actéon ↓
            </button>
            {dianeacteOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Artémis pour les Grecs ou Diane pour les Romains, est la
                  déesse de la chasse et de la faune sauvage. Actéon est un
                  célèbre chasseur, fils d'Aristée et de Cadmos (ou Autonoé). Il
                  a été élevé par le centaure Chiron. La légende raconte que
                  lors d'une de ses chasses en forêt, il découvrit la déesse
                  Artémis alors qu'elle était nue et prenait un bain avec ses
                  compagnes. Celle-ci, furieuse, le transforma en cerf. Les
                  chiens d'Actéon, l'ayant pris pour une simple bête des bois,
                  rendus fous de rage par la déesse, le tuèrent. Artémis était
                  également très en colère contre Actéon car celui-ci s'était
                  vanté d'être meilleur chasseur que la déesse.
                  <br />
                  <br />
                  Fils du dieu mineur Aristée qui est le fils d’Apollon, et de
                  la fille de Cadmos, Autonoé, Actéon est élevé par le centaure
                  Chiron et devient un chasseur très habile. Selon la version la
                  plus populaire, il surprend un jour, au cours d’une chasse, la
                  déesse Artémis (ou Diane) prenant son bain. Furieuse, elle le
                  transforme en cerf. Impuissant, Actéon meurt déchiré par ses
                  propres chiens (limiers, lévriers, dogues et mâtins) qui ne le
                  reconnaissent pas et sont rendus fous de rage par la déesse.
                </p>
              </div>
            )}
          </div>
        )}

        {/* L'Éducation d'Achille */}
        {"L'Éducation d'Achille"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setEduAchilleOpen(!eduachilleOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              L'Éducation d'Achille ↓
            </button>
            {eduachilleOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  La légende veut que Thétis, la mère d'Achille, ait confié son
                  fils au centaure Chiron, un centaure qui a initié de nombreux
                  héros grecs aux enseignements les plus importants de l'époque,
                  la musique, la médecine, l'équitation et la chasse étant les
                  principales activités enseignées par cet être mythique. Dans
                  ce cas, nous pouvons observer Achille dans une classe
                  équestre, il est monté sur Chiron, bien qu'il ne faille pas
                  seulement regarder cela, mais aussi différents détails autour
                  du tableau qui allégorisent tous les enseignements de Chiron.
                  <br />
                </p>
              </div>
            )}
          </div>
        )}

        {/* Persée et Andromède */}
        {"Persée et Andromède"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setPerseeAndroOpen(!perseeandroOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Persée et ! Andromède ! ↓
            </button>
            {perseeandroOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Les principales sources sont le pseudo-Apollodore (La
                  Bibliothèque), Ovide (Les Métamorphoses) et Hygin (Les
                  Fables).
                  <br />
                  <br />
                  Cassiopée s'est attiré la colère de Poséidon en ayant proclamé
                  que sa fille (ou, selon d'autres versions, elle-même) était
                  d'une beauté égale à celle des Néréides, les nymphes marines
                  qui servent d'escorte au dieu de la mer. Pour se venger,
                  celui-ci provoque une inondation et envoie un monstre marin
                  (Céto) qui se met à détruire hommes et bétail. Désespéré, le
                  roi Céphée consulte l'oracle d'Ammon qui révèle qu'aucun répit
                  n'aura lieu tant que le roi n'aura pas livré sa fille au
                  monstre. Andromède est donc enchaînée à un rocher près du
                  rivage. Persée, de retour après sa victoire sur la Gorgone
                  Méduse, l'aperçoit du ciel et s'informe de ce qui lui est
                  arrivé. Il en tombe immédiatement amoureux et promet à Céphée
                  de tuer le monstre à condition de pouvoir épouser Andromède.
                  Il attaque alors le monstre avec son glaive et le massacre
                  après une lutte acharnée au corps à corps, sans recourir au
                  pouvoir pétrifiant de la tête de Méduse. Selon Ovide, après sa
                  victoire, Persée dépose cette tête sur un lit d'algues, qui
                  rougissent et durcissent à son contact, devenant ainsi la
                  source du corail.
                  <br />
                  <br />
                  Persée épouse Andromède, bien qu'elle ait été auparavant
                  fiancée à son oncle Phinée, qui convoitait le trône de son
                  frère Céphée. Lors du mariage, une querelle a lieu entre les
                  deux prétendants et Phinée est à son tour changé en pierre
                  grâce à la tête de la Gorgone.
                  <br />
                  <br />
                  Andromède suit son époux à Tirynthe en Argolide et ils ont six
                  fils : Persès, Alcée, Héléos, Mestor, Sthénélos et Électryon,
                  et une fille : Gorgophoné. Ils sont à l'origine de la lignée
                  des Perséides par l'intermédiaire de Persès. Leurs descendants
                  dirigent la Mycénie à partir d'Électryon jusqu'à Eurysthée,
                  puis Atrée dont la funeste descendance (les Atrides) inspirera
                  les grandes tragédies de l'époque classique ; le grand héros
                  Héraclès fait aussi partie de cette descendance.
                </p>
              </div>
            )}
          </div>
        )}

        {/*  L'enlèvement d'Europe */}
        {"L'enlèvement d'Europe"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setEnleveEuropeOpen(!enleveeuropeOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              L'enlèvement d'Europe ↓
            </button>
            {enleveeuropeOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Dans la mythologie grecque, Europe (en grec ancien : Εὐρώπη /
                  Eurṓpē) est une princesse phénicienne, fille d'Agénor, roi de
                  Tyr, et de Téléphassa, et sœur notamment de Cadmos. Les
                  institutions de l'Union européenne favorisent le nom de cette
                  figure mythologique comme étymologie du nom du continent
                  européen.
                  <br />
                  <br />
                  Selon une version du mythe, Europe, fille d'Agénor, roi de
                  Tyr, une ville de Phénicie (actuel Liban) fit un rêve. Le jour
                  même, Zeus la rencontra sur une plage de Sidon, se
                  métamorphosa en taureau blanc, afin de l'approcher sans
                  l'apeurer et d'échapper à la jalousie de son épouse Héra.
                  Europe s'approche de lui. Chevauchant l'animal, elle est
                  enlevée sur l'île de Crète à Gortyne (ou, au nord du Bosphore,
                  selon certaines versions). À Gortyne, sous un platane, qui
                  depuis lors est toujours vert, Europe s'accouple avec Zeus,
                  sous forme humaine cette fois. De leur union naissent Minos,
                  Rhadamanthe, et Sarpédon, qui s'exila en Anatolie, à Milet.
                  Plus tard, Europe est donnée par Zeus, comme épouse au roi de
                  Crète, Astérion.
                </p>
              </div>
            )}
          </div>
        )}

        {/*  La Destruction du palais d'Armide */}
        {"La Destruction du palais d'Armide"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setArmideIOpen(!armideiOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              La Destruction du palais d'Armide ↓
            </button>
            {armideiOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Armide (en italien Armida) est un personnage de La Jérusalem
                  délivrée du poète italien Le Tasse, qui fait le récit épique
                  de la croisade dirigée par Godefroy de Bouillon (1096 1099).
                  C'est une magicienne musulmane, nièce d'Hidraot (Idraote). Son
                  aventure la plus célèbre est celle qui la lie au croisé Renaud
                  (Rinaldo) : bien qu'il soit son ennemi, elle tombe amoureuse
                  de lui. Elle tente alors en vain de le retenir par des
                  enchantements.
                  <br />
                  <br />
                  Au XIe siècle dans les jardins enchantés des îles Fortunées
                  (îles des Bienheureux), Renaud est retenu loin de l'armée des
                  croisés, par les enchantements d’Armide, laquelle, sous la
                  garde d’Oriane, se prépare à devenir fée. Par un subterfuge,
                  Armide manipule les sentiments de Renaud lui renvoyant, à
                  chaque regard une image idéale grâce à un jeu de miroir lui
                  assurant l’efficacité de ses appas. Lascif, le héros se
                  féminise. Armide en retour touchée par la beauté de Renaud
                  devient une séductrice séduite. Tiraillée entre la volonté de
                  préserver son amour et la nécessité de combattre l'ennemi
                  Armide hésite. Deux chevaliers, Ubolde et le Danois, arrivent
                  à lever le sortilège. Renaud prend alors conscience de sa
                  condition de prisonnier, alangui et efféminé. Malgré les
                  suppliques et les promesses d'Armide pour garder son amour à
                  ses côtés, Renaud part avec les croisés qui l'ont délivré et
                  abandonne celle qui l'avait envouté. Le personnage d’Armide
                  connaît en France de nouveaux succès artistique et littéraire
                  avec l'opéra de Jean-Baptiste Lully joué pour la première fois
                  le 15 février 1686.
                </p>
              </div>
            )}
          </div>
        )}

        {/*  Le viol de Ganymède */}
        {"Le viol de Ganymède"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setGanymedeOpen(!ganymedeOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Le viol de Ganymède ↓
            </button>
            {ganymedeOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Si l'on en croit le nombre de fois et le large éventail
                  d'auteurs qui font référence à ce récit, celui-ci dut être
                  très populaire. Il n'existe pas de version unique de
                  l'histoire jusqu'à ce qu'elle ne soit reprise par l'écrivain
                  romain Ovide (l. 43 av. JC - 17 ap. JC), mais chaque auteur
                  entre Homère et Ovide semble faire référence à la même
                  histoire, qui diffère pourtant de celle d'Homère.
                  <br />
                  <br />
                  Le mythe raconte l'histoire de Tros, fondateur de la ville de
                  Troie, et de ses trois fils, beaux et sans défaut, dont
                  Ganymède, le plus jeune et le plus beau. Un jour, alors qu'il
                  gardait ses troupeaux sur le mont Ida, il est aperçu par Zeus
                  qui, sous la forme d'un aigle, l'attrape et l'emporte dans
                  l'Olympe. Une fois sur place, Ganymède devient le jeune amant
                  et l'échanson de Zeus, remplaçant Hébé, déesse de la jeunesse,
                  qui occupait le poste d'échanson. Héra, reine des dieux,
                  épouse de Zeus et mère d'Hébé, est furieuse de ce nouvel
                  arrivant et, dans certaines versions ultérieures, lui cause
                  divers problèmes à la cour. Ganymède, se rendant compte des
                  problèmes qu'elle pourrait lui causer ainsi qu'à tous les
                  autres membres de la cour, et cherchant un moyen pour que Zeus
                  le libère, et en même temps souhaitant aider les habitants de
                  la terre, verse l'eau des dieux pour les mortels. Zeus réalise
                  qu'il a mal traité le jeune homme, ainsi que le père du
                  garçon, et place Ganymède dans les cieux sous la forme de la
                  constellation du Verseau tout en récompensant Tros avec des
                  chevaux divins. Ganymède devient le porteur d'eau de
                  l'humanité, Hébé reprend son rôle d'échanson pour Zeus, et
                  Héra est apaisée pour le moment jusqu'à la prochaine escapade
                  de Zeus.
                  <br />
                  <br />
                  C'est la forme de base du conte, mais les différentes versions
                  incluent des détails variés. Dans certaines versions, Zeus
                  envoie un aigle géant pour enlever le jeune homme, dans
                  d'autres, il apparaît lui même en tant qu'homme. Dans
                  certaines versions, Ganymède semble n'avoir que 12 ans, dans
                  d'autres, il peut avoir environ 16 ans. Héra ne met pas
                  toujours à exécution son désir de rendre la vie de Ganymède
                  impossible, et Hébé ne reprend pas toujours son poste
                  d'échanson. Toutes les versions semblent cependant s'accorder
                  sur la relation romantique et sexuelle de Zeus avec Ganymède.
                  Certaines sources critiquent cette relation spécifique, mais
                  la plupart considèrent les relations homosexuelles comme
                  parfaitement naturelles, conformément à l'éthique du monde
                  homérique et à l'acceptation de ce qui, aujourd'hui, serait
                  défini comme des relations homosexuelles dans la Grèce des VIe
                  et IVe siècles avant notre ère.
                </p>
              </div>
            )}
          </div>
        )}

        {/*  David et Goliath */}
        {"David et Goliath"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setDavGoOpen(!davgoOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              David et Goliath ↓
            </button>
            {davgoOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Le combat de David contre Goliath (Samuel 17, 1-58), cité
                  également dans le Coran (sourate 2, verset 251), dans lequel
                  le futur roi d'Israël David, fils du berger Isaï, le plus
                  petit de ses 7 frères et encore adolescent, abat le héros des
                  Philistins, le géant et courageux Goliath, d’un caillou lancé
                  avec une fronde.
                  <br />
                  <br />
                  Récit biblique: Le récit décrit Goliath comme étant un géant
                  d'une taille « de six coudées et un empan » soit environ 2,90
                  m, avec une cotte de mailles en cuivre d'une masse de 5 000
                  sicles, soit 57 kg, et la lame en fer de sa lance de 600
                  sicles soit près de 7 kg. Goliath partit du camp philistin et
                  mit l'armée d'Israël au défi de trouver un homme suffisamment
                  fort pour gagner un duel déterminant l'issue du combat entre
                  les deux nations. Cette provocation fut réitérée
                  quotidiennement pendant 40 jours, matin et soir dans la vallée
                  des Térébinthes. Finalement, David, jeune berger agréé par
                  Dieu, releva le défi lancé par Goliath. Après avoir déclaré
                  qu'il venait contre lui avec l'appui de Dieu, David lui jeta
                  une pierre avec sa fronde. Celle-ci s'enfonça dans le front de
                  Goliath qui tomba à terre. David lui prit son épée et acheva
                  le géant en lui coupant la tête. Plus tard, David se rend chez
                  le prêtre Achimélech dans la ville de Nob et reprend l'épée de
                  Goliath. Goliath a un frère appelé Lahmi qui est tué par
                  Elchanan le fils de Jaïr. Goliath et Lahmi sont des
                  descendants des Rephaïm.
                  <br />
                  <br />
                  La trame du récit de Goliath a pour but de montrer que Saül
                  n'est plus digne d'être roi (et que David l'est). Goliath
                  était le champion des Philistins, qui se battaient pour
                  dominer le territoire. Pourtant, selon le pasteur luthérien
                  Mark Koonz de la Emmanuel Lutheran Church, il y avait un homme
                  du camp israélite qui pouvait presque l'égaler en taille :
                  c'était le roi Saül. Selon le verset 2 du chapitre 9 du
                  Premier livre de Samuel, Saül était plus grand que les autres
                  Israélites, c'est-à-dire qu'il était, selon Mark Koonz, le
                  plus proche de Goliath en taille. D'après lui, Saül était le
                  seul Israélite à posséder une armure corporelle de qualité
                  comparable à celle de Goliath donc il aurait dû être le
                  champion qui représentait Israël. De plus, selon lui,
                  contrairement aux autres soldats israélites, Saül craignait
                  son habileté et son entraînement et non sa taille. Le pasteur
                  Mark Koonz explique qu'il est sous-entendu que si Saül avait
                  placé sa confiance en Dieu pour sa protection et son aide et
                  lui avait obéi, Dieu l'aurait honoré et lui aurait donné la
                  victoire sur Goliath. En combattant et en battant le champion
                  des philistins, David agit comme le roi aurait dû le faire. En
                  fait, selon J. Daniel Hays, un doyen de la Pruet School of
                  Christian Studies et un professeur de l'Ancien Testament à l'
                  Université baptiste d'Ouachita (en), le jeune David endosse
                  officieusement le rôle de roi dans cette bataille, en
                  échangeant le troupeau de moutons au sens propre de son père
                  humain contre le troupeau de moutons au sens figuré (les
                  Israélites) de son père céleste, puis en tuant celui qui
                  menace le troupeau. Hays estime qu'il ne fait aucun doute que
                  David aurait pu se proclamer roi à ce moment-là, et que la
                  nation israélite l'aurait suivi. Cependant, Hays rappelle que
                  David, contrairement à Saül, est un homme selon le cœur de
                  Dieu, et il attend que Dieu destitue Saül du trône pour être
                  le roi. Hays estime que si Goliath mesure 1,80 m, cela met
                  encore plus en évidence le fait qu'il incombait à Saül d'aller
                  le combattre, soulignant ainsi le contraste important entre le
                  roi effrayé et le jeune berger courageux, contraste qui
                  caractérise selon lui la majeure partie de 1 Samuel.
                </p>
              </div>
            )}
          </div>
        )}

        {/*  Apollon et Marsyas */}
        {"Apollon et Marsyas"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setApoMasOpen(!apomasOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Apollon et Marsyas ↓
            </button>
            {apomasOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Après avoir inventé la flûte, Athéna s’aperçut que son visage
                  se déformait lorsqu’elle en jouait, et décida de s’en
                  débarrasser aussitôt. Un jour, le satyre Marsyas trouva
                  l’instrument par hasard et fut émerveillé par les sons
                  majestueux qu’elle produisait. Persuadé que sa musique était
                  la plus belle qui pût exister et fier de sa découverte, il
                  s’empressa de lancer un défi musical au grand dieu Apollon,
                  réputé comme étant le dieu par excellence de la musique.
                  <br />
                  <br />
                  Ce dernier accepta de défier Marsyas mais imposa que le
                  vainqueur ait un pouvoir absolu sur le vaincu. La victoire
                  d’Apollon fut décrétée par les Muses après qu’il eut réussi à
                  jouer de sa lyre retournée sans que son adversaire y parvienne
                  avec sa flûte. Afin de respecter les conditions du duel,
                  Apollon décida de punir l’insolence de Marsyas en l’attachant
                  à un arbre et en l’écorchant vif.
                  <br />
                  <br />
                  Pris de désespoir, les Satyres ainsi que les autres divinités
                  des bois se lamentèrent de sa mort en pleurant. Ainsi, les
                  larmes versées donnèrent naissance à une rivière qui prit le
                  nom du malheureux.
                  <br />
                  <br />
                  (Ovide, Métamorphoses, VI, 382-399) : Après qu'on eut raconté
                  la triste aventure des pâtres de Lycie, on se rappela celle du
                  Satyre si cruellement puni par le fils de Latone, vainqueur au
                  combat de la flûte inventée par Minerve : « Pourquoi me
                  déchires-tu ? s'écriait Marsyas. Ah ! je me repens de mon
                  audace. Fallait-il qu'une flûte me coûtât si cher ! »
                  Cependant tous ses membres sont dépouillés de la peau qui les
                  couvre. Son corps n'est qu'une plaie. Son sang coule de toutes
                  parts. Ses nerfs sont découverts. On voit le mouvement de ses
                  veines ; on voit ses entrailles palpitantes, et l'œil peut
                  compter ses fibres transparentes.Les dieux des forêts, les
                  Faunes champêtres, les Satyres ses frères, Olympus, son
                  disciple célèbre, les Nymphes, et tous les bergers de ces
                  contrées, donnent des pleurs à son malheureux sort. La terre
                  s'abreuve de tant de larmes ; elle les rassemble, et les
                  faisant couler sur son sein, elle en forme un nouveau fleuve,
                  qui, sous le nom de Marsyas, roule les eaux les plus limpides
                  de la Phrygie, et va, par une pente rapide, se perdre dans la
                  mer.
                </p>
                <a
                  href="https://mediterranees.net/polyxenia/cinq_enfants/apollon_marsyas.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Lire le mythe complet
                </a>
              </div>
            )}
          </div>
        )}

        {/*  Loth et ses filles */}
        {"Loth et ses filles"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setLothOpen(!lothOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Loth et ses filles ↓
            </button>
            {lothOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Les Filles de Loth est un poème d'inspiration biblique souvent
                  attribué à Alfred de Musset. On assure au sujet de cette œuvre
                  que George Sand avait promis son amour au poète qui produirait
                  la poésie la plus obscène. Victor Hugo produisit un poème
                  intitulé « Merde », et Musset « Les Filles de Loth ». Musset
                  remporta le prix.
                  <br />
                  <br />
                  <h2>Contexte:</h2>
                  Les filles de Loth s'inspire du premier livre de l'Ancien
                  Testament : la Genèse, chapitre XIX. Il y est dit que, voulant
                  détruire les villes de Sodome et Gomorrhe, Dieu commande au
                  neveu d'Abraham de fuir cette contrée sans se retourner avec
                  sa femme et ses deux filles. Pendant la fuite, la femme de
                  Loth regarde en arrière et devient une statue de sel.
                  <br />
                  <br />
                  Dans la Bible, les filles de Loth sont seulement citées par
                  les substantifs « les filles », « l'aînée » et « la plus jeune
                  ». Les filles de Loth enivrent leur père et couchent avec lui
                  pour conserver leur race.
                  <br />
                  <br />
                  Pour le poète, qui prénomme les filles Sarah et Agass, la
                  raison première du coït incestueux est l'assouvissement du
                  plaisir sexuel. Les deux sœurs s’amusent d’attouchements avant
                  de se livrer à l'inceste paternel. L'acte incestueux, dans la
                  Bible et dans le poème, est commis par la femme et non par
                  l'homme, enivré et inconscient. La Genèse souligne
                  l'irresponsabilité de l'homme : « il ne s'aperçut ni quand
                  elle se coucha, ni quand elle se leva », comme le poète qui
                  conclut par cet alexandrin : « Loth, en se réveillant n'avait
                  rien vu, ni su ».
                </p>
                <a
                  href="https://fr.wikipedia.org/wiki/Les_Filles_de_Loth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Lire le mythe complet
                </a>
              </div>
            )}
          </div>
        )}

        {/*  Œdipe et le Sphinx */}
        {"Oedipe et le Sphinx"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setOedipeOpen(!oedipeOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Œdipe et le Sphinx ↓
            </button>
            {oedipeOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Œdipe est en voyage. Peu avant, il a croisé un voyageur avec
                  qui il s'est disputé et qu'il a tué. Il ne le sait pas, mais
                  c'est son père. Il arrive à la ville de Thèbes, gardée par une
                  créature fantastique qui tyrannise les habitants : le Sphinx.
                  Celui-ci ne laissera le pays tranquille que lorsque quelqu'un
                  aura résolu une énigme qu'il connait. Mais il dévore tous ceux
                  qui échouent. Le Sphinx est très grand.
                  <br />
                  <br />
                  Œdipe décide de se présenter devant le Sphinx. Celui-ci lui
                  pose la question suivante : "Il existe un animal qui le matin
                  marche à quatre pattes, à midi à deux pattes, et sur trois
                  pattes le soir. Qui est-ce ?"
                  <br />
                  <br />
                  Œdipe répond juste : "C'est l'Homme : au matin de sa vie, le
                  bébé marche à quatre pattes, à midi, il marche avec ses deux
                  jambes et au soir de sa vie il s'aide d'une canne, marchant
                  ainsi sur trois pattes.".
                  <br />
                  <br />
                  Le Sphinx donne une deuxième énigme : "« Il y a deux sœurs:
                  l'une donne naissance à l'autre et elle, à son tour, donne
                  naissance à la première. Qui sont les deux sœurs?". Œdipe
                  répond encore juste : "C'est le jour et la nuit, car le jour
                  met au monde la nuit et la nuit met au monde le jour."
                  <br />
                  <br />
                  Alors le Sphinx se donne la mort en se jetant de son rocher.
                  <br />
                  <br />
                  Ce n'est pas grâce à la force mais par son intelligence
                  qu'Œdipe vient à bout du monstre. Pour le remercier, les
                  habitants de Thèbes nomment leur bienfaiteur roi et il épouse
                  la reine. Il ne le sait pas, mais il s'agit de sa mère,
                  Jocaste.
                </p>
                <a
                  href="https://fr.vikidia.org/wiki/%C5%92dipe_et_le_Sphinx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Plus d' informations
                </a>
              </div>
            )}
          </div>
        )}

        {/*  Jupiter et Sémélé */}
        {"Jupiter et Sémélé"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setSemeleOpen(!semeleOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Jupiter et Sémélé ↓
            </button>
            {semeleOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Junon (Héra) jalousait déjà la famille de Cadmos (à cause de
                  la faute d'Europe avec son divin époux) quand elle découvrit
                  que Jupiter (Zeus) recommençait et courtisait la belle Sémélé,
                  l'une des filles de Cadmos. Ses obligations de grande déesse,
                  sœur et épouse du grand Jupiter, fille de Saturne (Cronos)
                  l'obligeait à juger et chatier fermement.
                  <br />
                  <br />
                  Elle prit les traits de Béroé, la nourrice de Sémélé, et
                  obtint de la jeune fille toutes ses confidences. Son ventre
                  était fécondé. Junon (sous les traits de la nourrice) lui
                  suggéra de vérifier la réalité de son amant, tant de gens
                  usurpant le nom des dieux, s'étant introduits dans de chastes
                  couches. Et elle proposa à l'innocente jeune fille, de
                  s'assurer de Jupiter, en lui demandant une étreinte semblable
                  à celle qu'il prodigue à la noble Junon.
                  <br />
                  <br />
                  Sans rien lui préciser, Sémélé demanda une faveur à son amant.
                  Jupiter éperdument amoureux lui assure qu'elle n'éprouvera
                  aucun refus. Et pour certifier sa confiance, il promet sur le
                  Styx, ce que les dieux mêmes ne peuvent plus modifier ensuite.
                  <br />
                  <br />
                  Sémélé alors lui demande d'apparaître dans toute sa puissance.
                  Jupiter aurait voulu arrêter sa demande, mais les mots étaient
                  trop rapides. Triste et accablé, il prit de la hauteur,
                  rassembla les nuages et les tempêtes, les éclairs et le vent,
                  le tonnerre et la foudre. Encore, il ne choisit pas la foudre
                  des Géants aux cent bras (Hécatonchires) mais celle, plus
                  légère, des Cyclopes et ainsi vêtu de sa puissance, il pénètre
                  dans la demeure de Sémélé.
                  <br />
                  <br />
                  Le corps d'une mortelle ne put supporter le tumulte céleste,
                  et Sémélé périt dans les flammes, dons de son époux. L'enfant
                  qu'elle portait (Dionysos) fut greffé dans la cuisse du dieu
                  jusqu'au temps de la gestation maternelle et au berceau fut
                  confié à sa tante Ino, puis élevé par les Nymphes de Nysa qui
                  le cachèrent dans leurs grottes et le nourrirent de lait.
                </p>
                <a
                  href="https://www.mythologie.fr/Ovide%20Metamorph%20Livre%20III%20Vers%20253%20p1.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Site ref
                </a>
              </div>
            )}
          </div>
        )}

        {/*  Cupidon et Psyché */}
        {"Cupidon et Psyché"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setCuPsyOpen(!cupsyOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Cupidon et Psyché ↓
            </button>
            {cupsyOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Psyché est une princesse d'une beauté si parfaite qu'elle
                  éveille la jalousie d'Aphrodite à laquelle on la compare. Elle
                  a deux sœurs aînées, d'une grande beauté également, mais sur
                  lesquelles Psyché l'emporte de loin. Toutefois, contrairement
                  à ses sœurs, elle ne trouve pas d'époux. Les foules se
                  contentent de venir la contempler comme une œuvre d'art et de
                  la vénérer comme une déesse au point d'oublier de célébrer
                  Aphrodite.
                  <br />
                  <br />
                  La déesse, jalouse de cette rivale et offensée par un tel
                  sacrilège, ordonne à son fils Éros de la rendre amoureuse du
                  mortel le plus méprisable qui soit. Alors que le dieu
                  s'apprête à remplir sa mission, il tombe lui-même amoureux de
                  Psyché en se blessant avec l'une de ses flèches...
                </p>
                <a
                  href="https://fr.wikipedia.org/wiki/Psych%C3%A9_(mythologie)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Lire la suite...
                </a>
              </div>
            )}
          </div>
        )}

        {/*  Roger délivrant Angélique */}
        {"Roger délivrant Angélique"
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) && (
          <div className="mt-8">
            <button
              onClick={() => setRogerOpen(!rogerOpen)}
              className="text-xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Roger délivrant Angélique ↓
            </button>
            {rogerOpen && (
              <div className="mt-2">
                <p className="text-gray-300">
                  Angélique est une héroïne de Boiardo, puis du Roland furieux
                  de L'Arioste. Princesse du royaume de Cathay, aux Indes, elle
                  est amenée par Roland en France qui souhaitait qu'elle tombe
                  amoureuse de lui. Cependant ne l'aimant pas elle profite de la
                  défaite des chrétiens pour échapper à ses nombreux prétendants
                  ; auxquels s'ajoutent alors Renaud, Ferragus et Sacripant.
                  Mais elle est capturée par des pirates qui l'abandonnent sur
                  une île pour l'offrir en pâture à l'Orque marine. Roger
                  intervient alors, sur l'Hippogriffe, pour la sauver.
                </p>
                <a
                  href="https://fr.wikipedia.org/wiki/Roger_d%C3%A9livrant_Ang%C3%A9lique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
                >
                  Wikipedia
                </a>
              </div>
            )}
          </div>
        )}
        {/* -------- MYTHES & HISTOIRES /FIN/ ------- */}
      </div>
    </div>
  );
}

export default Mythologie;
