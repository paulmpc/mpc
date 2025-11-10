import { useEffect } from "react";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import ContactForm from "../components/ContactForm";

interface ServicePageProps {
  title: string;
  description: string;
  benefits: string[];
  content: string[];
  image?: string; // chemin type: "/air.webp"
  onNavigate: (page: string, section?: string) => void;
}

export default function ServicePage({
  title,
  description,
  benefits,
  content,
  image,
  onNavigate,
}: ServicePageProps) {
  // ✅ Scroll tout en haut à chaque ouverture de la page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // ✅ Retour à la section "Nos services"
  const handleBack = () => {
    onNavigate("home", "services");
  };

  const handleGoContact = () => {
    onNavigate("contact");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0);
  };

  return (
    <div className="bg-white">
      {/* HEADER DE PAGE AVEC BOUTON RETOUR */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={18} />
          Retour aux services
        </button>
      </div>

      {/* CARD PRINCIPALE : image gauche / texte droite */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* IMAGE */}
            <div className="relative min-h-[360px] md:min-h-[520px]">
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>

            {/* TEXTE */}
            <div className="p-6 md:p-10 flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {description}
              </p>

              {/* CTAs principaux */}
              <div className="mt-auto flex flex-wrap gap-3">
                <button
                  onClick={handleGoContact}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Demander un devis
                </button>
                <a
                  href="tel:+33123456789"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                >
                  <Phone size={20} />
                  06 85 71 70 13
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DÉTAILLÉ */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Texte + blocs côte à côte */}
          <div className="lg:col-span-2 space-y-10">
            <div className="prose max-w-none">
              {content.map((paragraph, i) => (
                <p key={i} className="text-lg text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* ✅ Les deux blocs côte à côte */}
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Bloc "Pourquoi choisir MPC ?" */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Pourquoi choisir MPC ?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 mt-0.5" size={20} />
                    <span>Garantie décennale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 mt-0.5" size={20} />
                    <span>SAV réactif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 mt-0.5" size={20} />
                    <span>Intervention rapide</span>
                  </li>
                </ul>
              </div>

              {/* Bloc "Les avantages de cette solution" */}
              <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Les avantages de cette solution
                </h3>
                <div className="space-y-3">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-blue-600 mt-0.5" size={20} />
                      <span className="text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : uniquement le formulaire */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <ContactForm compact />
            </div>
          </aside>
        </div>
      </section>

      {/* Bandeau devis */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nos experts vous répondent sous 24h
          </p>
          <button
            onClick={handleGoContact}
            className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Être rappelé rapidement
          </button>
        </div>
      </section>
    </div>
  );
}
