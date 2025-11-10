import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import { servicesData } from './data/services';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageTitle = currentPage === 'home'
      ? 'MPC Chauffage - Expert en pompes à chaleur en Île-de-France'
      : currentPage === 'contact'
      ? 'Contact - MPC Chauffage'
      : servicesData[currentPage]?.title || 'MPC Chauffage';

    document.title = pageTitle;
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (currentPage === 'contact') {
      return <ContactPage />;
    }

    if (servicesData[currentPage]) {
      const service = servicesData[currentPage];
      return (
        <ServicePage
          title={service.title}
          description={service.description}
          benefits={service.benefits}
          content={service.content}
          image={service.image} // ✅ AJOUT DE L’IMAGE ICI
          onNavigate={handleNavigate}
        />
      );
    }
    
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
