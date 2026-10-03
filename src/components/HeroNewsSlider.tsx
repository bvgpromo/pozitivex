"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, ArrowRight, Sparkles } from "lucide-react";

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

  // Touch swipe for mobile
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

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
      {/* Slideshow Card */}
      <div
        className="relative overflow-hidden rounded-3xl border border-[#1E293B] bg-[#0c1322] shadow-2xl shadow-blue-950/30 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Image Container */}
        <div className="relative h-[340px] sm:h-[400px] md:h-[440px] w-full overflow-hidden">
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

          {/* Clean gradient overlay: bottom dark fade for readable title, but letting the photo shine! */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-black/20" />

          {/* Top Badges */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 border border-blue-400/30">
                <Sparkles className="h-3 w-3 text-sky-200" /> {current.category || "Actualité"}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-300 font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <Clock className="h-3 w-3 text-slate-400" /> {current.date || "Récemment"}
              </span>
            </div>

            {/* Slide Counter */}
            <div className="bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <span className="text-blue-400 font-bold">0{currentIndex + 1}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">0{items.length}</span>
            </div>
          </div>

          {/* Bottom Title & Action Button (No long paragraph!) */}
          <div className="absolute bottom-5 sm:bottom-7 left-4 sm:left-6 right-16 sm:right-24 z-30 max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight sm:leading-snug mb-3 drop-shadow-md">
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

              <Link
                href="/magazine"
                className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Voir tout le magazine →
              </Link>
            </div>
          </div>

          {/* Left / Right Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Précédent"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-blue-600 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg opacity-75 group-hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Suivant"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-blue-600 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg opacity-75 group-hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Bottom Dots Indicator */}
          <div className="absolute bottom-3 right-4 z-30 flex items-center gap-1.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-blue-500 shadow-sm"
                    : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Quick Mini-Tabs (Clean & compact, 1 line each) */}
        <div className="hidden md:grid grid-cols-4 gap-2 p-3 bg-[#080f1c] border-t border-[#1E293B]">
          {items.slice(0, 4).map((item, idx) => (
            <button
              key={item.id || idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-2.5 p-2 rounded-xl text-left transition-all ${
                idx === currentIndex
                  ? "bg-[#131B2F] border border-blue-500/60 text-white"
                  : "hover:bg-[#131B2F]/50 border border-transparent text-slate-400 hover:text-slate-200 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-[#0B1120] border border-[#1E293B]">
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-blue-900/40" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-blue-400 block uppercase truncate">
                  {item.category}
                </span>
                <p className="text-[11px] font-medium line-clamp-1 truncate">
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
