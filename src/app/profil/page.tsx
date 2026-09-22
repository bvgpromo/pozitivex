import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User } from "lucide-react";

export default function ProfilPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-slate-50 text-center">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 max-w-2xl w-full">
        <div className="h-16 w-16 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <User className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Mon Profil</h1>
        <p className="text-slate-600 text-lg mb-8">
          L'espace membre pour gérer votre profil, vos publications et vos connexions sera bientôt disponible.
        </p>
        <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-8">
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
}
