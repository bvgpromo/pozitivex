"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, PlusCircle, Search, MapPin, DollarSign, 
  Calendar, Building2, CheckCircle2, ArrowRight, Filter,
  Tag, Clock, Mail
} from "lucide-react";

interface Opportunity {
  id: string;
  title: string;
  category: "Financement" | "Partenariat" | "Appel d'Offres" | "Agro-Export";
  location: string;
  country: string;
  flag: string;
  budget: string;
  deadline: string;
  company: string;
  description: string;
  requirements: string[];
}

const OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-1",
    title: "Recherche d'Investisseurs pour Usine Solaire de Traitement de Cacao Bio",
    category: "Financement",
    location: "Cap-Haïtien",
    country: "Haïti",
    flag: "🇭🇹",
    budget: "$350,000 USD",
    deadline: "15 Décembre 2026",
    company: "NordAgro Coopérative S.A.",
    description: "Projet de modernisation de la chaîne de fermentation et de séchage solaire de cacao d'exportation certifié équitable. Rendement prévisionnel (TRI) : 18.5% sur 5 ans.",
    requirements: ["Ticket d'entrée min : $25,000", "Participation au capital ou obligation convertible", "Audits disponibles sous NDA"]
  },
  {
    id: "opp-2",
    title: "Appel d'Offres : Déploiement de 15 Micro-Réseaux Hybrides (Solaire + Stockage)",
    category: "Appel d'Offres",
    location: "Région Sud & Grand'Anse",
    country: "Haïti",
    flag: "🇭🇹",
    budget: "$1,200,000 USD",
    deadline: "30 Novembre 2026",
    company: "Consortium Énergie Propre Caraïbe",
    description: "Fourniture, installation et maintenance d'équipements photovoltaïques pour centres de santé et coopératives agricoles isolées.",
    requirements: ["Entreprise enregistrée avec min. 3 ans d'expérience", "Garantie matériel 10 ans", "Capacité d'intervention rapide"]
  },
  {
    id: "opp-3",
    title: "Partenariat Commercial & Distribution : Passerelle FinTech Transfrontalière",
    category: "Partenariat",
    location: "Santo Domingo & Kingston",
    country: "Rép. Dominicaine / Jamaïque",
    flag: "🇩🇴",
    budget: "Partenariat B2B / Revenus partagés",
    deadline: "20 Janvier 2027",
    company: "CaribPay Solutions",
    description: "Recherche de banques, institutions de microfinance et distributeurs agréés pour connecter les réseaux marchands entre l'île d'Hispaniola et la Jamaïque.",
    requirements: ["Licence financière ou statut d'agent agréé", "Infrastructure API moderne", "Conformité KYC/AML"]
  },
  {
    id: "opp-4",
    title: "Fourniture Régulière de Fruits Tropicaux & Huiles Essentielles (Export Caraïbe-Europe)",
    category: "Agro-Export",
    location: "Port-au-Prince / Les Cayes",
    country: "Haïti",
    flag: "🇭🇹",
    budget: "$80,000 USD / mois",
    deadline: "10 Décembre 2026",
    company: "Caraïbes Export Trading Ltd",
    description: "Contrat d'achat à terme de mangues Franciques, papayes séchées et huile essentielle de vétiver pour grossistes européens et caribéens.",
    requirements: ["Certification phytosanitaire", "Capacité d'emballage aux normes d'exportation", "Traçabilité des parcelles"]
  }
];

export default function OpportunitesPage() {
  const [selectedCat, setSelectedCat] = useState("Tous");
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Tous");
  const [applyModal, setApplyModal] = useState<Opportunity | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);

  const categories = ["Tous", "Financement", "Partenariat", "Appel d'Offres", "Agro-Export"];
  const countries = ["Tous", "Haïti", "Rép. Dominicaine / Jamaïque"];

  const filtered = OPPORTUNITIES.filter(op => {
    const matchCat = selectedCat === "Tous" || op.category === selectedCat;
    const matchCountry = selectedCountry === "Tous" || op.country.includes(selectedCountry);
    const matchSearch = 
      op.title.toLowerCase().includes(search.toLowerCase()) ||
      op.company.toLowerCase().includes(search.toLowerCase()) ||
      op.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchCountry && matchSearch;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setApplyModal(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" /> Bourse d'Affaires Régionale
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Opportunités d'Investissement & Partenariats <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              dans Toute la Caraïbe
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Consultez les appels d'offres qualifiés, projets en recherche de fonds et mandats commerciaux vérifiés par nos experts.
          </p>

          <Link
            href="/opportunites/publier"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2 text-sm"
          >
            <PlusCircle className="h-4 w-4" /> Publier une Opportunité d'Affaires
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Filter bar */}
        <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-4 md:p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher par mot-clé, entreprise ou besoin..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold whitespace-nowrap">Pays :</span>
              <select
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                className="bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500"
              >
                {countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1E293B]">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCat === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-[#0B1120] text-slate-400 hover:text-white border border-[#1E293B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunities List */}
        <div className="space-y-6">
          {filtered.map(op => (
            <div
              key={op.id}
              className="bg-[#131B2F] border border-[#1E293B] hover:border-blue-500/40 rounded-3xl p-6 md:p-8 shadow-xl transition-all"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {op.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <span>{op.flag}</span> {op.location} ({op.country})
                  </span>
                </div>
                <div className="text-xs text-orange-400 font-semibold flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> Clôture : {op.deadline}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">{op.title}</h3>
              <p className="text-xs text-slate-400 font-medium mb-4 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-slate-500" /> Porté par : <strong className="text-slate-200">{op.company}</strong>
              </p>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {op.description}
              </p>

              {/* Requirements */}
              <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-4 mb-6">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Conditions & Critères :</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {op.requirements.map((req, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#1E293B]">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Budget / Enveloppe :</span>
                  <span className="text-lg font-black text-white">{op.budget}</span>
                </div>
                <button
                  onClick={() => setApplyModal(op)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors shadow-md shadow-blue-600/20"
                >
                  Postuler / Contacter le porteur <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Apply */}
      {applyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl">
            <button onClick={() => setApplyModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>

            {applySuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Manifestation d'intérêt envoyée !</h3>
                <p className="text-slate-300 text-xs">
                  Le porteur du projet ({applyModal.company}) a reçu vos coordonnées et prendra contact avec vous.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-white mb-1">
                  Répondre à cette opportunité
                </h3>
                <p className="text-xs text-slate-400 mb-6 line-clamp-1">
                  {applyModal.title}
                </p>

                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Votre Nom ou Raison Sociale</label>
                    <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: Horizon Caraïbes S.A." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                    <input required type="email" className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="contact@horizon.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Téléphone / WhatsApp</label>
                    <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="+509 ... / +1 ..." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Votre Offre / Proposition de collaboration</label>
                    <textarea required rows={3} className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Décrivez votre capacité d'intervention, vos garanties ou votre proposition financière..." />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">
                    Envoyer ma proposition
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
