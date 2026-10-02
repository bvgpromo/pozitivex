"use client";
export const dynamic = 'force-dynamic';

import { useState, useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [tab, setTab] = useState<'articles' | 'videos' | 'pages'>('articles');

  if (status === "loading") return <div className="p-8 text-slate-300">Loading...</div>;
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
      <header className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-slate-400">Byenveni, {session.user?.name}</p>
        </div>
        <button onClick={() => signOut()} className="bg-red-600 hover:bg-red-700 transition-colors text-white px-5 py-2 rounded font-semibold shadow">
          Dekonekte
        </button>
      </header>

      <nav className="flex space-x-2 mb-8 bg-[#1E293B] p-2 rounded-lg inline-block">
        <button onClick={() => setTab('articles')} className={`px-5 py-2 rounded font-medium transition-colors ${tab==='articles' ? 'bg-blue-600 text-white shadow' : 'hover:bg-slate-700 text-slate-300'}`}>Atik</button>
        <button onClick={() => setTab('videos')} className={`px-5 py-2 rounded font-medium transition-colors ${tab==='videos' ? 'bg-blue-600 text-white shadow' : 'hover:bg-slate-700 text-slate-300'}`}>Videyo</button>
        <button onClick={() => setTab('pages')} className={`px-5 py-2 rounded font-medium transition-colors ${tab==='pages' ? 'bg-blue-600 text-white shadow' : 'hover:bg-slate-700 text-slate-300'}`}>Paj nouvo manm</button>
      </nav>

      <div className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-slate-700">
        {tab === 'articles' && <ArticlesManager />}
        {tab === 'videos' && <VideosManager />}
        {tab === 'pages' && <PagesManager />}
      </div>
    </div>
  );
}

