export interface ServiceData {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  content: string[];
  image: string;
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
    image: '/eau.webp',
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
    image: '/air.webp',
  },

  'chaudiere': {
    id: 'chaudiere',
    title: 'Chaudière à condensation – performance et économies d’énergie',
    description:
      "Optez pour une chaudière à condensation moderne et réduisez votre consommation énergétique jusqu’à 40%.",
    benefits: [
      "Économies d’énergie jusqu’à 40%",
      "Chauffage homogène et performant",
      "Compatible avec les radiateurs existants",
      "Entretien simplifié et durable",
    ],
    content: [
      "Les chaudières à condensation récupèrent la chaleur contenue dans les fumées de combustion pour préchauffer l’eau de chauffage, ce qui permet d’atteindre un rendement supérieur à 100% sur le PCI.",
      "Cette technologie permet une réduction importante de la consommation d’énergie et des émissions de CO₂.",
      "MPC Chauffage propose des chaudières à condensation adaptées à votre logement, avec un accompagnement complet de la pose à la maintenance.",
      "Nos installateurs certifiés vous garantissent une installation conforme, performante et éligible aux aides de l’État.",
    ],
    image: '/chaudiere.webp',
  },

  'ventilation': {
    id: 'ventilation',
    title: 'Systèmes de ventilation et traitement de l’air',
    description:
      "Assurez une qualité d’air optimale dans votre logement ou vos locaux grâce à nos solutions de ventilation performantes.",
    benefits: [
      "Améliore la qualité de l’air intérieur",
      "Élimine l’humidité et les polluants",
      "Réduit les risques de moisissures",
      "Systèmes silencieux et économiques",
    ],
    content: [
      "Une bonne ventilation est essentielle pour maintenir un air sain, éviter la condensation et préserver la santé des occupants.",
      "MPC installe des systèmes de VMC simple et double flux ainsi que des centrales de traitement d’air pour les bâtiments collectifs ou tertiaires.",
      "Nos experts réalisent une étude complète pour garantir le bon dimensionnement de votre installation et un renouvellement d’air optimal.",
      "Avec MPC, bénéficiez d’un confort intérieur durable et d’une réduction des coûts de chauffage grâce à une meilleure circulation de l’air.",
    ],
    image: '/ventilation.webp',
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
    image: '/collectif.webp',
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
    image: '/entretien.webp',
  },
};
