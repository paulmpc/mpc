import { CheckCircle, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

interface ServicePageProps {
  title: string;
  description: string;
  benefits: string[];
  content: string[];
  image?: string;
  onNavigate: (page: string) => void;
}

export default function ServicePage({
  title,
  description,
  benefits,
  content,
  onNavigate,
}: ServicePageProps) {
  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none mb-12">
                {content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Les avantages de cette solution
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Installation certifiée RGE
                </h3>
                <p className="text-gray-300 mb-6">
                  Nos techniciens certifiés RGE vous garantissent une installation conforme aux normes
                  en vigueur. Bénéficiez des aides de l'État pour votre projet.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Demander un devis
                  </button>
                  <a
                    href="tel:+33123456789"
                    className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2"
                  >
                    <Phone size={20} />
                    01 23 45 67 89
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm compact />

                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">
                    Pourquoi choisir MPC ?
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Devis gratuit sous 24h</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Certifié RGE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Garantie décennale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>SAV réactif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Intervention rapide</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nos experts vous répondent sous 24h
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Être rappelé gratuitement
          </button>
        </div>
      </section>
    </div>
  );
}
