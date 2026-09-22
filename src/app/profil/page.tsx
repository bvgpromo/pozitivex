import { Button } from "@/components/ui/button";
import { Briefcase, Building, MapPin, Mail, Phone, Award } from "lucide-react";

export default function Profil() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        
        {/* Profile Info */}
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center -mt-12 mb-6">
            <div className="flex items-end gap-4">
              <div className="h-24 w-24 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center text-4xl font-bold text-blue-600">
                JP
              </div>
              <div className="pb-2">
                <h1 className="text-2xl font-bold text-slate-900">Jean Pierre</h1>
                <p className="text-slate-600 flex items-center gap-1"><Briefcase className="h-4 w-4"/> Expert Comptable & Consultant Financier</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 pb-2 flex gap-2">
              <Button variant="outline">Modifier le profil</Button>
              <Button>Voir mes candidatures</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Coordonnées</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Port-au-Prince, Haïti</li>
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> jean.pierre@email.com</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +509 3000 0000</li>
                  <li className="flex items-center gap-2"><Building className="h-4 w-4"/> Cabinet JP Finance</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Badges</h3>
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-100 px-3 py-2 rounded-md">
                  <Award className="h-4 w-4"/> Profil Vérifié
                </div>
              </div>
            </div>

            {/* Main Profile Content */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-3">À propos</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Expert-comptable avec plus de 10 ans d'expérience dans l'accompagnement des MPME en Haïti. 
                  Spécialisé dans la structuration financière, la préparation de business plans et l'accès au crédit.
                  Je cherche à aider les entreprises locales à devenir "Investment Ready".
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Compétences</h2>
                <div className="flex flex-wrap gap-2">
                  {["Comptabilité", "Business Plan", "Modélisation Financière", "Levée de fonds", "Fiscalité"].map(skill => (
                    <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Tableau de bord (Vue simplifiée)</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm text-slate-500">Opportunités publiées</div>
                  </div>
                  <div className="border p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-500">12</div>
                    <div className="text-sm text-slate-500">Mises en relation</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
