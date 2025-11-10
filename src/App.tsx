import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import { servicesData } from "./data/services";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);

  const handleNavigate = (page: string, section?: string) => {
    setCurrentPage(page);
    setScrollToSection(section || null);
  };

  useEffect(() => {
    const pageTitle =
      currentPage === "home"
        ? "MPC Chauffage - Expert en pompes à chaleur en Île-de-France"
        : currentPage === "contact"
        ? "Contact - MPC Chauffage"
        : servicesData[currentPage]?.title || "MPC Chauffage";

    document.title = pageTitle;
  }, [currentPage]);

  const renderPage = () => {
    // 🏠 Page d’accueil classique
    if (currentPage === "home") {
      return (
        <HomePage onNavigate={handleNavigate} scrollToSection={scrollToSection} />
      );
    }

    // 📞 Page contact
    if (currentPage === "contact") {
      return <ContactPage />;
    }

    // 🔙 Retour à la section "Nos services"
    if (currentPage === "nos-services") {
      return <HomePage onNavigate={handleNavigate} scrollToSection="services" />;
    }

    // ⚙️ Pages descriptives dynamiques
    if (servicesData[currentPage]) {
      const service = servicesData[currentPage];
      return (
        <ServicePage
          title={service.title}
          description={service.description}
          benefits={service.benefits}
          content={service.content}
          image={service.image}
          onNavigate={handleNavigate}
        />
      );
    }

    // 🧭 Fallback
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
