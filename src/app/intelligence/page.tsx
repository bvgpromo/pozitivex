"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  TrendingUp, BarChart3, Globe2, ShieldCheck, FileText, 
  ArrowUpRight, ArrowRight, Download, Search, CheckCircle2,
  Calendar, Clock, BookOpen, Layers, Lightbulb
} from "lucide-react";

interface Report {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  keyMetric: string;
  keyMetricLabel: string;
  author: string;
  tags: string[];
}

const REPORTS: Report[] = [
  {
    id: "1",
    title: "Cartographie du Commerce Intercaribéen & Opportunités Portuaires 2026",
    category: "Logistique & Ports",
    date: "28 Septembre 2026",
    readTime: "8 min",
    summary: "Analyse approfondie des goulets d'étranglement logistiques entre Haïti, la République Dominicaine, la Jamaïque et les Petites Antilles, et les gisements d'économies d'échelle.",
    keyMetric: "+22%",
    keyMetricLabel: "potentiel d'augmentation des flux directs",
    author: "Dr. Jean-Roc Simon, Économiste en chef",
    tags: ["Logistique", "Fret", "Commerce"]
  },
  {
    id: "2",
    title: "L'essor de l'AgriTech et de la Sécurité Alimentaire dans le bassin Caribéen",
    category: "Agriculture",
    date: "22 Septembre 2026",
    readTime: "6 min",
    summary: "Comment l'irrigation connectée, les serres climatisées solaires et les coopératives digitales réduisent la dépendance aux importations alimentaires de 30% d'ici 2030.",
    keyMetric: "$1.2 Md",
    keyMetricLabel: "marché adressable pour l'agrobusiness",
    author: "Mireille Lafontant, Analyste Marchés Verts",
    tags: ["AgriTech", "Souveraineté Alimentaire", "Bio"]
  },
  {
    id: "3",
    title: "Révolution FinTech & Inclusion Financière par la Diaspora",
    category: "Finance & FinTech",
    date: "15 Septembre 2026",
    readTime: "7 min",
    summary: "Étude comparative des corridors de transferts d'argent (USA, Canada, Europe vers Caraïbe) et l'impact de la numérisation des portefeuilles mobiles sur l'investissement productif.",
    keyMetric: "$7.8 Md",
    keyMetricLabel: "flux annuel réorientable vers l'épargne productive",
    author: "Patrick Saint-Louis, Spécialiste Finance",
    tags: ["FinTech", "Mobile Money", "Diaspora"]
  },
  {
    id: "4",
    title: "Transition Énergétique : Le boom du Solaire et des Micro-Réseaux",
    category: "Énergie",
    date: "05 Septembre 2026",
    readTime: "5 min",
    summary: "État des lieux des parcs solaires décentralisés et des solutions de stockage par batterie dans les zones franches et exploitations agro-industrielles.",
    keyMetric: "320 MW",
    keyMetricLabel: "capacité installable d'ici 3 ans",
    author: "Ing. Frantz Bellevue, Expert Énergie",
    tags: ["Solaire", "CleanTech", "Infrastructures"]
  }
];

const MACRO_STATS = [
  { label: "PIB Cumulé Caraïbe", value: "$420 Md", change: "+3.6% (2026)", positive: true },
  { label: "Investissements Directs Étrangers", value: "$4.8 Md", change: "+14.2% a/a", positive: true },
  { label: "Volume Marché FinTech Mobile", value: "$18.5 Md", change: "+24.0% a/a", positive: true },
  { label: "Dépendance Alimentaire Moyenne", value: "62%", change: "-3.5% vs 2024", positive: true },
];

