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
  // #region PEINTRE Alphabetique

  // #region🔹 -----I-----
  // #region "Inconnu [ITA / 1598-1680]"
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
