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
  // 🔹 -----A-----
  // #region "Abraham Bloemaert [NLD / 1564-1651]"
  {
    title: "Vénus et Adonis",
    artist: "Abraham Bloemaert [NLD / 1564-1651]",
    year: "1632",
    imageUrl:
      "https://iip-thumb.smk.dk/iiif/jp2/jd473138d_KMSsp343.tif.reconstructed.tif.jp2/full/!2048,/0/default.jpg",
    link: "https://open.smk.dk/artwork/image/KMSsp343?q=*&page=3",
    description:
      "Alors qu'Adonis se prépare pour la chasse, Vénus « saisit sa main humide » et « elle le pousse en arrière, comme elle voudrait être poussée » (afin de procéder à l'acte sexuel). Plus tard, « il est étendu haletant, son souffle arrive au visage de Vénus » tandis qu'elle lui dit : « sois donc plus hardi, nos ébats n'ont pas de témoins ». Elle le séduit et ils entament une romance passionnée, mais Adonis ne s'y engage pas vraiment car il s'estime trop jeune et ne s'intéresse qu'à la chasse. Adonis finit par trouver la mort dans un accident de chasse, laissant Vénus éplorée.",
  },
  // #endregion

  // #region "Annibal Carrache [ITA / 1560-1609]"
  {
    title: "Le Triomphe de Bacchus et Ariane",
    artist: "Annibal Carrache [ITA / 1560-1609]",
    year: "Vers 1600",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Rome_Palazzo_Farnese_ceiling_Carracci_frescos_04.jpg",
    link: "https://solskin-art.fr/carrache-le-triomphe-de-bacchus-galerie-farnese-rome/",
    description:
      "On y retrouve l’Ut Pictura Poesis au travers des vers chantés lorsque les jeunes époux se rendent au lit nuptial. Les sens son sollicités, comme le préconisent les réformes du Concile de Trente. Thème antique du Dieu et son cortège mais aussi inspiration des maîtres de la Renaissance comme Michel-Ange. L’image de Bacchus ainsi que l’utilisation de putti et de nus athlétique son directement inspirés de la voûte de la Chapelle Sixtine (1508-1512).",
  },
  // #endregion

  // #region "Antonio Mariani della Corgna  [ITA / 1584-1654]"
  {
    title: "Prometheus",
    artist: "Antonio Mariani della Corgna  [ITA / 1584-1654]",
    year: "1621-1628",
    imageUrl:
      "https://www.haltadefinizione.com/assets/Remote/6ba819fb-1ce9-46c6-bec3-4afdb97dd7a6.jpeg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=6ba819fb-1ce9-46c6-bec3-4afdb97dd7a6",
    description:
      "Prométhée, Titan rebelle, offre le feu aux hommes, défiant ainsi l'autorité de Zeus.Condamné pour son audace, il est enchaîné à un rocher, où un aigle dévore son foie chaque jour, en perpétuelle régénération.Ce mythe symbolise la quête de la connaissance et le sacrifice pour la liberté humaine.L'œuvre d'Antonio Mariani della Corgna met en lumière la tension entre la souffrance héroïque et la grandeur de cet acte révolutionnaire.",
  },
  // #endregion

  // #region "Anne-Louis Girodet [FRA / 1767-1824]"
  {
    title: "Endymion. Effet de lune - Le Sommeil d'Endymion -",
    artist: "Anne-Louis Girodet [FRA / 1767-1824]",
    year: "1791",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Girodet_Sleep_of_Endymion.jpg",
    link: "https://collections.louvre.fr/ark:/53355/cl010064831",
    description:
      "Le jeune berger Endymion, plongé dans un sommeil éternel, reçoit la visite nocturne de la déesse de la Lune (Diane ou Séléné) qui s'est éprise de sa beauté. La déesse est figurée sous la forme d'un rayon de lune dont la lumière — Zéphyr aidant à écarter l'ombrage des buissons — inonde le corps nu et alangui du berger reposant dans une grotte du mont Latmos.",
  },
  // #endregion

  // #region "Antonio Allegri da Correggio (le Corrège)  [ITA / 1489-1534]"
  {
    title: "Vénus, Satyre et Cupidon",
    artist: "Antonio Allegri da Correggio (le Corrège)  [ITA / 1489-1534]",
    year: "1524-1527",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Correggio_-_Venus_and_Cupid_with_a_Satyr.jpg",
    link: "https://fr.wikipedia.org/wiki/V%C3%A9nus,_Satyre_et_Cupidon",
    description:
      "Le tableau représente Vénus endormie avec son fils Eros. Derrière eux, un satyre est en train de découvrir la déesse. L'œuvre est encore connue de nos jours sous son ancien nom de Jupiter et Antiope, car selon la mythologie grecque et Ovide, Jupiter s'était lui-même transformé en satyre, afin de violer la nymphe Antiope. Cependant, aucun mythe antique de jeune fille endormie et violée par un satyre ne concerne Vénus. ",
  },
  {
    title: "L'Éducation de Cupidon",
    artist: "Antonio Allegri da Correggio (le Corrège)  [ITA / 1489-1534]",
    year: "1527",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Correggio_Venus_with_Mercury_and_Cupid_or_The_School_of_Love.jpg",
    link: "https://fr.wikipedia.org/wiki/L%27%C3%89ducation_de_Cupidon",
    description:
      "L'Éducation de Cupidon ou Vénus, Mercure et Cupidon, voire L'École de l'Amour est une peinture réalisée vers 1525 par le peintre italien Le Corrège, et conservée à la National Gallery de Londres.",
  },
  // #endregion

  // 🔹 -----B-----
  // #region "Bénigne Gagneraux [FRA / 1756-1795]"
  {
    title: "L'éducation d'Achille",
    artist: "Bénigne Gagneraux [FRA / 1756-1795]",
    year: "1785",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/B%C3%A9nigne_Gagneraux_-_L%27%C3%A9ducation_d%27Achille_%281785%29.jpg",
    link: "https://fr.wikipedia.org/wiki/Fichier:B%C3%A9nigne_Gagneraux_-_L%27%C3%A9ducation_d%27Achille_%281785%29.jpg",
    description:
      "​Achille, héros de la mythologie grecque, fut confié dès son enfance au centaure Chiron, réputé pour sa sagesse et ses vastes connaissances. Sous sa tutelle, Achille apprit la médecine, la musique, l'équitation, la chasse et le maniement des armes. Chiron lui inculqua également des valeurs morales telles que la justice, la maîtrise de soi et la modération. Cette éducation complète fit d'Achille un modèle du héros accompli dans la Grèce antique.​",
  },
  // #endregion

  // 🔹 -----C-----
  // #region "Charles André van Loo [FRA / 1705-1765]"
  {
    title: "L'Ivresse de Silène",
    artist: "Charles André van Loo [FRA / 1705-1765]",
    year: "1747",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/L%27Ivresse_de_Sil%C3%A8ne_%28Carle_Van_Loo%29.jpg",
    link: "https://fr.wikipedia.org/wiki/L%27Ivresse_de_Sil%C3%A8ne",
    description:
      "L'Ivresse de Silène est une peinture réalisée par Carle van Loo, en 1747. Aujourd'hui, elle est conservée au sein des collections du musée des Beaux-Arts de Nancy[1].",
  },
  // #endregion

  // #region "Cavalier D'Arpin [ITA / 1568-1640]"
  {
    title: "Persée et Andromède",
    artist: "Cavalier D'Arpin [ITA / 1568-1640]",
    year: "1602",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/D%27arpino-Androm%C3%A8de.jpg",
    link: "https://fr.wikipedia.org/wiki/L%27Ivresse_de_Sil%C3%A8ne",
    description:
      "Alors qu’il rentre chez lui à dos de Pégase, il aperçoit la princesse en détresse, tombe amoureux. Il aperçoit alors le monstre marin qui rôde, et les parents d’Andromède qui regardent la scène, pleins d’angoisse. Persée propose donc de la sauver, à condition qu’elle l’épouse et vienne avec lui en Grèce. Les parents n’ont pas vraiment le choix : ils acceptent. et le terrasse d’un coup d’épée",
  },
  // #endregion

  // #region "Charles Antoine Coypel [FRA / 1694-1752]"
  {
    title: "La Destruction du palais d'Armide",
    artist: "Charles Antoine Coypel [FRA / 1694-1752]",
    year: "1737",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Charles-Antoine_Coypel_La_destruction_du_palais_d%27Armide_Nancy_22122007_01.jpg",
    link: "https://anniceris.blogspot.com/2011/12/la-destruction-du-palais-darmide-1737.html",
    description:
      "Armide est une magicienne Sarrasine, fille de Hidraot, roi de Damas, envoyée pour capturer les plus grands paladins croisés et tuer le chevalier chrétien Renaud. Elle tombe amoureuse de lui et l'enferme dans un Jardin fabuleux où elle l'envoûte de ses délices.",
  },
  // #endregion

  // 🔹 -----D-----
  // #region "Damiano Mazza [ITA / 1550-1576]"
  {
    title: "Le viol de Ganymède",
    artist: "Damiano Mazza [ITA / 1550-1576]",
    year: "1575",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Damiano_Mazza_-_The_Rape_of_Ganymede_ca_1575_-_%28MeisterDrucke-1196890%29.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/damiano-mazza-the-rape-of-ganymede",
    description:
      "Il faut prendre ici pour viol le sens d'enlèvement contraint (rapt), Ganymède étant enlevé dans les airs par un aigle (représentant les dieux ou Zeus lui-même) pour être soustrait à la vindicte d'Héra.",
  },
  // #endregion

  // #region "Daniele Da Volterra [ITA / 1550-1576]"
  {
    title: "David vainqueur de Goliath",
    artist: "Daniele Da Volterra [ITA / 1509-1566]",
    year: "1550-1555",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/David_and_Goliath_by_Daniele_da_Volterra_%28Louvre_INV_566%29_recto_02.jpg",
    link: "https://collections.louvre.fr/ark:/53355/cl010067107",
    description:
      "Le David et Goliath ou David tuant Goliath de Daniele da Volterra, est un tableau à double face huile sur ardoise, conservé au musée du Louvre. Le tableau représente une scène très connue : David vient de toucher Goliath au front, avec une pierre lancée de sa fronde. Le géant est à terre, et David s’est emparé de son épée (un cimeterre) pour l’achever.",
  },
  // #endregion

  // 🔹 -----E-----
  // #region "Edward Burne-Jones [GBR / 1833-1898]"
  {
    title: "La Mort de Méduse I",
    artist: "Edward Burne-Jones [GBR / 1833-1898]",
    year: "1882",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Edward_Burne-Jones_-_The_Death_of_Medusa_I%2C_1882.jpg",
    link: "https://upload.wikimedia.org/wikipedia/commons/5/52/Edward_Burne-Jones_-_The_Death_of_Medusa_I%2C_1882.jpg",
    description:
      "Naissance de Pégase et Chrysaor, v. 1876-1885, gouache, Southampton City Art Gallery.",
  },
  // #endregion

  // 🔹 -----G-----
  // #region "Giulio Romano [ITA / 1492/1499-1546]"
  {
    title: "L'enfant Jupiter gardé par les Corybantes sur l'île de Crète",
    artist: "Atelier de Giulio Romano [ITA / 1492/1499-1546]",
    year: "1530",
    imageUrl:
      "https://www.meisterdrucke.lu/kunstwerke/1260px/Giulio_Romano_-_The_Infancy_of_Jupiter_1530s_-_%28MeisterDrucke-1196317%29.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/workshop-of-giulio-romano-the-infancy-of-jupiter",
    description:
      "Dans la mythologie grecque et romaine, le dieu Saturne, averti qu'un de ses descendants le renverserait, dévora ses enfants à la naissance. Pour protéger leur fils, sa femme Ops emmena le jeune Jupiter en Crète pour qu'il soit élevé par les Corybantes, qui utilisèrent le rythme de leurs danses et le cliquetis de leurs cymbales pour dissimuler les cris du bébé afin qu'il ne soit pas découvert par Saturne.",
  },
  // #endregion

  // #region "Georges de La Tour [FRA / 1593-1652]"
  {
    title: "Saint Joseph charpentier",
    artist: "Georges de La Tour [FRA / 1593-1652]",
    year: "1645",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/La_Tour.jpg",
    link: "https://fr.wikipedia.org/wiki/Saint_Joseph_charpentier",
    description:
      "La toile représente Joseph et a ses côtés, l'enfant Jésus vêtu d'une tunique, est assis de profil, il tient une chandelle qui éclaire la scène et dont la flamme fait apparaître ses doigts en transparence. La scène est peinte dans des tonalités brunes, presque monochrome[1].",
  },
  {
    title: "La Madeleine pénitente (à la flamme filante)",
    artist: "Georges de La Tour [FRA / 1593-1652]",
    year: "1645",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Georges_de_La_Tour_-_The_Magdalen_with_the_Smoking_Flame_-_Google_Art_Project.jpg?uselang=fr",
    link: "https://fr.wikipedia.org/wiki/La_Madeleine_%C3%A0_la_flamme_filante",
    description:
      "La Madeleine à la flamme filante, est un tableau du peintre français Georges de La Tour, peint vers 1638. Cette huile sur toile représente Madeleine pénitente, elle est conservée au musée d'Art du comté de Los Angeles, à Los Angeles.",
  },
  // #endregion

  // #region "Giovanni Baglione [ITA / 1566-1644]"
  {
    title: "L'Amour divin et l'Amour profane",
    artist: "Giovanni Baglione [ITA / 1566-1644]",
    year: "1602",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Giovanni_Baglione_-_The_Divine_Eros_Defeats_the_Earthly_Eros_-_Google_Art_Project.jpg",
    link: "https://gallerix.ru/album/Italian-painters/pic/glrx-804635620",
    description:
      "L'Amour divin et l'Amour profane est un tableau peint à Rome vers 1602 par Giovanni Baglione dans deux versions successives, sur commande du cardinal Benedetto Giustiniani. L'une (probablement la première) est désormais conservée dans la Gemäldegalerie de Berlin; l'autre se trouve au musée du palais Barberini à Rome.",
  },
  // #endregion

  // #region "Gerard van Honthorst [NLD / 1590-1656]"
  {
    title: "Samson et Dalila",
    artist: "Gerard van Honthorst [NLD / 1590-1656]",
    year: "1616",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Samson_et_Dalila.JPG/440px-Samson_et_Dalila.JPG",
    link: "https://www.clevelandart.org/art/1968.23",
    description:
      "Samson avait été promis à sa mère inféconde par un ange et annoncé comme un libérateur du peuple et un être consacré à Dieu qui n’avait pas le droit de se couper les cheveux. Samson, en combattant solitaire, fut souvent inscrit dans la tradition des héros de la mythologie grecque et, au même titre qu’Héraclès, possédait des pouvoirs surhumains. Son caractère était considéré comme impulsif et violent. Selon le Livre des Juges, son adversaire et séductrice Dalila, qui lui arracha son secret, provoquant ainsi sa chute, agissait pour le compte des princes des Philistins.",
  },
  {
    title: "Le Triomphe de Silène",
    artist: "Gerard van Honthorst [NLD / 1590-1656]",
    year: "vers 1623-1630",
    imageUrl:
      "https://collections.louvre.fr/media/cache/medium/0000000021/0000054313/0000731064_OG.JPG",
    link: "https://collections.louvre.fr/ark:/53355/cl010054313",
    description:
      "Dans la mythologie grecque, Silène (ou Papposilène) (en grec ancien : Σειληνός / Seilēnós, prononcé : [seːlɛːnós]) est un satyre, père adoptif et précepteur du dieu Dionysos, qu’il accompagne sans cesse. Il passait en effet pour un sage, un prophète et un philosophe.",
  },
  {
    title: "Concert ou Le Vol de l'amulette",
    artist: "Gerard van Honthorst [NLD / 1590-1656]",
    year: "vers 1626-1630",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Gerrit_van_Honthorst_cat02.jpg",
    link: "https://fr.wikipedia.org/wiki/Concert_(van_Honthorst)",
    description:
      "Cette huile sur toile est une scène de genre qui représente un jeune homme en train de se faire dépouiller par une prostituée et sa souteneuse pendant un concert amical à une table. Absorbé par son chant, il se fait subtiliser sa boucle d'oreille sous le regard d'un joueur de viole de gambe, tandis que sa complice âgée, debout derrière lui, fouille son sac, d'un geste, intime de garder le silence sur le méfait.- Galerie Borghèse p.87-",
  },
  // #endregion

  // #region "Gustave Moreau [FRA / 1826-1898]"
  {
    title: "Œdipe et le Sphinx",
    artist: "Gustave Moreau [FRA / 1826-1898]",
    year: "1864",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Oedipus_and_the_Sphinx_MET_DP-14201-023.jpg",
    link: "https://www.metmuseum.org/art/collection/search/437153",
    description:
      "La peinture représente Œdipe rencontrant le Sphinx au carrefour lors de son voyage entre Thèbes et Delphes. Œdipe doit répondre correctement à l'énigme du Sphinx pour réussir. L'échec signifie sa propre mort et celle des Thébains assiégés.",
  },
  {
    title: "Jupiter et Sémélé",
    artist: "Gustave Moreau [FRA / 1826-1898]",
    year: "1895",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Jupiter_and_Semele_by_Gustave_Moreau.jpg/800px-Jupiter_and_Semele_by_Gustave_Moreau.jpg",
    link: "https://fr.gallerix.ru/storeroom/1065654342/N/189018824/",
    description:
      "Jupiter et Sémélé de Gustave Moreau illustre la passion destructrice de Jupiter, roi des dieux, pour la mortelle Semele.Séduite par l’éclat divin, Semele demande à voir la forme éclatante de Jupiter, scellant ainsi son destin tragique.La révélation de la divinité de Jupiter, trop intense pour une mortelle, consume Semele dans une lumière fulgurante.L’œuvre de Moreau exprime avec finesse le contraste entre désir sensuel et anéantissement face à la puissance divine.",
  },
  // #endregion

  // 🔹 -----J-----
  // #region "John William Waterhouse [ITA / 1849-1917]"
  {
    title: "Ulysse et les sirènes",
    artist: "John William Waterhouse [ITA / 1849-1917]",
    year: "1891",
    imageUrl: "https://cdn.gallerix.asia/sr/W/1628379096/753576713.jpg",
    link: "https://fr.gallerix.ru/album/Waterhouse/pic/glrx-753576713",
    description:
      "Ulysse et les sirènes de John William Waterhouse évoque le mythe d'Ulysse qui, en naviguant, affronte les chants envoûtants des sirènes.Pour ne pas succomber à leur séduction mortelle, il fait boucher les oreilles de ses marins et se fait attacher au mât.Ainsi, il peut écouter leur mélodie sans perdre le contrôle.Ce mythe symbolise la lutte entre la curiosité insatiable et la nécessité de maîtriser ses passions.",
  },
  // #endregion

  // #region "Jacopo Bassano [ITA / 1510-1592]"
  {
    title: "La Cène",
    artist: "Jacopo Bassano [ITA / 1510-1592]",
    year: "1546",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Jacopo_Bassano_Last_Supper_1542.jpeg",
    link: "https://fr.borghese.gallery/collection/peintures/la-cene.html",
    description:
      "La Cène (1542), peinte par le peintre vénitien Jacopo Bassano, est une vision alternative du thème biblique, qui a été abordée dans leurs œuvres par de nombreux contemporains du maître. La source d’inspiration de l’artiste était évidemment le célèbre chef-d’œuvre du même nom, du grand Léonard de Vinci, datant d’une période antérieure.",
  },
  // #endregion

  // #region "Jacopo Zucchi [ITA / 1541-1596]"
  {
    title: "La pêche au corail ou Le royaume d’Amphitrite",
    artist: "Jacopo Zucchi [ITA / 1542-1596]",
    year: "1585",
    imageUrl:
      "https://www.finestresullarte.info/rivista/immagini/2022/1862/jacopo-zucchi-la-pesca-del-corallo-roma.jpg",
    link: "https://www.finestresullarte.info/fr/oeuvres-et-artistes/le-royaume-d-amphitrite-de-jacopo-zucchi-un-tableau-prive-de-la-maitresse-du-cardinal",
    description:
      "Jacopo Zucchi, La pêche au corail ou Le royaume d’Amphitrite (vers 1585 ; huile sur cuivre, 52 x 42,5 cm ; Rome, Galleria Borghese)",
  },
  // #endregion

  // #region "Jusepe de Ribera (Mouvement Caravagesque) [ESP / 1591-1652]"
  {
    title: "Saint Jérôme et l'ange du Jugement",
    artist: "Jusepe de Ribera (Mouvement Caravagesque) [ESP / 1591-1652]",
    year: "1626",
    imageUrl:
      "https://artaban-asso.com/wp-content/uploads/2024/08/12-Jose-de-Ribera-Saint-Jerome-et-lAnge-du-Jugement-1626-huile-sur-toile-262-%C3%97-164-cm-Naples-Capodimonte-scaled.jpg",
    link: "https://gallerix.ru/fullpic/74dd1c3a2850c005f6ee5b49168823be/",
    description:
      "La scène représente saint Jérôme en train de traduire la Bible, surpris par l'ange du Jugement dernier sonnant du cor, qui apparaît dans les nuages en haut à droite de la scène, ce dernier étant très semblable au personnage représenté dans la toile de Saint Matthieu et l'Ange du Caravage datant de 1602",
  },
  {
    title: "(Apollon et Marsyas) Le Supplice de Marsyas",
    artist: "Jusepe de Ribera (Mouvement Caravagesque) [ESP / 1591-1652]",
    year: "1637",
    imageUrl:
      "https://officiel-galeries-musees.fr/wp-content/uploads/2024/11/Capture-de%CC%81cran-2024-11-12-a%CC%80-19.10.01.png",
    link: "https://fr.wikipedia.org/wiki/Le_Supplice_de_Marsyas_(Ribera_et_Giordano)",
    description:
      "Le satyre phrygien Marsyas, qui a trouvé la flûte de Minerve, apprend à en jouer à un niveau de perfection qui l'amène à défier le dieu grec Apollon. Il est vaincu, comme quiconque pèche par orgueil, et est condamné par le dieu à être écorché vif.Ce thème est repris, notamment, des Métamorphoses d'Ovide.",
  },
  // #endregion

  // #region "Jean-Auguste-Dominique Ingres [FRA / 1780-1867]"
  {
    title: "Jupiter et Thétis",
    artist: "Jean-Auguste-Dominique Ingres [FRA / 1780-1867]",
    year: "1811",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/J%C3%BApiter_y_Tetis%2C_por_Dominique_Ingres.jpg",
    link: "https://fr.wikipedia.org/wiki/Jupiter_et_Th%C3%A9tis",
    description:
      "Peint à Rome, il est conservé au musée Granet d'Aix-en-Provence. Inspiré du premier chant de l'Iliade, le tableau fut critiqué pour ses audaces de composition. Il est acheté par l'État en 1834. François Marius Granet le transfère en dépôt au musée Granet d'Aix-en-Provence où il est accroché depuis.",
  },
  {
    title: "Œdipe explique l'énigme du sphinx",
    artist: "Jean-Auguste-Dominique Ingres [FRA / 1780-1867]",
    year: "1808, reprise en 1827",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/IngresOdipusAndSphinx.jpg",
    link: "https://fr.wikipedia.org/wiki/%C5%92dipe_explique_l%27%C3%A9nigme_du_sphinx",
    description:
      "La créature fut envoyée par Héra pour punir la ville de Thèbes du viol que Laïos, roi de Thèbes, a effectué sur Chrysippe, fils de la nymphe Danaïs. Elle attend la personne qui résoudra son énigme.",
  },
  {
    title: "La Grande Odalisque",
    artist: "Jean-Auguste-Dominique Ingres [FRA / 1780-1867]",
    year: "1814",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/La_grande_odalisque_-_Jean-Auguste_Dominique_Ingres_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1158.jpg",
    link: "https://fr.wikipedia.org/wiki/La_Grande_Odalisque",
    description:
      "La Grande Odalisque est un tableau de Jean-Auguste-Dominique Ingres peint en 1814 sur une commande de Caroline Murat, sœur de Napoléon Ier et reine consort de Naples (commande non payée pour cause de chute de l'Empire).",
  },

  {
    title: "Angélique sauvée par Ruggiero",
    artist: "Jean-Auguste-Dominique Ingres [FRA / 1780-1867]",
    year: "1819-1839",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1000px/Jean_Auguste_Dominique_Ingres_-_Angelica_saved_by_Ruggiero_1819-1839_-_(MeisterDrucke-784831).jpg",
    link: "https://www.nationalgallery.org.uk/paintings/jean-auguste-dominique-ingres-angelica-saved-by-ruggiero",
    description:
      "La scène présentée ici est tirée d'un épisode du poème épique du XVIe siècle « Orlando furieux » , de Ludovico Ariosto. Le chevalier chrétien Ruggiero a découvert la princesse païenne Angélique, enlevée par des barbares. Dépouillée et enchaînée à un rocher, elle a été sacrifiée à un monstre marin. Chevauchant un hippogriffe – une bête légendaire mi-cheval, mi-griffon, capable de galoper et de voler – Ruggiero sauve Angélique en plongeant sa lance dans la gueule ouverte du monstre.",
  },
  // #endregion

  // #region "Jacques-Louis David [FRA / 1748-1825]"
  {
    title: "Le Sacre de Napoléon",
    artist: "Jacques-Louis David [FRA / 1748-1825]",
    year: "1805-1807",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Jacques-Louis_David%2C_The_Coronation_of_Napoleon_edit.jpg",
    link: "https://collections.louvre.fr/ark:/53355/cl010065720",
    description:
      "Le sacre de l'empereur Napoléon Ier et le couronnement de l'impératrice Joséphine dans la cathédrale Notre-Dame de Paris, le 2 décembre 1804. Dimensions / Hauteur : 6,21 m ; Largeur : 9,79 m, se qui en fait le plus grand tableaux du Louvre.",
  },
  // #endregion

  // #region "Jan van Eyck [NLD / 1390-1441]"
  {
    title: "Les Époux Arnolfini",
    artist: "Jan van Eyck [NLD / 1390-1441]",
    year: "1434",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/jan-van-eyck-the-arnolfini-portrait",
    description:
      "Les Époux Arnolfini est le nom donné à une peinture sur bois (82,2 × 60 cm) du peintre primitif flamand Jan van Eyck datant de 1434, conservée à la National Gallery de Londres",
  },
  {
    title: "Phaéton foudroyé par Zeus",
    artist: "Jan van Eyck [NLD / 1390-1441]",
    year: "1636-1638",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/La_ca%C3%ADda_de_Faet%C3%B3n_%28Jan_Carel_van_Eyck%29.jpg",
    link: "https://odysseum.eduscol.education.fr/phaeton-et-le-char-du-soleil-0",
    description:
      "Fils du Soleil et de Clymène. Il voulut conduire le char de son père mais, ne sachant le diriger, il embrase la terre et est foudroyé par Jupiter",
  },
  // #endregion

  // 🔹 -----K-----
  // #region "Katsushika Hokusai [JPN / 1760-1849]"
  {
    title: "La Grande Vague",
    artist: "Katsushika Hokusai [JPN / 1760-1849]",
    year: "1830-1833",
    imageUrl: "https://blog.messortiesculture.com/uploads/post-1107.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=468cf123-cd6e-485d-9f41-ba63477c6f13",
    description:
      "La Grande Vague de Kanagawa de Katsushika Hokusai, réalisée vers 1831, représente une immense vague menaçante sur le point de s’abattre sur des bateaux. La composition dynamique et les courbes élégantes créent une sensation de mouvement intense. Le bleu profond, obtenu grâce au bleu de Prusse, renforce le contraste avec l’écume blanche. En arrière-plan, le mont Fuji apparaît serein, opposant calme et chaos. Cette estampe emblématique illustre la puissance de la nature et l’influence de l’ukiyo-e.",
  },
  // #endregion

  // 🔹 -----L-----
  // #region "Leonardo Da Vinci [ITA / 1452-1519]"
  {
    title: "Dame à l'hermine",
    artist: "Leonardo Da Vinci [ITA / 1452-1519]",
    year: "1490",
    imageUrl:
      "https://fr.muzeo.com/sites/default/files/styles/image_moyenne_def/public/oeuvres/peinture/renaissance/la_dame_ea_lhermine137707.jpg?itok=karIBP5i",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=3e020263-b319-4594-a0ff-01fe66b1f21a",
    description:
      "Dame à l’hermine de Léonard de Vinci, peinte vers 1489-1490, représente Cecilia Gallerani tenant une hermine blanche, symbole de pureté et de noblesse. Le sfumato adoucit les contours, donnant profondeur et réalisme à son regard expressif. La lumière met en valeur la finesse de son visage et la texture de sa robe. La posture dynamique apporte une impression de mouvement naturel. Ce chef-d'œuvre illustre la maîtrise du portrait par Léonard.",
  },
  // #endregion

  // #region "le Dominiquin (Domenico Zampieri) [ITA / 1581-1641]"
  {
    title: "La Jeune Fille et la Licorne",
    artist: "le Dominiquin (Domenico Zampieri) [ITA / 1581-1641]",
    year: "1602",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/DomenichinounicornPalFarnese.jpg",
    link: "https://www.lumieresdesetoiles.com/la-jeune-fille-a-la-licorne-1604-1605-le-dominiquin/",
    description:
      "Cette fresque du Palais Farnèse à Rome a été commandée à Le Dominiquin en 1604-1605. Outre cette commande personnelle Le Dominiquin a collaboré à la réalisation des fresques de la voûte de la grande galerie du Palais sous la direction d’Annibal Carrache auquel le cardinal Odoardo Farnèse avait commandé ce décor titanesque ; Carrache travailla huit ans sur cette voûte.",
  },
  // #endregion

  // #region "Lorenzo Lotto [ITA / 1480-1556]"
  {
    title: "Vénus et Cupidon",
    artist: "Lorenzo Lotto [ITA / 1480-1556]",
    year: "1520",
    imageUrl:
      "https://images.metmuseum.org/CRDImages/ep/original/DP-25975-001.jpg",
    link: "https://www.metmuseum.org/art/collection/search/436918",
    description:
      "Cupidon urine diaboliquement sur sa mère Vénus à travers une couronne de laurier, un acte symbolisant la fertilité. Lotto s'est probablement inspiré de la poésie romaine antique qui décrit Cupidon réveillant Vénus pour qu'elle puisse présider un mariage. Sa couronne, son voile et sa boucle d'oreille en perles sont des objets couramment portés par les mariées dans la Venise du XVIe siècle, ce qui indique que ce tableau a probablement été peint pour commémorer un mariage. Les traits distinctifs de Vénus suggèrent qu'il pourrait s'agir d'un portrait de la mariée.",
  },
  // #endregion

  // 🔹 -----M-----
  // #region "Michelangelo Merisi (Caravaggio) [ITA / 1571-1610]"
  {
    title: "Medusa",
    artist: "Michelangelo Merisi (Caravaggio) [ITA / 1571-1610]",
    year: "1597",
    imageUrl:
      "https://www.vice.com/wp-content/uploads/sites/2/2018/04/1523290548731-medusablack.jpeg",
    link: "https://upload.wikimedia.org/wikipedia/commons/1/15/Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
    description:
      "Méduse du Caravage, peinte vers 1597, est un bouclier en bois représentant la tête tranchée de la Gorgone au moment précis où elle réalise son sort. Son visage exprime une terreur figée, la bouche ouverte dans un cri muet et les yeux écarquillés d’effroi. Le réalisme saisissant, accentué par le clair-obscur caractéristique du Caravage, donne une impression de mouvement et de tridimensionnalité. Les serpents de sa chevelure semblent s’animer, tandis que le fond sombre met en valeur l’intensité dramatique de la scène. Cette œuvre, destinée aux Médicis, illustre la virtuosité du peintre et sa maîtrise des effets illusionnistes.",
  },
  {
    title: "Les Musiciens",
    artist: "Michelangelo Merisi (Caravaggio) [ITA / 1571-1610]",
    year: "1597",
    imageUrl:
      "https://images.metmuseum.org/CRDImages/ep/original/DP-687-001.jpg",
    link: "https://www.metmuseum.org/art/collection/search/435844",
    description:
      "Si la présence de Cupidon confirme qu'il s'agit d'une allégorie de la Musique, le tableau de Caravage s'inspire également de la performance contemporaine et des modèles individualisés, notamment l'autoportrait du deuxième garçon en partant de la droite.",
  },
  {
    title: " Le Sacrifice d' Isaac",
    artist: "Michelangelo Merisi (Caravaggio) [ITA / 1571-1610]",
    year: "1598",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg/1200px-Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=8d7aa256-99f9-4d32-8725-1f5e3a44cce0",
    description:
      "Le Sacrifice d'Isaac de Caravage, réalisé vers 1603-1604, saisit l’instant dramatique où l’ange interrompt le geste d’Abraham, empêchant le sacrifice de son fils.La composition horizontale unit les trois personnages principaux, conférant à la scène une intensité émotionnelle marquée.Le clair-obscur, caractéristique du style caravagesque, sculpte les visages et souligne la tension entre lumière et ombre.Les gestes expressifs – la main ferme de l’ange retenant celle d’Abraham et le cri silencieux d’Isaac – illustrent le conflit intérieur des protagonistes.",
  },
  {
    title: "Judith et Holopherne",
    artist: "Michelangelo Merisi (Caravaggio) [ITA / 1571-1610]",
    year: "1598-1599",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Caravaggio_Judith_Beheading_Holofernes.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=c620f0f6-defb-49ce-9c39-aca7b2592445",
    description:
      "Judith et Holopherne de Caravage, peint vers 1599, illustre la décapitation du général assyrien par Judith. Le clair-obscur dramatique met en lumière son expression déterminée et le visage terrifié d’Holopherne. Le réalisme saisissant accentue la violence et l’intensité de la scène. Le contraste entre la jeunesse de Judith et l’horreur du moment renforce l’impact émotionnel. Cette œuvre témoigne du génie de Caravage pour le dramatique et le naturalisme.",
  },
  {
    title: "Le Souper à Emmaüs",
    artist: "Michelangelo Merisi (Caravaggio) [ITA / 1571-1610]",
    year: "1601",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Supper_at_Emmaus-Caravaggio_%281601%29.jpg/800px-Supper_at_Emmaus-Caravaggio_%281601%29.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/michelangelo-merisi-da-caravaggio-the-supper-at-emmaus",
    description:
      "Le Souper à Emmaüs ou la Cène à Emmaüs est un tableau de Caravage peint vers 1601 et conservé à la National Gallery de Londres. Il existe une seconde version de ce tableau datant de 1606 et conservée à l'Académie des beaux-arts de Brera de Milan. Il s'agit d'une commande de Ciriaco Mattei, qui représente le moment où les pèlerins d'Emmaüs réalisent brutalement qu'ils ont face à eux le Christ ressuscité.",
  },
  {
    title: "Saint Matthieu et l'Ange",
    artist: "Michelangelo Merisi (Caravaggio) [ITA / 1571-1610]",
    year: "1602",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/The_Inspiration_of_Saint_Matthew-Caravaggio_%281602%29.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=4ff44b6e-f6f8-4bf3-a9dc-4e9f45676913",
    description:
      "Saint Matthieu et l'Ange de Caravage, peint vers 1602, est une œuvre emblématique de la période baroque réalisée pour la chapelle Contarelli à Rome.Dans ce tableau, l'évangéliste saint Matthieu est représenté en train d'écrire son Évangile, guidé par un ange qui lui dicte d'une main assurée.Le jeu de clair-obscur dramatique met en exergue la tension entre le monde terrestre de Matthieu et la lumière divine qui l'inspire.La composition, à la fois ample et intimiste, crée une profondeur expressive et invite le spectateur à partager l'instant de révélation spirituelle.",
  },
  {
    title: "La Madone des palefreniers (La Madone au serpent)",
    artist: "Michelangelo Merisi (Caravaggio) [ITA / 1571-1610]",
    year: "1605-1606",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/CaravaggioSerpent.jpg",
    link: "https://fr.wikipedia.org/wiki/La_Madone_des_palefreniers",
    description:
      "Le Caravage montre Marie, au centre gauche, soutenant son fils, représenté assez grand et nu, qui appuie son pied sur le sien pour écraser un serpent. Sainte Anne, patronne des palefreniers de Rome, commanditaires de l'œuvre, assiste les mains jointes, pensive, représentée en vieille femme habillée sombrement a contrario de la Vierge, habillée de pourpre (couleur de la Passion du Christ), largement décolletée.",
  },
  // #endregion

  // #region "Mattia Preti [ITA / 1613-1699]"
  {
    title: "Christ couronné d’épines",
    artist: "Mattia Preti [ITA / 1613-1699]",
    year: "1679-1689",
    imageUrl:
      "https://www.finestresullarte.info/rivista/immagini/2019/1175/mattia-preti-incoronazione-di-spine.jpg",
    link: "https://www.finestresullarte.info/rivista/immagini/2019/1175/mattia-preti-incoronazione-di-spine.jpg",
    description:
      "Christ couronné d’épines / Huile sur toile / 227x350 cm / La Valette, Oratoire de Saint-Jean",
  },
  // #endregion

  // 🔹 -----N-----
  // #region "Nicolas Poussin [FR / 1594-1665]"
  {
    title: "L'Assomption de la Vierge",
    artist: "Nicolas Poussin [FR / 1594-1665]",
    year: "vers 1630–1632",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Nicolas_Poussin_-_The_Assumption_of_the_Virgin.JPG",
    link: "https://fr.aleteia.org/2018/08/14/tout-savoir-sur-lassomption",
    description:
      "Célébrée le 15 août, l'Assomption commémore la fin de la vie terrestre de la Vierge Marie et sa montée au ciel pour rejoindre son Fils ressuscité.",
  },
  // #endregion

  // 🔹 -----P-----
  // #region "Piero di Cosimo [ITA / 1462-1522]"
  {
    title: "Persée libère Andromède",
    artist: "Piero di Cosimo [ITA / 1462-1522]",
    year: "1515",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Piero_di_Cosimo_-_Liberazione_di_Andromeda_-_Google_Art_Project.jpg/1200px-Piero_di_Cosimo_-_Liberazione_di_Andromeda_-_Google_Art_Project.jpg",
    link: "https://fr.gallerix.ru/storeroom/734167568/N/1998048531/",
    description:
      "Andromède, fille du roi Céphée, est condamnée à être sacrifiée pour apaiser Poséidon, furieux du vantardise de Cassiopée.Le monstre marin, envoyé pour dévaster le royaume, menace de dévorer la jeune princesse enchaînée sur un rocher.Persée, héros aux sandales ailées et armé d’un bouclier magique, intervient et tue la bête.En libérant Andromède, il sauve le peuple et gagne son amour, scellant ainsi leur union.",
  },
  // #endregion

  // #region "Pierre Paul Rubens [DEU / 1577-1640]"
  {
    title: "Le Jugement de Pâris",
    artist: "Pierre Paul Rubens [DEU / 1577-1640]",
    year: "1597-1599",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Peter_Paul_Rubens_-_The_Judgment_of_Paris_-_WGA20307.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/peter-paul-rubens-the-judgement-of-paris-1",
    description:
      "Aux noces de Pélée et Thétis sur l'Olympe, tous les dieux sont invités sauf Éris, déesse de la Discorde. Pour se venger, elle leur jette une pomme d'or avec la mention « Pour la plus belle » : la pomme de discorde. Trois déesses revendiquent alors le fruit, Héra, Athéna et Aphrodite. Zeus ordonne à Hermès d'emmener les déesses sur le mont Ida, à charge pour Pâris, prince troyen, de désigner la gagnante. Le jeune homme accorde finalement la pomme à Aphrodite (déesse de l'amour), qui lui a promis l'amour de la plus belle femme du monde (Hélène), ce qui a provoqué la guerre de Troie avec l'enlèvement d'Hélène.",
  },
  {
    title: "Samson et Dalila",
    artist: "Pierre Paul Rubens [DEU / 1577-1640]",
    year: "1609-1610",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Peter_Paul_Rubens_-_Samson_and_Delilah_-_Google_Art_Project.jpg/1920px-Peter_Paul_Rubens_-_Samson_and_Delilah_-_Google_Art_Project.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/peter-paul-rubens-samson-and-delilah",
    description:
      "Selon l'Ancien Testament, Samson , un héros juif doté d'une force surhumaine, tua mille soldats philistins avec la mâchoire d'un âne. Les chefs philistins voulurent se venger. Ils soudoyèrent Dalila, la femme que Samson aimait, pour qu'elle découvre la source de sa force. Après plusieurs tentatives, elle le persuada de lui révéler son secret : sa force divine résidait dans ses cheveux, non coupés depuis sa naissance.",
  },
  // #endregion

  // #region "Pietro Paolini (Mouvement Caravagesque) [ITA / 1603-1681]"
  {
    title: "Concert bacchique",
    artist: "Pietro Paolini (Mouvement Caravagesque) [ITA / 1603-1681]",
    year: "Entre 1625 et 1630",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Bacchic_Concert_-_Paolini_%281625%29.jpg",
    link: "https://fr.m.wikipedia.org/wiki/Fichier:Bacchic_Concert_-_Paolini_(1625).jpg",
    description:
      "Concert bacchique, v. 1625-1630, Dallas Museum of Art. Dallas Museum of Art, The Karl and Esther Hoblitzelle Collection, gift of the Hoblitzelle Foundation",
  },
  // #endregion

  // #region "Pellegrino Tibaldi [ITA / 1527-1596]"
  {
    title: "L'adoration de l'enfant",
    artist: "Pellegrino Tibaldi [ITA / 1537-1596]",
    year: "1590",
    imageUrl:
      "https://www.collezionegalleriaborghese.it/uploads/server/files/415.jpg",
    link: "https://www.collezionegalleriaborghese.it/en/opere/the-adoration-of-the-child",
    description:
      "Le noyau central, avec la Vierge, l'Enfant Jésus et saint Joseph, légèrement décentré vers la gauche, semble presque englouti par les mouvements convulsifs et tourbillonnants des figures environnantes, tandis qu'au premier plan la Sibylle érythréenne, présence inhabituelle dans les représentations de sujets similaires, dévoile ses prophéties, donnant au tableau une aura de mystère énigmatique mais fascinante.",
  },
  // #endregion

  // #region "Paolo Fiammingo [BEL / 1540-1596]"
  {
    title: "Paysage avec l'expulsion des harpies",
    artist: "Paolo Fiammingo [BEL / 1540-1596]",
    year: "1590",
    imageUrl:
      "https://www.repro-tableaux.com/kunst/paolo_fiammingo/landschaft_mit_vertreibung_der.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/paolo-fiammingo-landscape-with-the-expulsion-of-the-harpies",
    description:
      "En guise de punition pour avoir révélé l'avenir à l'humanité, le roi Phinéas de Thrace fut aveuglé et sa nourriture fut continuellement volée par les harpies, mi-humaines, mi-oiseaux. L'histoire est racontée dans les Argonautes , un roman épique écrit par Apollonius de Rhode au IIIe siècle av. J.-C.",
  },
  // #endregion

  // #region "Paolo Veronese (Paolo Caliari) [ITA / 1528-1588]"
  {
    title: "Mars et Vénus unis par l'amour",
    artist: "Paolo Veronese (Paolo Caliari) [ITA / 1528-1588]",
    year: "1570",
    imageUrl: "https://images.metmuseum.org/CRDImages/ep/original/DP167124.jpg",
    link: "https://www.metmuseum.org/art/collection/search/437891",
    description:
      "L'amour entre Mars, dieu de la guerre, et Vénus, déesse de l'amour, est encouragé par un couple d'amoureux indiscrets. L'un d'eux lie le couple, tandis que son complice retient le cheval de guerre de Mars. Le tableau célèbre les effets civilisateurs et nourriciers de l'amour, tandis que le lait coule du sein de Vénus et que Mars est désarmé.",
  },
  {
    title: "Les Noces de Cana",
    artist: "Paolo Veronese (Paolo Caliari) [ITA / 1528-1588]",
    year: "1563",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Paolo_Veronese_008.jpg",
    link: "https://collections.louvre.fr/ark:/53355/cl010064382",
    description:
      "Le sujet du tableau n’est pas le dernier repas du Christ, mais son premier miracle. Dans l’Évangile selon saint Jean, Jésus, Marie et les disciples sont invités à un banquet de mariage à Cana, en Galilée. Le vin venant à manquer, Jésus dit aux serviteurs de remplir six jarres d’eau. L’eau se transforme miraculeusement en vin et la fête peut continuer.",
  },
  // #endregion

  // 🔹 -----R-----
  // #region "Raphaël (Raffaello Sanzio) [ITA / 1483-1520]"
  {
    title: "L’École d'Athènes",
    artist: "Raphaël (Raffaello Sanzio) [ITA / 1483-1520]",
    year: "1508-1512",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    link: "https://fr.wikipedia.org/wiki/L%27%C3%89cole_d%27Ath%C3%A8nes",
    description:
      "L'École d'Athènes est une fresque (4,40 × 7,70 m) du peintre italien Raphaël, située dans la Chambre de la Signature des musées du Vatican, l'une des quatre Chambres de Raphaël (les Stanze) situées à l'intérieur du palais apostolique. C'est l'une des œuvres picturales les plus importantes de la Cité du Vatican. Cette fresque symbolique présente les figures majeures de la pensée antique.",
  },
  {
    title: "La Madone Sixtine",
    artist: "Raphaël (Raffaello Sanzio) [ITA / 1483-1520]",
    year: "1513-1514",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg",
    link: "https://fr.wikipedia.org/wiki/La_Madone_Sixtine",
    description:
      "Il s'agit d'une conversation sacrée puisque la Vierge et l'Enfant ne sont pas présentés seuls : des figures de saints les accompagnent dont l'un est l'intercesseur direct du commanditaire, doublant ainsi sa présence symbolique ; des figures angéliques complètent l'assemblée.",
  },
  {
    title: "La vision d'Ézéchiel",
    artist: "Raphaël (Raffaello Sanzio) [ITA / 1483-1520]",
    year: "1518",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Raffael_099.jpg/800px-Raffael_099.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=07c247ad-479a-4619-89a2-b7bbe122b80c",
    description:
      "La Vision d'Ézéchiel de Raphaël, réalisée vers 1517-1518, est une œuvre emblématique du Haut-Renaissance qui capture l'instant mystique où le prophète Ézéchiel reçoit une révélation divine.Dans ce petit tableau, Raphaël dépeint un Dieu majestueux, assis sur un trône, entouré d'une aura de lumière dorée et de nuages lumineux, symbolisant la gloire céleste.Autour de Dieu, les quatre créatures vivantes – ou tétramorphe – aux visages d'homme, de lion, de taureau et d'aigle évoquent les symboles des quatre Évangélistes, conférant une dimension universelle à la vision.",
  },
  // #endregion

  // 🔹 -----S-----
  // #region "Sandro Botticelli [ITA / 1444-1510]"
  {
    title: "Le Printemps",
    artist: "Sandro Botticelli [ITA / 1444-1510]",
    year: "1480",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg/640px-Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg",
    link: "https://fr.gallerix.ru/album/Botticelli/pic/glrx-1297681446",
    description:
      "Le Printemps de Botticelli est une allégorie mythologique célébrant le renouveau et la fertilité de la nature.Au centre, Vénus, déesse de l'amour, rayonne et insuffle la grâce dans le monde.Zéphyr, le vent de l'Est, emporte Chloris, qui se transforme en Flore, symbole de la floraison.L'ensemble exprime l'harmonie entre amour, beauté et l'épanouissement vital du printemps.",
  },

  {
    title: "Pallas et le Centaure",
    artist: "Sandro Botticelli [ITA / 1444-1510]",
    year: "1482",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Pallade_col_Centauro%2C_Sandro_Botticelli_%281482%29.jpg",
    link: "https://fr.wikipedia.org/wiki/Pallas_et_le_Centaure",
    description:
      "Le thème moral (la Raison incarnée par Pallas, autre théonyme d'Athéna) est à destination de Pierfrancesco, de sombre réputation, violent et débauché, incarné par le Centaure (la bestialité). Il s'agit d'une allégorie à thème mythologique, de la sagesse (Pallas) qui domine l'instinct (Le Centaure), ou la victoire de la Connaissance sur l'Ignorance. Centaure qui s'est introduit dans le jardin, équipé d'un arc à la main, prêt à tirer, est surpris par Pallas, gardienne des lieux.",
  },

  {
    title: "Vénus et Mars",
    artist: "Sandro Botticelli [ITA / 1444-1510]",
    year: "1483",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Venus_and_Mars_National_Gallery.jpg",
    link: "https://imaginarium.nationalgallery.org.uk/imaginarium/847c8f2d-ead4-4c67-a00a-bd5129f84eaa",
    description:
      "Le tableau Vénus et Mars de Sandro Botticelli, réalisé vers 1485, illustre la déesse de l'amour, Vénus, veillant sur Mars, le dieu de la guerre, endormi après l'amour. Des satyres espiègles jouent avec l'armure de Mars, symbolisant la vulnérabilité de la guerre face au pouvoir de l'amour. Cette œuvre, probablement commandée pour célébrer un mariage, reflète les idéaux de la Renaissance en matière de beauté et de vertu. Les guêpes près de la tête de Mars pourraient faire référence à la famille Vespucci, possible commanditaire du tableau",
  },
  {
    title: "Naissance de Vénus",
    artist: "Sandro Botticelli [ITA / 1444-1510]",
    year: 1485,
    imageUrl:
      "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/1440xAUTO_processed_article_2023_08_4fb596ce-fa9d-4599-bfe7-2a86084952bd-banner-master.jpg",
    link: "https://www.uffizi.it/en/artworks/birth-of-venus",
    description:
      "La Naissance de Vénus de Botticelli est une œuvre emblématique de la Renaissance italienne, réalisée vers 1485. Le tableau représente Vénus, déesse de l’amour et de la beauté, émergeant des flots sur un coquillage, portée par le vent Zéphyr et sa compagne Aura. À droite, une des Heures, divinités des saisons, l’accueille avec un manteau fleuri. La composition est harmonieuse, avec des lignes ondulantes qui accentuent la grâce des personnages. La palette de couleurs douces, dominée par des tons pastel, et l’arrière-plan marin apportent une atmosphère de légèreté et d’élégance à cette scène mythologique.",
  },
  // #endregion

  // 🔹 -----T-----
  // #region "Titien (Tiziano Vecellio) [ITA / 1488.90-1576]"
  {
    title: "Bacchus et Ariane",
    artist: "Titien (Tiziano Vecellio) [ITA / 1488.90-1576]",
    year: "1520",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Titian_Bacchus_and_Ariadne.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/titian-bacchus-and-ariadne",
    description:
      "Bacchus et Ariane est une peinture de la Renaissance réalisée par Titien entre 1520 et 1523. Elle fait partie du cycle de peintures à sujet mythologiques commandé par Alphonse Ier d'Este, duc de Ferrare, pour la chambre d'albâtre de son palazzo de Ferrare.",
  },
  {
    title: "Danaé (Madrid)",
    artist: "Titien (Tiziano Vecellio) [ITA / 1488.90-1576]",
    year: "1560-1565",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Tizian_-_Danae_receiving_the_Golden_Rain_-_Prado.jpg",
    link: "https://fr.wikipedia.org/wiki/Dana%C3%A9_(Titien,_Madrid)",
    description:
      "Le sujet représente le mythe de Danaé, qui avait été emprisonnée par son père Acrisios, le roi d'Argos, lorsqu'elle fut enlevée par Zeus et approchée sous la forme d'une pluie d'or.",
  },
  // #endregion

  // #region "Théodore Géricault [FR / 1791-1824]"
  {
    title: "Le Radeau de la Méduse",
    artist: "Théodore Géricault [FR / 1791-1824]",
    year: "1819",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/2560px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
    link: "https://fr.gallerix.ru/album/Waterhouse/pic/glrx-753576713",
    description:
      "Le Radeau de la Méduse, de Théodore Géricault dépeint le naufrage de la frégate française Méduse en 1816, où des survivants dérivent sur un radeau de fortune, confrontés à la faim, la soif et le désespoir. Le tableau illustre la tragédie humaine et la lutte pour la survie face à l'adversité. Géricault a choisi ce sujet contemporain pour critiquer l'incompétence du gouvernement, marquant une rupture avec le néoclassicisme et ouvrant la voie au romantisme.",
  },
  // #endregion

  // 🔹 -----V-----
  // #region "Vincent van Gogh [NLD / 1853-1890]"
  {
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh [NLD / 1853-1890]",
    year: 1889,
    imageUrl:
      "https://vincentkjoly.com/wp-content/uploads/2023/11/2728px-Van_Gogh_-_Starry_Night_-_Google_Art_Project-scaled.jpg",
    link: "https://fr.wikipedia.org/wiki/La_Nuit_%C3%A9toil%C3%A9e_(1889)",
    description:
      "Le tableau représente ce que Van Gogh pouvait voir et extrapoler de la chambre qu'il occupait dans l'asile du monastère Saint-Paul-de-Mausole à Saint-Rémy-de-Provence en mai 1889. Souvent présenté comme son grand œuvre, le tableau a été reproduit à de très nombreuses reprises. Il est maintenant conservé dans le Museum of Modern Art (MoMA) à New York depuis 1941.",
  },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-[2000px] mx-auto">
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {/* LOUVRE  */}
          <a
            href="https://www.louvre.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-md text-gray-300 hover:text-white rounded-md p-2 text-sm transition-colors flex items-center gap-2"
          >
            <img
              src="https://png.pngtree.com/png-clipart/20231116/original/pngtree-the-louvre-france-sticker-png-image_13572662.png"
              alt="Louvre Icon"
              className="w-4 h-4 rounded"
            />
            Le Louvre
          </a>
          {/* Galerie Borghèse  */}
          <a
            href="https://fr.borghese.gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-md text-gray-300 hover:text-white rounded-md p-2 text-sm transition-colors flex items-center gap-2"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiMKBHZYo007V3cgvtRkQ1EDYrpXigUlMNQ&s"
              alt="Galleria Borghese Icon"
              className="w-4 h-4 rounded"
            />
            Galerie Borghèse
          </a>
          {/* Palais Farnèse  */}
          <a
            href="https://visite-palazzofarnese.it/palais-farnese/?lang=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-md text-gray-300 hover:text-white rounded-md p-2 text-sm transition-colors flex items-center gap-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Palazzo_Farnese_Vasi.jpg"
              alt="Palais Farnèse Icon"
              className="w-4 h-4 rounded"
            />
            Palais Farnèse
          </a>

          {/* National Gallery  */}
          <a
            href="https://www.nationalgallery.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-md text-gray-300 hover:text-white rounded-md p-2 text-sm transition-colors flex items-center gap-2"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmzJjUMm9wWDo7LPJqdgTJLfMKVLUk66Y3g&s"
              alt="Palais Farnèse Icon"
              className="w-4 h-4 rounded"
            />
            National Gallery
          </a>

          {/* The Uffizi  */}
          <a
            href="https://www.uffizi.it/en/the-uffizi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-md text-gray-300 hover:text-white rounded-md p-2 text-sm transition-colors flex items-center gap-2"
          >
            <img
              src="https://www.datocms-assets.com/103094/1689168761-1506500361872374-gallerie-uffizi_g.jpg?auto=format%2Ccompress"
              alt="Palais Farnèse Icon"
              className="w-4 h-4 rounded"
            />
            The Uffizi
          </a>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
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
