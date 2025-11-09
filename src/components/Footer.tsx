import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">MPC Chauffage</h3>
            <p className="text-gray-300 mb-4">
              Votre expert en chauffage et entretien en Île-de-France
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={18} />
                <a href="tel:+33123456789" className="hover:text-blue-400">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={18} />
                <a href="mailto:contact@mpc-chauffage.fr" className="hover:text-blue-400">
                  contact@mpc-chauffage.fr
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} />
                <span>Île-de-France</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('air-eau')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Pompe à chaleur air/eau
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('air-air')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Pompe à chaleur air/air
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('chaudiere')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  PAC Chaudière
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collectif')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Chauffage collectif
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('entretien')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Entretien
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Certifié RGE</li>
              <li>Intervention 7j/7</li>
              <li>Devis gratuit</li>
              <li>Garantie décennale</li>
              <li>Zone: Île-de-France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MPC Chauffage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
