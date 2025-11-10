import { useEffect } from "react";
import { Droplet, Wind, Flame, Wrench, CheckCircle, Hammer, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { StatsCard } from "../components/ui/activity-stats-card";
import { TestimonialsColumn } from "../components/blocks/testimonials-columns-1";

interface HomePageProps {
  onNavigate: (page: string, section?: string) => void;
  scrollToSection?: string | null;
}

export default function HomePage({ onNavigate, scrollToSection }: HomePageProps) {
  useEffect(() => {
    if (scrollToSection === "services") {
      const sectionEl = document.getElementById("services");
      if (sectionEl) {
        const y = sectionEl.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "auto" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [scrollToSection]);


  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
        <img
          src="/pac.webp"
          alt="Pompe à chaleur installée par MPC Chauffage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white px-6 md:px-20">
          <h1 className="text-3xl md:text-5xl mb-4 font-medium max-w-2xl leading-tight">
          Une solution adapté à vos besoins   <br /> pour un confort tout au long de  l'année.
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-lg mb-8">
            Experts en pompes à chaleur, nous vous accompagnons dans tous vos projets de chauffage et climatisation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("air-eau")}
              className="bg-white text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-base sm:text-lg hover:bg-blue-700 hover:text-white border-2 border-white transition-all"
            >
              Découvrir nos solutions
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-base sm:text-lg hover:bg-white hover:text-blue-700 border-2 border-blue-700 transition-all"
            >
              Économiser maintenant
            </button>
          </div>
        </div>
      </section>

      {/* ✅ ILS NOUS FONT CONFIANCE */}
      <section className="pt-36 pb-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-24">
            Ils nous font confiance
          </h2>

          <div className="relative w-full overflow-hidden mb-36">
            <div
              className="flex items-center justify-center gap-14 animate-scroll-infinite"
              style={{ animation: "scroll-left 35s linear infinite" }}
            >
              {[
                "orange.svg",
                "carrefour.svg",
                "casino.svg",
                "cedeo.png",
                "plateforme.png",
                "pointp.png",
                "isover.png",
              ].map((logo, i) => (
                <img key={i} src={`/${logo}`} alt={logo} className="h-12 md:h-14 object-contain" />
              ))}
              {[
                "orange.svg",
                "carrefour.svg",
                "casino.svg",
                "cedeo.png",
                "plateforme.png",
                "pointp.png",
                "isover.png",
              ].map((logo, i) => (
                <img key={`dup-${i}`} src={`/${logo}`} alt={logo} className="h-12 md:h-14 object-contain" />
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-20">
            {/* + INSTALLATIONS */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <StatsCard
                icon={
                  <div className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 bg-white transition-all duration-300 hover:bg-blue-600">
                    <CheckCircle className="w-6 h-6 transition-all duration-300 group-hover:stroke-white" stroke="#2563eb" fill="none" strokeWidth={2.2} />
                  </div>
                }
                title="+ Installations"
                metric={200}
                subtext="Réalisées partout en Île-de-France"
                className="mx-auto bg-white border border-blue-600 text-blue-700 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all [&_h2]:text-blue-600 [&_span]:text-blue-600"
              />
            </motion.div>

            {/* GARANTIE DÉCENNALE */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }}>
              <StatsCard
                icon={
                  <div className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 bg-white transition-all duration-300 hover:bg-blue-600">
                    <Hammer className="w-6 h-6 transition-all duration-300 group-hover:stroke-white" stroke="#2563eb" fill="none" strokeWidth={2.2} />
                  </div>
                }
                title="Garantie décennale"
                metric={10}
                metricUnit={<span className="text-blue-600"> ans</span>}
                subtext="De protection sur vos installations"
                className="mx-auto bg-white border border-blue-600 text-blue-700 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all [&_h2]:text-blue-600"
              />
            </motion.div>

            {/* SATISFACTION CLIENT */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
              <StatsCard
                icon={
                  <div className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 bg-white transition-all duration-300 hover:bg-blue-600">
                    <Smile className="w-6 h-6 transition-all duration-300 group-hover:stroke-white" stroke="#2563eb" fill="none" strokeWidth={2.2} />
                  </div>
                }
                title="Satisfaction client"
                metric={90}
                metricUnit={<span className="text-blue-600">%</span>}
                subtext="De nos clients nous recommandent"
                className="mx-auto bg-white border border-blue-600 text-blue-700 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all [&_h2]:text-blue-600"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animation carrousel logos */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite:hover { animation-play-state: paused; }
      `}</style>

      {/* ✅ NOS SERVICES */}
      <section id="services" className="pt-24 pb-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16">
            Nos services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { img: "/eau.webp", title: "Pompe à chaleur Air/Eau", text: "Chauffez votre maison et votre eau avec une pompe à chaleur performante et économique.", link: "air-eau" },
              { img: "/air.webp", title: "Pompe à chaleur Air/Air", text: "Chauffage et climatisation réversible pour un confort optimal toute l'année.", link: "air-air" },
              { img: "/entretien.webp", title: "Entretien & Dépannage", text: "Entretien régulier et dépannage rapide par nos techniciens qualifiés.", link: "entretien" },
              { img: "/collectif.webp", title: "Chauffage collectif", text: "Solutions de chauffage centralisées pour copropriétés et immeubles.", link: "collectif" },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:bg-blue-600 relative"
              >
                <div className="overflow-hidden h-80">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 pt-8 text-left flex flex-col justify-between h-[330px] transition-all duration-300 group-hover:text-white">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed mb-6">
                      {service.text}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-wrap gap-3">
                    <button
                      onClick={() => onNavigate("contact")}
                      className="flex-1 bg-white text-blue-600 py-3 rounded-md font-medium hover:bg-blue-100 transition-all"
                    >
                      Obtenir un devis
                    </button>
                    <button
                      onClick={() => onNavigate(service.link)}
                      className="flex-1 border-2 border-white text-white py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-all"
                    >
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ✅ AVIS GOOGLE */}
            <section
        id="avis"
        className="pt-28 pb-28 bg-white border-t border-gray-100 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-36">
            Ils parlent de nous
          </h2>

          <div className="flex flex-col items-center mb-12">
            <img
              src="/Google-logo.svg"
              alt="Avis Google"
              className="w-28 h-auto object-contain mb-3"
            />
            <p className="text-lg text-gray-700">
              <span className="font-bold text-blue-600 text-xl">★★★★★</span> 4.9/5 sur Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center overflow-hidden h-[420px]">
            <TestimonialsColumn
              duration={20}
              testimonials={[
                { text: "Travail impeccable et équipe très professionnelle.", image: "https://i.pravatar.cc/100?img=1", name: "Sophie M.", role: "Paris 15e" },
                { text: "Installation rapide et efficace. Très pro.", image: "https://i.pravatar.cc/100?img=2", name: "Laurent D.", role: "Versailles" },
                { text: "Service client réactif et installation propre.", image: "https://i.pravatar.cc/100?img=3", name: "Marie C.", role: "Boulogne-Billancourt" },
              ]}
            />

            <TestimonialsColumn
              duration={24}
              testimonials={[
                { text: "Je recommande MPC à 100% ! Travail soigné et ponctuel.", image: "https://i.pravatar.cc/100?img=4", name: "Antoine P.", role: "Nanterre" },
                { text: "Techniciens au top, très professionnels.", image: "https://i.pravatar.cc/100?img=5", name: "Julie T.", role: "Saint-Cloud" },
                { text: "Excellent suivi après installation.", image: "https://i.pravatar.cc/100?img=6", name: "Clara B.", role: "Rueil-Malmaison" },
              ]}
            />

            <TestimonialsColumn
              duration={22}
              testimonials={[
                { text: "Très satisfait de ma pompe à chaleur installée par MPC.", image: "https://i.pravatar.cc/100?img=7", name: "Paul L.", role: "Pontoise" },
                { text: "Un vrai service client, ça fait plaisir.", image: "https://i.pravatar.cc/100?img=8", name: "Isabelle F.", role: "Meudon" },
                { text: "Rien à redire, entreprise sérieuse et réactive.", image: "https://i.pravatar.cc/100?img=9", name: "Marc A.", role: "Colombes" },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
