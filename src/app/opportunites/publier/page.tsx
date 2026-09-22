import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Publier() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="mb-8">
        <Link href="/opportunites" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
          &larr; Retour aux opportunités
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Publier une opportunité</h1>
        <p className="text-slate-600">Remplissez les informations ci-dessous pour publier votre offre sur POZITIVEX+.</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Titre de l'opportunité *</label>
            <input type="text" className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Ex: Analyste Financier, Appel d'offre IT..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Catégorie *</label>
              <select className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Emploi / Stage</option>
                <option>Service professionnel</option>
                <option>Demande de financement</option>
                <option>Partenariat B2B</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Secteur d'activité *</label>
              <select className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Agriculture</option>
                <option>Finance</option>
                <option>Technologie</option>
                <option>Commerce</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Localisation</label>
            <input type="text" className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Ex: Port-au-Prince, Cap-Haïtien ou Télétravail" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description détaillée *</label>
            <textarea rows={5} className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Décrivez votre besoin, les compétences requises ou l'offre..."></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date limite de candidature</label>
            <input type="date" className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="pt-4 border-t">
            <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Soumettre l'opportunité
            </Button>
            <p className="text-xs text-slate-500 text-center mt-4">
              En soumettant, vous acceptez les conditions d'utilisation de POZITIVEX+. 
              Votre annonce sera vérifiée avant publication finale.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
