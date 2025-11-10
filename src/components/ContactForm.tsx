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
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/xovyqqqa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          nom: "",
          prenom: "",
          telephone: "",
          ville: "",
          codePostal: "",
          objet: "Pompe à chaleur air/eau",
        });
      } else {
        throw new Error("Erreur serveur");
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg ${compact ? "p-6" : "p-10"}`}>
      {/* ✅ Titre modernisé */}
      <div className="text-center mb-8">
        <p className="text-blue-500 uppercase text-sm tracking-wide mb-2">
          Contactez-nous
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
          Quel est votre projet ?
        </h3>
      </div>

      {/* ✅ Messages de feedback */}
      {success && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md text-center">
          ✅ Votre message a bien été envoyé, merci ! Nous vous répondrons rapidement.
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md text-center">
          ❌ Une erreur est survenue. Veuillez réessayer plus tard.
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
              name="nom"
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
              name="prenom"
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
            name="telephone"
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
              name="ville"
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
              name="codePostal"
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
            name="objet"
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

        {/* ✅ Bouton CTA */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50 transition-all"
        >
          {loading ? "Envoi..." : "Lançons votre projet"}
        </button>
      </form>
    </div>
  );
}
