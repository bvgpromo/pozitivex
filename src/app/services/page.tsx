"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, CheckCircle2, ArrowRight, Layers, Lightbulb, 
  Cpu, BarChart, Globe
} from "lucide-react";

export default function ServicesPage() {
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => setQuoteSuccess(false), 4000);
  };

  const SERVICES = [
    {
      icon: Lightbulb,
      title: "Conseil Stratégique & Due Diligence",
      desc: "Études de marché sur mesure, analyse de faisabilité et vérification d'antécédents pour sécuriser vos partenariats en Caraïbe.",
      features: ["Cartographie concurrentielle", "Évaluation des risques pays", "Recommandations juridiques"]
    },
    {
      icon: Cpu,
      title: "Transformation Numérique & Intégration IA",
      desc: "Déploiement d'agents IA, automatisation de vos processus internes et numérisation des canaux de vente et de relation client.",
      features: ["Audit technologique", "Formation des équipes", "Développement sur-mesure"]
    },
    {
      icon: BarChart,
      title: "Structuration Financière & Levée de Fonds",
      desc: "Accompagnement de bout en bout : valorisation, préparation du business plan, data room et mise en relation avec des investisseurs.",
      features: ["Deck d'investissement pro", "Négociation de termes-clés", "Reporting post-closing"]
    },
    {
      icon: Globe,
      title: "Expansion Régionale & Exportation",
      desc: "Accompagnement opérationnel pour exporter vos produits et services entre Haïti, la République Dominicaine et la CARICOM.",
      features: ["Accords douaniers préférentiels", "Réseau de distributeurs locaux", "Conformité réglementaire"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" /> Services & Solutions Entreprises
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Propulsez la Croissance de Votre Entreprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              avec Notre Expertise Stratégique
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Un accompagnement sur mesure par les meilleurs experts économiques, financiers et technologiques de la région.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="bg-[#131B2F] border border-[#1E293B] hover:border-blue-500/40 p-8 rounded-3xl transition-all shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">{srv.desc}</p>
                <ul className="space-y-2">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-r from-[#131B2F] to-[#1E293B] border border-blue-500/30 rounded-3xl p-8 md:p-10 shadow-2xl max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Demander une Consultation Stratégique</h2>
            <p className="text-xs text-slate-400">Premier diagnostic gratuit de 30 minutes avec l'un de nos directeurs de mission.</p>
          </div>

          {quoteSuccess ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center">
              <CheckCircle2 className="h-10 w-10 mx-auto mb-2" />
              <h3 className="font-bold text-base mb-1">Votre demande a été prise en compte !</h3>
              <p className="text-xs text-slate-300">Notre équipe prendra contact avec vous d'ici 24 heures.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nom & Prénom</label>
                  <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: Jean Paul" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Entreprise / Organisation</label>
                  <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: Caraïbe Logistique" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Professionnel</label>
                  <input required type="email" className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="contact@entreprise.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Service Souhaité</label>
                  <select className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500">
                    <option>Conseil Stratégique & Due Diligence</option>
                    <option>Transformation Numérique & IA</option>
                    <option>Structuration Financière & Levée de Fonds</option>
                    <option>Expansion Régionale & Exportation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Détails de votre besoin</label>
                <textarea required rows={4} className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Précisez votre secteur, vos objectifs et vos échéances..." />
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-lg shadow-blue-600/30">
                Demander mon rendez-vous de consultation
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
