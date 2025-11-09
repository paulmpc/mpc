import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'air-eau', label: 'PAC Air/Eau' },
    { id: 'air-air', label: 'PAC Air/Air' },
    { id: 'chaudiere', label: 'PAC Chaudière' },
    { id: 'collectif', label: 'Chauffage Collectif' },
    { id: 'entretien', label: 'Entretien' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-blue-100">
            <Phone size={16} />
            <span>01 23 45 67 89</span>
          </a>
          <a href="mailto:contact@mpc-chauffage.fr" className="flex items-center gap-2 hover:text-blue-100">
            <Mail size={16} />
            <span>contact@mpc-chauffage.fr</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-blue-600 hover:text-blue-700"
          >
            MPC Chauffage
          </button>

          <button
            className="md:hidden text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMenuOpen(false);
                }}
                className={`text-left py-2 font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
