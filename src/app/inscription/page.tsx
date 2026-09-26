import Link from "next/link";
import { ArrowLeft, User, Mail, Lock } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1120] text-slate-200">
      {/* Back to Home Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#131B2F] border border-[#1E293B] rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Créer un compte</h1>
            <p className="text-slate-400 text-sm">Rejoignez PozitivEx+ et accédez à toutes nos opportunités.</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Nom complet</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-2.5 bg-[#0B1120] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Adresse e-mail</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="email" 
                  className="w-full pl-10 pr-4 py-2.5 bg-[#0B1120] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Mot de passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="password" 
                  className="w-full pl-10 pr-4 py-2.5 bg-[#0B1120] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="button" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors mt-2 shadow-lg shadow-blue-600/20"
            >
              S'inscrire
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#1E293B] text-center">
            <p className="text-slate-400 text-sm">
              Vous avez déjà un compte ?{' '}
              <Link href="/connexion" className="text-blue-500 font-bold hover:text-blue-400 transition-colors">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
