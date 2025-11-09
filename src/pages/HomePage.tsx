import { Droplet, Wind, Flame, Building2, Wrench, CheckCircle, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      id: 'air-eau',
      icon: Droplet,
      title: 'Pompe à chaleur air/eau',
      description: "Solution performante pour chauffer votre habitation tout en réalisant des économies d'énergie",
    },
    {
      id: 'air-air',
      icon: Wind,
      title: 'Pompe à chaleur air/air',
      description: "Chauffage et climatisation en un seul système pour un confort optimal toute l'année",
    },
    {
      id: 'chaudiere',
      icon: Flame,
      title: 'PAC Chaudière',
      description: 'Remplacez votre ancienne chaudière par une pompe à chaleur moderne et écologique',
    },
    {
      id: 'collectif',
      icon: Building2,
      title: 'Chauffage collectif',
      description: 'Solutions complètes pour immeubles et bâtiments professionnels',
    },
    {
      id: 'entretien',
      icon: Wrench,
      title: 'Entretien',
      description: 'Maintenance et entretien de vos équipements pour garantir leur durabilité',
    },
  ];

  const clients = [
    { name: 'Orange', color: 'text-orange-500' },
    { name: 'Casino', color: 'text-red-600' },
    { name: 'Carrefour', color: 'text-blue-600' },
  ];

  const testimonials = [
    {
      name: 'Sophie M.',
      location: 'Paris 15e',
      text: "Installation rapide et professionnelle. Notre facture de chauffage a diminué de 40%. Je recommande vivement MPC !",
      rating: 5,
    },
    {
      name: 'Laurent D.',
      location: 'Versailles',
      text: 'Excellent service, équipe très compétente. La pompe à chaleur fonctionne parfaitement depuis 2 ans.',
      rating: 5,
    },
    {
      name: 'Marie C.',
      location: 'Boulogne-Billancourt',
      text: 'Devis clair, travaux réalisés dans les délais. Très satisfaite de mon investissement.',
      rating: 5,
    },
  ];

  return (
    <div>

      {/* HERO */}
      <section className="relative w-full h-[85vh] md:h-[90vh]">
        <img
          src="/pac.webp"
          alt="Pompe à chaleur installée par MPC Chauffage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white px-6 md:px-20">
          <h1 className="text-3xl md:text-5xl mb-4 font-medium max-w-2xl leading-tight">
            Réduisez vos factures jusqu'à 40% <br /> avec MPC Chauffage
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-lg mb-8">
            Experts en pompes à chaleur, nous vous accompagnons dans tous vos projets de chauffage et climatisation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('air-eau')}
              className="bg-white text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-base sm:text-lg hover:bg-blue-700 hover:text-white border-2 border-white transition-all"
            >
              Découvrir nos solutions
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-base sm:text-lg hover:bg-white hover:text-blue-700 border-2 border-blue-700 transition-all"
            >
              Économiser maintenant
            </button>
          </div>
        </div>
      </section>

      {/* ILS NOUS FONT CONFIANCE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Des grands groupes et des milliers de particuliers
            </p>
          </div>

          <div className="flex justify-center items-center gap-12 flex-wrap mb-12">
            {clients.map((client) => (
              <div key={client.name} className={`text-4xl font-bold ${client.color}`}>
                {client.name}
              </div>
            ))}
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-700">
                Plus de 1000 installations réalisées en Île-de-France
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-700">
                Certifié RGE - Éligible aux aides de l'État
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-700">
                Intervention rapide - Devis sous 24h
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-700">
                Garantie décennale - Service après-vente réactif
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions complètes pour tous vos besoins en chauffage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => onNavigate(service.id)}
                >
                  <Icon className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(service.id);
                    }}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    En savoir plus →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

   {/* AVIS GOOGLE */}
