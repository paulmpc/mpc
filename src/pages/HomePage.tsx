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
      text: 'Installation rapide et professionnelle. Notre facture de chauffage a diminué de 40%. Je recommande vivement MPC !',
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

<section
  className="relative min-h-screen bg-cover bg-center text-white flex items-center mt-20"
  style={{
    backgroundImage: "url('/pac.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="relative z-10 w-full px-6 sm:px-8 md:px-20 lg:px-32 flex flex-col md:items-start items-center justify-center text-center md:text-left">
    <div className="max-w-xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
        Réduisez vos factures jusqu’à{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-extrabold">
          40 %
        </span>
        . <br className="hidden sm:block" />
        Avec MPC,{" "}
        <span className="text-blue-400 italic font-semibold">osez économiser</span>.
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-10 drop-shadow-md">
        Des solutions performantes et durables pour votre confort énergétique.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
        <button
          onClick={() => onNavigate('contact')}
          className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors"
        >
          Demander un devis gratuit
        </button>

        <a
          href="tel:+33123456789"
          className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-700 transition-colors"
        >
          01 23 45 67 89
        </a>
      </div>
    </div>
  </div>
</section>




      {/* SERVICES */}
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

      {/* TÉMOIGNAGES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages clients
            </h2>
            <p className="text-xl text-gray-600">
              Ce que nos clients disent de nous
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE D’INTERVENTION */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zone d'intervention
            </h2>
            <p className="text-xl text-blue-100">
              Nous intervenons dans toute l'Île-de-France
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {['Paris', 'Hauts-de-Seine', 'Seine-Saint-Denis', 'Val-de-Marne',
              'Essonne', 'Yvelines', "Val-d'Oise", 'Seine-et-Marne'].map((dept) => (
              <div key={dept} className="bg-blue-700 rounded-lg py-4 px-6">
                <p className="font-semibold">{dept}</p>
              </div>
            ))}
          </div>
        </div>
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
