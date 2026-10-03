"use client";
export const dynamic = 'force-dynamic';

import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

// ─── Icons (inline SVG) ──────────────────────────────────────────────────────

const IconArticle = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconVideo = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const IconPage = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/>
  </svg>
);
const IconLogout = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);
const IconEdit = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconTrash = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
  </svg>
);
const IconPlus = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

// ─── Styles ──────────────────────────────────────────────────────────────────

const S = {
  shell:    { display: 'flex', minHeight: '100vh', backgroundColor: '#060d1a' } as React.CSSProperties,
  sidebar:  { width: '240px', backgroundColor: '#0d1829', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column' as const, padding: '0', flexShrink: 0 },
  logo:     { padding: '24px 20px 20px', borderBottom: '1px solid #1e293b', marginBottom: '8px' },
  logoTxt:  { fontSize: '20px', fontWeight: 800, letterSpacing: '-0.5px' },
  navItem:  (active: boolean): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 20px', cursor: 'pointer',
    borderRadius: '0', transition: 'all .15s',
    backgroundColor: active ? '#1a3a6e' : 'transparent',
    color: active ? '#60a5fa' : '#94a3b8',
    borderLeft: active ? '3px solid #3b82f6' : '3px solid transparent',
    fontSize: '14px', fontWeight: active ? 600 : 400,
  }),
  sideFooter: { marginTop: 'auto', padding: '16px', borderTop: '1px solid #1e293b' },
  logoutBtn:  { display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '10px 14px', backgroundColor: 'transparent', border: '1px solid #ef444433', borderRadius: '8px', color: '#ef4444', cursor: 'pointer', fontSize: '13px', transition: 'background .15s' } as React.CSSProperties,
  main:     { flex: 1, overflow: 'auto', backgroundColor: '#060d1a' },
  topbar:   { backgroundColor: '#0d1829', borderBottom: '1px solid #1e293b', padding: '14px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  content:  { padding: '28px' },
  card:     { backgroundColor: '#0d1829', border: '1px solid #1e293b', borderRadius: '12px', padding: '24px', marginBottom: '24px' },
  badge:    (color: string): React.CSSProperties => ({ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, backgroundColor: color + '22', color }),
  input:    { width: '100%', backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' } as React.CSSProperties,
  textarea: { width: '100%', backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px 14px', color: '#e2e8f0', fontSize: '14px', outline: 'none', resize: 'vertical' as const, minHeight: '100px', boxSizing: 'border-box' } as React.CSSProperties,
  btn:      (color: string): React.CSSProperties => ({ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', backgroundColor: color, color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }),
  btnSm:    (color: string): React.CSSProperties => ({ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 12px', backgroundColor: color, color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }),
  row:      { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', backgroundColor: '#111827', borderRadius: '8px', marginBottom: '10px', border: '1px solid #1e293b' } as React.CSSProperties,
  label:    { fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.5px', marginBottom: '6px' },
  formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' } as React.CSSProperties,
};

type Tab = 'articles' | 'videos' | 'pages';

// ─── Main Dashboard ──────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [tab, setTab] = useState<Tab>('articles');

  if (status === 'loading') return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#060d1a', color: '#64748b', fontSize: '14px' }}>
      Chargement...
    </div>
  );
  if (!session) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#060d1a' }}>
      <a href="/api/auth/signin" style={{ padding: '12px 28px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
        Se connecter
      </a>
    </div>
  );

  const tabs: { id: Tab; label: string; icon: JSX.Element; color: string }[] = [
    { id: 'articles', label: 'Articles', icon: <IconArticle />, color: '#3b82f6' },
    { id: 'videos',   label: 'Vidéos', icon: <IconVideo />, color: '#8b5cf6' },
    { id: 'pages',    label: 'Pages', icon: <IconPage />, color: '#10b981' },
  ];

  return (
    <div style={S.shell}>
      {/* ── Sidebar ── */}
      <aside style={S.sidebar}>
        <div style={S.logo}>
          <div style={S.logoTxt}>
            <span style={{ color: '#3b82f6' }}>POZITIV</span><span style={{ color: '#f97316' }}>EX+</span>
          </div>
          <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px', fontWeight: 500 }}>Panneau Admin</div>
        </div>

        <nav style={{ padding: '8px 0' }}>
          {tabs.map(t => (
            <div key={t.id} style={S.navItem(tab === t.id)} onClick={() => setTab(t.id)}>
              <span style={{ color: tab === t.id ? t.color : '#475569' }}>{t.icon}</span>
              {t.label}
            </div>
          ))}
        </nav>

        <div style={S.sideFooter}>
          <div style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', padding: '0 4px' }}>
            Connecté : <span style={{ color: '#94a3b8' }}>{session.user?.name}</span>
          </div>
          <button onClick={() => signOut({ callbackUrl: '/' })} style={S.logoutBtn}>
            <IconLogout /> Déconnexion
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={S.main}>
        <div style={S.topbar}>
          <div>
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#f1f5f9' }}>
              {tabs.find(t => t.id === tab)?.label}
            </h1>
            <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#475569' }}>Gérer le contenu du site</p>
          </div>
          <div style={S.badge(tabs.find(t => t.id === tab)?.color || '#3b82f6')}>
            {tabs.find(t => t.id === tab)?.icon}
            {tabs.find(t => t.id === tab)?.label}
          </div>
        </div>

        <div style={S.content}>
          {tab === 'articles' && <ArticlesManager />}
          {tab === 'videos'   && <VideosManager />}
          {tab === 'pages'    && <PagesManager />}
        </div>
      </div>
    </div>
  );
}

// ─── Articles Manager ────────────────────────────────────────────────────────

function ArticlesManager() {
  const [items, setItems]       = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ title: '', content: '', imageUrl: '' });
  const [editId, setEditId]     = useState<string | null>(null);

  const load = async () => { setLoading(true); const r = await fetch('/api/admin/articles'); if (r.ok) setItems(await r.json()); setLoading(false); };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const url    = editId ? `/api/admin/articles/${editId}` : '/api/admin/articles';
    const method = editId ? 'PUT' : 'POST';
    await fetch(url, { method, body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } });
    reset(); load();
  };
  const reset = () => { setForm({ title: '', content: '', imageUrl: '' }); setEditId(null); setShowForm(false); };
  const edit  = (item: any) => { setForm({ title: item.title, content: item.content, imageUrl: item.imageUrl || '' }); setEditId(item.id); setShowForm(true); };
  const del   = async (id: string) => { if (confirm("Supprimer cet article ?")) { await fetch(`/api/admin/articles/${id}`, { method: 'DELETE' }); load(); } };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>Liste des Articles ({items.length})</h2>
        <button style={S.btn('#3b82f6')} onClick={() => { reset(); setShowForm(v => !v); }}>
          <IconPlus /> {showForm ? 'Fermer' : 'Nouvel Article'}
        </button>
      </div>

      {showForm && (
        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#60a5fa' }}>
            {editId ? "✏️ Modifier l'article" : "➕ Ajouter un article"}
          </h3>
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <div style={S.label}>Titre</div>
              <input style={S.input} placeholder="Titre de l'article" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <div style={S.label}>URL Image (optionnel)</div>
              <input style={S.input} placeholder="https://..." value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })} />
            </div>
            <div>
              <div style={S.label}>Kontni</div>
              <textarea style={S.textarea} placeholder="Contenu de l'article..." value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={S.btn('#3b82f6')}>{editId ? 'Mettre à jour' : 'Ajouter'}</button>
              <button type="button" style={S.btn('#334155')} onClick={reset}>Annuler</button>
            </div>
          </form>
        </div>
      )}

      {loading ? <p style={{ color: '#475569', fontSize: '14px' }}>Chargement...</p> : (
        <div>
          {items.length === 0 && <p style={{ color: '#475569', fontSize: '14px', fontStyle: 'italic' }}>Aucun article pour l'instant.</p>}
          {items.map(item => (
            <div key={item.id} style={S.row}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '14px', marginBottom: '3px' }}>{item.title}</div>
                <div style={{ fontSize: '12px', color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '600px' }}>
                  {item.content?.substring(0, 100)}...
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '12px', flexShrink: 0 }}>
                <button style={S.btnSm('#1d4ed8')} onClick={() => edit(item)}><IconEdit /> Modifier</button>
                <button style={S.btnSm('#dc2626')} onClick={() => del(item.id)}><IconTrash /> Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Videos Manager ──────────────────────────────────────────────────────────

function VideosManager() {
  const [items, setItems]       = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ title: '', videoUrl: '' });
  const [editId, setEditId]     = useState<string | null>(null);

  const load = async () => { setLoading(true); const r = await fetch('/api/admin/videos'); if (r.ok) setItems(await r.json()); setLoading(false); };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const url    = editId ? `/api/admin/videos/${editId}` : '/api/admin/videos';
    const method = editId ? 'PUT' : 'POST';
    await fetch(url, { method, body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } });
    reset(); load();
  };
  const reset = () => { setForm({ title: '', videoUrl: '' }); setEditId(null); setShowForm(false); };
  const edit  = (item: any) => { setForm({ title: item.title, videoUrl: item.videoUrl }); setEditId(item.id); setShowForm(true); };
  const del   = async (id: string) => { if (confirm('Supprimer videyo sa?')) { await fetch(`/api/admin/videos/${id}`, { method: 'DELETE' }); load(); } };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>Liste des Vidéos ({items.length})</h2>
        <button style={S.btn('#8b5cf6')} onClick={() => { reset(); setShowForm(v => !v); }}>
          <IconPlus /> {showForm ? 'Fermer' : 'Nouvelle Vidéo'}
        </button>
      </div>

      {showForm && (
        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#a78bfa' }}>
            {editId ? '✏️ Modifier Videyo' : '➕ Ajouter Videyo'}
          </h3>
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <div style={S.label}>Titre</div>
              <input style={S.input} placeholder="Titre de la vidéo" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <div style={S.label}>URL YouTube</div>
              <input style={S.input} placeholder="https://youtube.com/watch?v=..." value={form.videoUrl} onChange={e => setForm({ ...form, videoUrl: e.target.value })} required />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={S.btn('#8b5cf6')}>{editId ? 'Mettre à jour' : 'Ajouter'}</button>
              <button type="button" style={S.btn('#334155')} onClick={reset}>Annuler</button>
            </div>
          </form>
        </div>
      )}

      {loading ? <p style={{ color: '#475569', fontSize: '14px' }}>Chargement...</p> : (
        <div>
          {items.length === 0 && <p style={{ color: '#475569', fontSize: '14px', fontStyle: 'italic' }}>Aucune vidéo pour l'instant.</p>}
          {items.map(item => (
            <div key={item.id} style={S.row}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '14px', marginBottom: '3px' }}>{item.title}</div>
                <a href={item.videoUrl} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#8b5cf6', textDecoration: 'none' }}>{item.videoUrl}</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '12px', flexShrink: 0 }}>
                <button style={S.btnSm('#6d28d9')} onClick={() => edit(item)}><IconEdit /> Modifier</button>
                <button style={S.btnSm('#dc2626')} onClick={() => del(item.id)}><IconTrash /> Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Pages Manager ───────────────────────────────────────────────────────────

function PagesManager() {
  const [items, setItems]       = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ title: '', slug: '', content: '' });
  const [editId, setEditId]     = useState<string | null>(null);

  const load = async () => { setLoading(true); const r = await fetch('/api/admin/pages'); if (r.ok) setItems(await r.json()); setLoading(false); };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const url    = editId ? `/api/admin/pages/${editId}` : '/api/admin/pages';
    const method = editId ? 'PUT' : 'POST';
    await fetch(url, { method, body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } });
    reset(); load();
  };
  const reset = () => { setForm({ title: '', slug: '', content: '' }); setEditId(null); setShowForm(false); };
  const edit  = (item: any) => { setForm({ title: item.title, slug: item.slug, content: item.content }); setEditId(item.id || item.slug); setShowForm(true); };
  const del   = async (id: string) => { if (confirm('Supprimer paj sa?')) { await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' }); load(); } };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>Liste des Pages ({items.length})</h2>
        <button style={S.btn('#10b981')} onClick={() => { reset(); setShowForm(v => !v); }}>
          <IconPlus /> {showForm ? 'Fermer' : 'Nouvelle Page'}
        </button>
      </div>

      {showForm && (
        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#34d399' }}>
            {editId ? '✏️ Modifier Paj' : '➕ Ajouter Paj'}
          </h3>
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={S.formGrid}>
              <div>
                <div style={S.label}>Titre</div>
                <input style={S.input} placeholder="Titre de la page" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <div style={S.label}>Slug (URL)</div>
                <input style={S.input} placeholder="ex: nouveau-membre" value={form.slug}
                  onChange={e => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/ /g, '-') })} required />
              </div>
            </div>
            <div>
              <div style={S.label}>Kontni</div>
              <textarea style={S.textarea} placeholder="Contenu de la page..." value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={S.btn('#10b981')}>{editId ? 'Mettre à jour' : 'Ajouter'}</button>
              <button type="button" style={S.btn('#334155')} onClick={reset}>Annuler</button>
            </div>
          </form>
        </div>
      )}

      {loading ? <p style={{ color: '#475569', fontSize: '14px' }}>Chargement...</p> : (
        <div>
          {items.length === 0 && <p style={{ color: '#475569', fontSize: '14px', fontStyle: 'italic' }}>Aucune page pour l'instant.</p>}
          {items.map(item => (
            <div key={item.id || item.slug} style={S.row}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '14px', marginBottom: '3px' }}>{item.title}</div>
                <span style={{ fontSize: '11px', color: '#10b981', fontFamily: 'monospace', backgroundColor: '#10b98122', padding: '2px 8px', borderRadius: '4px' }}>/{item.slug}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '12px', flexShrink: 0 }}>
                <button style={S.btnSm('#047857')} onClick={() => edit(item)}><IconEdit /> Modifier</button>
                <button style={S.btnSm('#dc2626')} onClick={() => del(item.id || item.slug)}><IconTrash /> Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
