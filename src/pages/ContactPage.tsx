import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous conseiller
            et établir un devis gratuit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-blue-600 hover:text-blue-700">
                      01 23 45 67 89
                    </a>
                    <p className="text-sm text-gray-600">Lun - Ven : 8h - 19h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@mpc-chauffage.fr" className="text-blue-600 hover:text-blue-700">
                      contact@mpc-chauffage.fr
                    </a>
                    <p className="text-sm text-gray-600">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Zone d'intervention</h3>
                    <p className="text-gray-700">Toute l'Île-de-France</p>
                    <p className="text-sm text-gray-600">75, 77, 78, 91, 92, 93, 94, 95</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-700">Lundi - Vendredi : 8h - 19h</p>
                    <p className="text-gray-700">Samedi : 9h - 17h</p>
                    <p className="text-sm text-gray-600">Urgences 7j/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Devis gratuit et sans engagement
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Réponse sous 24h</li>
                  <li>✓ Étude personnalisée</li>
                  <li>✓ Conseils d'experts</li>
                  <li>✓ Accompagnement sur les aides</li>
                </ul>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir MPC Chauffage ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                15+
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Années d'expérience</h3>
              <p className="text-gray-600">Expertise reconnue</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                1k+
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Installations</h3>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                24h
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Réactivité</h3>
              <p className="text-gray-600">Devis rapide</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                RGE
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certifié</h3>
              <p className="text-gray-600">Éligible aux aides</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
