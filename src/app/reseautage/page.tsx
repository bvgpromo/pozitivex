"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Users, Search, MapPin, Building2, Briefcase, Award, 
  ExternalLink, Mail, CheckCircle2, Calendar, ArrowRight,
  Filter, Sparkles, MessageSquare
} from "lucide-react";

interface Member {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  country: string;
  flag: string;
  category: "Entreprise" | "Investisseur" | "Startup" | "Expert";
  tags: string[];
  bio: string;
  verified: boolean;
  avatarColor: string;
}

const MEMBERS: Member[] = [
  {
    id: "1",
    name: "Jean-Philippe V.",
    role: "Directeur Général",
    company: "Caraïbes Agro-Innovations",
    location: "Cap-Haïtien, Haïti",
    country: "Haïti",
    flag: "🇭🇹",
    category: "Entreprise",
    tags: ["AgriTech", "Export Cacao", "Durabilité"],
    bio: "Transformation et exportation de produits agricoles certifiés bio avec traçabilité technologique pour le marché caribéen et international.",
    verified: true,
    avatarColor: "from-blue-600 to-cyan-500"
  },
  {
    id: "2",
    name: "Dr. Sarah Chen-Baptiste",
    role: "Managing Partner",
    company: "Antilles Venture Capital",
    location: "Kingston, Jamaïque",
    country: "Jamaïque",
    flag: "🇯🇲",
    category: "Investisseur",
    tags: ["Fonds d'Amorçage", "FinTech", "IA"],
    bio: "Investissement en phase d'amorçage dans les startups tech à fort potentiel d'échelle régionale dans l'archipel caribéen.",
    verified: true,
    avatarColor: "from-purple-600 to-pink-500"
  },
  {
    id: "3",
    name: "Marc-Aurèle Dorcé",
    role: "Fondateur & CEO",
    company: "SolCarib Energy",
    location: "Port-au-Prince, Haïti",
    country: "Haïti",
    flag: "🇭🇹",
    category: "Startup",
    tags: ["Énergie Solaire", "Micro-grids", "CleanTech"],
    bio: "Déploiement de micro-réseaux solaires autonomes pour les zones industrielles et agricoles décentralisées.",
    verified: true,
    avatarColor: "from-amber-500 to-orange-600"
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "Directrice Partenariats",
    company: "Hispaniola Trade Logistics",
    location: "Santo Domingo, Rép. Dominicaine",
    country: "Rép. Dominicaine",
    flag: "🇩🇴",
    category: "Entreprise",
    tags: ["Logistique Portuaire", "Supply Chain", "B2B"],
    bio: "Facilitation du fret maritime et du dédouanement inter-îles pour accélérer le commerce transfrontalier en Caraïbe.",
    verified: true,
    avatarColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "5",
    name: "Patrick Saint-Louis",
    role: "Consultant Stratégie & IA",
    company: "Diaspora Advisory Group",
    location: "Montréal & Miami",
    country: "Diaspora",
    flag: "🌐",
    category: "Expert",
    tags: ["Transformation IA", "Intelligence Éco", "Gouvernance"],
    bio: "Accompagnement des PME et institutions caribéennes dans l'intégration de l'intelligence artificielle et l'optimisation décisionnelle.",
    verified: true,
    avatarColor: "from-indigo-600 to-blue-500"
  },
  {
    id: "6",
    name: "Nathalie Desroches",
    role: "Cofondatrice",
    company: "PayKreyòl Tech",
    location: "Port-au-Prince & Fort-de-France",
    country: "Haïti / Martinique",
    flag: "🇭🇹",
    category: "Startup",
    tags: ["FinTech", "Paiements Mobiles", "Inclusion"],
    bio: "Passerelle de paiement interbancaire et solutions d'envois de fonds à bas coût pour les commerces caribéens.",
    verified: true,
    avatarColor: "from-rose-500 to-pink-600"
  }
];

const EVENTS = [
  {
    title: "Forum Économique Caraïbe 2026",
    date: "24-25 Novembre 2026",
    location: "Cap-Haïtien & Diffusion Virtuelle",
    type: "Conférence & B2B",
    desc: "Rencontre des 200 principaux dirigeants d'entreprises, chambres de commerce et investisseurs de la région."
  },
  {
    title: "Carrefour AgriTech & Logistique",
    date: "12 Décembre 2026",
    location: "Webinaire Exclusif Membres",
    type: "Atelier Sectoriel",
    desc: "Opportunités d'exportation agricole et solutions de stockage réfrigéré solaire."
  },
  {
    title: "Session Pitch Diaspora & Anges Investisseurs",
    date: "15 Janvier 2027",
    location: "Miami & En direct sur PozitivEx+",
    type: "Investissement",
    desc: "Présentation de 8 projets innovants en quête de financement d'amorçage ($50k - $250k)."
  }
];