<section id="avis" className="py-16 bg-gray-50 overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <img
      src="/Google-logo.svg"
      alt="Avis Google"
      className="w-20 h-20 object-contain mx-auto mb-4"
    />
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
      Ils parlent de nous
    </h2>
    <p className="text-lg text-gray-700 mb-10">
      <span className="font-bold text-blue-600">★★★★★</span> 4.9/5 sur Google
    </p>

    {/* Carrousel d'avis */}
    <div className="relative">
      <div
        className="flex gap-6 animate-scroll"
        style={{
          animation: 'scroll 40s linear infinite',
        }}
      >
        {[
          {
            name: 'Sophie M.',
            location: 'Paris 15e',
            text: "Travail impeccable et équipe très professionnelle. Ma pompe à chaleur fonctionne à merveille !",
            rating: 5,
          },
          {
            name: 'Laurent D.',
            location: 'Versailles',
            text: "Installation rapide, équipe au top. J’ai fait 35% d’économie dès la première année.",
            rating: 5,
          },
          {
            name: 'Marie C.',
            location: 'Boulogne-Billancourt',
            text: "Service client réactif et techniciens très compétents. Je recommande sans hésiter.",
            rating: 5,
          },
          {
            name: 'Julie R.',
            location: 'Nanterre',
            text: "Devis clair, travaux rapides et résultat parfait. Très satisfaite de MPC Chauffage.",
            rating: 5,
          },
          {
            name: 'Antoine L.',
            location: 'Saint-Denis',
            text: "Excellente expérience. Installation propre et équipe très respectueuse.",
            rating: 5,
          },
          {
            name: 'Caroline T.',
            location: 'Levallois',
            text: "Service après-vente super réactif, je me sens en confiance avec MPC.",
            rating: 5,
          },
          {
            name: 'Nicolas P.',
            location: 'Fontenay-aux-Roses',
            text: "Un vrai gain d’énergie et un confort incroyable depuis l’installation !",
            rating: 5,
          },
          {
            name: 'Emma D.',
            location: 'Créteil',
            text: "Professionnalisme, ponctualité et efficacité. Une entreprise que je recommande vivement.",
            rating: 5,
          },
        ].map((review, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[360px] bg-white rounded-lg p-6 shadow-md border border-gray-100"
          >
            <div className="flex gap-1 mb-3 justify-center">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-blue-600"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.436a1 1 0 00.95.69h3.616c.969 0 1.371 1.24.588 1.81l-2.925 2.13a1 1 0 00-.364 1.118l1.12 3.437c.3.92-.755 1.688-1.54 1.118L10 13.347l-2.936 2.129c-.784.57-1.838-.198-1.539-1.118l1.12-3.437a1 1 0 00-.364-1.118L3.356 8.863c-.783-.57-.38-1.81.588-1.81h3.616a1 1 0 00.95-.69l1.12-3.436z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-3 italic text-sm md:text-base">"{review.text}"</p>
            <p className="font-semibold text-gray-900">{review.name}</p>
            <p className="text-sm text-gray-500">{review.location}</p>
          </div>
        ))}

        {/* Duplicate for infinite loop */}
        {[
          ...Array(8).fill({
            name: 'Avis client',
            location: 'IDF',
            text: "Entreprise sérieuse et efficace. Très bonne expérience avec MPC.",
            rating: 5,
          }),
        ].map((review, index) => (
          <div
            key={`duplicate-${index}`}
            className="min-w-[300px] md:min-w-[360px] bg-white rounded-lg p-6 shadow-md border border-gray-100 opacity-80"
          >
            <div className="flex gap-1 mb-3 justify-center">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-blue-600"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.436a1 1 0 00.95.69h3.616c.969 0 1.371 1.24.588 1.81l-2.925 2.13a1 1 0 00-.364 1.118l1.12 3.437c.3.92-.755 1.688-1.54 1.118L10 13.347l-2.936 2.129c-.784.57-1.838-.198-1.539-1.118l1.12-3.437a1 1 0 00-.364-1.118L3.356 8.863c-.783-.57-.38-1.81.588-1.81h3.616a1 1 0 00.95-.69l1.12-3.436z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-3 italic text-sm md:text-base">"{review.text}"</p>
            <p className="font-semibold text-gray-900">{review.name}</p>
            <p className="text-sm text-gray-500">{review.location}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Animation CSS */}
  <style>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>


      {/* CTA FINAL */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à réduire votre facture énergétique ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Demander un devis gratuit
          </button>
        </div>
      </section>

    </div>
  );
}
