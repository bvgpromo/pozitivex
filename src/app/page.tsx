"use client";

import HeroNewsSlider from "@/components/HeroNewsSlider";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Lightbulb, GraduationCap, Users, Shield, Zap, Search, ChevronRight, Briefcase } from "lucide-react";

function getYouTubeId(url: string) {
  if (!url) return '';
  const trimmed = String(url).trim();
  const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (match && match[1]) return match[1];
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  return trimmed;
}

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [videoList, setVideoList] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [pricingData, setPricingData] = useState<any>(null);
  const [homepageData, setHomepageData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/admin/articles')
      .then(r => (r.ok ? r.json() : []))
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setArticles(data);
      })
      .catch(() => {});

    fetch('/api/admin/videos')
      .then(r => (r.ok ? r.json() : []))
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setVideoList(data);
      })
      .catch(() => {});

    fetch('/api/admin/pricing')
      .then(r => (r.ok ? r.json() : null))
      .then(data => {
        if (data && data.plans) setPricingData(data);
      })
      .catch(() => {});

    fetch('/api/admin/homepage')
      .then(r => (r.ok ? r.json() : null))
      .then(data => {
        if (data && data.hero) setHomepageData(data);
      })
      .catch(() => {});
  }, []);

  const defaultVideos = [
    { id: "1", youtubeId: "S8pvwbiY9OU", tag: "AGRICULTURE", title: "Yon gwo Pwofesè ki bati pwòp paradi l lakay li | yon bèl fèm agrilòl" },
    { id: "2", youtubeId: "Zgv4CLJALTc", tag: "INNOVATION", title: "Développement technologique et opportunités d'affaires" },
    { id: "3", youtubeId: "hmVCi2ZL3Nw", tag: "ÉCONOMIE", title: "L'impact des investissements étrangers dans la Caraïbe" },
    { id: "4", youtubeId: "atUomXZm1Gg", tag: "TOURISME", title: "Redéfinir le tourisme écologique et durable" }
  ];

  const currentVideos = videoList.length > 0 ? videoList : defaultVideos;
  const activeVideo = selectedVideo || currentVideos[0];
  const activeYtId = getYouTubeId(activeVideo.youtubeId || activeVideo.videoUrl || activeVideo.id) || "S8pvwbiY9OU";

  const featured = articles[0] || {
    id: "1",
    title: "L'avenir de l'agriculture technologique dans la Caraïbe",
    category: "Innovation",
    imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200",
    content: "Analyse approfondie des nouvelles méthodes agricoles et de leur impact sur l'économie régionale.",
  };

  const newsList = articles.length > 1 ? articles.slice(1, 6) : [
    { id: "2", category: "Économie", title: "Croissance des investissements régionaux en T3", date: "Il y a 2h" },
    { id: "3", category: "Énergie", title: "Nouveau projet d'énergie solaire approuvé", date: "Il y a 5h" },
    { id: "4", category: "Technologie", title: "Lancement du Caribbean Tech Hub", date: "Hier" },
    { id: "5", category: "Finance", title: "Les banques régionales annoncent de nouveaux taux", date: "Hier" },
    { id: "6", category: "Transport", title: "Amélioration des infrastructures portuaires", date: "03 Oct 2026" },
  ];

  const defaultPricing = {
    header: {
      badge: "Academy & Solution",
      title: "Formations & Tarifs",
      description: "Investissez dans vos compétences ou soutenez notre mission de développement économique dans la Caraïbe."
    },
    plans: [
      {
        id: "masterclass",
        title: "Masterclass Entrepreneuriat",
        subtitle: "Pour les porteurs de projets",
        price: "$149",
        features: ["Modules en ligne", "Accès à la communauté", "Certificat de participation"],
        buttonText: "S'inscrire",
        popular: false
      },
      {
        id: "certificat",
        title: "Certificat Intelligence Éco.",
        subtitle: "Pour les professionnels",
        price: "$299",
        features: [
          "Programme complet (8 semaines)",
          "Mentorat personnalisé",
          "Certification reconnue",
          "Accès Data Center (6 mois)"
        ],
        buttonText: "S'inscrire",
        popular: true
      },
      {
        id: "bootcamp",
        title: "Bootcamp IA & Innovation",
        subtitle: "Pour les technologues",
        price: "$499",
        features: [
          "Formation intensive (12 sem.)",
          "Projets pratiques (HubTech)",
          "Placement en entreprise"
        ],
        buttonText: "S'inscrire",
        popular: false
      }
    ],
    donation: {
      title: "Soutenir PozitivEx+",
      description: "Vos dons nous aident à financer des bourses d'études pour les jeunes de la Caraïbe, à soutenir des projets d'innovation et à maintenir notre plateforme accessible.",
      buttonText: "Faire un don"
    }
  };

  const activePricing = pricingData || defaultPricing;
  const defaultHomepage = {
    hero: {
      badge: "Plateforme Économique Intelligente",
      titleLine1: "Connecting the Caribbean",
      titleLine2: "to Global Opportunities",
      subtitle: "Connecter la Caraïbe aux opportunités mondiales grâce à l'intelligence économique, à l'innovation, aux affaires et à la technologie.",
      btn1Text: "Explorer les Opportunités +",
      btn1Link: "/opportunites",
      btn2Text: "Devenir membre",
      btn2Link: "/inscription",
      btn3Text: "Investir dans la Caraïbe",
      btn3Link: "/finance"
    },
    aiAssistant: {
      badge: "Intelligence Artificielle",
      title: "Votre Assistant Stratégique",
      description: "Propulsé par l'IA, notre assistant est capable de rechercher des opportunités, générer des rapports, produire des analyses et identifier vos futurs partenaires.",
      features: [
        "Recherche d'opportunités",
        "Génération de rapports",
        "Analyses prédictives",
        "Matching de partenaires"
      ]
    }
  };

  const activeHp = homepageData || defaultHomepage;
  const hero = activeHp.hero;
  const ai = activeHp.aiAssistant;


  return (
    <div className="flex flex-col gap-16 md:gap-20 pb-16 pt-8">
      
      {/* 1. Hero Section & Slideshow */}
      <section className="container mx-auto px-4 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          {hero.badge || "Plateforme Économique & Réseau d'Affaires Caraïbe"}
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">{hero.titleLine1}</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">{hero.titleLine2}</span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          {hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto mb-8">
          <Link href={hero.btn1Link || "/opportunites"} className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 text-center">
            {hero.btn1Text}
          </Link>
          <Link href={hero.btn2Link || "/inscription"} className="w-full sm:w-auto inline-flex items-center justify-center bg-[#131B2F] hover:bg-[#1E293B] border border-[#1E293B] text-slate-200 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors text-center">
            {hero.btn2Text}
          </Link>
          <Link href={hero.btn3Link || "/finance"} className="w-full sm:w-auto inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-orange-500/20 hover:scale-105 text-center">
            {hero.btn3Text}
          </Link>
        </div>
      </section>

      {/* Featured Actualités Slideshow */}
      <section className="container mx-auto px-4 -mt-10 sm:-mt-8">
        <HeroNewsSlider articles={articles} />
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
                src={`https://www.youtube-nocookie.com/embed/${activeYtId}?autoplay=1&mute=0`} 
                title={activeVideo.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4">
              <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-0.5 rounded font-bold uppercase tracking-wider inline-block mb-2">
                ● {activeVideo.tag || "VIDÉO"}
              </span>
              <h3 className="text-white font-bold text-xl">{activeVideo.title}</h3>
              {activeVideo.description && (
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{activeVideo.description}</p>
              )}
            </div>
          </div>
          
          {/* Playlist */}
          <div className="lg:w-1/3 flex flex-col">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Plus de vidéos ({currentVideos.length})
            </h3>
            <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[440px]">
              {currentVideos.map((video: any, index: number) => {
                const yt = getYouTubeId(video.youtubeId || video.videoUrl || video.id);
                const isSelected = activeVideo.id === video.id || activeYtId === yt;
                return (
                  <div 
                    key={video.id || index} 
                    onClick={() => setSelectedVideo(video)}
                    className={`flex gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${isSelected ? 'bg-blue-900/40 border-blue-500 shadow-md ring-1 ring-blue-500/50' : 'bg-[#0B1120] border-[#1E293B] hover:border-slate-500 hover:bg-[#111827]'}`}
                  >
                    <div className="w-24 h-16 bg-slate-800 rounded-lg flex-shrink-0 relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${yt}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                        <Play className={`h-5 w-5 drop-shadow-md ${isSelected ? 'text-blue-400' : 'text-white/90'}`} />
                      </div>
                    </div>
                    <div className="flex-1 py-0.5 min-w-0">
                      <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider block mb-1">{video.tag || "VIDÉO"}</span>
                      <h4 className="text-slate-200 text-xs font-medium line-clamp-2 leading-tight">{video.title}</h4>
                    </div>
                  </div>
                );
              })}
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
            <Link
              href={`/articles/${featured.id}`}
              className="block bg-[#131B2F] rounded-2xl border border-[#1E293B] overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-all hover:-translate-y-1 shadow-xl"
            >
              <div className="h-52 relative overflow-hidden bg-[#0F172A] border-b border-[#1E293B]">
                {featured.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={featured.imageUrl}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-orange-500/20 to-[#131B2F] flex items-center justify-center">
                    <Search className="w-12 h-12 text-blue-400/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2F] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-blue-600 text-xs text-white px-3 py-1 rounded-full font-semibold shadow-md">
                  {featured.category || "Innovation"}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {featured.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {featured.content?.replace(/<[^>]*>/g, "")}
                </p>
                <div className="flex items-center gap-3">
                  <div className="border border-[#1E293B] px-3 py-1.5 rounded text-xs text-slate-300">
                    {featured.category || "Analyse"}
                  </div>
                  <div className="border border-[#1E293B] px-3 py-1.5 rounded text-xs text-slate-300">
                    PozitivEx+
                  </div>
                  <span className="ml-auto text-xs text-blue-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Lire l'article <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Actualités */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-[#1E293B] p-2 rounded-lg text-orange-400"><TrendingUp className="h-5 w-5" /></span>
              Actualités & Veille
            </h2>
            <div className="flex flex-col gap-4">
              {newsList.map((news: any, i: number) => (
                <Link
                  key={news.id || i}
                  href={`/articles/${news.id}`}
                  className="bg-[#131B2F] p-4 rounded-xl border border-[#1E293B] flex flex-col hover:border-slate-600 cursor-pointer transition-all hover:bg-[#1a233a] group"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-orange-500 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> {news.category || news.tag || "Économie"}
                    </span>
                    <span className="text-[10px] text-slate-500">{news.date || "Récent"}</span>
                  </div>
                  <h4 className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </Link>
              ))}
            </div>
            <Link
              href="/articles"
              className="w-full text-center mt-6 text-sm text-orange-500 font-medium hover:text-orange-400 transition-colors flex justify-center items-center gap-1 py-2"
            >
              Voir toutes les actualités <ChevronRight className="h-4 w-4" />
            </Link>
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
          {activePricing.header?.badge && (
            <span className="border border-blue-500/30 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 inline-block">
              {activePricing.header.badge}
            </span>
          )}
          <h2 className="text-3xl font-bold text-white mb-3">
            {activePricing.header?.title || "Formations & Tarifs"}
          </h2>
          {activePricing.header?.description && (
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              {activePricing.header.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 items-stretch">
          {activePricing.plans?.map((plan: any, idx: number) => {
            const isPopular = !!plan.popular;
            return (
              <div
                key={plan.id || idx}
                className={
                  isPopular
                    ? "bg-gradient-to-b from-[#1E293B] to-[#131B2F] border border-blue-500 p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20"
                    : "bg-[#131B2F] border border-[#1E293B] p-8 rounded-2xl flex flex-col relative"
                }
              >
                {isPopular && (
                  <span className="absolute -top-3 right-6 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                    Populaire
                  </span>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{plan.title}</h3>
                {plan.subtitle && <p className="text-slate-400 text-xs mb-4">{plan.subtitle}</p>}
                <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
                  {plan.features?.map((feat: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-blue-500">•</span> {feat}
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    isPopular
                      ? "w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-bold transition-colors"
                      : "w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-bold transition-colors"
                  }
                >
                  {plan.buttonText || "S'inscrire"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Donation Banner */}
        {activePricing.donation && (
          <div className="max-w-4xl mx-auto border border-orange-500/30 bg-gradient-to-r from-[#131B2F] to-[#1E293B] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-orange-500 font-bold text-lg mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5" /> {activePricing.donation.title || "Soutenir PozitivEx+"}
              </h3>
              <p className="text-slate-300 text-sm max-w-lg">
                {activePricing.donation.description}
              </p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded text-sm font-bold flex-shrink-0 flex items-center gap-2">
              {activePricing.donation.buttonText || "Faire un don"}
            </button>
          </div>
        )}
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
