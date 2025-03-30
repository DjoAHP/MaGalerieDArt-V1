import React, { useState, useMemo } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";

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
  // #region "Abraham Bloemaert"
  {
    title: "Vénus et Adonis",
    artist: "Abraham Bloemaert",
    year: "1632",
    imageUrl:
      "https://iip-thumb.smk.dk/iiif/jp2/jd473138d_KMSsp343.tif.reconstructed.tif.jp2/full/!2048,/0/default.jpg",
    link: "https://open.smk.dk/artwork/image/KMSsp343?q=*&page=3",
    description:
      "Alors qu'Adonis se prépare pour la chasse, Vénus « saisit sa main humide » et « elle le pousse en arrière, comme elle voudrait être poussée » (afin de procéder à l'acte sexuel). Plus tard, « il est étendu haletant, son souffle arrive au visage de Vénus » tandis qu'elle lui dit : « sois donc plus hardi, nos ébats n'ont pas de témoins ». Elle le séduit et ils entament une romance passionnée, mais Adonis ne s'y engage pas vraiment car il s'estime trop jeune et ne s'intéresse qu'à la chasse. Adonis finit par trouver la mort dans un accident de chasse, laissant Vénus éplorée.",
  },
  // #endregion

  // #region "Antonio Mariani della Corgna"
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
  // #endregion

  // #region "Antonio Allegri da Correggio (le Corrège)"
  {
    title: "Vénus, Satyre et Cupidon",
    artist: "Antonio Allegri da Correggio (le Corrège)",
    year: "1524-1527",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Correggio_-_Venus_and_Cupid_with_a_Satyr.jpg",
    link: "https://fr.wikipedia.org/wiki/V%C3%A9nus,_Satyre_et_Cupidon",
    description:
      "Le tableau représente Vénus endormie avec son fils Eros. Derrière eux, un satyre est en train de découvrir la déesse. L'œuvre est encore connue de nos jours sous son ancien nom de Jupiter et Antiope, car selon la mythologie grecque et Ovide, Jupiter s'était lui-même transformé en satyre, afin de violer la nymphe Antiope. Cependant, aucun mythe antique de jeune fille endormie et violée par un satyre ne concerne Vénus. ",
  },
  {
    title: "L'Éducation de Cupidon",
    artist: "Antonio Allegri da Correggio (le Corrège)",
    year: "1557",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Correggio_Venus_with_Mercury_and_Cupid_or_The_School_of_Love.jpg",
    link: "https://fr.wikipedia.org/wiki/L%27%C3%89ducation_de_Cupidon",
    description:
      "L'Éducation de Cupidon ou Vénus, Mercure et Cupidon, voire L'École de l'Amour est une peinture réalisée vers 1525 par le peintre italien Le Corrège, et conservée à la National Gallery de Londres.",
  },
  // #endregion

  // 🔹 -----B-----
  // #region "Bénigne Gagneraux"
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
  // #endregion

  // 🔹 -----D-----
  // #region "Damiano Mazza"
  {
    title: "Le viol de Ganymède",
    artist: "Damiano Mazza",
    year: "1575",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Damiano_Mazza_-_The_Rape_of_Ganymede_ca_1575_-_%28MeisterDrucke-1196890%29.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/damiano-mazza-the-rape-of-ganymede",
    description:
      "Il faut prendre ici pour viol le sens d'enlèvement contraint (rapt), Ganymède étant enlevé dans les airs par un aigle (représentant les dieux ou Zeus lui-même) pour être soustrait à la vindicte d'Héra.",
  },
  // #endregion

  // 🔹 -----G-----
  // #region "Giulio Romano"
  {
    title: "L'enfant Jupiter gardé par les Corybantes sur l'île de Crète",
    artist: "Atelier de Giulio Romano",
    year: "1530",
    imageUrl:
      "http://cdicollegeconte.free.fr/Sc%C3%A8nes%20mythologiques/peintures/jupiter%20gard%C3%A9%20par%20les%20corybantes.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/workshop-of-giulio-romano-the-infancy-of-jupiter",
    description:
      "Dans la mythologie grecque et romaine, le dieu Saturne, averti qu'un de ses descendants le renverserait, dévora ses enfants à la naissance. Pour protéger leur fils, sa femme Ops emmena le jeune Jupiter en Crète pour qu'il soit élevé par les Corybantes, qui utilisèrent le rythme de leurs danses et le cliquetis de leurs cymbales pour dissimuler les cris du bébé afin qu'il ne soit pas découvert par Saturne.",
  },
  // #endregion

  // #region "Georges de La Tour"
  {
    title: "Saint Joseph charpentier",
    artist: "Georges de La Tour",
    year: "1645",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/La_Tour.jpg",
    link: "https://fr.wikipedia.org/wiki/Saint_Joseph_charpentier",
    description:
      "La toile représente Joseph et a ses côtés, l'enfant Jésus vêtu d'une tunique, est assis de profil, il tient une chandelle qui éclaire la scène et dont la flamme fait apparaître ses doigts en transparence. La scène est peinte dans des tonalités brunes, presque monochrome[1].",
  },
  {
    title: "La Madeleine pénitente (à la flamme filante)",
    artist: "Georges de La Tour",
    year: "1645",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Georges_de_La_Tour_-_The_Magdalen_with_the_Smoking_Flame_-_Google_Art_Project.jpg?uselang=fr",
    link: "https://fr.wikipedia.org/wiki/La_Madeleine_%C3%A0_la_flamme_filante",
    description:
      "La Madeleine à la flamme filante, est un tableau du peintre français Georges de La Tour, peint vers 1638. Cette huile sur toile représente Madeleine pénitente, elle est conservée au musée d'Art du comté de Los Angeles, à Los Angeles.",
  },
  // #endregion

  // #region "Giovanni Baglione"
  {
    title: "L'Amour divin et l'Amour profane",
    artist: "Giovanni Baglione",
    year: "1602",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Giovanni_Baglione_-_The_Divine_Eros_Defeats_the_Earthly_Eros_-_Google_Art_Project.jpg",
    link: "https://gallerix.ru/album/Italian-painters/pic/glrx-804635620",
    description:
      "L'Amour divin et l'Amour profane est un tableau peint à Rome vers 1602 par Giovanni Baglione dans deux versions successives, sur commande du cardinal Benedetto Giustiniani. L'une (probablement la première) est désormais conservée dans la Gemäldegalerie de Berlin; l'autre se trouve au musée du palais Barberini à Rome.",
  },
  // #endregion

  // #region "Gustave Moreau"
  {
    title: "Œdipe et le Sphinx",
    artist: "Gustave Moreau",
    year: "1864",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Oedipus_and_the_Sphinx_MET_DP-14201-023.jpg",
    link: "https://www.metmuseum.org/art/collection/search/437153",
    description:
      "La peinture représente Œdipe rencontrant le Sphinx au carrefour lors de son voyage entre Thèbes et Delphes. Œdipe doit répondre correctement à l'énigme du Sphinx pour réussir. L'échec signifie sa propre mort et celle des Thébains assiégés.",
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
  // #endregion

  // 🔹 -----J-----
  // #region "John William Waterhouse"
  {
    title: "Ulysse et les sirènes",
    artist: "John William Waterhouse",
    year: "1891",
    imageUrl: "https://cdn.gallerix.asia/sr/W/1628379096/753576713.jpg",
    link: "https://fr.gallerix.ru/album/Waterhouse/pic/glrx-753576713",
    description:
      "Ulysse et les sirènes de John William Waterhouse évoque le mythe d'Ulysse qui, en naviguant, affronte les chants envoûtants des sirènes.Pour ne pas succomber à leur séduction mortelle, il fait boucher les oreilles de ses marins et se fait attacher au mât.Ainsi, il peut écouter leur mélodie sans perdre le contrôle.Ce mythe symbolise la lutte entre la curiosité insatiable et la nécessité de maîtriser ses passions.",
  },
  // #endregion

  // #region "Jusepe de Ribera (Mouvement Caravagesque)"
  {
    title: "Saint Jérôme et l'ange du Jugement",
    artist: "Jusepe de Ribera (Mouvement Caravagesque)",
    year: "1626",
    imageUrl:
      "https://artaban-asso.com/wp-content/uploads/2024/08/12-Jose-de-Ribera-Saint-Jerome-et-lAnge-du-Jugement-1626-huile-sur-toile-262-%C3%97-164-cm-Naples-Capodimonte-scaled.jpg",
    link: "https://gallerix.ru/fullpic/74dd1c3a2850c005f6ee5b49168823be/",
    description:
      "La scène représente saint Jérôme en train de traduire la Bible, surpris par l'ange du Jugement dernier sonnant du cor, qui apparaît dans les nuages en haut à droite de la scène, ce dernier étant très semblable au personnage représenté dans la toile de Saint Matthieu et l'Ange du Caravage datant de 1602",
  },
  // #endregion

  // #region "Jean-Auguste-Dominique Ingres"
  {
    title: "Jupiter et Thétis",
    artist: "Jean-Auguste-Dominique Ingres",
    year: "1811",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/J%C3%BApiter_y_Tetis%2C_por_Dominique_Ingres.jpg",
    link: "https://fr.wikipedia.org/wiki/Jupiter_et_Th%C3%A9tis",
    description:
      "Peint à Rome, il est conservé au musée Granet d'Aix-en-Provence. Inspiré du premier chant de l'Iliade, le tableau fut critiqué pour ses audaces de composition. Il est acheté par l'État en 1834. François Marius Granet le transfère en dépôt au musée Granet d'Aix-en-Provence où il est accroché depuis.",
  },
  {
    title: "Œdipe explique l'énigme du sphinx",
    artist: "Jean-Auguste-Dominique Ingres",
    year: "1808, reprise en 1827",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/IngresOdipusAndSphinx.jpg",
    link: "https://fr.wikipedia.org/wiki/%C5%92dipe_explique_l%27%C3%A9nigme_du_sphinx",
    description:
      "La créature fut envoyée par Héra pour punir la ville de Thèbes du viol que Laïos, roi de Thèbes, a effectué sur Chrysippe, fils de la nymphe Danaïs. Elle attend la personne qui résoudra son énigme.",
  },
  {
    title: "La Grande Odalisque",
    artist: "Jean-Auguste-Dominique Ingres",
    year: "1814",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/La_grande_odalisque_-_Jean-Auguste_Dominique_Ingres_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1158.jpg",
    link: "https://fr.wikipedia.org/wiki/La_Grande_Odalisque",
    description:
      "La Grande Odalisque est un tableau de Jean-Auguste-Dominique Ingres peint en 1814 sur une commande de Caroline Murat, sœur de Napoléon Ier et reine consort de Naples (commande non payée pour cause de chute de l'Empire).",
  },

  {
    title: "Angélique sauvée par Ruggiero",
    artist: "Jean-Auguste-Dominique Ingres",
    year: "1819-1839",
    imageUrl:
      "https://www.meisterdrucke.fr/kunstwerke/1000px/Jean_Auguste_Dominique_Ingres_-_Angelica_saved_by_Ruggiero_1819-1839_-_(MeisterDrucke-784831).jpg",
    link: "https://www.nationalgallery.org.uk/paintings/jean-auguste-dominique-ingres-angelica-saved-by-ruggiero",
    description:
      "La scène présentée ici est tirée d'un épisode du poème épique du XVIe siècle « Orlando furieux » , de Ludovico Ariosto. Le chevalier chrétien Ruggiero a découvert la princesse païenne Angélique, enlevée par des barbares. Dépouillée et enchaînée à un rocher, elle a été sacrifiée à un monstre marin. Chevauchant un hippogriffe – une bête légendaire mi-cheval, mi-griffon, capable de galoper et de voler – Ruggiero sauve Angélique en plongeant sa lance dans la gueule ouverte du monstre.",
  },
  // #endregion

  // #region "Jan van Eyck"
  {
    title: "Les Époux Arnolfini",
    artist: "Jan van Eyck",
    year: "1434",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/jan-van-eyck-the-arnolfini-portrait",
    description:
      "Les Époux Arnolfini est le nom donné à une peinture sur bois (82,2 × 60 cm) du peintre primitif flamand Jan van Eyck datant de 1434, conservée à la National Gallery de Londres",
  },
  // #endregion

  // 🔹 -----K-----
  // #region "Katsushika Hokusai"
  {
    title: "La Grande Vague",
    artist: "Katsushika Hokusai",
    year: "1830-1833",
    imageUrl: "https://blog.messortiesculture.com/uploads/post-1107.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=468cf123-cd6e-485d-9f41-ba63477c6f13",
    description:
      "La Grande Vague de Kanagawa de Katsushika Hokusai, réalisée vers 1831, représente une immense vague menaçante sur le point de s’abattre sur des bateaux. La composition dynamique et les courbes élégantes créent une sensation de mouvement intense. Le bleu profond, obtenu grâce au bleu de Prusse, renforce le contraste avec l’écume blanche. En arrière-plan, le mont Fuji apparaît serein, opposant calme et chaos. Cette estampe emblématique illustre la puissance de la nature et l’influence de l’ukiyo-e.",
  },
  // #endregion

  // 🔹 -----L-----
  // #region "Leonardo Da Vinci"
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
  // #endregion

  // 🔹 -----M-----
  // #region "Michelangelo Merisi (Caravaggio)"
  {
    title: "Medusa",
    artist: "Michelangelo Merisi (Caravaggio)",
    year: "1597",
    imageUrl:
      "https://www.vice.com/wp-content/uploads/sites/2/2018/04/1523290548731-medusablack.jpeg",
    link: "https://upload.wikimedia.org/wikipedia/commons/1/15/Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
    description:
      "Méduse du Caravage, peinte vers 1597, est un bouclier en bois représentant la tête tranchée de la Gorgone au moment précis où elle réalise son sort. Son visage exprime une terreur figée, la bouche ouverte dans un cri muet et les yeux écarquillés d’effroi. Le réalisme saisissant, accentué par le clair-obscur caractéristique du Caravage, donne une impression de mouvement et de tridimensionnalité. Les serpents de sa chevelure semblent s’animer, tandis que le fond sombre met en valeur l’intensité dramatique de la scène. Cette œuvre, destinée aux Médicis, illustre la virtuosité du peintre et sa maîtrise des effets illusionnistes.",
  },
  {
    title: "Les Musiciens",
    artist: "Michelangelo Merisi (Caravaggio)",
    year: "1597",
    imageUrl:
      "https://images.metmuseum.org/CRDImages/ep/original/DP-687-001.jpg",
    link: "https://www.metmuseum.org/art/collection/search/435844",
    description:
      "Si la présence de Cupidon confirme qu'il s'agit d'une allégorie de la Musique, le tableau de Caravage s'inspire également de la performance contemporaine et des modèles individualisés, notamment l'autoportrait du deuxième garçon en partant de la droite.",
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
    title: "Le Souper à Emmaüs",
    artist: "Michelangelo Merisi (Caravaggio)",
    year: "1601",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Supper_at_Emmaus-Caravaggio_%281601%29.jpg/800px-Supper_at_Emmaus-Caravaggio_%281601%29.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/michelangelo-merisi-da-caravaggio-the-supper-at-emmaus",
    description:
      "Le Souper à Emmaüs ou la Cène à Emmaüs est un tableau de Caravage peint vers 1601 et conservé à la National Gallery de Londres. Il existe une seconde version de ce tableau datant de 1606 et conservée à l'Académie des beaux-arts de Brera de Milan. Il s'agit d'une commande de Ciriaco Mattei, qui représente le moment où les pèlerins d'Emmaüs réalisent brutalement qu'ils ont face à eux le Christ ressuscité.",
  },
  {
    title: "Saint Matthieu et l'Ange",
    artist: "Michelangelo Merisi (Caravaggio)",
    year: "1602",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/The_Inspiration_of_Saint_Matthew-Caravaggio_%281602%29.jpg",
    link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=4ff44b6e-f6f8-4bf3-a9dc-4e9f45676913",
    description:
      "Saint Matthieu et l'Ange de Caravage, peint vers 1602, est une œuvre emblématique de la période baroque réalisée pour la chapelle Contarelli à Rome.Dans ce tableau, l'évangéliste saint Matthieu est représenté en train d'écrire son Évangile, guidé par un ange qui lui dicte d'une main assurée.Le jeu de clair-obscur dramatique met en exergue la tension entre le monde terrestre de Matthieu et la lumière divine qui l'inspire.La composition, à la fois ample et intimiste, crée une profondeur expressive et invite le spectateur à partager l'instant de révélation spirituelle.",
  },
  // #endregion

  // #region "Mattia Preti"
  {
    title: "Christ couronné d’épines",
    artist: "Mattia Preti",
    year: "1679-1689",
    imageUrl:
      "https://www.finestresullarte.info/rivista/immagini/2019/1175/mattia-preti-incoronazione-di-spine.jpg",
    link: "https://www.finestresullarte.info/rivista/immagini/2019/1175/mattia-preti-incoronazione-di-spine.jpg",
    description:
      "Christ couronné d’épines / Huile sur toile / 227x350 cm / La Valette, Oratoire de Saint-Jean",
  },
  // #endregion

  // 🔹 -----P-----
  // #region "Piero di Cosimo"
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
  // #endregion

  // #region "Paolo Fiammingo"
  {
    title: "Paysage avec l'expulsion des harpies",
    artist: "Paolo Fiammingo",
    year: "1590",
    imageUrl:
      "https://www.repro-tableaux.com/kunst/paolo_fiammingo/landschaft_mit_vertreibung_der.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/paolo-fiammingo-landscape-with-the-expulsion-of-the-harpies",
    description:
      "En guise de punition pour avoir révélé l'avenir à l'humanité, le roi Phinéas de Thrace fut aveuglé et sa nourriture fut continuellement volée par les harpies, mi-humaines, mi-oiseaux. L'histoire est racontée dans les Argonautes , un roman épique écrit par Apollonius de Rhode au IIIe siècle av. J.-C.",
  },
  // #endregion

  // #region "Paolo Veronese (Paolo Caliari)"
  {
    title: "Mars et Vénus unis par l'amour",
    artist: "Paolo Veronese (Paolo Caliari)",
    year: "1570",
    imageUrl: "https://images.metmuseum.org/CRDImages/ep/original/DP167124.jpg",
    link: "https://www.metmuseum.org/art/collection/search/437891",
    description:
      "L'amour entre Mars, dieu de la guerre, et Vénus, déesse de l'amour, est encouragé par un couple d'amoureux indiscrets. L'un d'eux lie le couple, tandis que son complice retient le cheval de guerre de Mars. Le tableau célèbre les effets civilisateurs et nourriciers de l'amour, tandis que le lait coule du sein de Vénus et que Mars est désarmé.",
  },
  // #endregion

  // 🔹 -----R-----
  // #region "Raphaël"
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
    title: "La Madone Sixtine",
    artist: "Raphaël",
    year: "1513-1514",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg",
    link: "https://fr.wikipedia.org/wiki/La_Madone_Sixtine",
    description:
      "Il s'agit d'une conversation sacrée puisque la Vierge et l'Enfant ne sont pas présentés seuls : des figures de saints les accompagnent dont l'un est l'intercesseur direct du commanditaire, doublant ainsi sa présence symbolique ; des figures angéliques complètent l'assemblée.",
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
  // #endregion

  // 🔹 -----S-----
  // #region "Sandro Botticelli"
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
    title: "Pallas et le Centaure",
    artist: "Sandro Botticelli",
    year: "1482",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Pallade_col_Centauro%2C_Sandro_Botticelli_%281482%29.jpg",
    link: "https://fr.wikipedia.org/wiki/Pallas_et_le_Centaure",
    description:
      "Le thème moral (la Raison incarnée par Pallas, autre théonyme d'Athéna) est à destination de Pierfrancesco, de sombre réputation, violent et débauché, incarné par le Centaure (la bestialité). Il s'agit d'une allégorie à thème mythologique, de la sagesse (Pallas) qui domine l'instinct (Le Centaure), ou la victoire de la Connaissance sur l'Ignorance. Centaure qui s'est introduit dans le jardin, équipé d'un arc à la main, prêt à tirer, est surpris par Pallas, gardienne des lieux.",
  },

  {
    title: "Vénus et Mars",
    artist: "Sandro Botticelli",
    year: "1483",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Venus_and_Mars_National_Gallery.jpg",
    link: "https://imaginarium.nationalgallery.org.uk/imaginarium/847c8f2d-ead4-4c67-a00a-bd5129f84eaa",
    description:
      "Le tableau Vénus et Mars de Sandro Botticelli, réalisé vers 1485, illustre la déesse de l'amour, Vénus, veillant sur Mars, le dieu de la guerre, endormi après l'amour. Des satyres espiègles jouent avec l'armure de Mars, symbolisant la vulnérabilité de la guerre face au pouvoir de l'amour. Cette œuvre, probablement commandée pour célébrer un mariage, reflète les idéaux de la Renaissance en matière de beauté et de vertu. Les guêpes près de la tête de Mars pourraient faire référence à la famille Vespucci, possible commanditaire du tableau",
  },
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
  // #endregion

  // 🔹 -----T-----
  // #region "Titien"
  {
    title: "Bacchus et Ariane",
    artist: "Titien",
    year: "1520",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Titian_Bacchus_and_Ariadne.jpg",
    link: "https://www.nationalgallery.org.uk/paintings/titian-bacchus-and-ariadne",
    description:
      "Bacchus et Ariane est une peinture de la Renaissance réalisée par Titien entre 1520 et 1523. Elle fait partie du cycle de peintures à sujet mythologiques commandé par Alphonse Ier d'Este, duc de Ferrare, pour la chambre d'albâtre de son palazzo de Ferrare.",
  },
  {
    title: "Danaé (Madrid)",
    artist: "Titien",
    year: "1560-1565",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Tizian_-_Danae_receiving_the_Golden_Rain_-_Prado.jpg",
    link: "https://fr.wikipedia.org/wiki/Dana%C3%A9_(Titien,_Madrid)",
    description:
      "Le sujet représente le mythe de Danaé, qui avait été emprisonnée par son père Acrisios, le roi d'Argos, lorsqu'elle fut enlevée par Zeus et approchée sous la forme d'une pluie d'or.",
  },
  // #endregion

  // #region "Théodore Géricault"
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
  // #endregion

  // 🔹 -----V-----
  // #region "Vincent van Gogh"
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

  const artists = useMemo(() => {
    const uniqueArtists = Array.from(
      new Set(artworks.map((artwork) => artwork.artist))
    );
    return ["Tous les artistes", ...uniqueArtists];
  }, []);

  const filteredArtworks = useMemo(() => {
    if (!selectedArtist || selectedArtist === "Tous les artistes") {
      return artworks;
    }
    return artworks.filter((artwork) => artwork.artist === selectedArtist);
  }, [selectedArtist]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Ma Galerie d'Art
        </h1>

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
