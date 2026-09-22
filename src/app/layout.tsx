import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POZITIVEX+ | Intelligence. Innovation. Finance. Impact.",
  description: "Plateforme économique intelligente qui relie information, savoir-faire, opportunités, finance locale, technologie, investissement et développement territorial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="POZITIVEX+ Logo" width={300} height={100} className="h-20 w-auto object-contain" />
            </Link>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <Link href="/opportunites" className="hover:text-blue-600 transition-colors">Opportunités</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Emplois</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Réseautage</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Finance</Link>
            </nav>

            <div className="flex items-center gap-5">
              <Link href="/profil" className="text-sm font-semibold text-slate-700 hover:text-blue-600">Mon Profil</Link>
              <Link href="/opportunites/publier" className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:-translate-y-0.5">
                + Publier
              </Link>
            </div>
          </div>
        </header>

        <main className="min-h-screen bg-slate-50">
          {children}
        </main>

        <footer className="bg-slate-900 text-slate-300 py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="bg-white inline-block p-2 rounded-xl">
                <Image src="/logo.jpg" alt="POZITIVEX+ Logo" width={200} height={70} className="h-12 w-auto object-contain" />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">Mobiliser les ressources. Développer les compétences. Connecter les opportunités. Financer la croissance. Créer de la richesse.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Plateforme</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Opportunités</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Emplois & Talents</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Services professionnels</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Ressources</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Academy</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Intelligence économique</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Finance & Investissement</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>contact@pozitivex.com</li>
                <li>Port-au-Prince, Haïti</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
            © {new Date().getFullYear()} POZITIVEX+. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}
