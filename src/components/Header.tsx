import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceItems = [
    { id: 'air-eau', label: 'PAC Air/Eau' },
    { id: 'air-air', label: 'PAC Air/Air' },
    { id: 'chaudiere', label: 'PAC Chaudière' },
    { id: 'collectif', label: 'Chauffage Collectif' },
    { id: 'entretien', label: 'Entretien' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
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
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`font-medium ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
              }`}
            >
              Accueil
            </button>

            {/* Dropdown Services */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`font-medium flex items-center gap-1 ${
                  servicesOpen || serviceItems.some(s => s.id === currentPage)
                    ? 'text-blue-600'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                Nos services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                  {serviceItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className={`font-medium ${
                currentPage === 'contact' ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
              }`}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button
              onClick={() => {
                onNavigate('home');
                setMenuOpen(false);
              }}
              className="text-left text-gray-700 hover:text-blue-600"
            >
              Accueil
            </button>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-left w-full flex justify-between items-center text-gray-700 hover:text-blue-600"
              >
                Nos services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {serviceItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setMenuOpen(false);
                      }}
                      className="text-left text-gray-700 hover:text-blue-600"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onNavigate('contact');
                setMenuOpen(false);
              }}
              className="text-left text-gray-700 hover:text-blue-600"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
