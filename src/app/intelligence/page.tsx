import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center bg-[#0B1120]">
      <span className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center mb-6 text-2xl">
        🚧
      </span>
      <h1 className="text-4xl font-bold text-white mb-4">Intelligence Économique</h1>
      <p className="text-slate-400 max-w-lg mb-8">
        Cette page est actuellement en cours de développement. Les fonctionnalités seront bientôt disponibles sur PozitivEx+.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
        <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
      </Link>
    </div>
  );
}
