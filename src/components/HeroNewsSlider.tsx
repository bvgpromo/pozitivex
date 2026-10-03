"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, ArrowRight, Sparkles, Newspaper } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  imageUrl?: string;
  content?: string;
  date?: string;
}

interface HeroNewsSliderProps {
  articles: Article[];
}

export default function HeroNewsSlider({ articles }: HeroNewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const fallbackArticles: Article[] = [
    {
      id: "1",
      title: "L'avenir de l'agriculture technologique dans la Caraïbe",
      category: "Innovation",
      imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200",
      content: "Une analyse approfondie des nouvelles méthodes agricoles et de leur impact sur l'économie régionale dans la Caraïbe.",
      date: "03 Oct 2026"
    },
    {
      id: "2",
      title: "Croissance des investissements régionaux en T3",
      category: "Économie",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      content: "Le troisième trimestre enregistre une hausse notable des capitaux alloués aux PME et aux infrastructures clés.",
      date: "Il y a 2h"
    },
    {
      id: "3",
      title: "Nouveau projet d'énergie solaire approuvé",
      category: "Énergie",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200",
      content: "Un parc solaire de grande envergure vient d'obtenir les autorisations environnementales pour son déploiement.",
      date: "Il y a 5h"
    },
    {
      id: "4",
      title: "Lancement du Caribbean Tech Hub",
      category: "Technologie",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
      content: "Un nouvel incubateur dédié aux startups technologiques régionales ouvre ses portes ce mois-ci.",
      date: "Hier"
    }
  ];

  const items = Array.isArray(articles) && articles.length > 0 ? articles : fallbackArticles;

  // Auto-play slideshow every 5.5 seconds
  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  const current = items[currentIndex] || items[0];
  const cleanExcerpt = current.content
    ? current.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160) + "..."
    : "Découvrez cette analyse stratégique sur le développement économique et les opportunités dans la région caribéenne.";

  return (
    <div className="w-full max-w-6xl mx-auto my-6 px-2 sm:px-4">
      {/* Slideshow Card */}
      <div
        className="relative overflow-hidden rounded-3xl border border-[#1E293B] bg-[#0d1627] shadow-2xl shadow-blue-950/40 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Image with Ken Burns / Fade Effect */}
        <div className="relative h-[480px] sm:h-[500px] lg:h-[520px] w-full overflow-hidden">
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
              style={{ transition: "opacity 0.8s ease-in-out, transform 8s ease-out" }}
            >
              {item.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.75]"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-950 via-[#0B1120] to-orange-950" />
              )}
            </div>
          ))}

          {/* Gradients Overlay for 100% Crystal-Clear Contrast */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/75 to-black/30" />
          <div className="absolute inset-0 z-20 hidden lg:block bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent w-2/3" />

          {/* Top Info Bar */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 z-30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-blue-400/30">
                <Sparkles className="h-3 w-3 text-sky-200" /> {current.category || "Actualités"}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-300 font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <Clock className="h-3 w-3 text-slate-400" /> {current.date || "Récemment"}
              </span>
            </div>

            {/* Slide Index Badge */}
            <div className="bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-xs px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
              <span className="text-blue-400 font-black">0{currentIndex + 1}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">0{items.length}</span>
            </div>
          </div>

          {/* Bottom/Center Content */}
          <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 right-4 sm:right-8 z-30 max-w-3xl">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1">
                <Newspaper className="h-3 w-3" /> À La Une • PozitivEx+
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight sm:leading-snug mb-3 drop-shadow-md">
              <Link href={`/articles/${current.id}`} className="hover:text-blue-300 transition-colors">
                {current.title}
              </Link>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 line-clamp-2 sm:line-clamp-3 max-w-2xl drop-shadow">
              {cleanExcerpt}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/articles/${current.id}`}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-blue-600/40 transition-all hover:scale-105 flex items-center gap-2"
              >
                Lire l'article complet <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/magazine"
                className="bg-black/40 hover:bg-white/15 backdrop-blur-md text-slate-200 border border-white/20 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition-colors"
              >
                Toutes les actualités
              </Link>
            </div>
          </div>

          {/* Left / Right Nav Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Article précédent"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-blue-600 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all hover:scale-110 shadow-xl opacity-80 group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Article suivant"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-blue-600 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all hover:scale-110 shadow-xl opacity-80 group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Bottom Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 z-30 flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Aller à l'article ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-7 sm:w-9 bg-blue-500 shadow-md shadow-blue-500/50"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Quick-Select Thumbnail Ticker (below the active slide) */}
        <div className="hidden lg:grid grid-cols-4 gap-3 p-4 bg-[#091120] border-t border-[#1E293B]">
          {items.slice(0, 4).map((item, idx) => (
            <button
              key={item.id || idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-3 p-2.5 rounded-xl text-left transition-all ${
                idx === currentIndex
                  ? "bg-[#131B2F] border border-blue-500/60 shadow-md"
                  : "hover:bg-[#131B2F]/60 border border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#0B1120] border border-[#1E293B]">
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-blue-900/40" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-blue-400 block uppercase">
                  {item.category}
                </span>
                <p className="text-xs text-white font-medium line-clamp-1 truncate">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
