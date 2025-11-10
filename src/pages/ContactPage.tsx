import { Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-gray-50 overflow-hidden">
      {/* 🧱 IMAGE + FORMULAIRE */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-0 rounded-2xl overflow-hidden shadow-lg">
          {/* ✅ Image sans effet de zoom */}
          <div className="relative w-full h-[700px] flex items-center justify-center bg-gray-100">
            <img
              src="/contact.webp"
              alt="Contact MPC Chauffage"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* ✅ Formulaire à droite */}
          <div className="bg-white p-10 flex flex-col justify-center">
            <ContactForm compact={false} />
          </div>
        </div>
      </div>

      {/* 🕒 Coordonnées en dessous — fond blanc texte bleu */}
      <div className="bg-white text-blue-600 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Phone className="mx-auto mb-3" size={28} />
            <p className="text-lg font-semibold">06 85 71 70 13</p>
            <p className="text-blue-400">Appelez-nous directement</p>
          </div>

          <div>
            <Mail className="mx-auto mb-3" size={28} />
            <p className="text-lg font-semibold">contact@mpc-chauffage.fr</p>
            <p className="text-blue-400">Réponse sous 24h</p>
          </div>

          <div>
            <Clock className="mx-auto mb-3" size={28} />
            <p className="text-lg font-semibold">Lun - Ven : 8h00 - 18h00</p>
            <p className="text-blue-400">Intervention rapide en IDF</p>
          </div>
        </div>
      </div>
    </section>
  );
}
