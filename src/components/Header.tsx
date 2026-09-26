"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#0B1120] border-b border-[#1E293B] z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* We use text logo or the existing image, assuming the existing image might have a white background, 
              but let's keep the image for now, and add a text fallback visually. */}
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500">POZITIV</span><span className="text-orange-500">EX+</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-slate-300 uppercase tracking-wider">
          <Link href="#" className="hover:text-blue-400 transition-colors">Intelligence</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Actualités</Link>
          <Link href="/opportunites" className="hover:text-blue-400 transition-colors">Opportunités</Link>
          <Link href="/reseautage" className="hover:text-blue-400 transition-colors">Réseau</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Data Center</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Programmes</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Formations</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
            Se connecter
          </Link>
          <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-bold transition-all">
            S'inscrire
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden p-2 text-slate-300 hover:bg-[#1E293B] rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1E293B] bg-[#0B1120]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="#" className="text-slate-300 hover:text-blue-400 font-medium">Intelligence</Link>
            <Link href="#" className="text-slate-300 hover:text-blue-400 font-medium">Actualités</Link>
            <Link href="/opportunites" className="text-slate-300 hover:text-blue-400 font-medium">Opportunités</Link>
            <Link href="/reseautage" className="text-slate-300 hover:text-blue-400 font-medium">Réseau</Link>
            <Link href="#" className="text-slate-300 hover:text-blue-400 font-medium">Data Center</Link>
            <Link href="#" className="text-slate-300 hover:text-blue-400 font-medium">Programmes</Link>
            <Link href="#" className="text-slate-300 hover:text-blue-400 font-medium">Formations</Link>
            <hr className="border-[#1E293B] my-2" />
            <Link href="#" className="text-slate-300 font-medium">Se connecter</Link>
            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md font-bold mt-2">
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
