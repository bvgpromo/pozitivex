import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft, Calendar, Search } from "lucide-react";

export const dynamic = "force-dynamic";

async function getArticles() {
  try {
    const dataFile = path.join(process.cwd(), "data", "articles.json");
    const file = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(file);
  } catch {
    return [];
  }
}

export default async function ArticlesListPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-[#060D1A] text-slate-200 py-10">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Navigation & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1E293B]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium mb-3"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Retour à l'accueil
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center gap-3">
              <span className="bg-[#1E293B] p-2 rounded-xl text-blue-400">
                <Search className="h-6 w-6" />
              </span>
              Magazine & Actualités Économiques
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Toutes les analyses, veilles économiques et opportunités dans la Caraïbe
            </p>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            {articles.length} article(s) publié(s)
          </div>
        </div>

        {/* Articles Grid */}
        {articles.length === 0 ? (
          <div className="text-center py-20 bg-[#0D1829] rounded-2xl border border-[#1E293B]">
            <p className="text-slate-400">Aucun article disponible pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item: any) => (
              <Link
                key={item.id}
                href={`/articles/${item.id}`}
                className="bg-[#0D1829] border border-[#1E293B] hover:border-blue-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-lg"
              >
                {item.imageUrl && (
                  <div className="w-full h-48 bg-[#0F172A] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-orange-400 font-bold uppercase tracking-wider block mb-2">
                      ● {item.category || "Actualité"}
                    </span>
                    <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                      {item.content?.replace(/<[^>]*>/g, "")}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#1E293B] flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.date || "Récent"}
                    </span>
                    <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Lire l'article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
