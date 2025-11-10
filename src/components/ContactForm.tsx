import { useState } from "react";

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    ville: "",
    codePostal: "",
    objet: "Pompe à chaleur air/eau",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const mailto = `mailto:contact@mpc-chauffage.fr?subject=${encodeURIComponent(
      `Demande de contact - ${formData.objet}`
    )}&body=${encodeURIComponent(
      `
Nom : ${formData.nom}
Prénom : ${formData.prenom}
Téléphone : ${formData.telephone}
Ville : ${formData.ville}
Code postal : ${formData.codePostal}
Objet : ${formData.objet}

Merci de me contacter pour discuter de mon projet.
`
    )}`;

    window.location.href = mailto;
    setSuccess(true);
    setFormData({
      nom: "",
      prenom: "",
      telephone: "",
      ville: "",
      codePostal: "",
      objet: "Pompe à chaleur air/eau",
    });
    setLoading(false);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg ${compact ? "p-6" : "p-10"}`}>
      {/* ✅ Nouveau titre modernisé */}
      <div className="text-center mb-8">
        <p className="text-blue-500 uppercase text-sm tracking-wide mb-2">
          Contactez-nous
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
          Quel est votre projet ?
        </h3>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-md text-center">
          ✅ Votre email a été préparé — envoyez-le depuis votre messagerie !
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nom *</label>
            <input
              type="text"
              required
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Prénom *</label>
            <input
              type="text"
              required
              value={formData.prenom}
              onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Téléphone *</label>
          <input
            type="tel"
            required
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ville *</label>
            <input
              type="text"
              required
              value={formData.ville}
              onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Code postal *</label>
            <input
              type="text"
              required
              pattern="[0-9]{5}"
              value={formData.codePostal}
              onChange={(e) =>
                setFormData({ ...formData, codePostal: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Objet *</label>
          <select
            value={formData.objet}
            onChange={(e) =>
              setFormData({ ...formData, objet: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md"
          >
            <option>Pompe à chaleur air/eau</option>
            <option>Pompe à chaleur air/air</option>
            <option>Chaudière</option>
            <option>Chauffage collectif</option>
            <option>Entretien</option>
            <option>Ventilation</option> {/* ✅ ajout ici */}
            <option>Autre</option>
          </select>
        </div>

        {/* ✅ Nouveau CTA */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50 transition-all"
        >
          {loading ? "Envoi..." : "Lançons votre projet "}
        </button>
      </form>
    </div>
  );
}
