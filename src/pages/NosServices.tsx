import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/services";

export default function NosServices() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nos services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.values(servicesData).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenu visible en permanence */}
              <div className="p-6 flex flex-col justify-between h-[300px]">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>

                {/* Boutons visibles */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate("/contact")}
                    className="flex-1 bg-blue-700 text-white border-2 border-blue-700 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-all"
                  >
                    Obtenir un devis
                  </button>
                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="flex-1 bg-white text-blue-700 border-2 border-blue-700 py-3 rounded-md font-medium hover:bg-blue-700 hover:text-white transition-all"
                  >
                    En savoir plus
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
