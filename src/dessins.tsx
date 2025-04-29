import React, { useState, useMemo } from "react";
import { ExternalLink, ChevronDown, Search } from "lucide-react";

interface Artwork {
  title: string;
  artist: string;
  year: string | number;
  imageUrl: string;
  link: string;
  description: string;

}

const artworks: Artwork[] = [
  // #region🔹 -----A-----

  // #region "Andrea Mantegna (Graveur/Peintre) [ITA / 1431-1506]"
  {
    title: "Judith et sa servante Abra",
    artist: "Andrea Mantegna (Graveur/Peintre) [ITA / 1431-1506]",
    year: "1491",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Mantegna%2C_giuditta%2C_disegno%2C_uffizi%2C_gabinetto.jpg",
    link: "https://commons.wikimedia.org/wiki/File:Mantegna,_giuditta,_disegno,_uffizi,_gabinetto.jpg",
    description: "...",
  },
  // #endregion

  // #region "Albrecht Dürer [GER / 1471-1528]"
  {
    title: "Armoiries d'Albrecht Dürer",
    artist: "Albrecht Dürer [GER / 1471-1528]",
    year: "1523",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Coat_of_Arms_of_Albrecht_D%C3%BCrer_MET_DP816462.jpg",
    link: "https://fr.wikipedia.org/wiki/Albrecht_D%C3%BCrer",
    description:
      "Albrecht Dürer, né le 21 mai 1471 à Nuremberg (Saint-Empire), où il est mort le 6 avril 1528, est un dessinateur, graveur, peintre allemand de la Renaissance, également connu comme théoricien de la géométrie et de la perspective linéaire. Né à Nuremberg, Dürer établit sa réputation et son influence à travers l'Europe dans sa vingtaine grâce à ses gravures sur bois de haute qualité. Il est en contact avec les grands artistes italiens de son temps, dont Raphaël, Giovanni Bellini et Léonard de Vinci, et à partir de 1512, il est patronné par l'empereur Maximilien Ier.",
  },
  {
    title: "Melencolia I",
    artist: "Albrecht Dürer [GER / 1471-1528]",
    year: "1514",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/D%C3%BCrer_Melancholia_I.jpg",
    link: "https://fr.wikipedia.org/wiki/Melencolia_I",
    description:
      "Cette œuvre se distingue par sa richesse symbolique ; elle a fait l'objet d'une vaste littérature dans le domaine de l'histoire de l'art, suscitant de nombreuses études[1]. Elle est l'une des estampes de vieux maître les plus connues, et elle pose encore aujourd'hui de nombreuses questions d'interprétation...",
  },
  {
    title: "Némésis (La Grande Fortune)",
    artist: "Albrecht Dürer [GER / 1471-1528]",
    year: "1501",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Albrecht%20Drer%20-%20Nemesis%20%28The%20Great%20Fortune%29%20-%20%28MeisterDrucke-7548%29.jpg",
    link: "https://www.meisterdrucke.fr/fine-art-prints/Albrecht-D%C3%BCrer/7548/N%C3%A9m%C3%A9sis-%28La-Grande-Fortune%29.html",
    description: "...",
  },
  {
    title: "Le Rhinocéros",
    artist: "Albrecht Dürer [GER / 1471-1528]",
    year: "1515",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Albrecht%20Drer%20or%20Duerer%20-%20The%20Rhinoceros%201515%20%20-%20%28MeisterDrucke-151580%29.jpg",
    link: "https://www.meisterdrucke.fr/fine-art-prints/Albrecht-D%C3%BCrer/151580/Le-Rhinoc%C3%A9ros%2C-1515.html",
    description: "...",
  },
  {
    title: "Aile d'un Rollier Bleu",
    artist: "Albrecht Dürer [GER / 1471-1528]",
    year: "1512",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Albrecht%20Drer%20-%20Wing%20of%20a%20Blue%20Roller%201512%20%28wc%20on%20vellum%20with%20gold%29%20-%20%28MeisterDrucke-41555%29.jpg",
    link: "https://www.meisterdrucke.fr/fine-art-prints/Albrecht-D%C3%BCrer/41555/Aile-d%27un-Rollier-Bleu%2C-1512.html",
    description: "...",
  },
  {
    title: "Aile d'un Rollier d'Europe",
    artist: "Albrecht Dürer [GER / 1471-1528]",
    year: "Non daté",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Albrecht_Duerer_or_Duerer_-_Wing_of_a_European_Roller_-_%28MeisterDrucke-1172720%29.jpg",
    link: "https://www.meisterdrucke.fr/fine-art-prints/Albrecht-D%C3%BCrer/1172720/Aile-d%27un-Rollier-d%27Europe.html",
    description: "...",
  },
  // #endregion

  // #region "Adriaen Collaert [BLG / 1560-1618]"
  {
    title: "Europe",
    artist: "Adriaen Collaert [BLG / 1560-1618]",
    year: "Entre 1551 et 1600",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Adriaen_Collaert_-_EuropaDe_vier_werelddelen_%28series_title%29_-_%28MeisterDrucke-1363479%29.jpg",
    link: "https://www.meisterdrucke.fr/fine-art-prints/Adriaen-Collaert/1363479/Europe.html",
    description:
      "Conçu par le peintre flamand/artiste, Marten de Vos et gravée par Adriaen Collaert. Entre 1551 et 1600. 864 Marten de Vos Adriaen Collaert Europa",
  },
  // #endregion

  // #endregion

  // #region🔹 -----C-----
  // #region "Charles Le Brun [FRA / 1576-1629]"
  {
    title: "Profils d'oiseau et « homme-oiseau » ",
    artist: "Charles Le Brun [FRA / 1576-1629]",
    year: "Non daté",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Charles_Le_Brun_-_Profiles_of_bird_and_man-bird_%28man-bird%29_-_by_Lebrun_in_Treats_of_the_physiogno_-_%28MeisterDrucke-1027229%29.jpg",
    link: "https://www.meisterdrucke.fr/fine-art-prints/Charles-Le-Brun/1027229/Profils-d%27oiseau-et-%C2%AB-homme-oiseau-%C2%BB---par-Lebrun%2C-dans-%C2%AB-Trait%C3%A9-de-la-physiognomonie-de-l%27homme-compar%C3%A9e-%C3%A0-celle-des-animaux-%C2%BB.html",
    description: "...",
  },
  {
    title: "La chute des anges rebelles ",
    artist: "Charles Le Brun [FRA / 1576-1629]",
    year: "Non daté",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Alexis_Loir_%28I%29_-_De_val_der_opstandige_engelen_-_%28MeisterDrucke-1384816%29.jpg",
    link: "https://www.meisterdrucke.fr/fine-art-prints/Alexis-Loir-%28I%29/1384816/La-chute-des-anges-rebelles.html",
    description: "...",
  },
  {
    title: "Christ à Gethsémani avec deux anges",
    artist: "Charles Le Brun [FRA / 1576-1629]",
    year: "Non daté",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Gilles_Rousselet_-_Christus_in_de_hof_van_Getsemane_met_twee_engelen_-_%28MeisterDrucke-1357728%29.jpg",
    link: "https://www.meisterdrucke.fr/fine-art-prints/Gilles-Rousselet/1357728/Christ-%C3%A0-Geths%C3%A9mani-avec-deux-anges.html",
    description:
      "Gilles Rousselet (imprimeur) ,Charles Le Brun (après la peinture de) ,Louis XIV (roi de France)",
  },
  // #endregion
  // #endregion

  // #region🔹 -----D-----
  // #region "David Vinckboons [BLG / 1576-1629]"
  {
    title: "Bacchus transforme ses ravisseurs en dauphins",
    artist: "David Vinckboons [BLG / 1576-1629]",
    year: "1616",
    imageUrl:
      "https://iiif.wellcomecollection.org/image/V0040000/full/2048%2C/0/default.jpg",
    link: "https://www.europeana.eu/fr/item/90402/RP_P_OB_27_223",
    description:
      "Bacchus transforme les pirates tyrrhéniens qui l'ont kidnappé en dauphins. Il fait pousser du lierre sur le mur et des monstres apparaissent, obligeant les marins à sauter par-dessus bord et à se transformer en dauphins. Illustration de livre pour : Lof-sanck van Bacchus, 1616.",
  },
  // #endregion
  // #endregion

  // #region🔹 -----G-----
  // #region "Gilles Demarteau [BLG / 1729-1776]"
  {
    title: "les amants Armide et Renaud",
    artist: "Gilles Demarteau [BLG / 1729-1776]",
    year: "XVIIIe siècle",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Armide.jpg",
    link: "https://commons.wikimedia.org/wiki/File:Armide.jpg",
    description:
      "Cette gravure sanguine représente les amants Armide et Renaud réalisé à la sanguine par Gilles Demarteau d'après 'un tableau d'Annibale Carracci, peintre italien du XVIIe siècle.",
  },
  // #endregion
  // #endregion

  // #region🔹 -----J-----
  // #region "Jean Lapautre [FRA / 1618-1682]"
  {
    title: "Études de têtes",
    artist: "Jean Lapautre [FRA / 1618-1682]",
    year: "1882 ?",
    imageUrl:
      "https://c8.alamy.com/comp/2WECM1P/studies-van-hoofden-jean-lepautre-1682-1706-print-at-the-bottom-is-a-young-man-seen-from-the-side-with-an-oval-medallion-in-the-hand-on-which-a-emperors-bust-stands-from-the-second-edition-print-maker-france-possiblyafter-own-design-by-france-possiblypublisher-paris-paper-engraving-2WECM1P.jpg",
    link: "https://www.rijksmuseum.nl/nl/collectie/object/---ce272027b3c20b9c787e60011f3fbf2a",
    description: "...",
  },
  // #endregion
  // #endregion

  // #region🔹 -----L-----
  // #region "Leonardo Da Vinci [ITA / 1452-1519]"
  {
    title: "Autoportrait",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "entre 1512 et 1515",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg",
    link: "https://fr.wikipedia.org/wiki/Autoportrait_(L%C3%A9onard_de_Vinci)",
    description:
      "Cet autoportrait représente la tête d'un vieil homme en vue de trois quarts, tourné vers la droite du spectateur. Le visage a un nez aquilin et est marqué par des rides profondes sur le front et des poches sous les yeux. Il est représenté fatigué et vieux, signe qu'il est en fin de vie. Il a un air sage, marqué par l'expérience.",
  },
  {
    title: "Le Condottiere",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "1475",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Head_of_a_Warrior_-_Da_Vinci_1.jpg",
    link: "https://fr.wikipedia.org/wiki/Le_Condottiere_(L%C3%A9onard_de_Vinci)",
    description:
      "Le dessin (28,5 × 20,7 cm) est exécuté à la pointe d'argent sur papier préparé. Revêtu d'une armure à l'antique, le condottiere est coiffé d'un heaume décoré de volutes et d'éléments floraux pendant que des ailes de dragon partent des tempes. Sur la poitrine, l'armure richement ornementée porte une tête de lion saillante.",
  },
  {
    title: "Étude (Tête de sainte Anne)",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "Vers 1502-1503",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Leonardo_da_Vinci_-_RCIN_912533%2C_The_head_of_St_Anne_c.1510-15.jpg",
    link: "https://fr.wikipedia.org/wiki/%C3%89tude_pour_la_t%C3%AAte_de_sainte_Anne",
    description:
      "Le dessin de l'Étude pour la tête de sainte Anne a pour support une feuille de papier rectangulaire de dimensions 18,8 × 13,0 cm. Il est réalisé à la pierre noire.",
  },
  {
    title: "Étude (Drapé de la Vierge)",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "Entre 1507 et 1517",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Leonardo_da_Vinci_-_Draperie_enveloppant_les_jambes_d%27une_figure_assise%2C_INV_2257%2C_Recto.jpg",
    link: "https://fr.wikipedia.org/wiki/%C3%89tude_pour_le_drap%C3%A9_de_la_Vierge",
    description:
      "Le dessin de l'Étude pour le drapé de la Vierge a pour support une feuille de papier pratiquement carrée préparée de jauni teinté de noir et de dimensions 23,0 × 24,5 cm. Il est réalisé à la pierre noire ou au fusain repris avec un pinceau chargé de pigments bruns, gris et blancs, que ce soit d'encre de Chine ou de rehauts de gouache blanche.",
  },
  {
    title: "Homme de Vitruve",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "1402",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitruvian_Man_by_Leonardo_da_Vinci.jpg",
    link: "https://fr.wikipedia.org/wiki/Homme_de_Vitruve",
    description:
      "Léonard de Vinci étudie les célèbres théories de Vitruve, du Livre III de son traité de référence De architectura en 10 volumes, issu de la Bibliothèque impériale de Constantinople (chute de Constantinople et Renaissance). Il représente un homme en deux positions superposées, avec ses bras et ses jambes écartés, inscrits dans un carré et un cercle (symbolique du cercle et du carré, formes géométriques considérées comme parfaites pendant la Renaissance au XVe siècle). L'Homme de Vitruve a fait le lien symbolique entre de nombreuses sciences universelles étudiées par Léonard de Vinci dont : art, anatomie, géométrie, mathématiques, cosmologie, philosophie, métaphysique, mystère (christianisme), Dieu...).",
  },
  {
    title: "Œuvre anatomique",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "1487, 1506-1510 et après 1510",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Leonardo_da_Vinci_-_Anatomical_studies_of_the_shoulder_-_WGA12824.jpg",
    link: "https://fr.wikipedia.org/wiki/%C5%92uvre_anatomique_de_L%C3%A9onard_de_Vinci",
    description:
      "L'œuvre anatomique de Léonard de Vinci comprend 228 planches dessinées et annotées réparties en trois périodes créatrices de l'artiste (1487, 1506-1510 et après 1510). Les études anatomiques de Léonard de Vinci représentent l'une des plus importantes contributions à la science de l'anatomie de la Renaissance. Ses premières études se concentraient sur l'anatomie superficielle, ce qui en fait le précurseur de l'anatomie artistique et servaient de base à ses réalisations artistiques.",
  },
  {
    title: "Tête de jeune femme",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "Entre 1483 et 1485",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Leonardo_da_vinci%2C_Head_of_a_girl_01.jpg",
    link: "https://fr.wikipedia.org/wiki/T%C3%AAte_de_jeune_femme_(L%C3%A9onard_de_Vinci,_Turin)",
    description:
      "Ce dessin de moyenne dimension est un portrait en buste d'une jeune femme anonyme. Il est établi qu'il constitue l'étude préparatoire à la tête de l'ange Uriel présent sur La Vierge aux rochers, toile commandée par la confrérie de l'Immaculée Conception de Milan. Vraisemblablement réalisé entre 1483 et 1485, le dessin appartient probablement aux trois dernières études conservées se rapportant à ce tableau.",
  },
  {
    title: "Tête de la Vierge",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "Entre 1507 et 1513",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/The_Head_of_the_Virgin_in_Three-Quarter_View_Facing_Right_MET_DP102382.jpg",
    link: "https://fr.wikipedia.org/wiki/T%C3%AAte_de_la_Vierge_de_trois_quarts_%C3%A0_droite",
    description:
      "Vraisemblablement réalisé entre 1507 et 1513, il appartient à une série d'études largement postérieures au début de la création du tableau en 1502-1503 et chacune intéressée à un détail. Le motif de la tresse étant largement différent, mais se retrouvant sur des copies d'atelier ; les chercheurs tiennent ce travail comme un des arguments en faveur de la théorie selon laquelle ces copies seraient autant de prototypes grandeur nature du tableau du Louvre.",
  },
  // #endregion
  // #endregion

  // #region🔹 -----R-----
  // #region "Raphaël (Raffaello Sanzio) [ITA / 1483-1520]"
  {
    title: "Jonas (Lorenzetto)",
    artist: "Raphaël (Raffaello Sanzio) [ITA / 1483-1520]",
    year: "1520",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Jonah_drawing_windsor.jpg",
    link: "https://en.wikipedia.org/wiki/Jonah_(Lorenzetto)",
    description:
      "La statue du prophète Jonas faisait partie du décor original de la chapelle, œuvre de Raphaël. L'un des principaux thèmes iconographiques de la chapelle funéraire d' Agostino Chigi était la résurrection des morts. Dans ce contexte, l'aventure de Jonas, avalé par un gros poisson et recraché trois jours plus tard sur ordre de Dieu, symbolisait la victoire sur la mort.",
  },
  // #endregion
  // #endregion

  // #region🔹 -----W-----
  // #region "Willem van der Leeuw [PB / 1603-1665]"
  {
    title: "La chasse à l'hippopotame",
    artist: "Willem van der Leeuw [PB / 1603-1665]",
    year: "Entre 1624 et 1634",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Jacht_op_nijlpaard_en_krokodil%2C_RP-P-OB-67.825.jpg",
    link: "https://www.europeana.eu/fr/item/15508/H_II_20_60",
    description: "...",
  },
  // #endregion

  // #endregion
];
function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <div className="relative group">
      <div className="backdrop-blur-md bg-black/30 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {artwork.title}
              </h2>
              <p className="text-gray-300">{artwork.artist}</p>
              <p className="text-gray-400">{artwork.year}</p>
            </div>
            <a
              href={artwork.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={24} />
            </a>
          </div>
          <a href={artwork.link} target="_blank" rel="noopener noreferrer">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-auto rounded-lg object-contain mb-4"
            />
          </a>
          <p className="text-gray-400 text-sm italic leading-relaxed">
            {artwork.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  // NAV HUMBURGER ⬎
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const artists = useMemo(() => {
    const uniqueArtists = Array.from(
      new Set(artworks.map((artwork) => artwork.artist))
    );
    return ["Tous les artistes", ...uniqueArtists];
  }, []);

  const filteredArtworks = useMemo(() => {
    let filtered = artworks;

    if (searchQuery) {
      filtered = filtered.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          artwork.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedArtist && selectedArtist !== "Tous les artistes") {
      filtered = filtered.filter(
        (artwork) => artwork.artist === selectedArtist
      );
    }

    return filtered;
  }, [selectedArtist, searchQuery]);

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

      {/* Content */}
      <div className="p-8 pt-20 max-w-[2000px] mx-auto">
        <h1
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#FBFBFB" }}
        >
          Ma Galerie d'Arts
        </h1>

        <div className="relative mb-8 max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Rechercher une œuvre ou un artiste"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-white bg-black/30 backdrop-blur-md rounded-lg border border-gray-700 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div className="relative mb-8 max-w-xs mx-auto">
          <select
            value={selectedArtist}
            onChange={(e) => setSelectedArtist(e.target.value)}
            className="w-full px-4 py-2 bg-black/30 backdrop-blur-md text-white rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {artists.map((artist) => (
              <option key={artist} value={artist} className="bg-gray-900">
                {artist}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
            size={20}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <ArtworkCard key={index} artwork={artwork} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
