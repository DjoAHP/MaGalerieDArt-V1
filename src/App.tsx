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

      // #region🔹 -----A-----
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

      // #region "Antonio Mariani della Corgna [ITA / 1584-1654]"
      {
        title: "Prometheus",
        artist: "Antonio Mariani della Corgna  [ITA / 1584-1654]",
        year: "1621-1628",
        imageUrl:
          "https://www.haltadefinizione.com/assets/Remote/6ba819fb-1ce9-46c6-bec3-4afdb97dd7a6.jpeg",
        link: "https://www.haltadefinizione.com/en/viewer/work/prometheus-antonio-mariani-della-corgna",
        description:
          "Prométhée, Titan rebelle, offre le feu aux hommes, défiant ainsi l'autorité de Zeus.Condamné pour son audace, il est enchaîné à un rocher, où un aigle dévore son foie chaque jour, en perpétuelle régénération.Ce mythe symbolise la quête de la connaissance et le sacrifice pour la liberté humaine.L'œuvre d'Antonio Mariani della Corgna met en lumière la tension entre la souffrance héroïque et la grandeur de cet acte révolutionnaire.",
      },
      // #endregion

      // #region "Antonio Carracci [ITA / 1583-1618]"
      {
        title: "Jupiter (Zeus) et Junon (Héra)",
        artist: "Antonio Carracci [ITA / 1583-1618]",
        year: "1612",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/medium/515.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/jupiter-and-juno",
        description:
          "Selon une légende romaine, Junon était jalouse du fait que Jupiter ait donné naissance à Minerve sans elle. Elle s'en plaignit à Flora qui lui indiqua une herbe qui rendit Junon enceinte sans l'intervention de Jupiter. Elle donna naissance à Mars alors qu'Arès dans la mythologie grecque est le fils des deux époux.",
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

      // #region "Artemisia Gentileschi [ITA / 1593-1656]"
      {
        title: "Autoportrait en sainte Catherine d'Alexandrie",
        artist: "Artemisia Gentileschi [ITA / 1593-1656]",
        year: "1616",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Self-Portrait_as_Saint_Catherine_of_Alexandria_%28Gentileschi%29.jpg",
        link: "https://fr.wikipedia.org/wiki/Autoportrait_en_sainte_Catherine_d%27Alexandrie",
        description:
          "L'œuvre évoque ce faisant la torture que l'artiste a elle-même dû subir pendant le procès de son violeur, Agostino Tassi. Elle est conservée depuis 2018 à la National Gallery, à Londres, au Royaume-Uni.",
      },
      {
        title: "Judith et sa servante (Gentileschi)",
        artist: "Artemisia Gentileschi [ITA / 1593-1656]",
        year: "	1618-1619",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Gentileschi_judith1.jpg",
        link: "https://fr.wikipedia.org/wiki/Judith_et_sa_servante_(Gentileschi,_Florence)",
        description:
          "Cette peinture à l'huile sur toile illustre un épisode de l'Ancien Testament en représentant les instants qui suivent la décapitation d'Holopherne par deux femmes de Béthulie : portant respectivement une épée sur l'épaule et un panier contenant la tête du général assassiné dans les bras.",
      },
      // #endregion

      // #endregion

      // #region🔹 -----B-----
      // #region "Bernardino Cesari [ITA / 1571-1622]"
      {
        title: "Diane et Actéon",
        artist: "Bernardino Cesari [ITA / 1571-1622]",
        year: "1601-1613",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/medium/414.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/diana-and-actaeon",
        description:
          "Métamorphoses d'Ovide (III, 138-259) : au cours d'une chasse, Actéon surprit Diane nue, se baignant avec ses nymphes. La déesse le punit en le transformant en cerf, le rendant muet. Méconnu de ses propres chiens, Actéon fut dévoré par eux alors qu'il tentait de s'échapper.​",
      },
      // #endregion

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

      // #region "Bronzino (Angelo di Cosimo) [ITA / 1503-1572]"
      {
        title: "Une allégorie avec Vénus et Cupidon",
        artist: "Bronzino (Angelo di Cosimo) [ITA / 1503-1572]",
        year: "1545",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/83/Angelo_Bronzino_-_Venus%2C_Cupid%2C_Folly_and_Time_-_National_Gallery%2C_London.jpg?uselang=fr",
        link: "https://www.nationalgallery.org.uk/paintings/bronzino-an-allegory-with-venus-and-cupid",
        description:
          "Le sujet, à la fois érotique et érudit, du tableau convenait parfaitement aux goûts du roi François Ier de France, notoirement lubrique. Il lui fut probablement offert par Cosme Ier de Médicis , souverain de Florence, qui employa Bronzino comme peintre à la cour. Cependant, il ne semble pas exister de trace de sa présence dans la collection royale française.​",
      },
      // #endregion
      // #endregion

      // #region🔹 -----C-----
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
        link: "https://fr.m.wikipedia.org/wiki/Fichier:D%27arpino-Androm%C3%A8de.jpg",
        description:
          "Alors qu’il rentre chez lui à dos de Pégase, il aperçoit la princesse en détresse, tombe amoureux. Il aperçoit alors le monstre marin qui rôde, et les parents d’Andromède qui regardent la scène, pleins d’angoisse. Persée propose donc de la sauver, à condition qu’elle l’épouse et vienne avec lui en Grèce. Les parents n’ont pas vraiment le choix : ils acceptent. et le terrasse d’un coup d’épée.",
      },
      {
        title: "L'enlèvement d'Europe",
        artist: "Cavalier D'Arpin [ITA / 1568-1640]",
        year: "1603-1606",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/medium/378.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/the-abduction-of-europa",
        description:
          "Selon une version du mythe, Europe, fille d'Agénor, roi de Tyr, une ville de Phénicie fit un rêve. Le jour même, Zeus la rencontra sur une plage de Sidon, se métamorphosa en taureau blanc, afin de l'approcher sans l'apeurer et d'échapper à la jalousie de son épouse Héra. Europe s'approche de lui. Chevauchant l'animal, elle est enlevée sur l'île de Crète à Gortyne. À Gortyne, sous un platane, qui depuis lors est toujours vert, Europe s'accouple avec Zeus, sous forme humaine cette fois. De leur union naissent Minos, Rhadamanthe, et Sarpédon, qui s'exila en Anatolie, à Milet. Plus tard, Europe est donnée par Zeus, comme épouse au roi de Crète, Astérion.",
      },
      // #endregion

      // #region "Cristofano Allori [ITA / 1577-1621]"
      {
        title: "Judith avec la tête d'Holopherne",
        artist: "Cristofano Allori [ITA / 1577-1621]",
        year: "1613",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Judith_with_the_Head_of_Holofernes_by_Cristofano_Allori.jpg",
        link: "https://www.uffizi.it/en/artworks/judith-with-the-head-of-holofernes",
        description:
          " Judith entre dans la tente d'Holopherne, un général assyrien sur le point de mener une offensive contre la ville de Béthulie. Il s'enivre au point de perdre connaissance ; Judith le décapite, et emporte sa tête dans un panier (la tête est souvent représentée dans un panier portée par une servante de Judith, plus âgée qu'elle).",
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
      // #endregion

      // #region🔹 -----D-----
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

      // #region "Dosso Dossi [ITA / 1480.90-1542]"
      {
        title: "Melissa",
        artist: "Dosso Dossi [ITA / 1480.90-1542]",
        year: "1518",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/217.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/melissa",
        description:
          "La femme a été identifiée comme une sorcière, d'abord Circé, puis Mélissa, selon la description du Roland furieux (8.14-15) de Ludovico Arioste. Dans cet épisode, Mélissa libère des chevaliers d'un enchantement, dont on pourrait retrouver la trace dans les petites figures humaines suspendues à l'arbre de gauche.La restauration du tableau a révélé quelques changements d'avis, notamment l'inclusion initiale, à la place du dogue, d'une figure masculine debout et blindée, qui était le destinataire du regard de la sorcière.",
      },
      // #endregion
      // #endregion

      // #region🔹 -----E-----
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

      // #region "Eugène Delacroix [FRA / 1798-1863]"
      {
        title: "La Liberté guidant le peuple",
        artist: "Eugène Delacroix [FRA / 1798-1863]",
        year: "1830",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg",
        link: "https://fr.wikipedia.org/wiki/La_Libert%C3%A9_guidant_le_peuple",
        description:
          "Le peintre a fait connaître sa toile comme une allégorie inspirée par l'actualité la plus brûlante[9],[10]. Elle a pour cadre les trois journées du soulèvement populaire parisien contre Charles X, les 27, 28 et 29 juillet 1830, connues sous le nom des Trois Glorieuses.",
      },
      // #endregion
      // #endregion

      // #region🔹 -----G-----
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
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/12/La_Tour.jpg",
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

      // #region "Giovanni Bilivert [ITA / 1566-1644]"
      {
        title: "Apollon écorchant Marsyas",
        artist: "Giovanni Bilivert [ITA / 1585-1644]",
        year: "1630",
        imageUrl:
          "https://www.datocms-assets.com/103094/1688661633-1505989079545669-bilivert-apollo-e-marsia-principale.jpg?auto=format%2Ccompress&cs=srgb&max-w=800",
        link: "https://www.uffizi.it/en/artworks/apollo-flaying-marsyas",
        description:
          "Après avoir pris possession de l' aulòs , un instrument à anche à deux cornes inventé par la déesse Athéna, le satyre phrygien Marsyas devint si habile qu'il défia Apollon dans un concours de musique, où il fut battu. La scène capture le moment le plus dramatique, la punition de Marsyas pour avoir osé défier le dieu Soleil.",
      },
      // #endregion

      // #region "Giovanni Francesco Guerrieri [ITA / 1589-1657]"
      {
        title: "Loth et ses filles",
        artist: "Giovanni Francesco Guerrieri [ITA / 1589-1657]",
        year: "1617",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/045.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/lot-and-his-daughters",
        description:
          "Les Filles de Loth est un poème d'inspiration biblique souvent attribué à Alfred de Musset. On assure au sujet de cette œuvre que George Sand avait promis son amour au poète qui produirait la poésie la plus obscène. Victor Hugo produisit un poème intitulé « Merde », et Musset « Les Filles de Loth ». Musset remporta le prix.",
      },
      // #endregion

      // #region "Guido Reni [ITA / 1575-1642]"
      {
        title: "David tenant la tête de Goliath",
        artist: "Guido Reni [ITA / 1575-1642]",
        year: "1600",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1a/Guido_Reni_-_David_with_the_Head_of_Goliath_-_WGA19279.jpg",
        link: "https://www.uffizi.it/en/artworks/reni-david-with-the-head-of-goliath",
        description:
          " David, jeune berger agréé par Dieu, releva le défi lancé par Goliath. Après avoir déclaré qu'il venait contre lui avec l'appui de Dieu, David lui jeta une pierre avec sa fronde. Celle-ci s'enfonça dans le front de Goliath qui tomba à terre. David lui prit son épée et acheva le géant en lui coupant la tête. ",
      },
      // #endregion

      // #region "Gerrit van Honthorst [NLD / 1590-1656]"
      {
        title: "Samson et Dalila",
        artist: "Gerrit van Honthorst [NLD / 1590-1656]",
        year: "1616",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Samson_et_Dalila.JPG/440px-Samson_et_Dalila.JPG",
        link: "https://www.clevelandart.org/art/1968.23",
        description:
          "Samson avait été promis à sa mère inféconde par un ange et annoncé comme un libérateur du peuple et un être consacré à Dieu qui n’avait pas le droit de se couper les cheveux. Samson, en combattant solitaire, fut souvent inscrit dans la tradition des héros de la mythologie grecque et, au même titre qu’Héraclès, possédait des pouvoirs surhumains. Son caractère était considéré comme impulsif et violent. Selon le Livre des Juges, son adversaire et séductrice Dalila, qui lui arracha son secret, provoquant ainsi sa chute, agissait pour le compte des princes des Philistins.",
      },
      {
        title: "Le Triomphe de Silène",
        artist: "Gerrit van Honthorst [NLD / 1590-1656]",
        year: "vers 1623-1630",
        imageUrl:
          "https://collections.louvre.fr/media/cache/medium/0000000021/0000054313/0000731064_OG.JPG",
        link: "https://collections.louvre.fr/ark:/53355/cl010054313",
        description:
          "Dans la mythologie grecque, Silène (ou Papposilène) (en grec ancien : Σειληνός / Seilēnós, prononcé : [seːlɛːnós]) est un satyre, père adoptif et précepteur du dieu Dionysos, qu’il accompagne sans cesse. Il passait en effet pour un sage, un prophète et un philosophe.",
      },
      {
        title: "Le Joyeux Violoniste",
        artist: "Gerrit van Honthorst [NLD / 1590-1656]",
        year: "1623",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Gerrit_van_Honthorst_-_De_vrolijke_speelman.jpg",
        link: "https://commons.wikimedia.org/wiki/File:Gerrit_van_Honthorst_-_De_vrolijke_speelman.jpg",
        description: "Huile sur toile / 107,2 cm X 88,3 cm",
      },
      {
        title: "Le Joyeux Violoniste au verre de vin",
        artist: "Gerrit van Honthorst [NLD / 1590-1656]",
        year: "1624",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/77/Gerrit_Van_Honthorst_-_Joyeux_Violoniste.jpg",
        link: "https://fr.m.wikipedia.org/wiki/Fichier:Gerrit_Van_Honthorst_-_Joyeux_Violoniste.jpg",
        description: "Huile sur toile / 83 cm X 68 cm",
      },
      {
        title: "Concert ou Le Vol de l'amulette",
        artist: "Gerrit van Honthorst [NLD / 1590-1656]",
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
      // #endregion

      // #region🔹 -----H-----
      // #region "Hans Holbein le Jeune [DEU / 1497-1543]"
      {
        title: "Les Ambassadeurs",
        artist: "Hans Holbein le Jeune [DEU / 1497-1543]",
        year: "1533",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg/1920px-Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg",
        link: "https://fr.wikipedia.org/wiki/Les_Ambassadeurs",
        description:
          "Les Ambassadeurs est un double portrait de Jean de Dinteville (1504-1575 ou 1579), bailli de Troyes, seigneur de Polisy et ambassadeur français, et Georges de Selve (1509-1541), ecclésiastique, érudit et diplomate français, peint par Hans Holbein le Jeune en 1533, actuellement conservé à la National Gallery de Londres. Le tableau est signé et daté en bas à gauche, dans une zone d'ombre : IOANNES HOLBEIN PINGEBAT 1533.",
      },
      // #endregion

      // #region "Hubert Robert [FRA / 1733-1808]"
      {
        title: "Le Bassin de baignade",
        artist: "Hubert Robert [FRA / 1733-1808]",
        year: "1786",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/e/ec/Hubert_Robert_-_The_Bathing_Pool.jpg",
        link: "https://commons.wikimedia.org/wiki/File:Hubert_Robert_-_The_Bathing_Pool.jpg",
        description:
          "Le Bassin de baignade pour le château de Bagatelle du comte d'Artois /	après 1786 /	huile sur toile 175 × 124 cm	Metropolitan Museum, New York	Musée",
      },
      // #endregion
      // #endregion

      // #region🔹 -----J-----
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

      // #region "Johann Heinrich Füssli [SUISSE / 1741-1824]"
      {
        title: "Thor luttant contre le serpent de Midgard",
        artist: "Johann Heinrich Füssli [SUISSE / 1741-1824]",
        year: "1790",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/de/Johann_Heinrich_Fussli-Tor_and_Jormundgandr.jpg",
        link: "https://fr.gallerix.ru/album/Waterhouse/pic/glrx-753576713",
        description:
          "Thomas Percy avait publié en 1770 un recueil de Northern Antiquities qui comprenait la traduction d’un cycle de poèmes en vieux norrois, l’Edda. Ce tableau en illustre un épisode. Thor combat le serpent Midgard qu’il a appâté avec une tête de taureau attachée au bout d’une corde (ici une chaîne). Le géant Eymer, terré au fond de la barque, est censé l’aider… En haut à gauche, Odin, le père de Thor, assiste au combat.",
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
      {
        title: "Cupidon et Psyché",
        artist: "Jacopo Zucchi [ITA / 1542-1596]",
        year: "1589",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/010.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/cupid-and-psyche",
        description:
          "Le tableau représente le moment décisif du conte de Cupidon et Psyché, tiré de la Métamorphose d'Apulée, lorsque la jeune fille, poussée par la curiosité et encouragée par les sœurs maléfiques, décide de connaître l'identité de l'amant mystérieux qui lui rend visite tous les jours au coucher du soleil sans montrer son visage.",
      },
      // #endregion

      // #region "Jacopo Robusti (le Tintoret) [ITA / 1518-1594]"
      {
        title: "Jupiter et Sémélé",
        artist: "Jacopo Robusti (le Tintoret) [ITA / 1518-1594]",
        year: "1545",
        imageUrl:
          "https://www.meisterdrucke.fr/kunstwerke/1260px/Jacopo_Robusti_Tintoretto_-_Jupiter_and_Semele_ca_1545_-_%28MeisterDrucke-747793%29.jpg",
        link: "https://www.nationalgallery.org.uk/paintings/possibly-by-jacopo-tintoretto-jupiter-and-semele",
        description:
          "L'histoire de Jupiter et Sémélé est racontée dans les Métamorphoses d'Ovide . Le dieu Jupiter prend la mortelle Sémélé pour maîtresse et la rend enceinte. Lorsque l'épouse de Jupiter, la déesse Junon, l'apprend, elle se déguise et suggère à Sémélé que son amant n'est peut-être pas Jupiter. Elle dit à Sémélé de demander à Jupiter de venir à elle sous la forme qu'il a lorsqu'il rend visite à Junon. Jupiter arrive sous la forme d'un puissant éclair armé de feu et Sémélé est réduite en cendres.",
      },
      // #endregion

      // #region "Jusepe de Ribera (Mouvement Caravagesque) [ESP / 1591-1652]"
      {
        title: "Saint Jérôme et l'ange du Jugement",
        artist: "Jusepe de Ribera (Mouvement Caravagesque) [ESP / 1591-1652]",
        year: "1626",
        imageUrl:
          "https://artaban-asso.com/wp-content/uploads/2024/08/12-Jose-de-Ribera-Saint-Jerome-et-lAnge-du-Jugement-1626-huile-sur-toile-262-%C3%97-164-cm-Naples-Capodimonte-scaled.jpg",
        link: "https://fr.wikipedia.org/wiki/Saint_J%C3%A9r%C3%B4me_et_l%27Ange_du_Jugement",
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

      // #region "Jean-François de Troy [FRA / 1679-1751]"
      {
        title: "Jason jure une affection éternelle à Médée",
        artist: "Jean-François de Troy [FRA / 1679-1751]",
        year: "1742-1743",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/25/Jean-Fran%C3%A7ois_de_Troy_-_Jason_swearing_eternal_affection_to_Medea.jpg",
        link: "https://www.nationalgallery.org.uk/paintings/jean-francois-de-troy-jason-swearing-eternal-affection-to-medea",
        description:
          "Ici, nous voyons Jason et Médée au cœur des bois, près de l'autel d'Hécate, déesse associée à la lune et à la sorcellerie. Il saisit la main de Médée et lui demande de l'aider à s'emparer de la Toison d'or, promettant de l'épouser en échange. Cupidon décoche une flèche, dirigée par Hymen, dieu du mariage, vers le cœur de Jason. Jason jure fidélité et Médée, le croyant, lui donne des herbes magiques pour le protéger.",
      },
      // #endregion

      // #region "Jean-Léon Gérôme [FRA / 1824-1904]"
      {
        title: "Bonaparte devant le Sphinx",
        artist: "Jean-Léon Gérôme [FRA / 1824-1904]",
        year: "1867-1886",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a5/Bonaparte_ante_la_Esfinge%2C_por_Jean-L%C3%A9on_G%C3%A9r%C3%B4me.jpg",
        link: "https://fr.wikipedia.org/wiki/Bonaparte_devant_le_Sphinx",
        description:
          "La campagne d'Égypte est une expédition militaire française, menée en Égypte par le général Bonaparte et ses successeurs de 1798 à 1801. Son but est de s'emparer de l'Égypte et d'une partie de l'Orient, afin de barrer la route des Indes à la Grande-Bretagne dans le contexte de la lutte entre cette dernière et la France révolutionnaire...",
      },
      {
        title: "Le Général Bonaparte et son état-major en Égypte",
        artist: "Jean-Léon Gérôme [FRA / 1824-1904]",
        year: "1867",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/9b/Bonaparte_en_Egypte.jpg",
        link: "https://fr.wikipedia.org/wiki/Campagne_d%27%C3%89gypte",
        description:
          "La campagne d'Égypte est une expédition militaire française, menée en Égypte par le général Bonaparte et ses successeurs de 1798 à 1801. Son but est de s'emparer de l'Égypte et d'une partie de l'Orient, afin de barrer la route des Indes à la Grande-Bretagne dans le contexte de la lutte entre cette dernière et la France révolutionnaire...",
      },
      // #endregion

      // #region "Jacques-Louis David [FRA / 1748-1825]"
      {
        title: "Le Serment des Horaces",
        artist: "Jacques-Louis David [FRA / 1748-1825]",
        year: "1784",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/bd/Le_Serment_des_Horaces_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3692_%3B_MR_1432.jpg",
        link: "https://fr.wikipedia.org/wiki/Le_Serment_des_Horaces",
        description:
          "Il représente un grand sujet de l’histoire légendaire de la Rome Antique, où les frères Horaces défendent en combats singuliers la cité de Rome face aux Curiaces champions de la ville d'Albe. Liés par mariage à leurs sœurs respectives, le sacrifice des Horaces et des Curiaces exalte les vertus patriotiques...",
      },
      {
        title: "Bonaparte franchissant le Grand-Saint-Bernard",
        artist: "Jacques-Louis David [FRA / 1748-1825]",
        year: "1801",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
        link: "https://fr.wikipedia.org/wiki/Bonaparte_franchissant_le_Grand-Saint-Bernard",
        description:
          "Napoléon est représenté lors du franchissement du col alpin du Grand-Saint-Bernard par l'armée de réserve, épisode qui marque le début de la seconde campagne d'Italie.",
      },
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
      // #endregion

      // #region🔹 -----K-----
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
      // #endregion

      // #region🔹 -----L-----
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

      // #region "Luca Giordano [ITA / 1634-1705]"
      {
        title: "Allégorie de la justice",
        artist: "Luca Giordano [ITA / 1634-1705]",
        year: "1680",
        imageUrl:
          "https://www.nationalgallery.org.uk/media/34819/n-6633-00-000005-hd.jpg?rxy=0.43188405797101448,0.44289693593314761&width=800&height=800&v=1d6544b6b7ad220",
        link: "https://www.nationalgallery.org.uk/paintings/luca-giordano-allegory-of-justice",
        description:
          "Ce modello , ou étude détaillée à l'huile, fait partie d'un groupe de douze que Giordano a réalisés en préparation des fresques du plafond du Palazzo Medici Riccardi entre 1682 et 1685.",
      },
      // #endregion
      // #endregion

      // #region🔹 -----M-----
      // #region "Michelangelo Merisi (Le Caravage) [ITA / 1571-1610]"
      {
        title: "Medusa",
        artist: "Michelangelo Merisi (Le Caravage) [ITA / 1571-1610]",
        year: "1597",
        imageUrl:
          "https://www.vice.com/wp-content/uploads/sites/2/2018/04/1523290548731-medusablack.jpeg",
        link: "https://upload.wikimedia.org/wikipedia/commons/1/15/Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
        description:
          "Méduse du Caravage, peinte vers 1597, est un bouclier en bois représentant la tête tranchée de la Gorgone au moment précis où elle réalise son sort. Son visage exprime une terreur figée, la bouche ouverte dans un cri muet et les yeux écarquillés d’effroi. Le réalisme saisissant, accentué par le clair-obscur caractéristique du Caravage, donne une impression de mouvement et de tridimensionnalité. Les serpents de sa chevelure semblent s’animer, tandis que le fond sombre met en valeur l’intensité dramatique de la scène. Cette œuvre, destinée aux Médicis, illustre la virtuosité du peintre et sa maîtrise des effets illusionnistes.",
      },
      {
        title: "Les Musiciens",
        artist: "Michelangelo Merisi (Le Caravage) [ITA / 1571-1610]",
        year: "1597",
        imageUrl:
          "https://images.metmuseum.org/CRDImages/ep/original/DP-687-001.jpg",
        link: "https://www.metmuseum.org/art/collection/search/435844",
        description:
          "Si la présence de Cupidon confirme qu'il s'agit d'une allégorie de la Musique, le tableau de Caravage s'inspire également de la performance contemporaine et des modèles individualisés, notamment l'autoportrait du deuxième garçon en partant de la droite.",
      },
      {
        title: " Le Sacrifice d' Isaac",
        artist: "Michelangelo Merisi (Le Caravage) [ITA / 1571-1610]",
        year: "1598",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg/1200px-Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg",
        link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=8d7aa256-99f9-4d32-8725-1f5e3a44cce0",
        description:
          "Le Sacrifice d'Isaac de Caravage, réalisé vers 1603-1604, saisit l’instant dramatique où l’ange interrompt le geste d’Abraham, empêchant le sacrifice de son fils.La composition horizontale unit les trois personnages principaux, conférant à la scène une intensité émotionnelle marquée.Le clair-obscur, caractéristique du style caravagesque, sculpte les visages et souligne la tension entre lumière et ombre.Les gestes expressifs – la main ferme de l’ange retenant celle d’Abraham et le cri silencieux d’Isaac – illustrent le conflit intérieur des protagonistes.",
      },
      {
        title: "Judith et Holopherne",
        artist: "Michelangelo Merisi (Le Caravage) [ITA / 1571-1610]",
        year: "1598-1599",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/b2/Caravaggio_Judith_Beheading_Holofernes.jpg",
        link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=c620f0f6-defb-49ce-9c39-aca7b2592445",
        description:
          "Judith et Holopherne de Caravage, peint vers 1599, illustre la décapitation du général assyrien par Judith. Le clair-obscur dramatique met en lumière son expression déterminée et le visage terrifié d’Holopherne. Le réalisme saisissant accentue la violence et l’intensité de la scène. Le contraste entre la jeunesse de Judith et l’horreur du moment renforce l’impact émotionnel. Cette œuvre témoigne du génie de Caravage pour le dramatique et le naturalisme.",
      },
      {
        title: "Le Souper à Emmaüs",
        artist: "Michelangelo Merisi (Le Caravage) [ITA / 1571-1610]",
        year: "1601",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Supper_at_Emmaus-Caravaggio_%281601%29.jpg/800px-Supper_at_Emmaus-Caravaggio_%281601%29.jpg",
        link: "https://www.nationalgallery.org.uk/paintings/michelangelo-merisi-da-caravaggio-the-supper-at-emmaus",
        description:
          "Le Souper à Emmaüs ou la Cène à Emmaüs est un tableau de Caravage peint vers 1601 et conservé à la National Gallery de Londres. Il existe une seconde version de ce tableau datant de 1606 et conservée à l'Académie des beaux-arts de Brera de Milan. Il s'agit d'une commande de Ciriaco Mattei, qui représente le moment où les pèlerins d'Emmaüs réalisent brutalement qu'ils ont face à eux le Christ ressuscité.",
      },
      {
        title: "Saint Matthieu et l'Ange",
        artist: "Michelangelo Merisi (Le Caravage) [ITA / 1571-1610]",
        year: "1602",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/ff/The_Inspiration_of_Saint_Matthew-Caravaggio_%281602%29.jpg",
        link: "https://dam.haltadefinizione.com/images/viewers/dzi/?uuid=4ff44b6e-f6f8-4bf3-a9dc-4e9f45676913",
        description:
          "Saint Matthieu et l'Ange de Caravage, peint vers 1602, est une œuvre emblématique de la période baroque réalisée pour la chapelle Contarelli à Rome.Dans ce tableau, l'évangéliste saint Matthieu est représenté en train d'écrire son Évangile, guidé par un ange qui lui dicte d'une main assurée.Le jeu de clair-obscur dramatique met en exergue la tension entre le monde terrestre de Matthieu et la lumière divine qui l'inspire.La composition, à la fois ample et intimiste, crée une profondeur expressive et invite le spectateur à partager l'instant de révélation spirituelle.",
      },
      {
        title: "La Madone des palefreniers (La Madone au serpent)",
        artist: "Michelangelo Merisi (Le Caravage) [ITA / 1571-1610]",
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
      // #endregion

      // #region🔹 -----N-----
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
      // #endregion

      // #region🔹 -----P-----

      // #region "Pâris Bordone (Bordon) [ITA / 1500-1570]"
      {
        title: "Vénus, Cupidon et un satyre",
        artist: "Pâris Bordone (Bordon) [ITA / 1500-1570]",
        year: "1555-1565",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/medium/119.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/venus-cupid-and-a-satyr-2",
        description:
          "Les études les plus récentes s'accordent à dire qu'il s'agit d'une œuvre autographe du peintre trévisan, que l'on peut dater d'une phase ultérieure de sa production, et donc entre la fin des années 1660 et la première moitié des années 1670.",
      },
      // #endregion

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
      {
        title: "Un satyre en deuil sur une nymphe",
        artist: "Piero di Cosimo [ITA / 1462-1522]",
        year: "1495",
        imageUrl:
          "https://www.arretetonchar.fr/wp-content/uploads/2013/IMG/jpg/Piero_di_Cosimo-Satyr_mourning_a_nymph_National_gallery_1495_.jpg",
        link: "https://www.nationalgallery.org.uk/paintings/piero-di-cosimo-a-satyr-mourning-over-a-nymph",
        description:
          "On a suggéré que ce tableau représente un épisode des Métamorphoses , un poème influent d'Ovide, écrivain romain antique. Si tel est le cas, la belle nymphe serait Procris, tuée accidentellement par son mari Céphale. Une adaptation des Métamorphoses du XVe siècle a ajouté le satyre, qui n'est pas mentionné par Ovide.",
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

      // #region "Pietro Vannucci (le Pérugin) [ITA / 1448-1523]"
      {
        title: "Saint Sébastien",
        artist: "Pietro Vannucci (le Pérugin) [ITA / 1448-1523]",
        year: "1495",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/386.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/saint-sebastian-2",
        description:
          "L'œuvre en question se caractérise par une composition équilibrée, dominée par le portrait du soldat romain, attaché à une colonne. Un vaste paysage, typique de l'œuvre de Vannucci, s'ouvre derrière la structure architecturale. Comme le raconte la Passio Sancti Sebastiani , après avoir été déshabillé, Sébastien fut criblé de nombreuses flèches par ses compagnons d'armes : le croyant mort, ils abandonnèrent son corps près de la Cloaca Maxima, où la matrone Irène le trouva et guérit ses blessures.",
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
        imageUrl:
          "https://images.metmuseum.org/CRDImages/ep/original/DP167124.jpg",
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
      // #endregion

      // #region🔹 -----Q-----

      // #region "Quentin Metsys [ITA / 1466-1530]"
      {
        title: "Une vieille femme (« La duchesse laide »)",
        artist: "Quentin Metsys [ITA / 1466-1530]",
        year: "1513",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/36/Quentin_Matsys_-_A_Grotesque_old_woman.jpg",
        link: "https://www.nationalgallery.org.uk/paintings/quinten-massys-an-old-woman-the-ugly-duchess",
        description:
          "Ce tableau fait partie d'un duo : sa « moitié » est conservée dans une collection privée à New York. La vieille femme revêt cette tenue flamboyante et provocante pour séduire le vieil homme, à qui elle offre un bouton de rose, une fleur à connotation sexuelle. Ce sont des portraits satiriques, qui se moquent de la vanité des personnes âgées qui s'habillent et se comportent comme si elles étaient encore jeunes...",
      },
      // #endregion

      // #endregion

      // #region🔹 -----R-----

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

      // #region "Rutilio Manetti [ITA / 1571-1639]"
      {
        title: "Andromède libérée par Persée",
        artist: "Rutilio Manetti [ITA / 1571-1639]",
        year: "1611-1612",
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/medium/004.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/andromeda-freed-by-perseus",
        description:
          "tiré des Métamorphoses d'Ovide , à savoir la vanité de Cassiopée, reine d'Éthiopie et épouse de Céphée, qui se prétendait plus belle que les Néréides. Ce dernier en appela à Poséidon, lui demandant de punir l'arrogance du souverain présomptueux. Le dieu de la mer envoya alors un monstre ravager les côtes du royaume éthiopien ; la rage de la créature ne put être apaisée que par le sang d'une vierge. Le roi projeta donc de sacrifier sa fille Andromède, attachée à une falaise comme victime du terrible monstre marin, avant d'être sauvée de son triste sort par le héros Persée.",
      },
      // #endregion

      // #endregion

      // #region🔹 -----S-----
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
      // #endregion

      // #region🔹 -----T-----
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
      // #endregion

      // #region🔹 -----V-----
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
      // #endregion

      // #region🔹 -----W-----
      // #region "Wolfgang Heimbach [DEU / 1615-1678]"

      {
        title: "L'homme à la bougie",
        artist: "Wolfgang Heimbach [DEU / 1615-1678]",
        year: 1645,
        imageUrl:
          "https://www.collezionegalleriaborghese.it/uploads/server/files/251.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/man-with-a-candle",
        description:
          "Cette œuvre fut acquise par Marc-Antoine IV Borghèse en 1783. Le prince l'avait achetée avec une autre œuvre du même artiste ; les deux tableaux, de mêmes dimensions, se situent dans un intérieur éclairé à la bougie, un motif typique des représentations de genre de Wolfgang Heimbach. Autrefois attribuée à Gerrit van Honthorst, c'est Roberto Longhi qui en confirma l'attribution au peintre allemand.",
      },
      // #endregion

      // #region "William Bouguereau [FRA / 1825-1905]"

      {
        title: "Dante et Virgile",
        artist: "William Bouguereau [FRA / 1825-1905]",
        year: 1850,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/27/William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg",
        link: "https://www.collezionegalleriaborghese.it/en/opere/man-with-a-candle",
        description:
          "Le sujet retenu pour cette peinture de 1850 s'apparente à celui d'une peinture gothique du XIXe siècle : le jeune peintre veut en effet marquer les esprits et choisit un sujet qui s'éloigne un peu de l'académisme. S'inscrivant dans ce qui a été appelé le romantisme noir, il choisit de s'inspirer de Dante Alighieri et plus précisément du chant XXX de l'Enfer de la Divine Comédie",
      },
      // #endregion

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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          {/* Navbar */}
          <nav className="bg-black/20 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-10">
            <div className="max-w-[2000px] mx-auto px-4 py-3 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <div className="rounded-full overflow-hidden h-10 w-10 mr-3">
                  <a href="/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Venus_botticelli_detail.jpg/1280px-Venus_botticelli_detail.jpg"
                      alt="Logo"
                      className="object-cover w-full h-full"
                    />
                  </a>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center space-x-4">
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
              </div>
            </div>
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
