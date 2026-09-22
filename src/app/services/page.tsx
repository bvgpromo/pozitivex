import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-slate-50 text-center">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 max-w-2xl w-full">
        <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Services</h1>
        <p className="text-slate-600 text-lg mb-8">
          Le répertoire des services professionnels pour accompagner votre entreprise sera bientôt disponible.
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8">
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
}
