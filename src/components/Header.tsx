import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, Clock } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Ferme le menu si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesList = [
    { id: 'air-eau', label: 'PAC Air/Eau' },
    { id: 'air-air', label: 'PAC Air/Air' },
    { id: 'chaudiere', label: 'Chaudière' },
    { id: 'ventilation', label: 'Ventilation' },
    { id: 'collectif', label: 'Chauffage Collectif' },
    { id: 'entretien', label: 'Entretien' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 shadow-md">
      {/* Barre supérieure */}
      <div className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-end items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-100" />
            <a href="mailto:paul-adc@mpc75.fr" className="hover:text-blue-200 transition-colors">
              paul-adc@mpc75.fr
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-blue-100" />
            <a href="tel:+33685717013" className="hover:text-blue-200 transition-colors">
              06 85 71 70 13
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-blue-100" />
            <span>Lun - Ven : 8h00 - 18h00</span>
          </div>
        </div>
      </div>

      {/* Navbar principale */}
      <div className="bg-white/90 backdrop-blur-md">
        <div ref={menuRef} className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
{/* ✅ Logo agrandi */}
<button
  onClick={() => {
    onNavigate('home');
    setMenuOpen(false);
    setServicesOpen(false);
  }}
  className="flex items-center gap-2"
>
  <img
    src="/MPC.png"
    alt="MPC Chauffage"
    className="h-16 sm:h-20 w-auto object-contain"
  />
</button>


          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`font-medium flex items-center gap-1 ${
                  currentPage.startsWith('air') ||
                  ['chaudiere', 'ventilation', 'collectif', 'entretien'].includes(currentPage)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Nos services
                <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-100 rounded-lg py-2 w-56">
                  {servicesList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setServicesOpen(false);
                        setMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onNavigate('home');
                setMenuOpen(false);
                setServicesOpen(false);
              }}
              className={`font-medium ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Accueil
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setMenuOpen(false);
                setServicesOpen(false);
              }}
              className={`font-medium ${
                currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </button>

            {/* CTA Desktop */}
            <button
              onClick={() => {
                onNavigate('contact');
                setMenuOpen(false);
                setServicesOpen(false);
              }}
              className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-colors"
            >
              Obtenir un devis
            </button>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 px-4" ref={dropdownRef}>
            <button
              onClick={() => {
                onNavigate('home');
                setMenuOpen(false);
                setServicesOpen(false);
              }}
              className={`text-left py-2 font-medium ${
                currentPage === 'home'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Accueil
            </button>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-left py-2 font-medium text-gray-700 hover:text-blue-600"
              >
                Nos services
                <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className="flex flex-col pl-4">
                  {servicesList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setMenuOpen(false);
                        setServicesOpen(false);
                      }}
                      className="text-left py-2 text-gray-700 hover:text-blue-600"
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
                setServicesOpen(false);
              }}
              className={`text-left py-2 font-medium ${
                currentPage === 'contact'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setMenuOpen(false);
                setServicesOpen(false);
              }}
              className="mt-2 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-colors"
            >
              Obtenir un devis
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
