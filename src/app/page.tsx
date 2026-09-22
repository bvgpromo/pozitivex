import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, TrendingUp, Lightbulb, GraduationCap, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            Transformer l'information en <span className="text-blue-600">opportunités</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Plateforme d'intelligence économique, de formation, de réseautage, de finance et de développement territorial au service des MPME.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto text-base">
              <Link href="/opportunites">Explorer les opportunités</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto text-base">
              <Link href="/opportunites/publier">+ Publier une opportunité</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base">
              <Link href="/profil">Créer un profil</Link>
            </Button>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white p-2 rounded-xl shadow-lg flex items-center border">
            <div className="pl-4 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input 
              type="text" 
              placeholder="Rechercher un emploi, un service, un financement..." 
              className="w-full py-3 px-4 outline-none text-slate-700 bg-transparent"
            />
            <Button className="px-8">Rechercher</Button>
          </div>
        </div>
      </section>

      {/* Les 6 Moteurs */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Les 6 moteurs de POZITIVEX+</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Intelligence économique</h3>
            <p className="text-slate-600 text-sm">Données, veille, analyses, études et informations stratégiques.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Formation & savoir-faire</h3>
            <p className="text-slate-600 text-sm">Formation continue, webinars, masterclass, mentorat.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Finance & investissement</h3>
            <p className="text-slate-600 text-sm">Crédit, financement, investment readiness, investisseurs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Technologie & innovation</h3>
            <p className="text-slate-600 text-sm">IA, FinTech, digitalisation, solutions innovantes.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Opportunités & réseautage</h3>
            <p className="text-slate-600 text-sm">Emplois, services, partenariats, appels d'offres, connexions B2B.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Développement local</h3>
            <p className="text-slate-600 text-sm">Épargne locale, crédit productif, investissement territorial.</p>
          </div>
        </div>
      </section>

      {/* Blocs Dynamiques (Mock) */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Dernières opportunités</h2>
          <Button variant="ghost" asChild>
            <Link href="/opportunites">Voir tout &rarr;</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mock Item 1 */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Emploi</span>
              <span className="text-xs text-slate-400">Il y a 2h</span>
            </div>
            <h4 className="font-semibold mb-1">Responsable Financier (H/F)</h4>
            <p className="text-sm text-slate-500 mb-4">Entreprise Agricole SA &bull; Port-au-Prince</p>
            <Button variant="outline" size="sm" className="w-full">Voir l'offre</Button>
          </div>
          {/* Mock Item 2 */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">Appel d'offres</span>
              <span className="text-xs text-slate-400">Aujourd'hui</span>
            </div>
            <h4 className="font-semibold mb-1">Développement Plateforme Web</h4>
            <p className="text-sm text-slate-500 mb-4">Tech Innov &bull; Télétravail</p>
            <Button variant="outline" size="sm" className="w-full">Voir l'offre</Button>
          </div>
          {/* Mock Item 3 */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Financement</span>
              <span className="text-xs text-slate-400">Hier</span>
            </div>
            <h4 className="font-semibold mb-1">Fonds de soutien aux MPME</h4>
            <p className="text-sm text-slate-500 mb-4">Banque de Développement &bull; National</p>
            <Button variant="outline" size="sm" className="w-full">Voir le programme</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
