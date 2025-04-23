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
  // #region🔹 -----Collaborations-----
  // #region "Laocoon [Grèce antique / vers 40 av. J.-C.]"
  {
    title: "Laocoon [Grèce antique / vers 40 av. J.-C.]",
    artist: "Agésandros, Athénodore et Polydore",
    year: "vers 40 av. J.-C.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Laoco%C3%B6n_and_his_sons_group.jpg",
    link: "https://fr.wikipedia.org/wiki/Groupe_du_Laocoon",
    description:
      "Le groupe du Laocoon est une copie romaine en marbre d'une sculpture grecque antique en bronze représentant le prêtre troyen Laocoon et ses deux fils attaqués par des serpents. La statue pourrait dater de 40 av. J.-C.",
  },
  // #endregion

  // #endregion

  // #region🔹 -----A-----
  // #region "Antonio Canova [ITA / 1757-1822 ]"
  {
    title: "Persée triomphant",
    artist: "Antonio Canova [ITA / 1757-1822 ]",
    year: "1797",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Persus-with-the-head-of-med.jpg",
    link: "https://fr.wikipedia.org/wiki/Pers%C3%A9e_triomphant",
    description:
      "Persée triomphant est une sculpture en marbre réalisée par l'artiste néo-classique italien Antonio Canova entre 1797 et 1801. L'œuvre fait 2,35 m de hauteur et est exposée aux musées du Vatican à Rome[1]. Une autre version de 1804 est conservée au Metropolitan Museum of Art de New York.",
  },
  // #endregion

  // #endregion

  // #region🔹 -----I-----

  // #region "Inconnu"
  {
    title: "Victoire de Samothrace",
    artist: "Inconnu [l'île de Samothrace / Vers 200-185 av. J.-C.]",
    year: "1863",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg",
    link: "https://fr.wikipedia.org/wiki/Victoire_de_Samothrace",
    description:
      "La Victoire de Samothrace est un monument votif trouvé sur l'île de Samothrace, au nord de la mer Égée, dans le sanctuaire des Grands Dieux. C'est un chef-d'œuvre de la sculpture hellénistique, datant du début du IIe siècle av. J.-C. Il est composé d'une statue représentant la déesse Niké (la Victoire), dont il manque la tête et les bras, et de sa base en forme de proue de navire. La hauteur totale du monument est de 5,12 mètres ; la statue seule mesure 2,75 mètres. L'ensemble est exposé au musée du Louvre, en haut de l'escalier principal depuis 1884.",
  },
  {
    title: "Vénus de Milo",
    artist: "Inconnu [L' île grecque de Milos / vers 150-130 av. J.-C.",
    year: "1820",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/V%C3%A9nus_de_Milo_-_Mus%C3%A9e_du_Louvre_AGER_LL_299_%3B_N_527_%3B_Ma_399.jpg",
    link: "https://fr.wikipedia.org/wiki/V%C3%A9nus_de_Milo",
    description:
      "La Vénus de Milo est une statue en marbre représentant la déesse grecque Aphrodite (désignée par son équivalent latin Vénus), retrouvée dans l'île grecque de Milos en avril 1820 dans un état fragmentaire, sans bras. Il s'agit d'une œuvre originale de l'époque hellénistique, créée vers 150-130 av. J.-C.",
  },
  // #endregion

  // #endregion

  // #region🔹 -----L-----
  // #region "Le Bernin (Gian Lorenzo Bernini) [ITA / 1598-1680]"
  {
    title: "Apollon et Daphné",
    artist: "Le Bernin (Gian Lorenzo Bernini) [ITA / 1598-1680]",
    year: "1622",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apollo_and_Daphne_%28Bernini%29_%28cropped%29.jpg",
    link: "https://fr.wikipedia.org/wiki/Apollon_et_Daphn%C3%A9_(Le_Bernin)",
    description:
      "Le groupe à sujet mythologique d'Apollon et Daphné est commandé par le cardinal Scipione Cappellolli-Borghese, neveu de Paul V, au sculpteur Gian Lorenzo Bernini, alors âgé d'une vingtaine d'années[1]. Cette œuvre est la dernière d'une série de quatre œuvres importantes commandées par le cardinal pour sa villa, qui contribuèrent à définir la sculpture baroque[2] avec Énée, Anchise et Ascagne (1619-1620), L'Enlèvement de Perséphone (1621-1622) et David (1623-1624).",
  },
  {
    title: "L'Enlèvement de Proserpine",
    artist: "Le Bernin (Gian Lorenzo Bernini) [ITA / 1598-1680]",
    year: "1621-1622 env.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Rape_of_Prosepina_September_2015-3a.jpg",
    link: "https://fr.wikipedia.org/wiki/L%27Enl%C3%A8vement_de_Proserpine_(Le_Bernin)",
    description:
      "L'Enlèvement de Proserpine ou Le Rapt de Proserpine est un grand groupe baroque sculpté en marbre de l'artiste italien Le Bernin, exécuté entre 1621 et 1622, lorsque sa carrière est à ses débuts. Le groupe, achevé alors qu'il n'a que 23 ans, représente le « rapt de Proserpine » (Perséphone dans la mythologie grecque), capturée et emmenée aux Enfers par le dieu Pluton (Hadès). On y voit Pluton soulevant Proserpine et un Cerbère symbolisant la frontière vers le monde souterrain dans lequel Pluton la transporte.",
  },
  // #endregion
  // #endregion

  // #region🔹 -----M-----

  // #region "Michel-Ange (Michelangelo di Lodovico Buonarroti Simoni) [1475 - 1564]"
  {
    title: "La Pietà",
    artist:
      "Michel-Ange (Michelangelo di Lodovico Buonarroti Simoni) [1475 - 1564]",
    year: "1499",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Michelangelo%27s_Piet%C3%A0%2C_St_Peter%27s_Basilica_%281498%E2%80%9399%29.jpg",
    link: "https://fr.wikipedia.org/wiki/Piet%C3%A0_(Michel-Ange)",
    description:
      "La Pietà est un groupe en marbre de Michel-Ange de la basilique Saint-Pierre du Vatican à Rome, représentant le thème biblique de la « Vierge Marie douloureuse » (Mater dolorosa en latin ou Pietà), tenant sur ses genoux le corps du Christ descendu de la Croix avant sa Mise au tombeau, sa Résurrection et son Ascension. Elle est sculptée entre 1498 et 1499.",
  },
  {
    title: "David",
    artist:
      "Michel-Ange (Michelangelo di Lodovico Buonarroti Simoni) [1475 - 1564]",
    year: "1501",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Michelangelo%27s_David_-_right_view_2.jpg",
    link: "https://fr.wikipedia.org/wiki/David_(Michel-Ange)",
    description:
      "Initialement placé devant le palazzo Vecchio pour symboliser la détermination d'une jeune république face au tyran, l'original est, depuis 1873, exposé dans la Galleria dell'Accademia de Florence. Le David que l'on peut désormais voir devant la façade du palazzo Vecchio est une réplique installée en 1910.",
  },
  {
    title: "Le Moïse",
    artist:
      "Michel-Ange (Michelangelo di Lodovico Buonarroti Simoni) [1475 - 1564]",
    year: "entre 1513 et 1515",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0503/5730/5497/files/Michelangelo_s_Moses.jpg?v=1697453683",
    link: "https://fr.wikipedia.org/wiki/Mo%C3%AFse_(Michel-Ange)",
    description:
      "Cette statue de Moïse faisait partie du projet initial du tombeau de Jules II dans la basilique Saint-Pierre de Rome. Après quarante années de discussions, un ensemble réduit fut transféré par les héritiers à la basilique Saint-Pierre-aux-Liens.",
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

  // NAV HUMBURGER
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
        <a
          href="https://ulysse-voyage.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block"
        >
          Le Voyage d' Ulysse
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
                  src="https://api-www.louvre.fr/sites/default/files/2021-12/victoire-de-samothrace.jpg"
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
