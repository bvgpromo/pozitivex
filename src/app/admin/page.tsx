"use client";
import React from "react";
export const dynamic = 'force-dynamic';

import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import RichEditor from "@/components/RichEditor";

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
const IconPricing = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
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

type Tab = 'articles' | 'videos' | 'tarifs' | 'pages';

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

  const tabs: { id: Tab; label: string; icon: React.ReactElement; color: string }[] = [
    { id: 'articles', label: 'Articles', icon: <IconArticle />, color: '#3b82f6' },
    { id: 'videos',   label: 'Vidéos', icon: <IconVideo />, color: '#8b5cf6' },
    { id: 'tarifs',   label: 'Tarifs & Formations', icon: <IconPricing />, color: '#f59e0b' },
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
          {tab === 'tarifs'   && <PricingManager />}
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
  const [form, setForm]         = useState({ title: '', content: '', imageUrl: '', category: 'Innovation' });
  const [editId, setEditId]     = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const load = async () => { setLoading(true); const r = await fetch('/api/admin/articles'); if (r.ok) setItems(await r.json()); setLoading(false); };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const url    = editId ? `/api/admin/articles/${editId}` : '/api/admin/articles';
    const method = editId ? 'PUT' : 'POST';
    await fetch(url, { method, body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } });
    reset(); load();
  };
  const reset = () => { setForm({ title: '', content: '', imageUrl: '', category: 'Innovation' }); setEditId(null); setShowForm(false); setUploading(false); };
  const edit  = (item: any) => { setForm({ title: item.title, content: item.content, imageUrl: item.imageUrl || '', category: item.category || 'Innovation' }); setEditId(item.id); setShowForm(true); };
  const del   = async (id: string) => { if (confirm("Supprimer cet article ?")) { await fetch(`/api/admin/articles/${id}`, { method: 'DELETE' }); load(); } };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const raw = ev.target?.result as string;
      const img = new Image();
      img.onload = () => {
        const maxDim = 1200;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) { h = Math.round((h * maxDim) / w); w = maxDim; }
          else { w = Math.round((w * maxDim) / h); h = maxDim; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, w, h);
          setForm(f => ({ ...f, imageUrl: canvas.toDataURL('image/jpeg', 0.85) }));
        } else {
          setForm(f => ({ ...f, imageUrl: raw }));
        }
        setUploading(false);
      };
      img.onerror = () => {
        setForm(f => ({ ...f, imageUrl: raw }));
        setUploading(false);
      };
      img.src = raw;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

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
            <div style={S.formGrid}>
              <div>
                <div style={S.label}>Titre</div>
                <input style={S.input} placeholder="Titre de l'article" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <div style={S.label}>Catégorie</div>
                <select
                  style={{ ...S.input, cursor: 'pointer' }}
                  value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}
                >
                  {['Innovation', 'Économie', 'Technologie', 'Énergie', 'Finance', 'Transport', 'Agriculture', 'Entrepreneuriat'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Photo / Image de couverture */}
            <div>
              <div style={S.label}>Photo / Image de couverture</div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: form.imageUrl ? '10px' : '0' }}>
                <label style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 16px',
                  backgroundColor: '#2563eb',
                  color: '#fff',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'background .15s',
                }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>{uploading ? 'Chargement de la photo...' : 'Uploader une photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handlePhotoUpload}
                    disabled={uploading}
                  />
                </label>
                <span style={{ color: '#64748b', fontSize: '13px' }}>ou lien web :</span>
                <input
                  style={{ ...S.input, flex: 1, minWidth: '220px' }}
                  placeholder="https://exemple.com/photo.jpg"
                  value={form.imageUrl}
                  onChange={e => setForm({ ...form, imageUrl: e.target.value })}
                />
              </div>

              {/* Aperçu de la photo sélectionnée */}
              {form.imageUrl && (
                <div style={{
                  position: 'relative',
                  display: 'inline-block',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #334155',
                  marginTop: '8px',
                  backgroundColor: '#0f172a',
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={form.imageUrl}
                    alt="Aperçu photo"
                    style={{ maxHeight: '140px', width: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, imageUrl: '' })}
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      backgroundColor: '#ef4444ee',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                    title="Supprimer la photo"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            <div>
              <div style={S.label}>Contenu</div>
              <RichEditor value={form.content} onChange={(val) => setForm({ ...form, content: val })} placeholder="Contenu de l'article..." />
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
              {item.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    marginRight: '14px',
                    border: '1px solid #1e293b',
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '10px', color: '#f97316', fontWeight: 700, textTransform: 'uppercase' }}>● {item.category || 'Actualité'}</span>
                  <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '14px' }}>{item.title}</div>
                </div>
                <div style={{ fontSize: '12px', color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '600px' }}>
                  {item.content?.replace(/<[^>]*>/g, '').substring(0, 100)}...
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

function getYouTubeId(url: string) {
  if (!url) return '';
  const trimmed = url.trim();
  const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (match && match[1]) return match[1];
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  return '';
}

function VideosManager() {
  const [items, setItems]       = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ title: '', videoUrl: '', tag: 'AGRICULTURE', description: '' });
  const [editId, setEditId]     = useState<string | null>(null);

  const load = async () => { setLoading(true); const r = await fetch('/api/admin/videos'); if (r.ok) setItems(await r.json()); setLoading(false); };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const ytId = getYouTubeId(form.videoUrl);
    const payload = { ...form, youtubeId: ytId || form.videoUrl };
    const url    = editId ? `/api/admin/videos/${editId}` : '/api/admin/videos';
    const method = editId ? 'PUT' : 'POST';
    await fetch(url, { method, body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } });
    reset(); load();
  };
  const reset = () => { setForm({ title: '', videoUrl: '', tag: 'AGRICULTURE', description: '' }); setEditId(null); setShowForm(false); };
  const edit  = (item: any) => { setForm({ title: item.title, videoUrl: item.videoUrl || '', tag: item.tag || 'AGRICULTURE', description: item.description || '' }); setEditId(item.id); setShowForm(true); };
  const del   = async (id: string) => { if (confirm('Supprimer cette vidéo ?')) { await fetch(`/api/admin/videos/${id}`, { method: 'DELETE' }); load(); } };

  const currentYtId = getYouTubeId(form.videoUrl);

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
            {editId ? '✏️ Modifier la vidéo' : '➕ Ajouter une vidéo'}
          </h3>
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={S.formGrid}>
              <div>
                <div style={S.label}>Titre</div>
                <input style={S.input} placeholder="Titre de la vidéo" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <div style={S.label}>Catégorie / Tag</div>
                <select
                  style={{ ...S.input, cursor: 'pointer' }}
                  value={form.tag}
                  onChange={e => setForm({ ...form, tag: e.target.value })}
                >
                  {['AGRICULTURE', 'INNOVATION', 'ÉCONOMIE', 'TOURISME', 'TECHNOLOGIE', 'FINANCE', 'ENTREPRENEURIAT', 'CULTURE', 'ÉDUCATION'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div style={S.label}>Lien YouTube</div>
              <input
                style={S.input}
                placeholder="https://www.youtube.com/watch?v=... ou https://youtu.be/..."
                value={form.videoUrl}
                onChange={e => setForm({ ...form, videoUrl: e.target.value })}
                required
              />
            </div>

            {/* Aperçu YouTube en direct */}
            {currentYtId && (
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', backgroundColor: '#060d1a', padding: '12px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                <div style={{ position: 'relative', width: '120px', height: '68px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${currentYtId}/mqdefault.jpg`}
                    alt="Aperçu YouTube"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    ▶
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#10b981', fontWeight: 600 }}>✓ Vidéo YouTube détectée</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'monospace' }}>ID: {currentYtId}</div>
                </div>
              </div>
            )}

            <div>
              <div style={S.label}>Description (optionnel)</div>
              <textarea
                style={{ ...S.textarea, minHeight: '70px' }}
                placeholder="Courte description de la vidéo..."
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
              />
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
          {items.map(item => {
            const yt = getYouTubeId(item.videoUrl || item.youtubeId || item.id);
            return (
              <div key={item.id} style={S.row}>
                {yt && (
                  <div style={{ width: '64px', height: '44px', borderRadius: '6px', overflow: 'hidden', marginRight: '14px', flexShrink: 0, position: 'relative' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${yt}/mqdefault.jpg`}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span style={{ fontSize: '10px', color: '#a78bfa', fontWeight: 700, textTransform: 'uppercase' }}>● {item.tag || 'VIDÉO'}</span>
                    <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '14px' }}>{item.title}</div>
                  </div>
                  <a href={item.videoUrl} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#8b5cf6', textDecoration: 'none' }}>{item.videoUrl}</a>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginLeft: '12px', flexShrink: 0 }}>
                  <button style={S.btnSm('#6d28d9')} onClick={() => edit(item)}><IconEdit /> Modifier</button>
                  <button style={S.btnSm('#dc2626')} onClick={() => del(item.id)}><IconTrash /> Supprimer</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Pricing Manager ──────────────────────────────────────────────────────────

function PricingManager() {
  const [data, setData]       = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [message, setMessage] = useState('');

  const load = async () => {
    setLoading(true);
    const r = await fetch('/api/admin/pricing');
    if (r.ok) setData(await r.json());
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    const r = await fetch('/api/admin/pricing', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (r.ok) {
      setMessage('✓ Tarifs et Formations enregistrés avec succès !');
      setTimeout(() => setMessage(''), 4000);
    } else {
      setMessage("Erreur lors de l'enregistrement.");
    }
    setSaving(false);
  };

  if (loading || !data) return <p style={{ color: '#475569', fontSize: '14px' }}>Chargement des tarifs...</p>;

  const updatePlan = (index: number, field: string, val: any) => {
    const newPlans = [...data.plans];
    newPlans[index] = { ...newPlans[index], [field]: val };
    setData({ ...data, plans: newPlans });
  };

  const updateFeatures = (index: number, text: string) => {
    const list = text.split('\n').map((s: string) => s.trim()).filter(Boolean);
    updatePlan(index, 'features', list);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>Gestion des Formations & Tarifs</h2>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>Modifiez les prix, titres et avantages affichés sur la page d'accueil</p>
        </div>
        {message && (
          <span style={{ fontSize: '13px', color: '#10b981', fontWeight: 600, backgroundColor: '#10b98122', padding: '6px 14px', borderRadius: '20px' }}>
            {message}
          </span>
        )}
      </div>

      <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* En-tête de la section */}
        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#f59e0b' }}>
            En-tête de la section
          </h3>
          <div style={S.formGrid}>
            <div>
              <div style={S.label}>Titre Principal</div>
              <input
                style={S.input}
                value={data.header?.title || ''}
                onChange={e => setData({ ...data, header: { ...data.header, title: e.target.value } })}
                required
              />
            </div>
            <div>
              <div style={S.label}>Badge / Surtitre</div>
              <input
                style={S.input}
                value={data.header?.badge || ''}
                onChange={e => setData({ ...data, header: { ...data.header, badge: e.target.value } })}
              />
            </div>
          </div>
          <div style={{ marginTop: '14px' }}>
            <div style={S.label}>Description d'introduction</div>
            <input
              style={S.input}
              value={data.header?.description || ''}
              onChange={e => setData({ ...data, header: { ...data.header, description: e.target.value } })}
            />
          </div>
        </div>

        {/* 3 Cartes de Tarifs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {data.plans.map((plan: any, idx: number) => (
            <div
              key={plan.id || idx}
              style={{
                ...S.card,
                marginBottom: 0,
                border: plan.popular ? '2px solid #3b82f6' : '1px solid #1e293b',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase' }}>
                  Plan {idx + 1}
                </span>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '12px', color: plan.popular ? '#60a5fa' : '#64748b' }}>
                  <input
                    type="checkbox"
                    checked={!!plan.popular}
                    onChange={e => updatePlan(idx, 'popular', e.target.checked)}
                  />
                  Badge Populaire
                </label>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={S.label}>Titre de la formation</div>
                  <input
                    style={S.input}
                    value={plan.title}
                    onChange={e => updatePlan(idx, 'title', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div style={S.label}>Sous-titre (Cible)</div>
                  <input
                    style={S.input}
                    value={plan.subtitle}
                    onChange={e => updatePlan(idx, 'subtitle', e.target.value)}
                  />
                </div>

                <div>
                  <div style={S.label}>Prix affiché (ex: $149, $299)</div>
                  <input
                    style={{ ...S.input, fontWeight: 700, fontSize: '16px', color: '#38bdf8' }}
                    value={plan.price}
                    onChange={e => updatePlan(idx, 'price', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div style={S.label}>Avantages inclus (1 par ligne)</div>
                  <textarea
                    style={{ ...S.textarea, minHeight: '110px' }}
                    value={(plan.features || []).join('\n')}
                    onChange={e => updateFeatures(idx, e.target.value)}
                    placeholder="Avantage 1&#10;Avantage 2&#10;Avantage 3"
                  />
                </div>

                <div>
                  <div style={S.label}>Texte du bouton</div>
                  <input
                    style={S.input}
                    value={plan.buttonText || "S'inscrire"}
                    onChange={e => updatePlan(idx, 'buttonText', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière de Soutien / Don */}
        <div style={{ ...S.card, borderColor: '#f9731655', background: 'linear-gradient(to right, #0d1829, #1a233a)' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#f97316' }}>
            Bannière de Soutien & Don (en bas des tarifs)
          </h3>
          <div style={S.formGrid}>
            <div>
              <div style={S.label}>Titre du bandeau</div>
              <input
                style={S.input}
                value={data.donation?.title || ''}
                onChange={e => setData({ ...data, donation: { ...data.donation, title: e.target.value } })}
              />
            </div>
            <div>
              <div style={S.label}>Texte du bouton Don</div>
              <input
                style={S.input}
                value={data.donation?.buttonText || ''}
                onChange={e => setData({ ...data, donation: { ...data.donation, buttonText: e.target.value } })}
              />
            </div>
          </div>
          <div style={{ marginTop: '14px' }}>
            <div style={S.label}>Texte explicatif pour les dons</div>
            <textarea
              style={{ ...S.textarea, minHeight: '75px' }}
              value={data.donation?.description || ''}
              onChange={e => setData({ ...data, donation: { ...data.donation, description: e.target.value } })}
            />
          </div>
        </div>

        {/* Bouton d'enregistrement général */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <button type="submit" disabled={saving} style={{ ...S.btn('#f59e0b'), color: '#000', fontWeight: 800, padding: '12px 28px', fontSize: '14px' }}>
            {saving ? 'Enregistrement en cours...' : '💾 Enregistrer toutes les modifications des Tarifs'}
          </button>
          {message && (
            <span style={{ fontSize: '13px', color: '#10b981', fontWeight: 600 }}>
              {message}
            </span>
          )}
        </div>
      </form>
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
  const del   = async (id: string) => { if (confirm('Supprimer cette page ?')) { await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' }); load(); } };

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
            {editId ? '✏️ Modifier la page' : '➕ Ajouter une page'}
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
              <div style={S.label}>Contenu</div>
              <RichEditor value={form.content} onChange={(val) => setForm({ ...form, content: val })} placeholder="Contenu de la page..." />
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
