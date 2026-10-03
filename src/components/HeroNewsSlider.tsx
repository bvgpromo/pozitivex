"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, ArrowRight, Sparkles, Zap } from "lucide-react";

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
      date: "03 Oct 2026"
    },
    {
      id: "2",
      title: "Croissance des investissements régionaux en T3",
      category: "Économie",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      date: "Il y a 2h"
    },
    {
      id: "3",
      title: "Nouveau projet d'énergie solaire approuvé",
      category: "Énergie",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200",
      date: "Il y a 5h"
    },
    {
      id: "4",
      title: "Lancement du Caribbean Tech Hub",
      category: "Technologie",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
      date: "Hier"
    },
    {
      id: "5",
      title: "Les banques régionales annoncent de nouveaux taux",
      category: "Finance",
      imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200",
      date: "Hier"
    },
    {
      id: "6",
      title: "Amélioration des infrastructures portuaires",
      category: "Transport",
      imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
      date: "03 Oct 2026"
    }
  ];

  const items = Array.isArray(articles) && articles.length > 0 ? articles : fallbackArticles;

  // Auto-play slideshow every 5.5s
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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) nextSlide();
    else if (diff < -40) prevSlide();
    touchStartX.current = null;
  };

  const current = items[currentIndex] || items[0];
  const sideArticles = items.slice(0, 4);

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      {/* 2-Column Grid: Main Slider (left) + Live Economic News Feed (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
        
        {/* Main Slider (8 cols on desktop) */}
        <div className="lg:col-span-8 flex flex-col">
          <div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#1E293B] bg-[#0c1322] shadow-2xl shadow-blue-950/40 group flex-1 h-[320px] sm:h-[390px] md:h-[450px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Background Images */}
            {items.map((item, idx) => (
              <div
                key={item.id || idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none z-0"
                }`}
                style={{ transition: "opacity 0.7s ease-in-out, transform 6s ease-out" }}
              >
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.85]"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-950 via-[#0B1120] to-orange-950" />
                )}
              </div>
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-black/20" />

            {/* Top Bar */}
            <div className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 z-30 flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 border border-blue-400/30">
                  <Sparkles className="h-3 w-3 text-sky-200" /> {current.category || "Actualité"}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-300 font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  <Clock className="h-3 w-3 text-slate-400" /> {current.date || "Récemment"}
                </span>
              </div>

              {/* Counter */}
              <div className="bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-1 shadow-sm">
                <span className="text-blue-400 font-bold">0{currentIndex + 1}</span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-400">0{items.length}</span>
              </div>
            </div>

            {/* Title & Read Action */}
            <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-6 right-12 sm:right-20 z-30 max-w-2xl">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight sm:leading-snug mb-3 drop-shadow-md line-clamp-2">
                <Link href={`/articles/${current.id}`} className="hover:text-blue-300 transition-colors">
                  {current.title}
                </Link>
              </h2>

              <div className="flex items-center gap-3">
                <Link
                  href={`/articles/${current.id}`}
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
                >
                  Lire l'article <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Prev / Next Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Précédent"
              className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-blue-600 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg opacity-80 sm:opacity-75 sm:group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Suivant"
              className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-blue-600 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg opacity-80 sm:opacity-75 sm:group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Progress Dots */}
            <div className="absolute bottom-2.5 sm:bottom-3 right-3 sm:right-4 z-30 flex items-center gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-5 sm:w-6 bg-blue-500 shadow-sm"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Dépêches & Tendances Économiques (4 cols on desktop, responsive list on mobile) */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-[#0e1726] border border-[#1E293B] rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E293B]">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-400" /> En Ce Moment
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
              {sideArticles.map((art, idx) => (
                <Link
                  key={art.id || idx}
                  href={`/articles/${art.id}`}
                  className="flex items-center gap-3 p-2 rounded-xl sm:rounded-2xl hover:bg-[#131B2F] border border-transparent hover:border-[#1E293B] transition-all group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-[#0B1120] border border-[#1E293B]">
                    {art.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={art.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full bg-blue-900/40" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[9px] sm:text-[10px] font-bold text-blue-400 uppercase">
                        {art.category}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-slate-500">• {art.date || "Récemment"}</span>
                    </div>
                    <h3 className="text-xs text-white font-semibold line-clamp-2 leading-snug group-hover:text-blue-300 transition-colors">
                      {art.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Quick-Action Mini Banner */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#1E293B]">
            <div className="bg-gradient-to-r from-blue-900/30 to-orange-950/20 border border-blue-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-white block truncate">Bourse d'Opportunités</span>
                <span className="text-[10px] text-slate-400 truncate block">Projets & appels d'offres</span>
              </div>
              <Link
                href="/opportunites"
                className="bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors flex-shrink-0"
              >
                Explorer <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
