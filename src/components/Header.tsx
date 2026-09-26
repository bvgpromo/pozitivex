"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#0B1120] border-b border-[#1E293B] z-50">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Link href="/" className="flex items-center gap-2 lg:w-1/4">
          {/* We use text logo or the existing image, assuming the existing image might have a white background, 
              but let's keep the image for now, and add a text fallback visually. */}
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="PozitivEx+" width={180} height={60} className="object-contain drop-shadow-md" priority />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 text-sm font-bold text-slate-300 uppercase tracking-wider">
          <Link href="/intelligence" className="hover:text-blue-400 transition-colors whitespace-nowrap">Intelligence</Link>
          <Link href="/magazine" className="hover:text-blue-400 transition-colors whitespace-nowrap">Actualités</Link>
          <Link href="/opportunites" className="hover:text-blue-400 transition-colors whitespace-nowrap">Opportunités</Link>
          <Link href="/reseautage" className="hover:text-blue-400 transition-colors whitespace-nowrap">Réseau</Link>
          <Link href="/data-center" className="hover:text-blue-400 transition-colors whitespace-nowrap">Data Center</Link>
          <Link href="/programmes" className="hover:text-blue-400 transition-colors whitespace-nowrap">Programmes</Link>
          <Link href="/formations" className="hover:text-blue-400 transition-colors whitespace-nowrap">Formations</Link>
        </nav>

        {/* Desktop Buttons */}
        

        <div className="hidden lg:block lg:w-1/4"></div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden ml-auto p-2 text-slate-300 hover:bg-[#1E293B] rounded-md transition-colors"
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
            
            
          </div>
        </div>
      )}
    </header>
  );
}
