"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Database, BarChart2, Globe, Download, Search, Check, 
  Code, ArrowRight, Layers, FileSpreadsheet, Activity,
  Server, Shield, RefreshCw
} from "lucide-react";

interface CountryData {
  id: string;
  name: string;
  flag: string;
  capital: string;
  population: string;
  gdp: string;
  growth: string;
  currency: string;
  internetPenetration: string;
  topExports: string[];
  keySectors: string[];
}

const COUNTRIES: CountryData[] = [
  {
    id: "HT",
    name: "Haïti",
    flag: "🇭🇹",
    capital: "Port-au-Prince",
    population: "11.7 Millions",
    gdp: "$21.4 Md",
    growth: "+1.8%",
    currency: "Gourde (HTG) / USD",
    internetPenetration: "42.5%",
    topExports: ["Textiles & Habillement", "Mangues Franciques & Cacao", "Huiles Essentielles (Vétiver)"],
    keySectors: ["Agriculture & Agro-industrie", "Sous-traitance textile", "FinTech & Transferts"]
  },
  {
    id: "DO",
    name: "République Dominicaine",
    flag: "🇩🇴",
    capital: "Santo Domingo",
    population: "11.3 Millions",
    gdp: "$121.5 Md",
    growth: "+5.1%",
    currency: "Peso Dominicain (DOP)",
    internetPenetration: "79.8%",
    topExports: ["Équipements médicaux", "Or & Minerais", "Cigares & Produits agricoles"],
    keySectors: ["Tourisme de masse", "Zones franches industrielles", "Construction & BTP"]
  },
  {
    id: "JM",
    name: "Jamaïque",
    flag: "🇯🇲",
    capital: "Kingston",
    population: "2.8 Millions",
    gdp: "$17.1 Md",
    growth: "+2.4%",
    currency: "Dollar Jamaïcain (JMD)",
    internetPenetration: "74.1%",
    topExports: ["Bauxite & Alumine", "Rhum & Spiritueux", "Café Blue Mountain"],
    keySectors: ["Services & Tourisme", "Logistique aéroportuaire", "BPO & Centres d'appels"]
  },
  {
    id: "TT",
    name: "Trinité-et-Tobago",
    flag: "🇹🇹",
    capital: "Port d'Espagne",
    population: "1.5 Million",
    gdp: "$27.8 Md",
    growth: "+2.9%",
    currency: "Dollar Trinitéen (TTD)",
    internetPenetration: "81.2%",
    topExports: ["Gaz Naturel Liquéfié (GNL)", "Ammoniac & Méthanol", "Produits pétroliers"],
    keySectors: ["Énergie & Pétrochimie", "Services financiers", "Manufacture légère"]
  },
  {
    id: "BB",
    name: "Barbade",
    flag: "🇧🇧",
    capital: "Bridgetown",
    population: "282 000",
    gdp: "$5.8 Md",
    growth: "+3.7%",
    currency: "Dollar Barbadien (BBD)",
    internetPenetration: "86.4%",
    topExports: ["Services financiers internationaux", "Rhum", "Produits pharmaceutiques"],
    keySectors: ["Banque & Assurances", "Tourisme haut de gamme", "Technologies vertes"]
  }
];

const DATASETS = [
  {
    id: "ds-1",
    title: "Tableau de Bord du Commerce Interrégional Caraïbe (2020-2026)",
    format: "CSV",
    size: "4.8 MB",
    updated: "25 Sept 2026",
    desc: "Volumes d'importation et d'exportation par type de produit et pays de provenance dans l'espace CARICOM et Caraïbe élargie."
  },
  {
    id: "ds-2",
    title: "Observatoire des Investissements en Énergies Renouvelables & Micro-grids",
    format: "JSON",
    size: "2.3 MB",
    updated: "18 Sept 2026",
    desc: "Puissances installées (solaire, éolien, hydro), subventions actives et cartographie des installations de production propre."
  },
  {
    id: "ds-3",
    title: "Indicateurs d'Inclusion Financière & Taux d'Adoption Mobile Money",
    format: "XLSX",
    size: "6.1 MB",
    updated: "10 Sept 2026",
    desc: "Pourcentages de population bancarisée, transactions électroniques mensuelles et croissance des terminaux de paiement numérique."
  }
];