export default function ReseautagePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Tous");
  const [contactModal, setContactModal] = useState<Member | null>(null);
  const [contactSuccess, setContactSuccess] = useState(false);

  const categories = ["Tous", "Entreprise", "Investisseur", "Startup", "Expert"];
  const countries = ["Tous", "Haïti", "Rép. Dominicaine", "Jamaïque", "Diaspora"];

  const filteredMembers = MEMBERS.filter(m => {
    const matchCat = selectedCategory === "Tous" || m.category === selectedCategory;
    const matchCountry = selectedCountry === "Tous" || m.country.toLowerCase().includes(selectedCountry.toLowerCase());
    const matchSearch = 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      m.bio.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchCountry && matchSearch;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactModal(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" /> Réseau d'Affaires B2B Caraïbe
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Connectez-vous aux Leaders Économiques <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              de la Caraïbe et de sa Diaspora
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Trouvez vos futurs partenaires commerciaux, cofondateurs, investisseurs et experts certifiés pour accélérer vos projets d'expansion régionale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/inscription" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2 text-sm"
            >
              Rejoindre le Réseau Membre <ArrowRight className="h-4 w-4" />
            </Link>
            <a 
              href="#evenements" 
              className="border border-[#1E293B] bg-[#131B2F] hover:bg-[#1E293B] text-slate-200 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Voir les Événements B2B
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Member Directory */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Search & Filter Toolbar */}
        <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-4 md:p-6 mb-10 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher par nom, entreprise, secteur (ex: AgriTech, Solaire, FinTech)..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 whitespace-nowrap flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-orange-400" /> Pays :
              </span>
              <select
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                className="bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-blue-500"
              >
                {countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1E293B]">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-[#0B1120] text-slate-400 hover:text-slate-200 border border-[#1E293B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Members Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-blue-400" /> Membres & Entreprises Actives
          </h2>
          <span className="text-xs text-slate-400 font-semibold bg-[#131B2F] px-3 py-1 rounded-full border border-[#1E293B]">
            {filteredMembers.length} profil(s) trouvé(s)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMembers.map(member => (
            <div
              key={member.id}
              className="bg-[#131B2F] border border-[#1E293B] hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.avatarColor} flex items-center justify-center font-bold text-white text-base shadow-inner`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base flex items-center gap-1.5">
                        {member.name}
                        {member.verified && (
                          <span title="Profil vérifié"><CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0" /></span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 whitespace-nowrap">
                    {member.category}
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Building2 className="h-3.5 w-3.5 text-slate-400" />
                  <span>{member.company}</span>
                </div>

                <div className="mb-4 flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="text-sm">{member.flag}</span>
                  <span>{member.location}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-medium bg-[#0B1120] text-slate-400 border border-[#1E293B] px-2 py-0.5 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between gap-2">
                <button
                  onClick={() => setContactModal(member)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5" /> Entrer en contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Événements B2B */}
        <div id="evenements" className="pt-6">
          <div className="text-center mb-10">
            <span className="border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
              Agenda Réseau
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Événements & Rencontres d'Affaires</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Participez à nos tables rondes, webinaires sectoriels et sommets annuels pour nouer des alliances stratégiques.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {EVENTS.map((evt, idx) => (
              <div key={idx} className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-orange-400 font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                      {evt.type}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {evt.date}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{evt.title}</h3>
                  <p className="text-slate-400 text-xs mb-3 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-blue-400" /> {evt.location}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6">{evt.desc}</p>
                </div>
                <Link
                  href="/inscription"
                  className="w-full bg-[#1E293B] hover:bg-blue-600 text-white text-center py-2.5 rounded-xl text-xs font-bold transition-colors"
                >
                  S'inscrire à la session
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900/40 via-[#131B2F] to-orange-950/30 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Vous souhaitez intégrer le Réseau d'Affaires PozitivEx+ ?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Rejoignez plus de 1 200 entrepreneurs, investisseurs et experts qui collaborent activement pour bâtir la souveraineté économique de la Caraïbe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              Créer mon profil membre
            </Link>
            <Link
              href="/opportunites"
              className="bg-[#1E293B] hover:bg-[#283548] text-slate-200 font-bold px-8 py-3.5 rounded-xl text-sm transition-colors"
            >
              Explorer les opportunités
            </Link>
          </div>
        </div>
      </section>

      {/* Modal Contact */}
      {contactModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setContactModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {contactSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Message transmis !</h3>
                <p className="text-slate-300 text-sm">
                  Votre demande de contact a été transmise à <strong>{contactModal.name}</strong> ({contactModal.company}).
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-white mb-1">
                  Contacter {contactModal.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  {contactModal.role} • {contactModal.company} ({contactModal.location})
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Votre Nom & Prénom</label>
                    <input
                      required
                      className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      placeholder="Ex: Jean Moïse"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Votre Adresse Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      placeholder="jean@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Votre Message / Proposition de collaboration</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      placeholder="Bonjour, je souhaite échanger sur une opportunité de partenariat..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Envoyer le message
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
