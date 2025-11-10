export interface ServiceData {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  content: string[];
  image: string; // ✅ nouvelle propriété
}

export const servicesData: Record<string, ServiceData> = {
  'air-eau': {
    id: 'air-eau',
    title: 'Installation de pompe à chaleur air/eau en Île-de-France',
    description:
      "Faites des économies d'énergie avec la pompe à chaleur air/eau, idéale pour chauffer votre maison tout en respectant l'environnement.",
    benefits: [
      "Économies d'énergie jusqu'à 70%",
      'Solution écologique et durable',
      'Confort thermique optimal',
      'Garantie décennale',
    ],
    content: [
      "La pompe à chaleur air/eau est une solution de chauffage moderne et performante qui capte les calories présentes dans l'air extérieur pour chauffer l'eau de votre circuit de chauffage.",
      "MPC Chauffage vous accompagne de l'étude thermique à l'installation complète de votre pompe à chaleur air/eau.",
      "Nous intervenons partout en Île-de-France pour l'installation de pompes à chaleur adaptées à tous types de logements.",
      "Avec MPC, vous bénéficiez d'un service complet : étude personnalisée, installation professionnelle, mise en service, et service après-vente réactif.",
    ],
    image: '/eau.webp', // ✅ image corrigée
  },
  'air-air': {
    id: 'air-air',
    title: 'Solution pompe à chaleur air/air – confort et performance',
    description:
      'Vous cherchez une solution de chauffage et climatisation en un seul appareil ? Optez pour la pompe à chaleur air/air.',
    benefits: [
      'Chauffage et climatisation réversible',
      'Installation rapide',
      'Faible consommation électrique',
      "Confort toute l'année",
      'Système silencieux',
      'Télécommande et programmation',
    ],
    content: [
      "La pompe à chaleur air/air, également appelée climatisation réversible, est idéale pour chauffer votre logement en hiver et le rafraîchir en été.",
      "MPC installe et entretient vos pompes à chaleur air/air dans toute l'Île-de-France avec un service rapide et professionnel.",
      "Les modèles récents sont particulièrement silencieux et économes en énergie.",
      "Nous proposons des équipements de marques reconnues avec garantie constructeur et garantie décennale sur l'installation.",
    ],
    image: '/air.webp', // ✅ image corrigée
  },
  'chaudiere': {
    id: 'chaudiere',
    title: 'Remplacement de chaudière par une pompe à chaleur',
    description:
      'Remplacez votre ancienne chaudière par une pompe à chaleur plus performante et écologique.',
    benefits: [
      'Réduction de 40% de vos factures',
      'Solution hybride disponible',
      "Accompagnement sur les aides",
      'Installation en remplacement direct',
      'Compatible avec vos radiateurs',
    ],
    content: [
      "Vous possédez une chaudière gaz ou fioul vieillissante ? Il est temps de passer à une solution plus performante et respectueuse de l'environnement.",
      "Nous proposons des systèmes hybrides qui combinent pompe à chaleur et chaudière pour optimiser votre confort et vos économies.",
      "MPC réalise une étude gratuite de votre installation et vous accompagne dans les démarches pour obtenir les aides de l'État.",
      "Nos techniciens expérimentés assurent l'installation complète et la mise en service.",
    ],
    image: '/chaudiere.webp', // ✅ (si tu as ce fichier)
  },
  'collectif': {
    id: 'collectif',
    title: 'Chauffage collectif pour immeubles et bâtiments professionnels',
    description:
      'MPC intervient pour vos besoins en chauffage collectif (copropriétés, bâtiments publics ou tertiaires).',
    benefits: [
      'Études techniques complètes',
      'Mise en conformité réglementaire',
      'Maintenance et dépannage',
      'Optimisation énergétique',
    ],
    content: [
      "MPC Chauffage possède une expertise reconnue dans l'installation et la maintenance de systèmes de chauffage collectif pour les copropriétés, bâtiments publics et établissements tertiaires.",
      "Nous proposons un service complet incluant étude technique, pose, mise en service et suivi.",
      "Nos solutions incluent pompes à chaleur de grande puissance, chaudières haute performance et systèmes d'eau chaude sanitaire.",
      "MPC propose des contrats de maintenance adaptés et un service technique 7j/7.",
    ],
    image: '/collectif.webp', // ✅ image corrigée
  },
  'entretien': {
    id: 'entretien',
    title: 'Entretien de vos systèmes de chauffage',
    description:
      'Prolongez la durée de vie de vos équipements grâce à un entretien régulier.',
    benefits: [
      'Prolonge la durée de vie',
      'Maintient les performances',
      'Réduit les pannes',
      'Sécurise votre installation',
      'Intervention rapide',
    ],
    content: [
      "L'entretien régulier de votre système de chauffage est essentiel pour garantir son bon fonctionnement et ses performances énergétiques.",
      "MPC propose des contrats d'entretien adaptés à tous types d'équipements.",
      "Nos techniciens certifiés réalisent les contrôles réglementaires et les interventions préventives.",
      "Avec un contrat MPC, vous bénéficiez d'un service réactif dans toute l'Île-de-France.",
    ],
    image: '/entretien.webp', // ✅ image corrigée
  },
};
