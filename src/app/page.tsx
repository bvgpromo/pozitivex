import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, TrendingUp, Lightbulb, GraduationCap, MapPin, ArrowRight, UserPlus, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16 bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-24 pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-orange-500/20 to-yellow-500/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
            L'écosystème économique des MPME
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 max-w-5xl mx-auto leading-tight tracking-tight">
            Transformer l'information en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-green-400">opportunités</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Plateforme d'intelligence économique, de formation, de réseautage, de finance et de développement territorial.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/50">
              <Link href="/opportunites"><Search className="mr-2 h-5 w-5" /> Explorer les opportunités</Link>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-xl bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-900/20">
              <Link href="/opportunites/publier"><FileText className="mr-2 h-5 w-5" /> Publier une opportunité</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-xl border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-transparent">
              <Link href="/profil"><UserPlus className="mr-2 h-5 w-5" /> Créer un profil</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Search Bar */}
      <section className="container mx-auto px-4 -mt-24 relative z-20">
        <div className="max-w-4xl mx-auto bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 flex items-center w-full px-4 bg-slate-50 rounded-xl">
            <Search className="h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un emploi, un service, un financement..." 
              className="w-full py-4 px-3 outline-none text-slate-700 bg-transparent"
            />
          </div>
          <Button className="w-full sm:w-auto h-14 px-8 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
            Rechercher
          </Button>
        </div>
      </section>

      {/* Les 6 Moteurs */}
      <section className="container mx-auto px-4 mt-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Les 6 moteurs de <span className="text-blue-600">POZITIVEX+</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tout ce dont vous avez besoin pour développer votre entreprise, trouver des talents ou financer vos projets.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-14 w-14 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Intelligence économique</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Données, veille, analyses, études et informations stratégiques pour prendre de meilleures décisions.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 2 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-14 w-14 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Formation & savoir-faire</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Formation continue, webinars, masterclass, mentorat pour développer vos compétences.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 3 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-14 w-14 bg-gradient-to-br from-green-100 to-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Finance & investissement</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Crédit, financement, investment readiness, projets et accès aux investisseurs.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 4 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-14 w-14 bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Technologie & innovation</h3>
            <p className="text-slate-600 leading-relaxed mb-4">IA, FinTech, digitalisation, outils numériques et solutions innovantes pour MPME.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 5 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-pink-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-14 w-14 bg-gradient-to-br from-pink-100 to-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Opportunités & réseautage</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Emplois, services, partenariats, appels d'offres, marchés et connexions B2B.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 6 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-14 w-14 bg-gradient-to-br from-teal-100 to-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Développement local</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Épargne locale, crédit productif, investissement territorial et création de richesse.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
        </div>
      </section>

      {/* Blocs Dynamiques */}
      <section className="container mx-auto px-4 mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Dernières opportunités</h2>
          <Button variant="outline" className="rounded-full px-6" asChild>
            <Link href="/opportunites">Tout voir <ArrowRight className="ml-2 h-4 w-4"/></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mock Item 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Emploi</span>
              <span className="text-xs font-medium text-slate-400">Il y a 2h</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Responsable Financier (H/F)</h4>
            <p className="text-sm text-slate-500 mb-6 flex items-center gap-1"><MapPin className="h-3 w-3"/> Entreprise Agricole SA &bull; Port-au-Prince</p>
            <Button variant="outline" className="w-full rounded-xl hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200">Voir l'offre</Button>
          </div>
          {/* Mock Item 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase">Appel d'offres</span>
              <span className="text-xs font-medium text-slate-400">Aujourd'hui</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Développement Plateforme Web</h4>
            <p className="text-sm text-slate-500 mb-6 flex items-center gap-1"><MapPin className="h-3 w-3"/> Tech Innov &bull; Télétravail</p>
            <Button variant="outline" className="w-full rounded-xl hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200">Voir l'offre</Button>
          </div>
          {/* Mock Item 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold tracking-wider text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase">Financement</span>
              <span className="text-xs font-medium text-slate-400">Hier</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Fonds de soutien aux MPME</h4>
            <p className="text-sm text-slate-500 mb-6 flex items-center gap-1"><MapPin className="h-3 w-3"/> Banque de Développement &bull; National</p>
            <Button variant="outline" className="w-full rounded-xl hover:bg-green-50 hover:text-green-600 hover:border-green-200">Voir le programme</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
