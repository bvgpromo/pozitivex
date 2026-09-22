import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, TrendingUp, Lightbulb, GraduationCap, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 lg:gap-16 pb-16 bg-slate-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-72 pb-16 lg:pt-48 lg:pb-56 overflow-hidden bg-cover bg-[center_top] lg:bg-[center_top] bg-no-repeat w-full min-h-[90vh] lg:min-h-[75vh] flex items-end lg:items-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Gradient overlay on mobile: Dark at the bottom for text, transparent at the top so the face is clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent lg:hidden"></div>

        <div className="container mx-auto px-4 relative z-10 w-full flex flex-col lg:items-start text-center lg:text-left">
          <div className="max-w-2xl lg:ml-0 mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight tracking-tight drop-shadow-lg">
              Transformer l'information en <br className="hidden md:block"/><span className="text-yellow-400">opportunités</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-slate-100 mb-8 lg:mb-12 font-light leading-relaxed drop-shadow-md px-2 lg:px-0">
              Plateforme d'intelligence économique, de formation, de réseautage, de finance et de développement territorial au service des MPME.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 lg:gap-4 mb-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-sm lg:text-base h-12 lg:h-14 px-6 lg:px-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-xl border-none transition-transform hover:-translate-y-1">
                <Link href="/opportunites">Explorer les opportunités</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto text-sm lg:text-base h-12 lg:h-14 px-6 lg:px-8 rounded-md bg-orange-500 hover:bg-orange-600 text-white shadow-xl border-none transition-transform hover:-translate-y-1">
                <Link href="/opportunites/publier">+ Publier</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-sm lg:text-base h-12 lg:h-14 px-6 lg:px-8 rounded-md border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent shadow-xl transition-transform hover:-translate-y-1">
                <Link href="/profil">Mon profil</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Search Bar */}
      <section className="container mx-auto px-4 -mt-8 lg:-mt-24 relative z-20">
        <div className="max-w-4xl mx-auto bg-white p-2 lg:p-3 rounded-2xl shadow-2xl border border-slate-100 flex flex-col sm:flex-row items-center gap-2 lg:gap-3">
          <div className="flex-1 flex items-center w-full px-4 bg-slate-50 rounded-xl">
            <Search className="h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un emploi, un service, un financement..." 
              className="w-full py-3 lg:py-4 px-3 outline-none text-slate-700 bg-transparent text-base lg:text-lg"
            />
          </div>
          <Button className="w-full sm:w-auto h-12 lg:h-14 px-8 lg:px-10 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm lg:text-base shadow-md">
            Rechercher
          </Button>
        </div>
      </section>

      {/* Les 6 Moteurs */}
      <section className="container mx-auto px-4 mt-4 lg:mt-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Les 6 moteurs de POZITIVEX+</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-6 w-6 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">Intelligence économique</h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">Données, veille, analyses, études et informations stratégiques pour prendre de meilleures décisions.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 2 */}
          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">Formation & savoir-faire</h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">Formation continue, webinars, masterclass, mentorat pour développer vos compétences.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 3 */}
          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-gradient-to-br from-green-100 to-green-50 text-green-600 rounded-xl flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-6 w-6 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">Finance & investissement</h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">Crédit, financement, investment readiness, projects et accès aux investisseurs.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 4 */}
          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="h-6 w-6 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">Technologie & innovation</h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">IA, FinTech, digitalisation, outils numériques et solutions innovantes pour MPME.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 5 */}
          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-pink-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-gradient-to-br from-pink-100 to-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="h-6 w-6 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">Opportunités & réseautage</h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">Emplois, services, partenariats, appels d'offres, marchés et connexions B2B.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
          {/* Card 6 */}
          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-gradient-to-br from-teal-100 to-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-6 w-6 lg:h-7 lg:w-7" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">Développement local</h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">Épargne locale, crédit productif, investissement territorial et création de richesse.</p>
            <Link href="#" className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700">En savoir plus <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