export default function IntelligencePage() {
  const [selectedCat, setSelectedCat] = useState("Tous");
  const [search, setSearch] = useState("");
  const [activeReport, setActiveReport] = useState<Report | null>(null);
  const [customStudySent, setCustomStudySent] = useState(false);

  const categories = ["Tous", "Logistique & Ports", "Agriculture", "Finance & FinTech", "Énergie"];

  const filteredReports = REPORTS.filter(r => {
    const matchCat = selectedCat === "Tous" || r.category === selectedCat;
    const matchSearch = 
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.summary.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const handleStudySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomStudySent(true);
    setTimeout(() => setCustomStudySent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Lightbulb className="h-3.5 w-3.5" /> Intelligence Économique & Veille Stratégique
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Décryptez les Marchés et Anticipez <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              les Tendances Économiques de la Caraïbe
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Données vérifiées, prévisions macro-sectorielles et analyses exclusives pour éclairer vos décisions d'investissement et de développement commercial.
          </p>
        </div>
      </section>

      {/* Macro Indicators Ticker */}
      <section className="container mx-auto px-4 -mt-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MACRO_STATS.map((stat, idx) => (
            <div key={idx} className="bg-[#131B2F] border border-[#1E293B] p-5 rounded-2xl shadow-xl">
              <span className="text-xs text-slate-400 font-medium block mb-1">{stat.label}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reports Catalog */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" /> Études Stratégiques & Rapports Récents
            </h2>
            <p className="text-slate-400 text-xs mt-1">Rapports d'impact et diagnostics sectoriels préparés par nos experts régionaux.</p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher une analyse..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#131B2F] border border-[#1E293B] rounded-xl pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCat === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-[#131B2F] text-slate-400 hover:text-white border border-[#1E293B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredReports.map(report => (
            <div
              key={report.id}
              className="bg-[#131B2F] border border-[#1E293B] hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    {report.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {report.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {report.readTime}</span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-3 leading-snug hover:text-blue-400 cursor-pointer" onClick={() => setActiveReport(report)}>
                  {report.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {report.summary}
                </p>

                {/* Key metric highlight box */}
                <div className="bg-[#0B1120] border border-[#1E293B] rounded-xl p-3 mb-4 flex items-center gap-3">
                  <span className="text-xl font-black text-orange-400">{report.keyMetric}</span>
                  <span className="text-xs text-slate-400 leading-tight">{report.keyMetricLabel}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-[#1E293B]">
                  <span className="text-xs text-slate-400 italic font-medium">{report.author}</span>
                  <button
                    onClick={() => setActiveReport(report)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    Consulter l'étude <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Study Request Form */}
        <div className="bg-gradient-to-r from-[#131B2F] to-[#1E293B] border border-blue-500/30 rounded-3xl p-8 md:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
              Service aux Entreprises & Investisseurs
            </span>
            <h2 className="text-2xl font-bold text-white mb-2">Commandez une Étude Économique Sur Mesure</h2>
            <p className="text-slate-400 text-xs max-w-lg mx-auto">
              Notre équipe d'analystes réalise des études de marché, des analyses de rentabilité et des veilles concurrentielles adaptées à vos objectifs dans la Caraïbe.
            </p>
          </div>

          {customStudySent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center">
              <CheckCircle2 className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-bold text-base mb-1">Votre demande a été enregistrée avec succès !</h3>
              <p className="text-xs text-slate-300">Notre bureau d'intelligence économique prendra contact avec vous sous 24 à 48 heures.</p>
            </div>
          ) : (
            <form onSubmit={handleStudySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Nom & Prénom</label>
                <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: Alex Daniel" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Organisation / Entreprise</label>
                <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: SolaCarib S.A." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Adresse Email</label>
                <input required type="email" className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="alex@societe.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Secteur Cible</label>
                <select className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500">
                  <option>Agrobusiness & Exportation</option>
                  <option>Énergie & Électrification</option>
                  <option>FinTech & Paiements</option>
                  <option>Logistique & Ports</option>
                  <option>Immobilier & Tourisme Durable</option>
                  <option>Autre secteur d'intérêt</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">Périmètre de votre étude / Objectifs</label>
                <textarea required rows={3} className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Précisez les pays visés, la taille de votre investissement et vos questions stratégiques..." />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs transition-colors">
                  Transmettre ma demande d'étude stratégique
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Report Modal */}
      {activeReport && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button onClick={() => setActiveReport(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>
            <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md mb-2 inline-block">
              {activeReport.category}
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{activeReport.title}</h2>
            <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
              <span>{activeReport.author}</span>
              <span>•</span>
              <span>Publié le {activeReport.date}</span>
              <span>•</span>
              <span>{activeReport.readTime}</span>
            </div>

            <div className="bg-[#0B1120] border border-[#1E293B] rounded-xl p-4 mb-6 flex items-center gap-4">
              <span className="text-3xl font-black text-orange-400">{activeReport.keyMetric}</span>
              <span className="text-sm text-slate-300">{activeReport.keyMetricLabel}</span>
            </div>

            <h4 className="text-sm font-bold text-white mb-2">Résumé Analytique :</h4>
            <p className="text-slate-300 text-xs leading-relaxed mb-6">{activeReport.summary}</p>

            <h4 className="text-sm font-bold text-white mb-2">Recommandations Stratégiques :</h4>
            <ul className="space-y-2 text-xs text-slate-300 mb-8 list-disc list-inside">
              <li>Mettre en place des partenariats bilatéraux directs pour réduire les coûts intermédiaires.</li>
              <li>S'appuyer sur les accords régionaux (CARICOM / AEC) pour bénéficier des exonérations tarifaires.</li>
              <li>Intégrer des garanties de change et des solutions d'affacturage pour sécuriser les liquidités.</li>
            </ul>

            <div className="flex gap-4">
              <button onClick={() => alert("Le rapport complet au format PDF a été envoyé à votre adresse email.")} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Télécharger le rapport complet (PDF)
              </button>
              <button onClick={() => setActiveReport(null)} className="bg-[#1E293B] text-slate-300 hover:text-white font-bold px-5 py-2.5 rounded-xl text-xs">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
