"use client";
"use client";
import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [tab, setTab] = useState<'articles' | 'videos' | 'pages'>('articles');

  if (status === "loading") return <div className="p-8 text-slate-300">Loading…</div>;
  if (!session) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0B1120] text-slate-200">
        <Link href="/api/auth/signin" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold">
          Sign in as Admin
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={() => signOut()} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Sign out
        </button>
      </header>

      <nav className="flex space-x-4 mb-6">
        <button onClick={() => setTab('articles')} className={`px-4 py-2 rounded ${tab==='articles' ? 'bg-blue-600' : 'bg-[#1E293B]'} text-white`}>Atik</button>
        <button onClick={() => setTab('videos')} className={`px-4 py-2 rounded ${tab==='videos' ? 'bg-blue-600' : 'bg-[#1E293B]'} text-white`}>Videyo</button>
        <button onClick={() => setTab('pages')} className={`px-4 py-2 rounded ${tab==='pages' ? 'bg-blue-600' : 'bg-[#1E293B]'} text-white`}>Paj nouvo manm</button>
      </nav>

      {tab === 'articles' && <section><h2 className="text-xl mb-4">Jere Atik</h2>
        {/* Here you would fetch and render list, plus form to add/edit – placeholder for now */}
        <p className="text-slate-400">Implantation future – API calls will appear here.</p>
      </section>}
      {tab === 'videos' && <section><h2 className="text-xl mb-4">Jere Videyo</h2>
        <p className="text-slate-400">Implantation future – API calls will appear here.</p>
      </section>}
      {tab === 'pages' && <section><h2 className="text-xl mb-4">Jere Paj "Nouvo Manm"</h2>
        <p className="text-slate-400">Implantation future – API calls will appear here.</p>
      </section>}
    </div>
  );
}
