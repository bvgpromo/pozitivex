"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  GraduationCap, CheckCircle2, Clock, Calendar, BookOpen, 
  Award, Shield, HelpCircle, ArrowRight, UserCheck, Star
} from "lucide-react";

export default function FormationsPage() {
  const [pricingData, setPricingData] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/admin/pricing')
      .then(r => (r.ok ? r.json() : null))
      .then(data => {
        if (data && data.plans) setPricingData(data);
      })
      .catch(() => {});
  }, []);

  const defaultPlans = [
    {
      id: "masterclass",
      title: "Masterclass Entrepreneuriat",
      subtitle: "Pour les porteurs de projets",
      price: "$149",
      features: ["Modules en ligne", "Accès à la communauté", "Certificat de participation"],
      buttonText: "S'inscrire",
      popular: false
    },
    {
      id: "certificat",
      title: "Certificat Intelligence Éco.",
      subtitle: "Pour les professionnels",
      price: "$299",
      features: [
        "Programme complet (8 semaines)",
        "Mentorat personnalisé",
        "Certification reconnue",
        "Accès Data Center (6 mois)"
      ],
      buttonText: "S'inscrire",
      popular: true
    },
    {
      id: "bootcamp",
      title: "Bootcamp IA & Innovation",
      subtitle: "Pour les technologues",
      price: "$499",
      features: [
        "Formation intensive (12 sem.)",
        "Projets pratiques (HubTech)",
        "Placement en entreprise"
      ],
      buttonText: "S'inscrire",
      popular: false
    }
  ];

  const plans = pricingData?.plans || defaultPlans;

  const SYLLABUS = [
    {
      title: "Masterclass Entrepreneuriat & Montage de Projet",
      duration: "4 semaines • 20 heures",
      level: "Débutant à Intermédiaire",
      modules: [
        "Module 1 : Identification d'opportunités à haute rentabilité en Caraïbe",
        "Module 2 : Business Model Canvas et études de marché locales",
        "Module 3 : Structuration financière, gestion de trésorerie et fiscalité",
        "Module 4 : Stratégie de mise sur le marché (Go-to-Market) et pitch investisseurs"
      ]
    },
    {
      title: "Certificat d'Excellence en Intelligence Économique",
      duration: "8 semaines • 45 heures",
      level: "Intermédiaire à Avancé",
      modules: [
        "Module 1 : Méthodologies de veille stratégique et cartographie d'acteurs",
        "Module 2 : Analyse des flux commerciaux intercaribéens et géopolitique régionale",
        "Module 3 : Protection du patrimoine informationnel et cybersécurité économique",
        "Module 4 : Rédaction de notes de synthèse décisionnelles pour comités exécutifs"
      ]
    },
    {
      title: "Bootcamp Développeur IA & Solutions Métier",
      duration: "12 semaines • 80 heures",
      level: "Avancé",
      modules: [
        "Module 1 : Fondations des modèles de langage (LLMs) et architectures d'agents",
        "Module 2 : Retrieval-Augmented Generation (RAG) sur bases de données d'entreprises",
        "Module 3 : Automatisation de workflows d'analyse et intégration d'APIs",
        "Module 4 : Déploiement en production, évaluation et sécurité éthique"
      ]
    }
  ];

  const FAQS = [
    {
      q: "Comment se déroulent les cours ?",
      a: "Tous les cours se déroulent en ligne avec un mélange de sessions vidéo interactives en direct, d'ateliers pratiques en petits groupes et de devoirs corrigés par des mentors certifiés."
    },
    {
      q: "Les certificats délivrés sont-ils reconnus ?",
      a: "Oui, les certificats délivrés par PozitivEx+ Academy sont vérifiables par QR code et enregistrés numériquement, reconnus par notre réseau d'entreprises partenaires et d'investisseurs de la région."
    },
    {
      q: "Existe-t-il des facilités de paiement ou des bourses ?",
      a: "Oui ! Grâce à notre fonds de soutien PozitivEx+, des bourses couvrant jusqu'à 50% des frais de formation sont attribuées sur critères de mérite et de projet pour les jeunes résidant en Haïti et dans la Caraïbe."
    }
  ];

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollSuccess(true);
    setTimeout(() => {
      setEnrollSuccess(false);
      setSelectedPlan(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" /> PozitivEx+ Academy
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Formations & Certifications d'Excellence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              pour Accélérer Votre Carrière
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Acquérez les compétences indispensables en Intelligence Économique, Intelligence Artificielle et Stratégie d'Entreprise adaptées aux réalités caribéennes.
          </p>
        </div>
      </section>

      {/* Pricing Plans Grid */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Nos Formules de Formation</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto">Choisissez le parcours qui correspond à vos ambitions professionnelles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {plans.map((plan: any, idx: number) => {
            const isPopular = !!plan.popular;
            return (
              <div
                key={plan.id || idx}
                className={
                  isPopular
                    ? "bg-gradient-to-b from-[#1E293B] to-[#131B2F] border-2 border-blue-500 p-8 rounded-3xl flex flex-col relative transform md:-translate-y-3 shadow-2xl shadow-blue-900/30"
                    : "bg-[#131B2F] border border-[#1E293B] p-8 rounded-3xl flex flex-col relative"
                }
              >
                {isPopular && (
                  <span className="absolute -top-3 right-6 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Populaire
                  </span>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{plan.title}</h3>
                {plan.subtitle && <p className="text-slate-400 text-xs mb-4">{plan.subtitle}</p>}
                <div className="text-3xl font-extrabold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-300">
                  {plan.features?.map((feat: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={
                    isPopular
                      ? "w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
                      : "w-full bg-[#1E293B] hover:bg-blue-600 text-white py-3 rounded-xl text-xs font-bold transition-colors"
                  }
                >
                  {plan.buttonText || "S'inscrire à ce parcours"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Curriculum Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
              Programmes Détaillés
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Contenu Pédagogique des Cursus</h2>
          </div>

          <div className="space-y-6">
            {SYLLABUS.map((syl, i) => (
              <div key={i} className="bg-[#131B2F] border border-[#1E293B] p-6 md:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-4 border-b border-[#1E293B]">
                  <h3 className="text-lg font-bold text-white">{syl.title}</h3>
                  <div className="flex gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-blue-400" /> {syl.duration}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Award className="h-3.5 w-3.5 text-orange-400" /> {syl.level}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {syl.modules.map((mod, mIdx) => (
                    <div key={mIdx} className="bg-[#0B1120] border border-[#1E293B] p-3 rounded-xl text-xs text-slate-300 flex items-start gap-2">
                      <BookOpen className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Questions Fréquentes</h2>
            <p className="text-slate-400 text-xs">Tout ce que vous devez savoir avant de commencer votre formation.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, fIdx) => (
              <div key={fIdx} className="bg-[#131B2F] border border-[#1E293B] p-6 rounded-2xl">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inscription Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {enrollSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Inscription validée !</h3>
                <p className="text-slate-300 text-xs">
                  Vous recevrez votre lien d'accès et vos identifiants par email dans quelques instants.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-white mb-1">
                  Rejoindre : {selectedPlan.title}
                </h3>
                <p className="text-xs text-sky-400 font-bold mb-6">
                  Tarif : {selectedPlan.price}
                </p>

                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom & Prénom</label>
                    <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: Jean Moïse" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                    <input required type="email" className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="jean@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Pays de résidence</label>
                    <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Haïti / Diaspora / Caraïbe..." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Mode de Paiement Préféré</label>
                    <select className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500">
                      <option>Carte Bancaire Internationale (Visa / Mastercard)</option>
                      <option>MonCash / Natcash (Haïti)</option>
                      <option>Virement bancaire / Zelle</option>
                      <option>Demande de Bourse d'Étude (50%)</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">
                    Confirmer mon inscription
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