function ArticlesManager() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', content: '', imageUrl: '' });
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/articles');
    if (res.ok) setItems(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await fetch(`/api/admin/articles/${editingId}`, { method: 'PUT', body: JSON.stringify(form) });
    } else {
      await fetch('/api/admin/articles', { method: 'POST', body: JSON.stringify(form) });
    }
    setForm({ title: '', content: '', imageUrl: '' });
    setEditingId(null);
    fetchItems();
  };

  const handleEdit = (item: any) => {
    setForm({ title: item.title, content: item.content, imageUrl: item.imageUrl || '' });
    setEditingId(item.id);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Ou sèten ou vle efase atik sa?")) {
      await fetch(`/api/admin/articles/${id}`, { method: 'DELETE' });
      fetchItems();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-700 pb-2">Jere Atik (Articles)</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-[#0F172A] p-5 rounded-lg border border-slate-800">
        <h3 className="text-lg font-semibold text-blue-400 mb-2">{editingId ? 'Modifye Atik' : 'Ajoute yon nouvo Atik'}</h3>
        <input className="w-full bg-[#1E293B] border border-slate-600 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="Tit atik la" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <input className="w-full bg-[#1E293B] border border-slate-600 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="Lien Imaj (URL)" value={form.imageUrl} onChange={e => setForm({...form, imageUrl: e.target.value})} />
        <textarea className="w-full bg-[#1E293B] border border-slate-600 rounded p-3 text-white h-32 focus:outline-none focus:border-blue-500" placeholder="Kontni atik la..." value={form.content} onChange={e => setForm({...form, content: e.target.value})} required></textarea>
        <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition">{editingId ? 'Mete a jou' : 'Ajoute Atik'}</button>
            {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({title:'', content:'', imageUrl:''}); }} className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded font-semibold transition">Anile</button>}
        </div>
      </form>

      {loading ? <p>Ap chaje...</p> : (
        <div className="space-y-4">
          {items.length === 0 ? <p className="text-slate-400 italic">Pa gen atik ankò.</p> : null}
          {items.map(item => (
            <div key={item.id} className="bg-[#0F172A] p-4 rounded-lg flex justify-between items-center border border-slate-700 hover:border-slate-500 transition">
              <div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm text-slate-400 truncate max-w-2xl">{item.content.substring(0, 100)}...</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(item)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded transition text-sm">Modifye</button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition text-sm">Efase</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function VideosManager() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', videoUrl: '' });
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/videos');
    if (res.ok) setItems(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await fetch(`/api/admin/videos/${editingId}`, { method: 'PUT', body: JSON.stringify(form) });
    } else {
      await fetch('/api/admin/videos', { method: 'POST', body: JSON.stringify(form) });
    }
    setForm({ title: '', videoUrl: '' });
    setEditingId(null);
    fetchItems();
  };

  const handleEdit = (item: any) => {
    setForm({ title: item.title, videoUrl: item.videoUrl });
    setEditingId(item.id);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Ou sèten ou vle efase videyo sa?")) {
      await fetch(`/api/admin/videos/${id}`, { method: 'DELETE' });
      fetchItems();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-700 pb-2">Jere Videyo (Videos)</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-[#0F172A] p-5 rounded-lg border border-slate-800">
        <h3 className="text-lg font-semibold text-blue-400 mb-2">{editingId ? 'Modifye Videyo' : 'Ajoute yon nouvo Videyo'}</h3>
        <input className="w-full bg-[#1E293B] border border-slate-600 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="Tit videyo a" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <input className="w-full bg-[#1E293B] border border-slate-600 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="Lien YouTube (URL)" value={form.videoUrl} onChange={e => setForm({...form, videoUrl: e.target.value})} required />
        <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition">{editingId ? 'Mete a jou' : 'Ajoute Videyo'}</button>
            {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({title:'', videoUrl:''}); }} className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded font-semibold transition">Anile</button>}
        </div>
      </form>

      {loading ? <p>Ap chaje...</p> : (
        <div className="space-y-4">
          {items.length === 0 ? <p className="text-slate-400 italic">Pa gen videyo ankò.</p> : null}
          {items.map(item => (
            <div key={item.id} className="bg-[#0F172A] p-4 rounded-lg flex justify-between items-center border border-slate-700 hover:border-slate-500 transition">
              <div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <a href={item.videoUrl} target="_blank" className="text-sm text-blue-400 hover:underline">{item.videoUrl}</a>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(item)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded transition text-sm">Modifye</button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition text-sm">Efase</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PagesManager() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', slug: '', content: '' });
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/pages');
    if (res.ok) setItems(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await fetch(`/api/admin/pages/${editingId}`, { method: 'PUT', body: JSON.stringify(form) });
    } else {
      await fetch('/api/admin/pages', { method: 'POST', body: JSON.stringify(form) });
    }
    setForm({ title: '', slug: '', content: '' });
    setEditingId(null);
    fetchItems();
  };

  const handleEdit = (item: any) => {
    setForm({ title: item.title, slug: item.slug, content: item.content });
    setEditingId(item.id || item.slug);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Ou sèten ou vle efase paj sa?")) {
      await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' });
      fetchItems();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-slate-700 pb-2">Jere Paj (Pages)</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-[#0F172A] p-5 rounded-lg border border-slate-800">
        <h3 className="text-lg font-semibold text-blue-400 mb-2">{editingId ? 'Modifye Paj' : 'Ajoute yon nouvo Paj'}</h3>
        <div className="grid grid-cols-2 gap-4">
            <input className="w-full bg-[#1E293B] border border-slate-600 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="Tit paj la" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
            <input className="w-full bg-[#1E293B] border border-slate-600 rounded p-3 text-white focus:outline-none focus:border-blue-500" placeholder="Slug (ex: nouvel-manm)" value={form.slug} onChange={e => setForm({...form, slug: e.target.value.toLowerCase().replace(/ /g, '-')})} required />
        </div>
        <textarea className="w-full bg-[#1E293B] border border-slate-600 rounded p-3 text-white h-32 focus:outline-none focus:border-blue-500" placeholder="Kontni paj la..." value={form.content} onChange={e => setForm({...form, content: e.target.value})} required></textarea>
        <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition">{editingId ? 'Mete a jou' : 'Ajoute Paj'}</button>
            {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({title:'', slug:'', content:''}); }} className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded font-semibold transition">Anile</button>}
        </div>
      </form>

      {loading ? <p>Ap chaje...</p> : (
        <div className="space-y-4">
          {items.length === 0 ? <p className="text-slate-400 italic">Pa gen paj ankò.</p> : null}
          {items.map(item => (
            <div key={item.id || item.slug} className="bg-[#0F172A] p-4 rounded-lg flex justify-between items-center border border-slate-700 hover:border-slate-500 transition">
              <div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm text-blue-400 font-mono mb-1">/{item.slug}</p>
                <p className="text-sm text-slate-400 truncate max-w-2xl">{item.content.substring(0, 100)}...</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(item)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded transition text-sm">Modifye</button>
                <button onClick={() => handleDelete(item.id || item.slug)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition text-sm">Efase</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
