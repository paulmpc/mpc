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

  // 🔁 Navigation entre les pages
  const handleNavigate = (page: string, section?: string) => {
    setCurrentPage(page);
    setScrollToSection(section || null);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // 🧠 Mise à jour dynamique du titre du document
  useEffect(() => {
    const pageTitle =
      currentPage === "home"
        ? "MPC Chauffage - Expert en pompes à chaleur en Île-de-France"
        : currentPage === "contact"
        ? "Contact - MPC Chauffage"
        : servicesData[currentPage]?.title ||
          "MPC Chauffage - Solutions de chauffage et climatisation";

    document.title = pageTitle;
  }, [currentPage]);

  // 🧩 Rendu conditionnel des pages
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onNavigate={handleNavigate}
            scrollToSection={scrollToSection}
          />
        );

      case "contact":
        return <ContactPage />;

      case "nos-services":
        return (
          <HomePage
            onNavigate={handleNavigate}
            scrollToSection="services"
          />
        );

      default:
        // 🔹 Cas où la page correspond à un service (air-eau, air-air, chaudiere, ventilation, etc.)
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

        // 🔸 Fallback : retour à la home
        return (
          <HomePage
            onNavigate={handleNavigate}
            scrollToSection={scrollToSection}
          />
        );
    }
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
