import { Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { id: 'air-eau', label: 'PAC Air/Eau' },
    { id: 'air-air', label: 'PAC Air/Air' },
    { id: 'chaudiere', label: 'PAC Chaudière' },
    { id: 'collectif', label: 'Chauffage Collectif' },
    { id: 'entretien', label: 'Entretien' },
  ];

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Nos services', children: services },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Bandeau supérieur */}
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

      {/* Barre de navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-blue-600 hover:text-blue-700"
          >
            MPC Chauffage
          </button>

          {/* Bouton mobile */}
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

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center gap-1 font-medium transition-colors ${
                      currentPage.startsWith('air') ||
                      currentPage === 'chaudiere' ||
                      currentPage === 'collectif' ||
                      currentPage === 'entretien'
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`mt-0.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
                      {item.children.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onNavigate(sub.id);
                            setServicesOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
          </nav>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t pt-4">
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.id}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between items-center text-left py-2 font-medium text-gray-700 hover:text-blue-600 w-full"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 flex flex-col gap-2 mt-2">
                      {item.children.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onNavigate(sub.id);
                            setMenuOpen(false);
                            setServicesOpen(false);
                          }}
                          className="text-left text-gray-600 hover:text-blue-600"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
