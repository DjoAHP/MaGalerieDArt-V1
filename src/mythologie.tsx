import React, { useState } from "react";

function Mythologie() {
  // NAV HUMBURGER ⬎
  const [menuOpen, setMenuOpen] = useState(false);
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


  // NAV HUMBURGER & BOUTONS
  function NavLinks() {
    return (
      <>
        <a
          href="./dessins"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
        >
          Dessins & Gravures
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
        <a
          href="https://maitrecappelli.fr/frises-chrono/frise-01.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
        >
          Chrono. Arts
        </a>
      </>
    );
  }

  // CODE, MYTHES & HISTOIRES
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
                  src="https://img-31.ccm2.net/RJ4La9i8P9OF_8DTxvXWbTvE1Cs=/910x/smart/d6d9a9d5cd3b49d783c53f9c1f929c0e/ccmcms-hugo/25336466.jpg"
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

      {/* MYTHES & HISTOIRES  */}
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4">Reference Mythologique</h1>
        <p className="text-gray-300">
          Bienvenue sur la page de référence mythologique.
        </p>

        {/*---------- MYTHES ---------- */}

        {/* La Naissance de Vénus */}
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
                La Naissance de Vénus (italien : Nascita di Venere [ˈnaʃʃita di
                ˈvɛːnere]) est un tableau de Sandro Botticelli, peint vers
                1484-1485 et conservé à la galerie des Offices. Il a été peint
                selon la technique de la tempera. Il représente la déesse Vénus
                arrivant sur le rivage après sa naissance.
                <br />
                <br />
                Cette œuvre était révolutionnaire à l'époque, car elle
                présentait un corps nu sans aucune justification religieuse,
                ainsi qu'un thème mythologique issu de la culture gréco-romaine
                antérieure au christianisme. Son interprétation est liée à
                l'Académie platonicienne de Florence, un cercle intellectuel
                parrainé par la famille Médicis qui s'est consacré aux domaines
                de la philosophie, de la littérature et de l'art. La
                signification est liée au néoplatonisme et à la formulation par
                Marsilio Ficino d'un concept idéalisé de l'amour où la figure de
                Vénus est divisée en deux versions complémentaires, la Vénus
                céleste et la Vénus terrestre, symbolisant l'amour spirituel et
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
            Vénus et Adonis ↓
          </button>
          {adonisOpen && (
            <div className="mt-2">
              <p className="text-gray-300">
                Dans la mythologie grecque, Adonis Écouter (en grec ancien
                Ἄδωνις / Ádônis) est le fils de Cinyras et de sa fille Myrrha.
                Il existe plusieurs versions sur l'identité de ses parents,
                d'après Apollodore, il est le fils de Cinyras et de Matharmé ou
                Métharmé, d'après Hésiode, cité par Apollodore (III, 14, 4), il
                est le fils de Phoenix et Alphésibée. Adonis est un humain,
                amant d'Aphrodite. Il est associé à la rose et au myrte.
                <br />
                <br />
                Adonis est une divinité d'origine orientale, dont le nom est
                certainement sémitique, la racine « Adon » signifiant « seigneur
                ». Il apparaît en Orient, avec le même mythe à peu de détails
                près, sous les noms de Tammouz ou de Thamous.
              </p>
              <p>
                Adonis est fils de Cinyras, roi de Chypre et fondateur de la
                ville de Paphos dans l’île de Chypre, et de la fille de
                celui-ci, Myrrha, qu'il eut avec son épouse Cenchreis. La femme
                du roi attira un jour la haine d'Aphrodite en affirmant que sa
                fille Myrrha était plus belle qu'elle. La déesse lança alors une
                malédiction afin de se venger en faisant naitre un amour
                incestueux de Myrrha pour son père. Réalisant l'horreur de cet
                amour interdit, elle voulut mettre fin à ses jours. Sa nourrice
                réussit à l'en empêcher en lui promettant de l'aider à assouvir
                son désir et, par une nuit très sombre, elle la fit entrer dans
                le lit de son père, qu'elle avait enivré au point de ne plus
                savoir ce qu'il faisait. Quand Cinyras s'aperçut qu'il était à
                la fois le père et le grand-père de l'enfant à naître de Myrrha,
                fou de rage, il saisit une épée pour tenter de tuer sa fille,
                qui s'enfuit en suppliant les dieux de la rendre invisible.
                <br />
                <br />
                Prise de pitié, Aphrodite changea promptement Myrrha en arbre à
                myrrhe (une autre version du mythe existe où c'est Zeus qui
                changea Myrrha en arbre). L'épée du roi, en s'abattant, fendit
                le tronc en deux et le bébé Adonis en sortit. Une autre version
                existe où l'écorce de l'arbre se fendit lorsque la grossesse fut
                terminée. Cinyras ne fut pas réprimandé pour son inceste, mais
                son fils et petit-fils Adonis, devenu adulte, le défia en
                concours pour déterminer lequel d'eux était meilleur joueur de
                lyre : Cinyras perdit et se suicida.
              </p>
              <br />
              <br />
              Dès sa naissance, Adonis est d'une grande beauté : « il pourrait
              plaire même aux yeux de l’Envie. » (Ovide, les Métamorphoses). Il
              fut aimé d'Aphrodite. Selon le pseudo-Apollodore, touchée par la
              beauté de l'enfant, Aphrodite l'envoya dans un coffre en bois à
              Perséphone, afin que celle-ci le garde en sécurité. Perséphone eut
              la curiosité d'ouvrir le coffre et, trouvant Adonis, s'en éprit et
              le disputa à Aphrodite, qui s'était rendue aux Enfers pour le
              reprendre. Perséphone refusa de le rendre. Aphrodite en appela à
              Zeus tout puissant afin de régler le différend entre les deux
              déesses. Zeus refusa d'être juge dans une querelle aussi
              déplaisante aussi confia-t-il l'affaire à un tribunal inférieur,
              présidé par la Muse Calliope.
              <br />
              <br />
              Celle-ci ordonna au jeune homme de passer un tiers de l'année avec
              Aphrodite, un autre tiers avec Perséphone et le dernier avec la
              personne de son choix. La décision de Calliope sembla, dans un
              premier temps, apaiser les tensions entre les deux déesses.
              Cependant, si Adonis respecta à la lettre les exigences du roi des
              dieux, il choisit de consacrer le tiers de l'année restant à
              Aphrodite, afin de vivre pleinement son amour pour elle. Dès lors,
              le partage n'était plus équitable et l'amour qui liait Aphrodite à
              Adonis attisa la colère de Perséphone et des autres dieux. Car si
              la déesse de l'Amour, épouse légitime d'Héphaïstos, avait coutume
              de multiplier les infidélités, elle semblait cette fois-ci
              véritablement éprise de son jeune amant. Un jour Adonis, qui
              parcourait la forêt idalienne pour chasser, fut mortellement
              blessé à la jambe par le sanglier qu'il avait touché. Une goutte
              de son sang tomba par terre et Aphrodite versa une larme sur cette
              goutte de sang, qui donna naissance à l'adonis goutte-de-sang.
              Monument funéraire en terre cuite polychrome représentant Adonis
              mourant, entre 250 et 100 av. J.-C. Musée grégorien étrusque
              Toutes les légendes s'accordent sur cette fin tragique, mais elles
              diffèrent quant à l'instigateur de ce drame. Certains mythes
              affirment qu'Arès (dieu de la Guerre), l'amant officiel
              d'Aphrodite, ne supportait pas d'être ainsi délaissé au profit
              d'un autre. Fou de jalousie, il décida de reconquérir la déesse de
              l'Amour en éliminant Adonis qu'il fit tuer par un sanglier.
              D'autres prétendent qu'Apollon (dieu des Arts et de la Divination
              entre autres) fut à l'origine de la mort d'Adonis.
              <br />
              <br />
              Furieux contre Aphrodite, qui avait rendu aveugle son fils,
              Érymanthe, pour l'avoir surprise dans son bain, Apollon aurait
              arraché son bel amant à la déesse. Dans une autre version (Apol.
              III, 183) c'est Artémis, peut-être jalouse de son habileté de
              chasseur, qui lança contre lui un sanglier furieux. Une version
              indique que c'est le sang d'Adonis qui donne sa couleur brun-rouge
              à la rivière Adonis du Liban, lors des crues (cette rivière prend
              source dans la grotte d'Aphaca où Adonis est censé être né). Les
              amours d'Adonis avec Aphrodite et Perséphone symbolisent les
              cycles des saisons et de leurs capacités à produire des richesses
              dont pouvaient profiter les hommes. « On reconnaît dans ce mythe
              une personnification des forces productrices de la nature et une
              image du rythme des saisons. » On a aussi rapproché le mythe de la
              mort d'Adonis par les faits d'un sanglier, de celui du sanglier
              d'Érymanthe où c'est l'animal qui succombe. Une autre version,
              rapportée par Servius, indique que ce sont plutôt les roses qui
              apparaissent grâce au sang d'Adonis et aux larmes d'Aphrodite.
            </div>
          )}
        </div>
        {/* Prométhée */}
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
                Héphaïstos de modeler la première femme, Prométhée n'ayant créé
                que des hommes. Chaque dieu et déesse offre une qualité à la
                créature : Athéna lui offre de beaux vêtements, Aphrodite la
                grâce et la beauté, les Moires des colliers... et Hermès la
                curiosité, sur ordre de Zeus. Puis, le roi des dieux nomme la
                femme Pandore, ce qui signifie « cadeau de tous » (sous-entendu
                : de tous les dieux), et charge Hermès de l'offrir à Épiméthée.
                Celui-ci hésite, car son frère lui a ordonné de n'accepter aucun
                cadeau qui vienne des dieux. Mais celui-ci est subjugué devant
                la beauté de Pandore, et accepte.
                <br />
                <br />
                Pour avoir défié Zeus et son ordre, Prométhée est enchainé à un
                rocher ou à une montagne (en fonction des versions) avec des
                chaines forgées par Héphaistos. Pour le punir de son affection
                pour les humains à la durée de vie limitée, son foie est dévoré
                chaque jour par un aigle. L'organe repoussant chaque nuit, le
                titan Prométhée, immortel par nature subit le supplice renouvelé
                chaque jour.
                <br />
                <br />
                Héraclès délivre Prométhée au cours de ses douze travaux, mais
                pour ne pas déroger au serment de Zeus qui avait juré que le
                Titan resterait à jamais enchaîné au Caucase, Prométhée dut
                porter durant toute sa vie une bague de fer provenant de ses
                chaînes, accolée à un morceau de pierre du Caucase. D’autre
                part, lorsque Zeus déclare vouloir anéantir l’espèce humaine
                dans un déluge, il épargne finalement Deucalion, fils de
                Prométhée, et sa femme Pyrrha. Prométhée devient immortel grâce
                au centaure Chiron : celui-ci, blessé accidentellement par les
                flèches empoisonnées d’Héraclès, ne supportant plus la
                souffrance mais ne pouvant ni guérir ni mourir, demande la mort
                aux dieux. Zeus la lui accorde après que Chiron a légué son
                immortalité à Prométhée, car Zeus est alors reconnaissant envers
                Prométhée de lui avoir prédit que, s’il avait épousé la Néréide
                Thétis, le fils qu’ils auraient eu ensemble aurait été plus
                puissant que lui et l'aurait détrôné.
                <br />
                <br />
                Le châtiment de Prométhée a peu de chances d'être un motif
                hérité. Dès l'Antiquité, cet épisode de la légende a été lié au
                Caucase. Georges Charachidzé a mis en évidence les liens étroits
                qui existent entre les récits grecs et géorgiens montrant
                comment les deux légendes se sont interpénétrées et peut-être se
                sont élaborées conjointement. Ces concordances s'étendent
                jusqu'au détail de certaines expressions comme l'aigle désigné
                par Eschyle comme un « chien volant » qui fait le pendant du
                chien ailé du héros géorgien Amirani.
              </p>
            </div>
          )}
        </div>
        {/* Persée et Andromède */}
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
                Cassiopée, mère d'Andromède, s'est vantée que sa fille soit plus
                belle que les Néréides. En punition, Poséidon envoie un monstre
                marin qui ravage le pays. Après avoir interrogé l'oracle
                d'Ammon, Céphée, roi d'Éthiopie et mari de Cassiopée, doit
                offrir sa fille en sacrifice. Persée arrive et, après avoir
                débattu avec Céphée, libère la jeune fille. Des amphores
                corinthiennes du VIe siècle av. J.-C. montrent Persée tenant
                Andromède par la main et repoussant le monstre marin à coups de
                pierre. Chez Ovide et les peintres sur vase postérieurs, Persée
                le tue à coups d'épée. Le recours à la tête de Méduse pour
                pétrifier le monstre n'apparaît pas avant Lucien de Samosate
                (IIe siècle).
                <br />
                <br />
                Persée épouse Andromède bien qu'elle ait été promise à Phinée,
                le frère de Céphée. Une querelle éclate lors des noces entre les
                deux hommes et Persée change Phinée en pierre grâce à la tête de
                la Gorgone. Chez Hygin, Agénor et non Phinée est le prétendant
                malheureux d'Andromède ; il est difficile de déterminer s'il
                s'agit d'une véritable variante ou d'une confusion de l'auteur.
                Andromède donne à Persée plusieurs enfants. Homère et le
                Catalogue des femme citent seulement Sthénélos. La tradition
                ultérieure, notamment Apollodore, nomment également Persès, que
                Persée confie à Céphée, Alcée, Héléos, Mestor, Électryon, et une
                fille, Gorgophoné (« la tueuse de Gorgone »).
              </p>
            </div>
          )}
        </div>
        {/* Endymion */}
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
                fils : Étolos, Péon et Épéios. Il choisit son héritier parmi ces
                trois en les soumettant à une course à pied qu'Épéios remporte.
                Il passe aussi pour le père de Narcisse.
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
                Selon une version minoritaire, Endymion est élevé par Zeus dans
                l'Olympe, où il s'éprend d'Héra. Furieux, le roi des dieux le
                jette dans les Enfers, ou encore le punit par un sommeil sans
                fin.
              </p>
            </div>
          )}
        </div>
        {/* Cupidon */}
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
                frêne, employa le cyprès à faire des flèches, et essaya sur les
                animaux les coups qu'il destinait aux hommes.
                <br />
                <br />
                Puis, il échangea son arc et son carquois contre d'autres en or
                et en plomb. Les flèches d'or font naître la passion amoureuse
                dans le cœur de ceux qui sont touchés contrairement aux flèches
                de plomb qui chassent cette passion. Vénus se plaignit à Thémis
                que Cupidon, son fils, restait toujours enfant.
                <br />
                <br />
                La déesse consultée répondit alors qu'il ne grandirait point
                tant qu'elle n'aurait pas d'autre enfant. Alors sa mère lui
                donna pour frère Antéros — littéralement l'opposé d'Éros — avec
                lequel il commença à grandir. Par cette jolie fiction, les
                poètes ont voulu faire entendre que l'amour, pour croître, a
                besoin de retour. On représentait Antéros, comme son frère, sous
                la figure d'un petit enfant, avec des ailes, un carquois, des
                flèches et un baudrier.
              </p>
            </div>
          )}
        </div>
        {/* Judith et Holopherne */}
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
                Holopherne est un personnage du livre de Judith, qui fait partie
                des livres deutérocanoniques de l'Ancien Testament. C'est un
                général envoyé en campagne par le roi Nabuchodonosor II.
                <br />
                Nabuchodonosor II, qui désigne ailleurs dans la Bible un roi des
                Chaldéens régnant sur Babylone de 605 à 562 av. J.-C., est
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
                pensent-ils, attend leur maître. Mais elle continue à l'enivrer
                et, quand il est hors d'état de se défendre, elle le décapite
                avec l'aide de sa servante et revient à Béthulie avec la tête.
                Quand les soldats découvrent au matin leur chef assassiné, ils
                sont pris de panique : beaucoup s'enfuient et les juifs
                vainquent facilement ceux qui restent.
              </p>
            </div>
          )}
        </div>
        {/* Jupiter et Thétis */}
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
        {/* Diane et Actéon */}
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
                Artémis pour les Grecs ou Diane pour les Romains, est la déesse
                de la chasse et de la faune sauvage. Actéon est un célèbre
                chasseur, fils d'Aristée et de Cadmos (ou Autonoé). Il a été
                élevé par le centaure Chiron. La légende raconte que lors d'une
                de ses chasses en forêt, il découvrit la déesse Artémis alors
                qu'elle était nue et prenait un bain avec ses compagnes.
                Celle-ci, furieuse, le transforma en cerf. Les chiens d'Actéon,
                l'ayant pris pour une simple bête des bois, rendus fous de rage
                par la déesse, le tuèrent. Artémis était également très en
                colère contre Actéon car celui-ci s'était vanté d'être meilleur
                chasseur que la déesse.
                <br />
                <br />
                Fils du dieu mineur Aristée qui est le fils d’Apollon, et de la
                fille de Cadmos, Autonoé, Actéon est élevé par le centaure
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
        {/* L'Éducation d'Achille */}
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
                principales activités enseignées par cet être mythique. Dans ce
                cas, nous pouvons observer Achille dans une classe équestre, il
                est monté sur Chiron, bien qu'il ne faille pas seulement
                regarder cela, mais aussi différents détails autour du tableau
                qui allégorisent tous les enseignements de Chiron.
                <br />
              </p>
            </div>
          )}
        </div>
        {/* Persée et Andromède */}
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
                Bibliothèque), Ovide (Les Métamorphoses) et Hygin (Les Fables).
                <br />
                <br />
                Cassiopée s'est attiré la colère de Poséidon en ayant proclamé
                que sa fille (ou, selon d'autres versions, elle-même) était
                d'une beauté égale à celle des Néréides, les nymphes marines qui
                servent d'escorte au dieu de la mer. Pour se venger, celui-ci
                provoque une inondation et envoie un monstre marin (Céto) qui se
                met à détruire hommes et bétail. Désespéré, le roi Céphée
                consulte l'oracle d'Ammon qui révèle qu'aucun répit n'aura lieu
                tant que le roi n'aura pas livré sa fille au monstre. Andromède
                est donc enchaînée à un rocher près du rivage. Persée, de retour
                après sa victoire sur la Gorgone Méduse, l'aperçoit du ciel et
                s'informe de ce qui lui est arrivé. Il en tombe immédiatement
                amoureux et promet à Céphée de tuer le monstre à condition de
                pouvoir épouser Andromède. Il attaque alors le monstre avec son
                glaive et le massacre après une lutte acharnée au corps à corps,
                sans recourir au pouvoir pétrifiant de la tête de Méduse. Selon
                Ovide, après sa victoire, Persée dépose cette tête sur un lit
                d'algues, qui rougissent et durcissent à son contact, devenant
                ainsi la source du corail.
                <br />
                <br />
                Persée épouse Andromède, bien qu'elle ait été auparavant fiancée
                à son oncle Phinée, qui convoitait le trône de son frère Céphée.
                Lors du mariage, une querelle a lieu entre les deux prétendants
                et Phinée est à son tour changé en pierre grâce à la tête de la
                Gorgone.
                <br />
                <br />
                Andromède suit son époux à Tirynthe en Argolide et ils ont six
                fils : Persès, Alcée, Héléos, Mestor, Sthénélos et Électryon, et
                une fille : Gorgophoné. Ils sont à l'origine de la lignée des
                Perséides par l'intermédiaire de Persès. Leurs descendants
                dirigent la Mycénie à partir d'Électryon jusqu'à Eurysthée, puis
                Atrée dont la funeste descendance (les Atrides) inspirera les
                grandes tragédies de l'époque classique ; le grand héros
                Héraclès fait aussi partie de cette descendance.
              </p>
            </div>
          )}
        </div>
        {/*  L'enlèvement d'Europe */}
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
                Selon une version du mythe, Europe, fille d'Agénor, roi de Tyr,
                une ville de Phénicie (actuel Liban) fit un rêve. Le jour même,
                Zeus la rencontra sur une plage de Sidon, se métamorphosa en
                taureau blanc, afin de l'approcher sans l'apeurer et d'échapper
                à la jalousie de son épouse Héra. Europe s'approche de lui.
                Chevauchant l'animal, elle est enlevée sur l'île de Crète à
                Gortyne (ou, au nord du Bosphore, selon certaines versions). À
                Gortyne, sous un platane, qui depuis lors est toujours vert,
                Europe s'accouple avec Zeus, sous forme humaine cette fois. De
                leur union naissent Minos, Rhadamanthe, et Sarpédon, qui s'exila
                en Anatolie, à Milet. Plus tard, Europe est donnée par Zeus,
                comme épouse au roi de Crète, Astérion.
              </p>
            </div>
          )}
        </div>
        {/*  La Destruction du palais d'Armide */}
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
                délivrée du poète italien Le Tasse, qui fait le récit épique de
                la croisade dirigée par Godefroy de Bouillon (1096 1099). C'est
                une magicienne musulmane, nièce d'Hidraot (Idraote). Son
                aventure la plus célèbre est celle qui la lie au croisé Renaud
                (Rinaldo) : bien qu'il soit son ennemi, elle tombe amoureuse de
                lui. Elle tente alors en vain de le retenir par des
                enchantements.
                <br />
                <br />
                Au XIe siècle dans les jardins enchantés des îles Fortunées
                (îles des Bienheureux), Renaud est retenu loin de l'armée des
                croisés, par les enchantements d’Armide, laquelle, sous la garde
                d’Oriane, se prépare à devenir fée. Par un subterfuge, Armide
                manipule les sentiments de Renaud lui renvoyant, à chaque regard
                une image idéale grâce à un jeu de miroir lui assurant
                l’efficacité de ses appas. Lascif, le héros se féminise. Armide
                en retour touchée par la beauté de Renaud devient une séductrice
                séduite. Tiraillée entre la volonté de préserver son amour et la
                nécessité de combattre l'ennemi Armide hésite. Deux chevaliers,
                Ubolde et le Danois, arrivent à lever le sortilège. Renaud prend
                alors conscience de sa condition de prisonnier, alangui et
                efféminé. Malgré les suppliques et les promesses d'Armide pour
                garder son amour à ses côtés, Renaud part avec les croisés qui
                l'ont délivré et abandonne celle qui l'avait envouté. Le
                personnage d’Armide connaît en France de nouveaux succès
                artistique et littéraire avec l'opéra de Jean-Baptiste Lully
                joué pour la première fois le 15 février 1686.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* -------- MYTHES & HISTOIRES /FIN/ ------- */}
    </div>
  );
}

export default Mythologie;
