import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Lightbulb, GraduationCap, Users, Shield, Zap, Search, ChevronRight, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-16 pt-12">
      
      {/* 1. Hero Section */}
      <section className="container mx-auto px-4 text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="text-blue-500">Connecting the Caribbean</span> <br />
          <span className="text-orange-500">to Global Opportunities</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Connecter la Caraïbe aux opportunités mondiales grâce à l'intelligence économique, à l'innovation, aux affaires et à la technologie.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-bold transition-colors w-full sm:w-auto">
            Explorer les Opportunités +
          </button>
          <button className="bg-transparent border border-slate-600 text-white px-8 py-3 rounded text-sm font-bold hover:bg-slate-800 transition-colors w-full sm:w-auto">
            Devenir membre
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded text-sm font-bold transition-colors w-full sm:w-auto">
            Investir dans la Caraïbe
          </button>
        </div>
      </section>

      {/* 2. Video Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2 block border border-orange-500/30 rounded-full px-3 py-1 w-max mx-auto">Vidéos</span>
          <h2 className="text-3xl font-bold text-white">Découvrez le potentiel de la Caraïbe</h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-sm">Explorez les merveilles, la culture et les opportunités de notre région à travers nos sélections vidéos.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 bg-[#131B2F] p-4 lg:p-6 rounded-2xl border border-[#1E293B]">
          {/* Main Video */}
          <div className="lg:w-2/3">
            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-[#1E293B]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/S8pvwbiY9OU?si=z8B3f4D3R_wO2mPz" 
                title="Yon gwo Pwofesè ki bati pwòp paradi l lakay li" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          
          {/* Playlist */}
          <div className="lg:w-1/3 flex flex-col">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Plus de vidéos
            </h3>
            <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[400px]">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-3 bg-[#0B1120] p-2 rounded-lg border border-[#1E293B] cursor-pointer hover:border-slate-600 transition-colors">
                  <div className="w-24 h-16 bg-slate-800 rounded flex-shrink-0 flex items-center justify-center relative">
                     <Play className="text-white/50 h-6 w-6" />
                  </div>
                  <div className="flex-1 py-1">
                    <span className="text-[10px] text-orange-500 font-bold uppercase block mb-1">Caraïbes</span>
                    <h4 className="text-slate-200 text-xs font-medium line-clamp-2 leading-tight">Nature et destinations : le nouveau visage de la Caraïbe en 2024.</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Magazine & Actualités */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Magazine */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-[#1E293B] p-2 rounded-lg text-blue-400"><Search className="h-5 w-5" /></span>
              Magazine Économique
            </h2>
            <div className="bg-[#131B2F] rounded-2xl border border-[#1E293B] overflow-hidden group cursor-pointer">
              <div className="h-48 bg-gradient-to-b from-orange-500/20 to-[#131B2F] relative p-4 flex flex-col justify-between border-b border-[#1E293B]">
                <span className="bg-blue-600 text-xs text-white px-3 py-1 rounded-full w-max">Innovation</span>
                {/* Mock image area */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-50">
                   <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
                   <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">L'avenir de l'agriculture technologique dans la Caraïbe</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Analyse approfondie des nouvelles méthodes agricoles et de leur impact sur l'économie régionale.</p>
                <div className="flex gap-3">
                   <div className="border border-[#1E293B] px-3 py-1.5 rounded text-xs text-slate-300">Interview</div>
                   <div className="border border-[#1E293B] px-3 py-1.5 rounded text-xs text-slate-300">Innovation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Actualités */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-[#1E293B] p-2 rounded-lg text-orange-400"><TrendingUp className="h-5 w-5" /></span>
              Actualités & Veille
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { tag: "Économie", title: "Croissance des investissements régionaux en T3", date: "Il y a 2h" },
                { tag: "Énergie", title: "Nouveau projet d'énergie solaire approuvé", date: "Il y a 5h" },
                { tag: "Technologie", title: "Lancement du Caribbean Tech Hub", date: "Hier" },
                { tag: "Finance", title: "Les banques régionales annoncent de nouveaux taux", date: "Hier" },
                { tag: "Transport", title: "Amélioration des infrastructures portuaires", date: "03 Oct 2024" },
              ].map((news, i) => (
                <div key={i} className="bg-[#131B2F] p-4 rounded-xl border border-[#1E293B] flex flex-col hover:border-slate-600 cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-orange-500 font-bold flex items-center gap-1.5 uppercase">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> {news.tag}
                    </span>
                    <span className="text-[10px] text-slate-500">{news.date}</span>
                  </div>
                  <h4 className="text-white text-sm font-medium">{news.title}</h4>
                </div>
              ))}
            </div>
            <button className="w-full text-center mt-6 text-sm text-orange-500 font-medium hover:text-orange-400 transition-colors flex justify-center items-center gap-1">
              Voir toutes les actualités <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
        </div>
      </section>

      {/* 4. Connectez-vous aux opportunités */}
      <section className="container mx-auto px-4 mt-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Connectez-vous aux opportunités</h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">Découvrez les meilleures opportunités d'affaires et développez votre réseau professionnel avec les acteurs clés du marché.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Opportunités */}
          <div className="bg-[#131B2F] rounded-2xl p-6 lg:p-8 border border-[#1E293B]">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-blue-500"><Briefcase className="h-5 w-5" /></span> Opportunités
            </h3>
            <p className="text-slate-400 text-xs mb-6">Trouvez les financements et projets qui correspondent à votre vision.</p>
            <div className="grid grid-cols-2 gap-4">
              {['Investissements', 'Financements', "Appels d'offres", 'Partenariats'].map((item, i) => (
                <div key={i} className="border border-[#1E293B] bg-[#0B1120] p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 cursor-pointer transition-colors text-center">
                  <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center text-blue-400">
                     <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="text-slate-200 text-xs font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Réseau d'Affaires */}
          <div className="bg-[#131B2F] rounded-2xl p-6 lg:p-8 border border-orange-500/30 relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 relative z-10">
              <span className="text-orange-500"><Users className="h-5 w-5" /></span> Réseau d'Affaires
            </h3>
            <p className="text-slate-400 text-xs mb-8 relative z-10">Rejoignez la communauté des décideurs et entrepreneurs locaux.</p>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Répertoire des entreprises</h4>
                  <p className="text-slate-400 text-xs">Accédez à notre base de données qualifiée.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Mise en relation</h4>
                  <p className="text-slate-400 text-xs">Connectez acheteurs et vendeurs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Missions économiques</h4>
                  <p className="text-slate-400 text-xs">Participez à nos événements exclusifs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Données & Intelligence */}
      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Intelligence Territoriale</span>
            <h2 className="text-3xl font-bold text-white mb-4">Données & Intelligence Économique</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Prenez des décisions éclairées grâce à nos outils d'analyse et nos données exclusives sur le marché local.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Statistiques économiques en temps réel</li>
              <li className="flex items-center gap-3 text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Études de marché sectorielles</li>
              <li className="flex items-center gap-3 text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Tableaux de bord personnalisés</li>
              <li className="flex items-center gap-3 text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Observatoire économique régional</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded text-sm font-bold transition-colors">
              Accéder à l'Observatoire
            </button>
          </div>
          
          <div className="bg-[#131B2F] border border-[#1E293B] rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-bold text-sm">Évolution des Investissements</h3>
              <span className="border border-[#1E293B] text-xs px-2 py-1 rounded text-slate-400">Caraïbe (En millions USD)</span>
            </div>
            {/* Mock Chart */}
            <div className="h-48 w-full border-l border-b border-slate-700 relative mt-4">
              <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,40 Q20,20 40,35 T80,10 T100,5 L100,50 L0,50 Z" fill="url(#blueGrad)" />
                <path d="M0,40 Q20,20 40,35 T80,10 T100,5" fill="none" stroke="#3B82F6" strokeWidth="1" />
                
                <path d="M0,45 Q20,40 40,45 T80,30 T100,25 L100,50 L0,50 Z" fill="url(#orangeGrad)" />
                <path d="M0,45 Q20,40 40,45 T80,30 T100,25" fill="none" stroke="#F97316" strokeWidth="1" />
              </svg>
              <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] text-slate-500">
                <span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Programmes PozitivEx+ */}
      <section className="container mx-auto px-4 mt-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Programmes PozitivEx+</h2>
          <p className="text-slate-400 text-sm">Un écosystème complet pour accompagner votre croissance et renforcer vos capacités.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Search, name: "Intelligence", desc: "Études et rapports économiques", color: "text-blue-400" },
            { icon: GraduationCap, name: "Academy", desc: "Formations et certifications", color: "text-orange-400" },
            { icon: Users, name: "Network", desc: "Réseau d'affaires international", color: "text-blue-400" },
            { icon: TrendingUp, name: "Capital", desc: "Investissements et financements", color: "text-orange-400" },
            { icon: Lightbulb, name: "Technology", desc: "IA et innovation (Hub Tech)", color: "text-blue-400" },
            { icon: Shield, name: "Impact", desc: "Femmes, Jeunesse et Développement", color: "text-orange-400" },
          ].map((prog, i) => (
            <div key={i} className="bg-[#131B2F] border border-[#1E293B] p-6 rounded-xl hover:border-slate-600 transition-colors cursor-pointer">
              <prog.icon className={`h-6 w-6 mb-4 ${prog.color}`} />
              <h3 className="text-white font-bold mb-1">PozitivEx+ {prog.name}</h3>
              <p className="text-slate-400 text-xs">{prog.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Formations & Tarifs */}
      <section className="container mx-auto px-4 mt-10">
        <div className="text-center mb-10">
          <span className="border border-blue-500/30 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 inline-block">Academy & Solution</span>
          <h2 className="text-3xl font-bold text-white mb-3">Formations & Tarifs</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">Investissez dans vos compétences ou soutenez notre mission de développement économique dans la Caraïbe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {/* Plan 1 */}
          <div className="bg-[#131B2F] border border-[#1E293B] p-8 rounded-2xl flex flex-col relative">
            <h3 className="text-white font-bold text-lg mb-1">Masterclass Entrepreneuriat</h3>
            <p className="text-slate-400 text-xs mb-4">Pour les porteurs de projets</p>
            <div className="text-3xl font-bold text-white mb-6">$149</div>
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Modules en ligne</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Accès à la communauté</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Certificat de participation</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-bold">S'inscrire</button>
          </div>
          {/* Plan 2 */}
          <div className="bg-gradient-to-b from-[#1E293B] to-[#131B2F] border border-blue-500 p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
            <span className="absolute -top-3 right-6 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded">Populaire</span>
            <h3 className="text-white font-bold text-lg mb-1">Certificat Intelligence Éco.</h3>
            <p className="text-slate-400 text-xs mb-4">Pour les professionnels</p>
            <div className="text-3xl font-bold text-white mb-6">$299</div>
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Programme complet (8 semaines)</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Mentorat personnalisé</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Certification reconnue</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Accès Data Center (6 mois)</li>
            </ul>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-bold">S'inscrire</button>
          </div>
          {/* Plan 3 */}
          <div className="bg-[#131B2F] border border-[#1E293B] p-8 rounded-2xl flex flex-col relative">
            <h3 className="text-white font-bold text-lg mb-1">Bootcamp IA & Innovation</h3>
            <p className="text-slate-400 text-xs mb-4">Pour les technologues</p>
            <div className="text-3xl font-bold text-white mb-6">$499</div>
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Formation intensive (12 sem.)</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Projets pratiques (HubTech)</li>
              <li className="flex items-center gap-2"><span className="text-blue-500">•</span> Placement en entreprise</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-bold">S'inscrire</button>
          </div>
        </div>

        {/* Donation Banner */}
        <div className="max-w-4xl mx-auto border border-orange-500/30 bg-gradient-to-r from-[#131B2F] to-[#1E293B] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5" /> Soutenir PozitivEx+
            </h3>
            <p className="text-slate-300 text-sm max-w-lg">Vos dons nous aident à financer des bourses d'études pour les jeunes de la Caraïbe, à soutenir des projets d'innovation et à maintenir notre plateforme accessible.</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded text-sm font-bold flex-shrink-0 flex items-center gap-2">
            Faire un don
          </button>
        </div>
      </section>

      {/* 8. Assistant IA */}
      <section className="container mx-auto px-4 mt-10">
        <div className="max-w-5xl mx-auto bg-[#131B2F] border border-[#1E293B] p-6 lg:p-10 rounded-3xl flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <span className="border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1"><Lightbulb className="h-3 w-3"/> Intelligence Artificielle</span>
            <h2 className="text-3xl font-bold text-white mb-4">Votre Assistant Stratégique</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Propulsé par l'IA, notre assistant est capable de rechercher des opportunités, générer des rapports, produire des analyses et identifier vos futurs partenaires.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 mb-6">
              <div className="flex items-center gap-2"><span className="text-orange-500">⚡</span> Rechercher d'opportunités</div>
              <div className="flex items-center gap-2"><span className="text-orange-500">⚡</span> Génération de rapports</div>
              <div className="flex items-center gap-2"><span className="text-orange-500">⚡</span> Analyses prédictives</div>
              <div className="flex items-center gap-2"><span className="text-orange-500">⚡</span> Matching de partenaires</div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#0B1120] border border-[#1E293B] rounded-xl p-4">
              <div className="flex items-center gap-3 border-b border-[#1E293B] pb-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"><Search className="h-4 w-4"/></div>
                <input type="text" placeholder="Rechercher une opportunité..." className="bg-transparent border-none outline-none text-white text-sm w-full" disabled />
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-lg text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
                Essayer l'Assistant IA
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
