"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  User, Mail, Building2, MapPin, Award, CheckCircle2, 
  Briefcase, GraduationCap, Settings, LogOut, ShieldCheck, 
  Bell, Bookmark, ArrowRight
} from "lucide-react";

export default function ProfilPage() {
  const [user, setUser] = useState<any>({
    name: "Alex Daniel",
    email: "alex.daniel@caraibe.org",
    role: "Directeur Général • Membre Privilège",
    company: "SolaCarib Technologies",
    location: "Port-au-Prince & Cap-Haïtien, Haïti",
    joined: "Membre depuis Octobre 2026",
    status: "Actif & Vérifié"
  });

  const [activeTab, setActiveTab] = useState<"overview" | "opportunities" | "formations" | "settings">("overview");

  useEffect(() => {
    const saved = localStorage.getItem("pozitivex_user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser((prev: any) => ({
          ...prev,
          name: parsed.name || prev.name,
          email: parsed.email || prev.email,
        }));
      } catch (e) {}
    }
  }, []);

  const savedOpportunities = [
    { title: "Recherche d'Investisseurs pour Usine Solaire de Cacao Bio", budget: "$350,000", deadline: "15 Déc 2026" },
    { title: "Appel d'Offres : Déploiement de 15 Micro-Réseaux Hybrides", budget: "$1,200,000", deadline: "30 Nov 2026" }
  ];

  const registeredCourses = [
    { title: "Certificat Intelligence Économique", progress: "40%", nextSession: "Mardi 19h00" }
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Profile Card */}
        <div className="bg-[#131B2F] border border-[#1E293B] rounded-3xl p-6 md:p-8 mb-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/20">
              {user.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Vérifié
                </span>
              </div>
              <p className="text-xs text-sky-400 font-semibold mb-1">{user.role}</p>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <Building2 className="h-3 w-3 text-slate-500" /> {user.company} • <MapPin className="h-3 w-3 text-slate-500" /> {user.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/opportunites"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors"
            >
              Explorer les opportunités
            </Link>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-[#1E293B] mb-8 gap-4 text-xs font-bold text-slate-400">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3 border-b-2 transition-colors ${activeTab === "overview" ? "border-blue-500 text-white" : "border-transparent hover:text-slate-200"}`}
          >
            Vue d'ensemble
          </button>
          <button
            onClick={() => setActiveTab("opportunities")}
            className={`pb-3 border-b-2 transition-colors ${activeTab === "opportunities" ? "border-blue-500 text-white" : "border-transparent hover:text-slate-200"}`}
          >
            Opportunités sauvegardées ({savedOpportunities.length})
          </button>
          <button
            onClick={() => setActiveTab("formations")}
            className={`pb-3 border-b-2 transition-colors ${activeTab === "formations" ? "border-blue-500 text-white" : "border-transparent hover:text-slate-200"}`}
          >
            Mes Formations Academy ({registeredCourses.length})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Bookmark className="h-4 w-4 text-blue-400" /> Vos opportunités actives
                </h3>
                <div className="space-y-3">
                  {savedOpportunities.map((op, i) => (
                    <div key={i} className="bg-[#0B1120] border border-[#1E293B] p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <h4 className="text-xs font-bold text-white mb-1">{op.title}</h4>
                        <span className="text-[11px] text-slate-400">Budget : {op.budget} • Date limite : {op.deadline}</span>
                      </div>
                      <Link href="/opportunites" className="text-blue-400 hover:underline text-xs font-bold flex items-center gap-1">
                        Voir <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-orange-400" /> Suivi de vos Cursus
                </h3>
                {registeredCourses.map((c, idx) => (
                  <div key={idx} className="bg-[#0B1120] border border-[#1E293B] p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-white">{c.title}</span>
                      <span className="text-xs font-black text-orange-400">{c.progress}</span>
                    </div>
                    <div className="w-full bg-[#1E293B] h-2 rounded-full overflow-hidden mb-2">
                      <div className="bg-gradient-to-r from-blue-500 to-orange-400 h-full w-[40%] rounded-full"></div>
                    </div>
                    <span className="text-[11px] text-slate-400">Prochaine session en direct : {c.nextSession}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" /> Statut d'Adhésion
                </h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-[#1E293B]">
                    <span className="text-slate-400">Type de compte :</span>
                    <strong className="text-white">Membre B2B Pro</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1E293B]">
                    <span className="text-slate-400">Accès Data Center :</span>
                    <strong className="text-emerald-400">Illimité</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1E293B]">
                    <span className="text-slate-400">Réseau B2B :</span>
                    <strong className="text-emerald-400">Actif</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Adhésion :</span>
                    <strong className="text-slate-300">{user.joined}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "opportunities" && (
          <div className="space-y-4">
            {savedOpportunities.map((op, i) => (
              <div key={i} className="bg-[#131B2F] border border-[#1E293B] p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{op.title}</h4>
                  <p className="text-xs text-slate-400">Enveloppe budgétaire : {op.budget} • Date limite : {op.deadline}</p>
                </div>
                <Link href="/opportunites" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs">
                  Accéder à l'opportunité
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab === "formations" && (
          <div className="space-y-4">
            {registeredCourses.map((c, idx) => (
              <div key={idx} className="bg-[#131B2F] border border-[#1E293B] p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{c.title}</h4>
                  <p className="text-xs text-slate-400">Progression : {c.progress} • Prochaine session : {c.nextSession}</p>
                </div>
                <Link href="/formations" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs">
                  Accéder à l'espace de cours
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
