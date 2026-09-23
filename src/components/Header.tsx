"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="POZITIVEX+ Logo" width={300} height={100} className="h-16 w-auto object-contain" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-600">
          <Link href="/opportunites" className="hover:text-blue-600 transition-colors relative group">
            Opportunités
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/emplois" className="hover:text-blue-600 transition-colors relative group">
            Emplois
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/reseautage" className="hover:text-blue-600 transition-colors relative group">
            Réseautage
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/finance" className="hover:text-blue-600 transition-colors relative group">
            Finance
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/profil" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors relative group">
            Mon Profil
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/opportunites/publier" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md text-sm font-bold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
            + Publier
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/opportunites" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2">Opportunités</Link>
            <Link href="/emplois" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2">Emplois</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2">Services</Link>
            <Link href="/reseautage" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2">Réseautage</Link>
            <Link href="/finance" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2">Finance</Link>
            <hr className="border-slate-100 my-2" />
            <Link href="/profil" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-semibold py-2">Mon Profil</Link>
            <Link href="/opportunites/publier" onClick={() => setIsMobileMenuOpen(false)} className="bg-orange-500 hover:bg-orange-600 text-white text-center px-4 py-3 rounded-md font-bold mt-2">
              + Publier
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
