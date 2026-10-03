"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, PlusCircle, Building2, Globe2, DollarSign } from "lucide-react";

export default function PublierOpportunitePage() {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "Financement",
    country: "Haïti",
    budget: "",
    company: "",
    email: "",
    phone: "",
    description: "",
    requirements: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/admin/opportunities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          flag: form.country.toLowerCase().includes('haïti') || form.country.toLowerCase().includes('haiti') ? '🇭🇹' : '🌐',
          deadline: 'À déterminer'
        })
      });
    } catch (err) {}
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <Link href="/opportunites" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Retour aux opportunités
        </Link>

        <div className="bg-[#131B2F] border border-[#1E293B] rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="mb-8">
            <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
              Publication B2B
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Publier une Opportunité d'Affaires</h1>
            <p className="text-slate-400 text-xs">
              Remplissez ce formulaire pour soumettre votre appel d'offres, recherche de financement ou proposition de partenariat aux membres du réseau PozitivEx+.
            </p>
          </div>

          {success ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Opportunité soumise avec succès !</h2>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">
                Votre annonce a été enregistrée. Elle est en cours de modération et sera diffusée sur la plateforme sous 12h ouvrées.
              </p>
              <Link
                href="/opportunites"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
              >
                Retourner à la bourse d'opportunités
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Titre de l'opportunité *</label>
                <input
                  required
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  placeholder="Ex: Recherche d'un distributeur exclusif pour produits agroalimentaires"
                  className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Catégorie *</label>
                  <select
                    value={form.category}
                    onChange={e => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Financement">Financement & Levée de fonds</option>
                    <option value="Partenariat">Partenariat Commercial</option>
                    <option value="Appel d'Offres">Appel d'Offres</option>
                    <option value="Agro-Export">Agro-Export & Logistique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Pays / Territoire concerné *</label>
                  <input
                    required
                    value={form.country}
                    onChange={e => setForm({ ...form, country: e.target.value })}
                    placeholder="Ex: Haïti / Rép. Dominicaine / Caraïbe"
                    className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Budget ou Financement visé</label>
                  <input
                    value={form.budget}
                    onChange={e => setForm({ ...form, budget: e.target.value })}
                    placeholder="Ex: $50,000 USD / À négocier"
                    className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Nom de l'Organisation / Entreprise *</label>
                  <input
                    required
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    placeholder="Ex: Caraïbe Tech S.A."
                    className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Email de contact *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="contact@entreprise.com"
                    className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Téléphone / WhatsApp</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+509 ... / +1 ..."
                    className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Description détaillée de l'opportunité *</label>
                <textarea
                  required
                  rows={4}
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  placeholder="Précisez le contexte, les opportunités de marché et le retour attendu..."
                  className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-lg shadow-blue-600/30"
              >
                Soumettre l'opportunité pour validation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
