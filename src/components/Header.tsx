"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#0B1120]/95 backdrop-blur-md border-b border-[#1E293B] z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="PozitivEx+" width={170} height={55} className="object-contain h-9 sm:h-11 w-auto drop-shadow-md" priority />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-bold text-slate-300 uppercase tracking-wider">
          <Link href="/intelligence" className="hover:text-blue-400 transition-colors whitespace-nowrap">Intelligence</Link>
          <Link href="/magazine" className="hover:text-blue-400 transition-colors whitespace-nowrap">Actualités</Link>
          <Link href="/opportunites" className="hover:text-blue-400 transition-colors whitespace-nowrap">Opportunités</Link>
          <Link href="/reseautage" className="hover:text-blue-400 transition-colors whitespace-nowrap">Réseau</Link>
          <Link href="/data-center" className="hover:text-blue-400 transition-colors whitespace-nowrap">Data Center</Link>
          <Link href="/programmes" className="hover:text-blue-400 transition-colors whitespace-nowrap">Programmes</Link>
          <Link href="/formations" className="hover:text-blue-400 transition-colors whitespace-nowrap">Formations</Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link 
            href="/connexion" 
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-[#1E293B] transition-colors"
          >
            <User className="h-3.5 w-3.5" /> Connexion
          </Link>
          <Link 
            href="/inscription" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm shadow-blue-500/20 transition-all hover:scale-[1.02]"
          >
            Devenir membre
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="xl:hidden p-2 text-slate-300 hover:bg-[#1E293B] rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-[#1E293B] bg-[#0B1120]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/intelligence" className="text-slate-300 hover:text-blue-400 font-medium py-1">Intelligence</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/magazine" className="text-slate-300 hover:text-blue-400 font-medium py-1">Actualités</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/opportunites" className="text-slate-300 hover:text-blue-400 font-medium py-1">Opportunités</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/reseautage" className="text-slate-300 hover:text-blue-400 font-medium py-1">Réseau d'Affaires</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/data-center" className="text-slate-300 hover:text-blue-400 font-medium py-1">Data Center</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/programmes" className="text-slate-300 hover:text-blue-400 font-medium py-1">Programmes</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/formations" className="text-slate-300 hover:text-blue-400 font-medium py-1">Formations</Link>
            <hr className="border-[#1E293B] my-2" />
            <div className="flex flex-col gap-2 pt-1">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/connexion" className="text-slate-300 hover:text-white font-medium py-1.5 flex items-center gap-2">
                <User className="h-4 w-4" /> Connexion
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/inscription" className="bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-2.5 rounded-lg">
                Devenir membre
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
