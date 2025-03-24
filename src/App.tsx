import React, { useState, useMemo } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';

interface Artwork {
  title: string;
  artist: string;
  year: string | number;
  imageUrl: string;
  link: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    title: "Naissance de Vénus",
    artist: "Sandro Botticelli",
    year: 1485,
    imageUrl:
      "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/1440xAUTO_processed_article_2023_08_4fb596ce-fa9d-4599-bfe7-2a86084952bd-banner-master.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=66a8ccbb-1ab5-4e28-bd84-4382dfb34be5",
    description:
      "La Naissance de Vénus de Botticelli est une œuvre emblématique de la Renaissance italienne, réalisée vers 1485. Le tableau représente Vénus, déesse de l’amour et de la beauté, émergeant des flots sur un coquillage, portée par le vent Zéphyr et sa compagne Aura. À droite, une des Heures, divinités des saisons, l’accueille avec un manteau fleuri. La composition est harmonieuse, avec des lignes ondulantes qui accentuent la grâce des personnages. La palette de couleurs douces, dominée par des tons pastel, et l’arrière-plan marin apportent une atmosphère de légèreté et d’élégance à cette scène mythologique.",
  },
  {
    title: "Le Printemps",
    artist: "Sandro Botticelli",
    year: "1480",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg/640px-Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg",
    link: "https://fr.gallerix.ru/album/Botticelli/pic/glrx-1297681446",
    description:
      "Le Printemps de Botticelli est une allégorie mythologique célébrant le renouveau et la fertilité de la nature.Au centre, Vénus, déesse de l'amour, rayonne et insuffle la grâce dans le monde.Zéphyr, le vent de l'Est, emporte Chloris, qui se transforme en Flore, symbole de la floraison.L'ensemble exprime l'harmonie entre amour, beauté et l'épanouissement vital du printemps.",
  },
  {
    title: "Vénus et Mars",
    artist: "Sandro Botticelli",
    year: "1483",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Venus_and_Mars_National_Gallery.jpg",
    link: "https://fr.wikipedia.org/wiki/V%C3%A9nus_et_Mars",
    description:
      "Le tableau Vénus et Mars de Sandro Botticelli, réalisé vers 1485, illustre la déesse de l'amour, Vénus, veillant sur Mars, le dieu de la guerre, endormi après l'amour. Des satyres espiègles jouent avec l'armure de Mars, symbolisant la vulnérabilité de la guerre face au pouvoir de l'amour. Cette œuvre, probablement commandée pour célébrer un mariage, reflète les idéaux de la Renaissance en matière de beauté et de vertu. Les guêpes près de la tête de Mars pourraient faire référence à la famille Vespucci, possible commanditaire du tableau",
  },
  {
    title: "L'éducation d'Achille",
    artist: "Bénigne Gagneraux",
    year: "1785",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/B%C3%A9nigne_Gagneraux_-_L%27%C3%A9ducation_d%27Achille_%281785%29.jpg",
    link: "https://fr.wikipedia.org/wiki/Fichier:B%C3%A9nigne_Gagneraux_-_L%27%C3%A9ducation_d%27Achille_%281785%29.jpg",
    description:
      "​Achille, héros de la mythologie grecque, fut confié dès son enfance au centaure Chiron, réputé pour sa sagesse et ses vastes connaissances. Sous sa tutelle, Achille apprit la médecine, la musique, l'équitation, la chasse et le maniement des armes. Chiron lui inculqua également des valeurs morales telles que la justice, la maîtrise de soi et la modération. Cette éducation complète fit d'Achille un modèle du héros accompli dans la Grèce antique.​",
  },

  {
    title: "Dame à l'hermine",
    artist: "Leonardo Da Vinci",
    year: "1490",
    imageUrl:
      "https://fr.muzeo.com/sites/default/files/styles/image_moyenne_def/public/oeuvres/peinture/renaissance/la_dame_ea_lhermine137707.jpg?itok=karIBP5i",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=3e020263-b319-4594-a0ff-01fe66b1f21a",
    description:
      "Dame à l’hermine de Léonard de Vinci, peinte vers 1489-1490, représente Cecilia Gallerani tenant une hermine blanche, symbole de pureté et de noblesse. Le sfumato adoucit les contours, donnant profondeur et réalisme à son regard expressif. La lumière met en valeur la finesse de son visage et la texture de sa robe. La posture dynamique apporte une impression de mouvement naturel. Ce chef-d'œuvre illustre la maîtrise du portrait par Léonard.",
  },
  {
    title: "Judith et Holopherne",
    artist: "Michelangelo Merisi (Caravaggio)",
    year: "1598-1599",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Caravaggio_Judith_Beheading_Holofernes.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=c620f0f6-defb-49ce-9c39-aca7b2592445",
    description:
      "Judith et Holopherne de Caravage, peint vers 1599, illustre la décapitation du général assyrien par Judith. Le clair-obscur dramatique met en lumière son expression déterminée et le visage terrifié d’Holopherne. Le réalisme saisissant accentue la violence et l’intensité de la scène. Le contraste entre la jeunesse de Judith et l’horreur du moment renforce l’impact émotionnel. Cette œuvre témoigne du génie de Caravage pour le dramatique et le naturalisme.",
  },
  {
    title: " Le Sacrifice d' Isaac",
    artist: "Michelangelo Merisi (Caravaggio)",
    year: "1598",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg/1200px-Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=8d7aa256-99f9-4d32-8725-1f5e3a44cce0",
    description:
      "Le Sacrifice d'Isaac de Caravage, réalisé vers 1603-1604, saisit l’instant dramatique où l’ange interrompt le geste d’Abraham, empêchant le sacrifice de son fils.La composition horizontale unit les trois personnages principaux, conférant à la scène une intensité émotionnelle marquée.Le clair-obscur, caractéristique du style caravagesque, sculpte les visages et souligne la tension entre lumière et ombre.Les gestes expressifs – la main ferme de l’ange retenant celle d’Abraham et le cri silencieux d’Isaac – illustrent le conflit intérieur des protagonistes.",
  },
  {
    title: "Saint Matthieu et l'Ange",
    artist: "Michelangelo Merisi (Caravaggio)",
    year: "1602",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/The_Inspiration_of_Saint_Matthew-Caravaggio_%281602%29.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=8d7aa256-99f9-4d32-8725-1f5e3a44cce0",
    description:
      "Saint Matthieu et l'Ange de Caravage, peint vers 1602, est une œuvre emblématique de la période baroque réalisée pour la chapelle Contarelli à Rome.Dans ce tableau, l'évangéliste saint Matthieu est représenté en train d'écrire son Évangile, guidé par un ange qui lui dicte d'une main assurée.Le jeu de clair-obscur dramatique met en exergue la tension entre le monde terrestre de Matthieu et la lumière divine qui l'inspire.La composition, à la fois ample et intimiste, crée une profondeur expressive et invite le spectateur à partager l'instant de révélation spirituelle.",
  },
  {
    title: "Medusa",
    artist: "Michelangelo Merisi (Caravaggio)",
    year: "1597",
    imageUrl:
      "https://www.vice.com/wp-content/uploads/sites/2/2018/04/1523290548731-medusablack.jpeg",
    link: "https://gallerix.ru/album/Italian-painters/pic/glrx-804635620",
    description:
      "Méduse du Caravage, peinte vers 1597, est un bouclier en bois représentant la tête tranchée de la Gorgone au moment précis où elle réalise son sort. Son visage exprime une terreur figée, la bouche ouverte dans un cri muet et les yeux écarquillés d’effroi. Le réalisme saisissant, accentué par le clair-obscur caractéristique du Caravage, donne une impression de mouvement et de tridimensionnalité. Les serpents de sa chevelure semblent s’animer, tandis que le fond sombre met en valeur l’intensité dramatique de la scène. Cette œuvre, destinée aux Médicis, illustre la virtuosité du peintre et sa maîtrise des effets illusionnistes.",
  },

  {
    title: "L'Amour divin et l'Amour profane",
    artist: "Giovanni Baglione",
    year: "1602",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Giovanni_Baglione_-_The_Divine_Eros_Defeats_the_Earthly_Eros_-_Google_Art_Project.jpg",
    link: "https://fr.gallerix.ru/album/Caravaggio/pic/glrx-5197",
    description:
      "L'Amour divin et l'Amour profane est un tableau peint à Rome vers 1602 par Giovanni Baglione dans deux versions successives, sur commande du cardinal Benedetto Giustiniani. L'une (probablement la première) est désormais conservée dans la Gemäldegalerie de Berlin; l'autre se trouve au musée du palais Barberini à Rome.",
  },
  {
    title: "La vision d'Ézéchiel",
    artist: "Raphaël",
    year: "1518",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Raffael_099.jpg/800px-Raffael_099.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=07c247ad-479a-4619-89a2-b7bbe122b80c",
    description:
      "La Vision d'Ézéchiel de Raphaël, réalisée vers 1517-1518, est une œuvre emblématique du Haut-Renaissance qui capture l'instant mystique où le prophète Ézéchiel reçoit une révélation divine.Dans ce petit tableau, Raphaël dépeint un Dieu majestueux, assis sur un trône, entouré d'une aura de lumière dorée et de nuages lumineux, symbolisant la gloire céleste.Autour de Dieu, les quatre créatures vivantes – ou tétramorphe – aux visages d'homme, de lion, de taureau et d'aigle évoquent les symboles des quatre Évangélistes, conférant une dimension universelle à la vision.",
  },
  {
    title: "L’École d'Athènes",
    artist: "Raphaël",
    year: "1508-1512",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    link: "https://fr.wikipedia.org/wiki/L%27%C3%89cole_d%27Ath%C3%A8nes",
    description:
      "L'École d'Athènes est une fresque (4,40 × 7,70 m) du peintre italien Raphaël, située dans la Chambre de la Signature des musées du Vatican, l'une des quatre Chambres de Raphaël (les Stanze) situées à l'intérieur du palais apostolique. C'est l'une des œuvres picturales les plus importantes de la Cité du Vatican. Cette fresque symbolique présente les figures majeures de la pensée antique.",
  },
  {
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    year: 1889,
    imageUrl:
      "https://vincentkjoly.com/wp-content/uploads/2023/11/2728px-Van_Gogh_-_Starry_Night_-_Google_Art_Project-scaled.jpg",
    link: "https://fr.wikipedia.org/wiki/La_Nuit_%C3%A9toil%C3%A9e_(1889)",
    description:
      "Le tableau représente ce que Van Gogh pouvait voir et extrapoler de la chambre qu'il occupait dans l'asile du monastère Saint-Paul-de-Mausole à Saint-Rémy-de-Provence en mai 1889. Souvent présenté comme son grand œuvre, le tableau a été reproduit à de très nombreuses reprises. Il est maintenant conservé dans le Museum of Modern Art (MoMA) à New York depuis 1941.",
  },
  {
    title: "La Grande Vague",
    artist: "Katsushika Hokusai",
    year: "1830-1833",
    imageUrl: "https://blog.messortiesculture.com/uploads/post-1107.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=468cf123-cd6e-485d-9f41-ba63477c6f13",
    description:
      "La Grande Vague de Kanagawa de Katsushika Hokusai, réalisée vers 1831, représente une immense vague menaçante sur le point de s’abattre sur des bateaux. La composition dynamique et les courbes élégantes créent une sensation de mouvement intense. Le bleu profond, obtenu grâce au bleu de Prusse, renforce le contraste avec l’écume blanche. En arrière-plan, le mont Fuji apparaît serein, opposant calme et chaos. Cette estampe emblématique illustre la puissance de la nature et l’influence de l’ukiyo-e.",
  },
  {
    title: "Prometheus",
    artist: "Antonio Mariani della Corgna",
    year: "1621-1628",
    imageUrl:
      "https://www.haltadefinizione.com/assets/Remote/6ba819fb-1ce9-46c6-bec3-4afdb97dd7a6.jpeg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=6ba819fb-1ce9-46c6-bec3-4afdb97dd7a6",
    description:
      "Prométhée, Titan rebelle, offre le feu aux hommes, défiant ainsi l'autorité de Zeus.Condamné pour son audace, il est enchaîné à un rocher, où un aigle dévore son foie chaque jour, en perpétuelle régénération.Ce mythe symbolise la quête de la connaissance et le sacrifice pour la liberté humaine.L'œuvre d'Antonio Mariani della Corgna met en lumière la tension entre la souffrance héroïque et la grandeur de cet acte révolutionnaire.",
  },
  {
    title: "Persée libère Andromède",
    artist: "Piero di Cosimo",
    year: "1515",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Piero_di_Cosimo_-_Liberazione_di_Andromeda_-_Google_Art_Project.jpg/1200px-Piero_di_Cosimo_-_Liberazione_di_Andromeda_-_Google_Art_Project.jpg",
    link: "https://fr.gallerix.ru/storeroom/734167568/N/1998048531/",
    description:
      "Andromède, fille du roi Céphée, est condamnée à être sacrifiée pour apaiser Poséidon, furieux du vantardise de Cassiopée.Le monstre marin, envoyé pour dévaster le royaume, menace de dévorer la jeune princesse enchaînée sur un rocher.Persée, héros aux sandales ailées et armé d’un bouclier magique, intervient et tue la bête.En libérant Andromède, il sauve le peuple et gagne son amour, scellant ainsi leur union.",
  },
  {
    title: "Jupiter et Sémélé",
    artist: "Gustave Moreau",
    year: "1895",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Jupiter_and_Semele_by_Gustave_Moreau.jpg/800px-Jupiter_and_Semele_by_Gustave_Moreau.jpg",
    link: "https://fr.gallerix.ru/storeroom/1065654342/N/189018824/",
    description:
      "Jupiter et Sémélé de Gustave Moreau illustre la passion destructrice de Jupiter, roi des dieux, pour la mortelle Semele.Séduite par l’éclat divin, Semele demande à voir la forme éclatante de Jupiter, scellant ainsi son destin tragique.La révélation de la divinité de Jupiter, trop intense pour une mortelle, consume Semele dans une lumière fulgurante.L’œuvre de Moreau exprime avec finesse le contraste entre désir sensuel et anéantissement face à la puissance divine.",
  },
  {
    title: "Ulysse et les sirènes",
    artist: "John William Waterhouse",
    year: "1891",
    imageUrl: "https://cdn.gallerix.asia/sr/W/1628379096/753576713.jpg",
    link: "https://fr.gallerix.ru/album/Waterhouse/pic/glrx-753576713",
    description:
      "Ulysse et les sirènes de John William Waterhouse évoque le mythe d'Ulysse qui, en naviguant, affronte les chants envoûtants des sirènes.Pour ne pas succomber à leur séduction mortelle, il fait boucher les oreilles de ses marins et se fait attacher au mât.Ainsi, il peut écouter leur mélodie sans perdre le contrôle.Ce mythe symbolise la lutte entre la curiosité insatiable et la nécessité de maîtriser ses passions.",
  },
  {
    title: "Le Radeau de la Méduse",
    artist: "Théodore Géricault",
    year: "1819",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/2560px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
    link: "https://fr.gallerix.ru/album/Waterhouse/pic/glrx-753576713",
    description:
      "Le Radeau de la Méduse, de Théodore Géricault dépeint le naufrage de la frégate française Méduse en 1816, où des survivants dérivent sur un radeau de fortune, confrontés à la faim, la soif et le désespoir. Le tableau illustre la tragédie humaine et la lutte pour la survie face à l'adversité. Géricault a choisi ce sujet contemporain pour critiquer l'incompétence du gouvernement, marquant une rupture avec le néoclassicisme et ouvrant la voie au romantisme.",
  },
];

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <div className="relative group">
      <div className="backdrop-blur-md bg-black/30 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{artwork.title}</h2>
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
  const [selectedArtist, setSelectedArtist] = useState<string>('');

  const artists = useMemo(() => {
    const uniqueArtists = Array.from(new Set(artworks.map(artwork => artwork.artist)));
    return ['Tous les artistes', ...uniqueArtists];
  }, []);

  const filteredArtworks = useMemo(() => {
    if (!selectedArtist || selectedArtist === 'Tous les artistes') {
      return artworks;
    }
    return artworks.filter(artwork => artwork.artist === selectedArtist);
  }, [selectedArtist]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Ma Galerie d'Art</h1>
        
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
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" size={20} />
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