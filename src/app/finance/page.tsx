"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  DollarSign, TrendingUp, ShieldCheck, CheckCircle2, 
  ArrowRight, Users, Building, Coins, Layers
} from "lucide-react";

export default function FinancePage() {
  const [pitchSuccess, setPitchSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPitchSuccess(true);
    setTimeout(() => setPitchSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-20">
      <section className="relative overflow-hidden border-b border-[#1E293B] bg-gradient-to-b from-[#131B2F] to-[#0B1120] py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Coins className="h-3.5 w-3.5" /> Solutions de Capital & Investissement
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Financez Vos Projets & Développez <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400">
              Vos Investissements en Caraïbe
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Nous connectons les porteurs de projets prometteurs avec des investisseurs privés, des fonds d'amorçage et les capitaux productifs de la diaspora.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#131B2F] border border-[#1E293B] p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Club d'Anges Investisseurs</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Réseau exclusif de business angels caribéens et de la diaspora investissant des tickets de $10k à $100k dans des startups et PME en amorçage.
            </p>
            <span className="text-xs font-semibold text-blue-400">Ticket moyen : $25k - $50k</span>
          </div>

          <div className="bg-[#131B2F] border border-blue-500/40 p-8 rounded-3xl relative shadow-xl shadow-blue-900/20">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fonds Impact Caraïbe</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Co-investissement institutionnel ciblant l'énergie solaire, l'agriculture résiliente et les infrastructures technologiques créatrices d'emplois.
            </p>
            <span className="text-xs font-semibold text-orange-400">Enveloppe : $100k - $500k</span>
          </div>

          <div className="bg-[#131B2F] border border-[#1E293B] p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Financement Participatif</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Campagnes de micro-financement et obligations communautaires garanties pour les coopératives et projets locaux à fort ancrage territorial.
            </p>
            <span className="text-xs font-semibold text-emerald-400">Rendement visé : 7% à 12%</span>
          </div>
        </div>

        {/* Pitch Form */}
        <div className="bg-gradient-to-r from-[#131B2F] to-[#1E293B] border border-blue-500/30 rounded-3xl p-8 md:p-10 shadow-2xl max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Pitcher Votre Projet en Recherche de Financement</h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">Soumettez votre dossier à notre comité d'investissement pour une première évaluation sous 7 jours.</p>
          </div>

          {pitchSuccess ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center">
              <CheckCircle2 className="h-10 w-10 mx-auto mb-2" />
              <h3 className="font-bold text-base mb-1">Dossier reçu avec succès !</h3>
              <p className="text-xs text-slate-300">Notre équipe d'analystes vous contactera pour planifier un premier entretien de qualification.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nom du Porteur / Dirigeant</label>
                  <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: Alex Daniel" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nom de l'Entreprise</label>
                  <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: SolaBio S.A." />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                  <input required type="email" className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="alex@solabio.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Montant recherché (USD)</label>
                  <input required className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Ex: $75,000 USD" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Secteur d'activité</label>
                <select className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500">
                  <option>AgriTech & Agroalimentaire</option>
                  <option>Énergies Renouvelables & CleanTech</option>
                  <option>FinTech & Paiements Mobiles</option>
                  <option>Logistique & Commerce Régional</option>
                  <option>Santé, Éducation & Services</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Pitch court du projet (Objectifs & Rentabilité)</label>
                <textarea required rows={4} className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Décrivez votre produit/service, vos chiffres clés actuels et l'utilisation prévue des fonds..." />
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-lg shadow-blue-600/30">
                Soumettre mon dossier au comité d'investissement
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
