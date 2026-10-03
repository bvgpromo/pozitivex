"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowLeft, ArrowRight, CheckCircle2, Shield, Eye, EyeOff } from "lucide-react";

export default function ConnexionPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate login & set localStorage user for frontend profile
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem("pozitivex_user", JSON.stringify({
          email,
          name: email.split("@")[0].toUpperCase(),
          role: "Membre Professionnel",
          joined: "Octobre 2026"
        }));
        router.push("/profil");
      } else {
        setError("Veuillez renseigner votre email et mot de passe.");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1120] text-slate-200">
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#131B2F] border border-[#1E293B] rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <span className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl">
              🔐
            </span>
            <h1 className="text-2xl font-bold text-white mb-2">Espace Membre PozitivEx+</h1>
            <p className="text-xs text-slate-400">Connectez-vous pour accéder à vos opportunités et votre réseau d'affaires.</p>
          </div>

          {error && (
            <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-3 rounded-xl text-xs mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Email professionnel</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="nom@entreprise.com"
                  className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-300">Mot de passe</label>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Un email de réinitialisation a été simulé."); }} className="text-[11px] text-blue-400 hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#0B1120] border border-[#1E293B] rounded-xl pl-10 pr-10 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              {loading ? "Connexion en cours..." : "Se connecter"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#1E293B] text-center">
            <p className="text-xs text-slate-400">
              Pas encore membre du réseau ?{" "}
              <Link href="/inscription" className="text-blue-400 font-bold hover:underline">
                Créer un compte gratuitement
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
