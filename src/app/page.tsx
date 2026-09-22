import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, TrendingUp, Lightbulb, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16 bg-slate-50">
      {/* Hero Section - Split Layout */}
      <section className="relative bg-[#f4f7fb] pt-16 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left side: Text and Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide">
                L'écosystème des MPME
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Transformer l'information en <br className="hidden lg:block"/><span className="text-blue-600">opportunités</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 font-light leading-relaxed max-w-2xl">
                Plateforme d'intelligence économique, de formation, de réseautage, de finance et de développement territorial au service des MPME.
              </p>
              
              <div className="flex flex-col w-full sm:w-auto items-center lg:items-start gap-3">
                <Button asChild size="lg" className="w-full sm:w-80 text-base h-12 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <Link href="/opportunites">Explorer les opportunités</Link>
                </Button>
                <Button asChild size="lg" className="w-full sm:w-80 text-base h-12 rounded-md bg-orange-500 hover:bg-orange-600 text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <Link href="/opportunites/publier">+ Publier une opportunité</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-80 text-base h-12 rounded-md border border-slate-900 text-slate-900 hover:bg-slate-100 bg-white transition-all hover:shadow-sm">
                  <Link href="/profil">Créer un profil</Link>
                </Button>
              </div>
            </div>

            {/* Right side: Slideshow Banner */}
            <div className="w-full lg:w-1/2 z-10">
              <HeroSlideshow />
            </div>

          </div>
        </div>
      </section>

      {/* Floating Search Bar */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="max-w-5xl mx-auto bg-white p-2 rounded-xl shadow-xl border border-slate-200 flex flex-col sm:flex-row items-center gap-2">
          <div className="flex-1 flex items-center w-full px-4 bg-transparent rounded-lg">
            <Search className="h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un emploi, un service, un financement..." 
              className="w-full py-4 px-3 outline-none text-slate-700 bg-transparent text-lg"
            />
          </div>
          <Button className="w-full sm:w-auto h-14 px-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold text-base shadow-md">
            Rechercher
          </Button>
        </div>
      </section>

      {/* Les 6 Moteurs */}
      <section className="container mx-auto px-4 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Les 6 moteurs de POZITIVEX+</h2>
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

    </div>
  );
}
