import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Filter, Briefcase, Handshake, Landmark } from "lucide-react";

export default function Opportunites() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Opportunités</h1>
          <p className="text-slate-600">Découvrez les emplois, services, financements et projets.</p>
        </div>
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/opportunites/publier">+ Publier une opportunité</Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filtres
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-2">Catégorie</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Toutes les catégories</option>
                  <option>Emplois et stages</option>
                  <option>Services professionnels</option>
                  <option>Financement</option>
                  <option>Partenariats</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-2">Secteur</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Tous les secteurs</option>
                  <option>Agriculture</option>
                  <option>Technologie</option>
                  <option>Finance</option>
                </select>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">Appliquer</Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 flex items-center mb-6">
            <div className="pl-4 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="w-full py-2 px-4 outline-none text-slate-700 bg-transparent"
            />
          </div>

          <div className="space-y-4">
            {/* List Item 1 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Emploi</span>
                    <span className="text-xs text-slate-400">Il y a 2h</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">Responsable Financier (H/F)</h4>
                  <p className="text-sm text-slate-500">Entreprise Agricole SA &bull; Port-au-Prince</p>
                </div>
              </div>
              <Button variant="outline">Voir l'offre</Button>
            </div>

            {/* List Item 2 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                  <Landmark className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">Financement</span>
                    <span className="text-xs text-slate-400">Hier</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">Fonds de soutien aux MPME</h4>
                  <p className="text-sm text-slate-500">Banque de Développement &bull; National</p>
                </div>
              </div>
              <Button variant="outline">Voir le projet</Button>
            </div>
            
            {/* List Item 3 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center shrink-0">
                  <Handshake className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Partenariat</span>
                    <span className="text-xs text-slate-400">Il y a 3 jours</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">Recherche distributeurs Sud</h4>
                  <p className="text-sm text-slate-500">AgroTech Haïti &bull; Les Cayes</p>
                </div>
              </div>
              <Button variant="outline">Contacter</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
