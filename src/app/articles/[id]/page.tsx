import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getArticles() {
  try {
    const dataFile = path.join(process.cwd(), "data", "articles.json");
    const file = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(file);
  } catch {
    return [];
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const articles = await getArticles();
  const article = articles.find((a: any) => String(a.id) === String(id));

  if (!article) {
    notFound();
  }

  // Recommended other articles
  const others = articles.filter((a: any) => String(a.id) !== String(id)).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#060D1A] text-slate-200">
      {/* Top Bar / Breadcrumbs */}
      <div className="border-b border-[#1E293B] bg-[#0D1829]/80 backdrop-blur sticky top-0 z-30">
        <div className="container mx-auto max-w-5xl px-4 py-3 flex items-center justify-between text-xs text-slate-400">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" /> Retour à l'accueil
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span>PozitivEx+</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span>Magazine</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-orange-400">{article.category || "Article"}</span>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-orange-500/15 text-orange-400 border border-orange-500/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            ● {article.category || "Actualité"}
          </span>
          <span className="text-slate-500 text-xs flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {article.date || "Récent"}
          </span>
          <span className="text-slate-500 text-xs flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            3 min de lecture
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          {article.title}
        </h1>

        {/* Hero Cover Photo */}
        {article.imageUrl && (
          <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden mb-10 border border-[#1E293B] shadow-2xl bg-[#0F172A]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body Content */}
        <div
          className="article-body text-slate-300 text-base md:text-lg leading-relaxed bg-[#0D1829]/60 border border-[#1E293B] p-6 md:p-10 rounded-2xl shadow-xl"
          dangerouslySetInnerHTML={{ __html: article.content || "<p>Contenu non disponible.</p>" }}
        />

        <style>{`
          .article-body h1 { font-size: 1.85em; font-weight: 800; color: #f8fafc; margin: 1.5em 0 0.6em; }
          .article-body h2 { font-size: 1.45em; font-weight: 700; color: #f1f5f9; margin: 1.3em 0 0.5em; border-bottom: 1px solid #1e293b; padding-bottom: 0.3em; }
          .article-body h3 { font-size: 1.2em; font-weight: 600; color: #e2e8f0; margin: 1.1em 0 0.4em; }
          .article-body p  { margin: 0.75em 0; line-height: 1.8; color: #cbd5e1; }
          .article-body ul { list-style: disc; padding-left: 1.6em; margin: 0.8em 0; }
          .article-body ol { list-style: decimal; padding-left: 1.6em; margin: 0.8em 0; }
          .article-body li { margin: 0.3em 0; }
          .article-body blockquote { border-left: 4px solid #3b82f6; padding: 12px 16px; color: #94a3b8; font-style: italic; margin: 1.2em 0; background: #0f172a; border-radius: 0 8px 8px 0; }
          .article-body code { background: #1e293b; border-radius: 4px; padding: 2px 6px; font-family: monospace; font-size: 0.85em; color: #7dd3fc; }
          .article-body hr { border: none; border-top: 1px solid #1e293b; margin: 2em 0; }
          .article-body img { max-width: 100%; height: auto; border-radius: 12px; margin: 1.5em 0; border: 1px solid #334155; display: block; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); }
        `}</style>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-6 border-t border-[#1E293B]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour aux actualités
          </Link>
          <div className="text-xs text-slate-500">
            Publié sur PozitivEx+ • Magazine Économique
          </div>
        </div>

        {/* Recommended Other Articles */}
        {others.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">À lire également</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((item: any) => (
                <Link
                  key={item.id}
                  href={`/articles/${item.id}`}
                  className="bg-[#0D1829] border border-[#1E293B] hover:border-blue-500/50 rounded-xl p-4 flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-md"
                >
                  {item.imageUrl && (
                    <div className="w-full h-36 rounded-lg overflow-hidden mb-3 bg-[#0F172A]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider block mb-1">
                      ● {item.category || "Actualité"}
                    </span>
                    <h3 className="text-white text-sm font-bold group-hover:text-blue-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-[#1E293B]">
                    {item.date || "Récent"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
