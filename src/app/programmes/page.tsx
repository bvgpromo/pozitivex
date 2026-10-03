"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, Rocket, Globe2, Sprout, ArrowRight, 
  CheckCircle2, Users, Calendar, Award, Target, Sparkles
} from "lucide-react";

interface Programme {
  id: string;
  name: string;
  badge: string;
  accentColor: string;
  tagline: string;
  description: string;
  objectives: string[];
  metrics: { label: string; value: string }[];
  nextCohort: string;
  audience: string;
}

const PROGRAMMES: Programme[] = [
  {
    id: "academy",
    name: "PozitivEx+ Academy",
    badge: "Formation & Certification",
    accentColor: "border-blue-500/40 text-blue-400",
    tagline: "Former l'élite technologique et managériale de la région",
    description: "Cursus immersifs de haut niveau en Intelligence Économique, Intelligence Artificielle générative, et Entrepreneuriat stratégique.",
    objectives: [
      "Modules conçus par des dirigeants et chercheurs de renom.",
      "Certification professionnelle reconnue à l'international.",
      "Accompagnement post-formation vers le marché du travail ou la levée de fonds."
    ],
    metrics: [
      { label: "Apprenants formés", value: "850+" },
      { label: "Taux de satisfaction", value: "96%" },
      { label: "Insertion professionnelle", value: "88%" }
    ],
    nextCohort: "15 Novembre 2026",
    audience: "Professionnels, étudiants avancés, porteurs de projets"
  },
  {
    id: "tech-hub",
    name: "Caribbean Tech Hub & Incubation",
    badge: "Accélération Startups",
    accentColor: "border-purple-500/40 text-purple-400",
    tagline: "Faire émerger les futurs champions technologiques caribéens",
    description: "Programme d'accélération intensif de 6 mois pour startups numériques à fort impact (FinTech, AgriTech, CleanTech, EdTech).",
    objectives: [
      "Mentorat 1-to-1 avec des fondateurs à succès de la Silicon Valley et de la Caraïbe.",
      "Accès aux crédits cloud et aux outils d'IA partenaires.",
      "Session de clôture (Demo Day) devant 50 investisseurs régionaux et internationaux."
    ],
    metrics: [
      { label: "Startups accélérées", value: "42" },
      { label: "Capitaux levés", value: "$3.2M" },
      { label: "Emplois créés", value: "210+" }
    ],
    nextCohort: "10 Janvier 2027",
    audience: "Fondateurs de startups avec prototype validé (MVP)"
  },
  {
    id: "diaspora-connect",
    name: "Diaspora Capital Connect",
    badge: "Investissement & Diaspora",
    accentColor: "border-orange-500/40 text-orange-400",
    tagline: "Canaliser l'épargne de la diaspora vers l'économie productive",
    description: "Plateforme et cadre juridique sécurisé permettant à la diaspora caribéenne d'investir directement dans des PME et infrastructures durables.",
    objectives: [
      "Audits et due diligence rigoureuse sur chaque entreprise sélectionnée.",
      "Reporting financier trimestriel transparent et numérisé.",
      "Rendements attractifs alignés sur le développement socio-économique."
    ],
    metrics: [
      { label: "Investisseurs actifs", value: "320+" },
      { label: "Fonds mobilisés", value: "$5.8M" },
      { label: "PME soutenues", value: "28" }
    ],
    nextCohort: "Ouvert en continu",
    audience: "Membres de la diaspora, business angels, investisseurs institutionnels"
  },
  {
    id: "agritech",
    name: "AgriTech & Sécurité Alimentaire",
    badge: "Transition Écologique",
    accentColor: "border-emerald-500/40 text-emerald-400",
    tagline: "Moderniser les filières agricoles pour la souveraineté alimentaire",
    description: "Équipement de coopératives paysannes en pompage solaire, capteurs d'irrigation et accès aux plateformes de vente directe sans intermédiaires.",
    objectives: [
      "Réduction des pertes post-récolte grâce au stockage réfrigéré solaire.",
      "Traçabilité numérique des récoltes (Cacao, Café, Vétiver, Fruits).",
      "Contrats d'achat garantis avec les hôtels et marchés urbains régionaux."
    ],
    metrics: [
      { label: "Producteurs partenaires", value: "1,400+" },
      { label: "Rendement agricole moyen", value: "+38%" },
      { label: "Hectares modernisés", value: "850 ha" }
    ],
    nextCohort: "Session active (Cohorte 3)",
    audience: "Coopératives agricoles, agronomes, PME agroalimentaires"
  }
];

export default function ProgrammesPage() {
  const [selectedProg, setSelectedProg] = useState<Programme | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedProg(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Rocket className="h-3.5 w-3.5" /> Initiatives & Accélération Régionale
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Des Programmes Stratégiques <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              pour Bâtir l'Avenir de la Caraïbe
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Formation de pointe, incubation de startups, canalisation des investissements de la diaspora et transition technologique des filières vitales.
          </p>
        </div>
      </section>

      {/* Programmes List */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-12">
          {PROGRAMMES.map((prog, idx) => (
            <div
              key={prog.id}
              className="bg-[#131B2F] border border-[#1E293B] hover:border-blue-500/40 rounded-3xl p-6 md:p-10 shadow-2xl transition-all"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 pb-6 border-b border-[#1E293B]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${prog.accentColor}`}>
                      {prog.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Prochaine cohorte : <strong className="text-white">{prog.nextCohort}</strong>
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{prog.name}</h2>
                  <p className="text-sm font-semibold text-sky-400 mt-1">{prog.tagline}</p>
                </div>

                <button
                  onClick={() => setSelectedProg(prog)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all flex-shrink-0"
                >
                  Candidater à ce programme <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {prog.description}
              </p>

              {/* Objectives */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Objectifs Clés :</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {prog.objectives.map((obj, oIdx) => (
                    <div key={oIdx} className="bg-[#0B1120] border border-[#1E293B] p-3.5 rounded-xl text-xs text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1E293B]">
                {prog.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <span className="text-xl md:text-2xl font-black text-white block">{m.value}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {selectedProg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedProg(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Candidature reçue !</h3>
                <p className="text-slate-300 text-xs">
                  Votre dossier pour <strong>{selectedProg.name}</strong> a été transmis à la commission d'admission.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-white mb-1">
                  Candidater à {selectedProg.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Cohorte : {selectedProg.nextCohort} • {selectedProg.audience}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom Complet</label>
                    <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: Marie Pierre" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Professionnel</label>
                    <input required type="email" className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="marie@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Téléphone / WhatsApp</label>
                    <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="+509 ... / +1 ..." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Présentation de votre profil / projet</label>
                    <textarea required rows={3} className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Expliquez vos motivations et vos objectifs avec ce programme..." />
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
