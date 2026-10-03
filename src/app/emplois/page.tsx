"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, Search, MapPin, DollarSign, Clock, Building2, 
  CheckCircle2, ArrowRight, Filter, Send
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "CDI" | "CDD" | "Remote / Télétravail" | "Freelance";
  salary: string;
  sector: string;
  posted: string;
  description: string;
  skills: string[];
}

const JOBS: Job[] = [
  {
    id: "job-1",
    title: "Ingénieur Développeur Full-Stack (Next.js / Node.js)",
    company: "CaribPay Solutions",
    location: "Port-au-Prince / Télétravail",
    type: "Remote / Télétravail",
    salary: "$2,500 - $3,800 / mois",
    sector: "Tech & FinTech",
    posted: "Il y a 2 jours",
    description: "Conception et maintenance d'architectures de paiement sécurisées et d'interfaces web réactives pour les commerçants de la Caraïbe.",
    skills: ["TypeScript", "Next.js", "PostgreSQL", "Sécurité API"]
  },
  {
    id: "job-2",
    title: "Analyste d'Investissement & Veille Économique",
    company: "Antilles Venture Partners",
    location: "Santo Domingo & Haïti",
    type: "CDI",
    salary: "$2,200 - $3,200 / mois",
    sector: "Finance & Conseil",
    posted: "Il y a 4 jours",
    description: "Modélisation financière, due diligence sur les startups candidates aux financements et rédaction de synthèses sectorielles.",
    skills: ["Modélisation Financière", "Due Diligence", "Français / Anglais"]
  },
  {
    id: "job-3",
    title: "Chef de Projet Électrification Rurale & Solaire",
    company: "SolCarib Energy",
    location: "Cap-Haïtien",
    type: "CDI",
    salary: "$2,000 - $2,800 / mois",
    sector: "Énergie Propre",
    posted: "Il y a 1 semaine",
    description: "Supervision du déploiement technique des mini-réseaux photovoltaïques dans les zones rurales du Nord et du Nord-Est.",
    skills: ["Photovoltaïque", "Gestion de Chantier", "Autocad"]
  },
  {
    id: "job-4",
    title: "Responsable Supply Chain & Agro-Export",
    company: "Caraïbes Bio Export",
    location: "Les Cayes / Port-au-Prince",
    type: "CDI",
    salary: "$1,800 - $2,500 / mois",
    sector: "Agro-industrie",
    posted: "Il y a 1 semaine",
    description: "Coordination des approvisionnements auprès des coopératives agricoles, conformité phytosanitaire et suivi logistique portuaire.",
    skills: ["Logistique Portuaire", "Normes HACCP / Bio", "Négociation"]
  }
];

export default function EmploisPage() {
  const [selectedType, setSelectedType] = useState("Tous");
  const [search, setSearch] = useState("");
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [applied, setApplied] = useState(false);

  const types = ["Tous", "CDI", "Remote / Télétravail", "CDD", "Freelance"];

  const filteredJobs = JOBS.filter(j => {
    const matchType = selectedType === "Tous" || j.type === selectedType;
    const matchSearch = 
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase()) ||
      j.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    return matchType && matchSearch;
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setApplyJob(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" /> Espace Recrutement Caraïbe
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Offres d'Emploi & Carrières <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              dans les Entreprises Leader de la Région
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Rejoignez des startups ambitieuses, des institutions financières et des entreprises en pleine croissance à travers la Caraïbe et en télétravail.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-4 md:p-6 mb-8 shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher par métier, compétence ou entreprise..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1E293B]">
            {types.map(t => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedType === t
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-[#0B1120] text-slate-400 hover:text-white border border-[#1E293B]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.map(job => (
            <div
              key={job.id}
              className="bg-[#131B2F] border border-[#1E293B] hover:border-blue-500/40 rounded-2xl p-6 transition-all shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    {job.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-orange-400" /> {job.location}
                  </span>
                  <span className="text-xs text-slate-500">• {job.posted}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{job.title}</h3>
                <p className="text-xs text-slate-400 font-medium mb-3">{job.company}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((s, idx) => (
                    <span key={idx} className="bg-[#0B1120] text-slate-400 text-[11px] px-2 py-0.5 rounded border border-[#1E293B]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-[#1E293B]">
                <span className="text-sm font-black text-emerald-400">{job.salary}</span>
                <button
                  onClick={() => setApplyJob(job)}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="h-3.5 w-3.5" /> Postuler
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Application */}
      {applyJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setApplyJob(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>

            {applied ? (
              <div className="text-center py-6">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white mb-1">Candidature transmise !</h3>
                <p className="text-xs text-slate-300">L'équipe de recrutement examinera votre profil et vous répondra sous 5 jours ouvrés.</p>
              </div>
            ) : (
              <>
                <h3 className="text-base font-bold text-white mb-1">Postuler : {applyJob.title}</h3>
                <p className="text-xs text-slate-400 mb-4">{applyJob.company} • {applyJob.location}</p>

                <form onSubmit={handleApply} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom & Prénom</label>
                    <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: Jean Paul" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                    <input required type="email" className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="jean@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Lien LinkedIn ou CV (URL)</label>
                    <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message d'introduction</label>
                    <textarea required rows={3} className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Résumez vos motivations et votre adéquation avec le poste..." />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">
                    Envoyer ma candidature
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