export default function DataCenterPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(COUNTRIES[0]);
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const copyCode = () => {
    navigator.clipboard.writeText("curl -X GET 'https://api.pozitivex.com/v1/data/macro?country=HT' \
  -H 'Authorization: Bearer YOUR_API_KEY'");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (dsTitle: string) => {
    setDownloadSuccess(dsTitle);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5" /> Observatoire & Data Center Caraïbe
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Les Données Économiques Régionales <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              Fiables, Centralisées et en Libre Accès
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Statistiques macro-économiques vérifiées, flux commerciaux, indicateurs démographiques et séries temporelles pour chercheurs, décideurs et investisseurs.
          </p>
        </div>
      </section>

      {/* Country Explorer */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-400" /> Explorateur par Pays de la Région
            </h2>
            <p className="text-slate-400 text-xs mt-1">Sélectionnez un pays pour afficher ses principaux agrégats économiques.</p>
          </div>

          {/* Country Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCountry(c)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCountry.id === c.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-[#131B2F] text-slate-400 hover:text-white border border-[#1E293B]"
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Country Dashboard */}
        <div className="bg-[#131B2F] border border-[#1E293B] rounded-3xl p-6 md:p-8 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#1E293B] mb-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{selectedCountry.flag}</span>
              <div>
                <h3 className="text-3xl font-extrabold text-white">{selectedCountry.name}</h3>
                <p className="text-xs text-slate-400">Capitale : {selectedCountry.capital} • Monnaie : {selectedCountry.currency}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-semibold">Croissance PIB (2026) :</span>
              <span className="text-lg font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                {selectedCountry.growth}
              </span>
            </div>
          </div>

          {/* Metrics 4-grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#0B1120] border border-[#1E293B] p-4 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium block mb-1">PIB Nominal</span>
              <span className="text-2xl font-black text-white">{selectedCountry.gdp}</span>
            </div>
            <div className="bg-[#0B1120] border border-[#1E293B] p-4 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium block mb-1">Population</span>
              <span className="text-2xl font-black text-white">{selectedCountry.population}</span>
            </div>
            <div className="bg-[#0B1120] border border-[#1E293B] p-4 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium block mb-1">Pénétration Internet</span>
              <span className="text-2xl font-black text-sky-400">{selectedCountry.internetPenetration}</span>
            </div>
            <div className="bg-[#0B1120] border border-[#1E293B] p-4 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium block mb-1">Indice de Stabilité</span>
              <span className="text-2xl font-black text-orange-400">B+ (Actif)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0B1120] border border-[#1E293B] p-5 rounded-2xl">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Principaux Produits d'Exportation</h4>
              <ul className="space-y-2">
                {selectedCountry.topExports.map((exp, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0B1120] border border-[#1E293B] p-5 rounded-2xl">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Secteurs Stratégiques en Croissance</h4>
              <ul className="space-y-2">
                {selectedCountry.keySectors.map((sec, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    {sec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Open Datasets Catalog */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-emerald-400" /> Jeux de Données en Libre Téléchargement
              </h2>
              <p className="text-slate-400 text-xs mt-1">Données structurées prêtes à l'analyse sous formats standards (CSV, JSON, XLSX).</p>
            </div>
          </div>

          {downloadSuccess && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-xs font-semibold mb-6 flex items-center gap-2">
              <Check className="h-4 w-4" />
              Téléchargement initié avec succès pour : {downloadSuccess}
            </div>
          )}

          <div className="space-y-4">
            {DATASETS.map(ds => (
              <div
                key={ds.id}
                className="bg-[#131B2F] border border-[#1E293B] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all shadow-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      {ds.format}
                    </span>
                    <span className="text-xs text-slate-400">Taille : {ds.size}</span>
                    <span className="text-xs text-slate-500">• Mis à jour le {ds.updated}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{ds.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ds.desc}</p>
                </div>

                <button
                  onClick={() => handleDownload(ds.title)}
                  className="bg-[#1E293B] hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all flex-shrink-0"
                >
                  <Download className="h-3.5 w-3.5" /> Télécharger ({ds.format})
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* API for Developers */}
        <div className="bg-gradient-to-r from-[#0B1120] to-[#131B2F] border border-[#1E293B] rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-2 inline-flex items-center gap-1.5">
                <Code className="h-3.5 w-3.5" /> API REST PozitivEx+ Data
              </span>
              <h3 className="text-xl font-bold text-white">Intégrez nos flux de données dans vos applications</h3>
            </div>
            <Link
              href="/inscription"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
            >
              Obtenir une clé API gratuite
            </Link>
          </div>

          <div className="bg-[#050811] border border-[#1E293B] rounded-xl p-4 relative font-mono text-xs text-slate-300 overflow-x-auto">
            <button
              onClick={copyCode}
              className="absolute top-3 right-3 bg-[#1E293B] hover:bg-[#2e3e58] text-white px-3 py-1 rounded text-[11px] font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="h-3 w-3 text-emerald-400" /> : null}
              {copied ? "Copié !" : "Copier cURL"}
            </button>
            <pre>
{`curl -X GET 'https://api.pozitivex.com/v1/data/macro?country=HT' \
  -H 'Authorization: Bearer YOUR_API_KEY'`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
