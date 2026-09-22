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
        <header className="border-b sticky top-0 bg-white z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="POZITIVEX+ Logo" width={280} height={90} className="h-20 w-auto object-contain py-2" />
            </Link>
            
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/opportunites" className="hover:text-blue-600 transition-colors">Opportunités</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Emplois</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Réseautage</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Finance</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/profil" className="text-sm font-medium hover:text-blue-600">Mon Profil</Link>
              <Link href="/opportunites/publier" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                + Publier
              </Link>
            </div>
          </div>
        </header>

        <main className="min-h-screen bg-slate-50">
          {children}
        </main>

        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.jpg" alt="POZITIVEX+ Logo" width={200} height={70} className="h-12 w-auto object-contain bg-white p-2 rounded mb-4" />
              <p className="text-sm">Mobiliser les ressources. Développer les compétences. Connecter les opportunités. Financer la croissance. Créer de la richesse.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Plateforme</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Opportunités</Link></li>
                <li><Link href="#" className="hover:text-white">Emplois & Talents</Link></li>
                <li><Link href="#" className="hover:text-white">Services professionnels</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Academy</Link></li>
                <li><Link href="#" className="hover:text-white">Intelligence économique</Link></li>
                <li><Link href="#" className="hover:text-white">Finance & Investissement</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>contact@pozitivex.com</li>
                <li>Port-au-Prince, Haïti</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center">
            © {new Date().getFullYear()} POZITIVEX+. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}
