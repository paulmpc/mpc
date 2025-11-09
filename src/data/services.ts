export interface ServiceData {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  content: string[];
}

export const servicesData: Record<string, ServiceData> = {
  'air-eau': {
    id: 'air-eau',
    title: 'Installation de pompe à chaleur air/eau en Île-de-France',
    description: 'Faites des économies d\'énergie avec la pompe à chaleur air/eau, idéale pour chauffer votre maison tout en respectant l\'environnement.',
    benefits: [
      'Économies d\'énergie jusqu\'à 70%',
      'Solution écologique et durable',
      'Confort thermique optimal',
      'Éligible aux aides de l\'État',
      'Installation certifiée RGE',
      'Garantie décennale',
    ],
    content: [
      'La pompe à chaleur air/eau est une solution de chauffage moderne et performante qui capte les calories présentes dans l\'air extérieur pour chauffer l\'eau de votre circuit de chauffage. Cette technologie vous permet de réaliser jusqu\'à 70% d\'économies sur votre facture énergétique tout en réduisant votre empreinte carbone.',
      'MPC Chauffage vous accompagne de l\'étude thermique à l\'installation complète de votre pompe à chaleur air/eau. Nos équipes sont certifiées RGE, ce qui vous permet de bénéficier des aides financières de l\'État (MaPrimeRénov\', Certificats d\'Économies d\'Énergie).',
      'Nous intervenons partout en Île-de-France pour l\'installation de pompes à chaleur air/eau adaptées à tous types de logements : maisons individuelles, appartements, et bâtiments collectifs. Notre expertise technique nous permet de dimensionner parfaitement votre installation pour un confort optimal.',
      'Avec MPC, vous bénéficiez d\'un service complet : étude personnalisée, installation professionnelle, mise en service, formation à l\'utilisation, et service après-vente réactif. Nous assurons également l\'entretien régulier de votre équipement pour garantir sa longévité.',
    ],
  },
  'air-air': {
    id: 'air-air',
    title: 'Solution pompe à chaleur air/air – confort et performance',
    description: 'Vous cherchez une solution de chauffage et climatisation en un seul appareil ? Optez pour la pompe à chaleur air/air.',
    benefits: [
      'Chauffage et climatisation réversible',
      'Installation rapide',
      'Faible consommation électrique',
      'Confort toute l\'année',
      'Système silencieux',
      'Télécommande et programmation',
    ],
    content: [
      'La pompe à chaleur air/air, également appelée climatisation réversible, est la solution idéale pour chauffer votre logement en hiver et le rafraîchir en été. Ce système polyvalent assure votre confort thermique tout au long de l\'année avec un seul équipement.',
      'MPC installe et entretient vos pompes à chaleur air/air dans toute l\'Île-de-France avec un service rapide et professionnel. Nos techniciens qualifiés réalisent une étude précise de vos besoins pour vous proposer l\'équipement le mieux adapté à votre logement.',
      'La pompe à chaleur air/air se compose d\'une unité extérieure et d\'une ou plusieurs unités intérieures (splits) qui diffusent l\'air chaud ou froid selon vos besoins. Les modèles récents sont particulièrement silencieux et économes en énergie.',
      'Nous vous proposons des équipements de marques reconnues, avec garantie constructeur et garantie décennale sur l\'installation. Notre service après-vente assure un suivi régulier et intervient rapidement en cas de besoin.',
    ],
  },
  'chaudiere': {
    id: 'chaudiere',
    title: 'Remplacement de chaudière par une pompe à chaleur',
    description: 'Remplacez votre ancienne chaudière par une pompe à chaleur plus performante et écologique.',
    benefits: [
      'Réduction de 60% de vos factures',
      'Solution hybride disponible',
      'Accompagnement sur les aides',
      'Installation en remplacement direct',
      'Compatible avec vos radiateurs',
      'Maintenance simplifiée',
    ],
    content: [
      'Vous possédez une chaudière gaz ou fioul vieillissante ? Il est temps de passer à une solution plus performante et respectueuse de l\'environnement. MPC vous propose le remplacement de votre chaudière par une pompe à chaleur adaptée à votre installation existante.',
      'Nous proposons des systèmes hybrides qui combinent pompe à chaleur et chaudière pour optimiser votre confort et vos économies. Cette solution est particulièrement adaptée aux logements anciens ou aux régions où les températures hivernales sont très basses.',
      'MPC réalise une étude gratuite de votre installation pour déterminer la solution la plus adaptée à votre logement et à votre budget. Nous vous accompagnons également dans vos démarches pour obtenir les aides de l\'État (MaPrimeRénov\', Prime CEE, TVA réduite).',
      'Nos techniciens certifiés RGE assurent l\'installation complète en remplacement de votre ancienne chaudière, avec mise en service et formation. Nous gérons également le débranchement et l\'évacuation de votre ancien équipement dans le respect des normes environnementales.',
    ],
  },
  'collectif': {
    id: 'collectif',
    title: 'Chauffage collectif pour immeubles et bâtiments professionnels',
    description: 'MPC intervient pour vos besoins en chauffage collectif (copropriétés, bâtiments publics ou tertiaires).',
    benefits: [
      'Études techniques complètes',
      'Installation de grande envergure',
      'Mise en conformité réglementaire',
      'Maintenance et dépannage',
      'Optimisation énergétique',
      'Suivi de performance',
    ],
    content: [
      'MPC Chauffage possède une expertise reconnue dans l\'installation et la maintenance de systèmes de chauffage collectif pour les copropriétés, bâtiments publics et établissements tertiaires. Nous avons réalisé de nombreux projets pour des grands groupes comme Orange, Casino et Carrefour.',
      'Nous proposons un service complet qui comprend l\'étude technique détaillée, le dimensionnement des installations, la fourniture et pose des équipements, la mise en service et la formation des équipes techniques. Notre expérience nous permet de gérer des projets de toutes envergures.',
      'Nos solutions de chauffage collectif incluent les pompes à chaleur de grande puissance, les chaudières haute performance, les systèmes de production d\'eau chaude sanitaire, et les équipements de régulation et de comptage individuels. Nous assurons également la mise en conformité de vos installations existantes.',
      'MPC propose des contrats de maintenance adaptés aux besoins spécifiques des bâtiments collectifs et professionnels. Notre service technique intervient 7j/7 pour garantir la continuité de service et le confort des occupants. Nous assurons également le suivi des performances énergétiques pour optimiser vos consommations.',
    ],
  },
  'entretien': {
    id: 'entretien',
    title: 'Entretien de vos systèmes de chauffage',
    description: 'Prolongez la durée de vie de vos équipements grâce à un entretien régulier.',
    benefits: [
      'Prolonge la durée de vie',
      'Maintient les performances',
      'Réduit les pannes',
      'Sécurise votre installation',
      'Intervention rapide',
      'Contrat sur mesure',
    ],
    content: [
      'L\'entretien régulier de votre système de chauffage est essentiel pour garantir son bon fonctionnement, sa longévité et ses performances énergétiques. Un équipement bien entretenu consomme moins d\'énergie et tombe moins souvent en panne.',
      'MPC propose des contrats d\'entretien adaptés à tous types d\'équipements : pompes à chaleur (air/eau, air/air), chaudières (gaz, fioul, hybrides), climatisations et systèmes de chauffage collectif. Nos techniciens certifiés réalisent les contrôles réglementaires et les interventions préventives.',
      'Notre service d\'entretien comprend le nettoyage des composants, le contrôle des paramètres de fonctionnement, la vérification des niveaux de fluides, le test de sécurité, et le réglage optimal de votre installation. Nous établissons un compte-rendu détaillé après chaque intervention.',
      'Avec un contrat MPC, vous bénéficiez d\'un service réactif dans toute l\'Île-de-France. En cas de panne, nos équipes interviennent rapidement pour rétablir le fonctionnement de votre installation. Nous disposons d\'un stock de pièces détachées pour les marques principales, ce qui nous permet de résoudre la plupart des pannes dès la première visite.',
    ],
  },
};
