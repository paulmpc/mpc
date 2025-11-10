import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/services";

export default function NosServices() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nos services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {Object.values(servicesData).map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 transition-all duration-300 group-hover:text-white">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-blue-100 mb-6">
                  {service.description}
                </p>

                {/* Boutons visibles uniquement au hover sur desktop */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-md hover:bg-blue-100 transition"
                  >
                    En savoir plus
                  </button>
                  <button
                    onClick={() => navigate("/contact")}
                    className="border-2 border-white text-white font-semibold px-5 py-2 rounded-md hover:bg-white hover:text-blue-600 transition"
                  >
                    Obtenir un devis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
