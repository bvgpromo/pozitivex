import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POZITIVEX+ | Connecting the Caribbean",
  description: "Plateforme économique intelligente pour la Caraïbe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="bg-[#0B1120]">
      <body className={`${inter.className} bg-[#0B1120] text-slate-300 min-h-screen flex flex-col`}>
        <Header />

        <main className="flex-1 bg-[#0B1120]">
          {children}
        </main>

        <footer className="bg-[#0B1120] border-t border-[#1E293B] py-12 mt-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-500">POZITIV</span><span className="text-orange-500">EX+</span>
              </span>
              <p className="text-sm text-slate-400 leading-relaxed">
                Caribbean Intelligence, Innovation, Business & Technology Network.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center">In</div>
                <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center">Tw</div>
                <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center">Fb</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Plateforme</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><Link href="/magazine" className="hover:text-blue-400 transition-colors">Magazine & Actualités</Link></li>
                <li><Link href="/intelligence" className="hover:text-blue-400 transition-colors">Intelligence Économique</Link></li>
                <li><Link href="/opportunites" className="hover:text-blue-400 transition-colors">Opportunités d'Affaires</Link></li>
                <li><Link href="/reseautage" className="hover:text-blue-400 transition-colors">Réseau d'Affaires</Link></li>
                <li><Link href="/emplois" className="hover:text-blue-400 transition-colors">Emplois & Recrutement</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Programmes & Solutions</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><Link href="/formations" className="hover:text-blue-400 transition-colors">PozitivEx+ Academy</Link></li>
                <li><Link href="/programmes" className="hover:text-blue-400 transition-colors">Nos Programmes Stratégiques</Link></li>
                <li><Link href="/finance" className="hover:text-blue-400 transition-colors">Financement & Investissement</Link></li>
                <li><Link href="/data-center" className="hover:text-blue-400 transition-colors">Data Center Caraïbe</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services aux Entreprises</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Conditions d'utilisation</li>
                <li>Politique de confidentialité</li>
                <li>Mentions légales</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between text-xs text-slate-500">
            <p>© 2026 PozitivEx+. Tous droits réservés.</p>
            <p>Connecting the Caribbean to the World, Creating Positive Externalities.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
