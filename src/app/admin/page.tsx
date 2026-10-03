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
const IconHome = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const IconUsers = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconSettings = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
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

type Tab = 'articles' | 'videos' | 'tarifs' | 'accueil' | 'opportunites' | 'reseau' | 'parametres' | 'pages';

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
    { id: 'articles',     label: 'Articles',           icon: <IconArticle />,   color: '#3b82f6' },
    { id: 'videos',       label: 'Vidéos',             icon: <IconVideo />,     color: '#8b5cf6' },
    { id: 'tarifs',       label: 'Tarifs & Formations',icon: <IconPricing />,   color: '#f59e0b' },
    { id: 'accueil',      label: 'Page d\'Accueil',    icon: <IconHome />,      color: '#06b6d4' },
    { id: 'opportunites', label: 'Opportunités',       icon: <IconBriefcase />, color: '#10b981' },
    { id: 'reseau',       label: 'Membres & Réseau',   icon: <IconUsers />,     color: '#ec4899' },
    { id: 'parametres',   label: 'Paramètres Site',    icon: <IconSettings />,  color: '#f97316' },
    { id: 'pages',        label: 'Pages',              icon: <IconPage />,      color: '#64748b' },
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
          {tab === 'articles'     && <ArticlesManager />}
          {tab === 'videos'       && <VideosManager />}
          {tab === 'tarifs'       && <PricingManager />}
          {tab === 'accueil'      && <HomepageManager />}
          {tab === 'opportunites' && <OpportunitiesManager />}
          {tab === 'reseau'       && <MembersManager />}
          {tab === 'parametres'   && <SettingsManager />}
          {tab === 'pages'        && <PagesManager />}
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

// ─── Homepage Manager ────────────────────────────────────────────────────────

function HomepageManager() {
  const [data, setData]       = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [msg, setMsg]         = useState('');

  const load = async () => {
    setLoading(true);
    const r = await fetch('/api/admin/homepage');
    if (r.ok) setData(await r.json());
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    const r = await fetch('/api/admin/homepage', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (r.ok) {
      setMsg('✓ Page d\'accueil enregistrée avec succès !');
      setTimeout(() => setMsg(''), 4000);
    }
    setSaving(false);
  };

  if (loading || !data) return <p style={{ color: '#475569', fontSize: '14px' }}>Chargement de la page d'accueil...</p>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>Gestion de la Page d'Accueil</h2>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>Personnalisez le Hero banner, les grands titres et l'assistant IA</p>
        </div>
        {msg && <span style={{ fontSize: '13px', color: '#10b981', fontWeight: 600, backgroundColor: '#10b98122', padding: '6px 14px', borderRadius: '20px' }}>{msg}</span>}
      </div>

      <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Hero Section */}
        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#06b6d4' }}>
            Section Hero (Haut de la page)
          </h3>
          <div style={S.formGrid}>
            <div>
              <div style={S.label}>Badge au-dessus du titre</div>
              <input style={S.input} value={data.hero?.badge || ''} onChange={e => setData({ ...data, hero: { ...data.hero, badge: e.target.value } })} />
            </div>
            <div>
              <div style={S.label}>Titre Ligne 1 (Bleu)</div>
              <input style={S.input} value={data.hero?.titleLine1 || ''} onChange={e => setData({ ...data, hero: { ...data.hero, titleLine1: e.target.value } })} required />
            </div>
            <div>
              <div style={S.label}>Titre Ligne 2 (Orange)</div>
              <input style={S.input} value={data.hero?.titleLine2 || ''} onChange={e => setData({ ...data, hero: { ...data.hero, titleLine2: e.target.value } })} required />
            </div>
          </div>

          <div style={{ marginTop: '14px' }}>
            <div style={S.label}>Sous-titre / Description d'introduction</div>
            <textarea style={{ ...S.textarea, minHeight: '75px' }} value={data.hero?.subtitle || ''} onChange={e => setData({ ...data, hero: { ...data.hero, subtitle: e.target.value } })} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginTop: '14px' }}>
            <div>
              <div style={S.label}>Bouton 1 (Bleu)</div>
              <input style={S.input} value={data.hero?.btn1Text || ''} onChange={e => setData({ ...data, hero: { ...data.hero, btn1Text: e.target.value } })} />
            </div>
            <div>
              <div style={S.label}>Bouton 2 (Bordure)</div>
              <input style={S.input} value={data.hero?.btn2Text || ''} onChange={e => setData({ ...data, hero: { ...data.hero, btn2Text: e.target.value } })} />
            </div>
            <div>
              <div style={S.label}>Bouton 3 (Orange)</div>
              <input style={S.input} value={data.hero?.btn3Text || ''} onChange={e => setData({ ...data, hero: { ...data.hero, btn3Text: e.target.value } })} />
            </div>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#38bdf8' }}>
            Section Assistant Stratégique IA
          </h3>
          <div style={S.formGrid}>
            <div>
              <div style={S.label}>Titre de la section</div>
              <input style={S.input} value={data.aiAssistant?.title || ''} onChange={e => setData({ ...data, aiAssistant: { ...data.aiAssistant, title: e.target.value } })} required />
            </div>
            <div>
              <div style={S.label}>Badge</div>
              <input style={S.input} value={data.aiAssistant?.badge || ''} onChange={e => setData({ ...data, aiAssistant: { ...data.aiAssistant, badge: e.target.value } })} />
            </div>
          </div>
          <div style={{ marginTop: '14px' }}>
            <div style={S.label}>Description</div>
            <textarea style={{ ...S.textarea, minHeight: '65px' }} value={data.aiAssistant?.description || ''} onChange={e => setData({ ...data, aiAssistant: { ...data.aiAssistant, description: e.target.value } })} />
          </div>
        </div>

        <button type="submit" disabled={saving} style={{ ...S.btn('#06b6d4'), color: '#000', fontWeight: 800, padding: '12px 28px', alignSelf: 'flex-start' }}>
          {saving ? 'Enregistrement...' : '💾 Enregistrer la Page d\'Accueil'}
        </button>
      </form>
    </div>
  );
}

// ─── Opportunities Manager ───────────────────────────────────────────────────

function OpportunitiesManager() {
  const [items, setItems]       = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId]     = useState<string | null>(null);
  const [form, setForm]         = useState<any>({
    title: '', category: 'Financement', location: '', country: 'Haïti', flag: '🇭🇹',
    budget: '', deadline: '', company: '', description: '', requirements: ''
  });

  const load = async () => {
    setLoading(true);
    const r = await fetch('/api/admin/opportunities');
    if (r.ok) setItems(await r.json());
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...form,
      requirements: typeof form.requirements === 'string'
        ? form.requirements.split('\n').map((s: string) => s.trim()).filter(Boolean)
        : form.requirements
    };
    const url = editId ? `/api/admin/opportunities/${editId}` : '/api/admin/opportunities';
    const method = editId ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    reset();
    load();
  };

  const reset = () => {
    setForm({ title: '', category: 'Financement', location: '', country: 'Haïti', flag: '🇭🇹', budget: '', deadline: '', company: '', description: '', requirements: '' });
    setEditId(null);
    setShowForm(false);
  };

  const edit = (op: any) => {
    setForm({
      ...op,
      requirements: Array.isArray(op.requirements) ? op.requirements.join('\n') : (op.requirements || '')
    });
    setEditId(op.id);
    setShowForm(true);
  };

  const del = async (id: string) => {
    if (confirm('Supprimer cette opportunité ?')) {
      await fetch(`/api/admin/opportunities/${id}`, { method: 'DELETE' });
      load();
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>Gestion de la Bourse d'Opportunités</h2>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>Ajoutez, modifiez ou retirez les appels d'offres et projets d'investissement</p>
        </div>
        {!showForm && (
          <button onClick={() => setShowForm(true)} style={{ ...S.btn('#10b981'), display: 'flex', alignItems: 'center', gap: '6px' }}>
            <IconPlus /> Nouvelle Opportunité
          </button>
        )}
      </div>

      {showForm && (
        <div style={{ ...S.card, borderColor: '#10b98155' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#10b981' }}>
            {editId ? 'Modifier l\'opportunité' : 'Créer une opportunité'}
          </h3>
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={S.formGrid}>
              <div>
                <div style={S.label}>Titre du projet / appel d'offres *</div>
                <input style={S.input} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <div style={S.label}>Catégorie</div>
                <select style={S.input} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                  <option value="Financement">Financement</option>
                  <option value="Partenariat">Partenariat</option>
                  <option value="Appel d'Offres">Appel d'Offres</option>
                  <option value="Agro-Export">Agro-Export</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              <div>
                <div style={S.label}>Pays</div>
                <input style={S.input} value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} required />
              </div>
              <div>
                <div style={S.label}>Drapeau (Emoji)</div>
                <input style={S.input} value={form.flag} onChange={e => setForm({ ...form, flag: e.target.value })} />
              </div>
              <div>
                <div style={S.label}>Ville / Région</div>
                <input style={S.input} value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
              </div>
              <div>
                <div style={S.label}>Budget / Montant</div>
                <input style={S.input} value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} placeholder="Ex: $350,000 USD" />
              </div>
              <div>
                <div style={S.label}>Date limite</div>
                <input style={S.input} value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} placeholder="Ex: 15 Déc 2026" />
              </div>
            </div>

            <div>
              <div style={S.label}>Entreprise / Organisation porteuse *</div>
              <input style={S.input} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} required />
            </div>

            <div>
              <div style={S.label}>Description du projet *</div>
              <textarea style={{ ...S.textarea, minHeight: '80px' }} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
            </div>

            <div>
              <div style={S.label}>Critères & Exigences (1 par ligne)</div>
              <textarea style={{ ...S.textarea, minHeight: '70px' }} value={form.requirements} onChange={e => setForm({ ...form, requirements: e.target.value })} placeholder="Critère 1&#10;Critère 2" />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={S.btn('#10b981')}>Enregistrer</button>
              <button type="button" onClick={reset} style={{ ...S.btn('#475569'), backgroundColor: 'transparent', border: '1px solid #475569' }}>Annuler</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p style={{ color: '#475569', fontSize: '14px' }}>Chargement des opportunités...</p>
      ) : (
        <div style={{ ...S.card, padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1e293b', backgroundColor: '#07101f' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#64748b' }}>Titre</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#64748b' }}>Catégorie</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#64748b' }}>Pays</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#64748b' }}>Budget</th>
                <th style={{ textAlign: 'right', padding: '12px 16px', color: '#64748b' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(op => (
                <tr key={op.id} style={{ borderBottom: '1px solid #1e293b' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: '#f1f5f9' }}>{op.title}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8', backgroundColor: '#0284c722', padding: '2px 8px', borderRadius: '4px' }}>{op.category}</span>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#94a3b8' }}>{op.flag} {op.country}</td>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: '#10b981' }}>{op.budget}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button onClick={() => edit(op)} style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', marginRight: '8px' }}><IconEdit /></button>
                    <button onClick={() => del(op.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><IconTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Members Manager ─────────────────────────────────────────────────────────

function MembersManager() {
  const [items, setItems]       = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId]     = useState<string | null>(null);
  const [form, setForm]         = useState<any>({
    name: '', role: '', company: '', location: '', country: 'Haïti', flag: '🇭🇹',
    category: 'Entreprise', tags: '', bio: '', verified: true
  });

  const load = async () => {
    setLoading(true);
    const r = await fetch('/api/admin/members');
    if (r.ok) setItems(await r.json());
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: typeof form.tags === 'string'
        ? form.tags.split(',').map((s: string) => s.trim()).filter(Boolean)
        : form.tags
    };
    const url = editId ? `/api/admin/members/${editId}` : '/api/admin/members';
    const method = editId ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    reset();
    load();
  };

  const reset = () => {
    setForm({ name: '', role: '', company: '', location: '', country: 'Haïti', flag: '🇭🇹', category: 'Entreprise', tags: '', bio: '', verified: true });
    setEditId(null);
    setShowForm(false);
  };

  const edit = (m: any) => {
    setForm({
      ...m,
      tags: Array.isArray(m.tags) ? m.tags.join(', ') : (m.tags || '')
    });
    setEditId(m.id);
    setShowForm(true);
  };

  const del = async (id: string) => {
    if (confirm('Supprimer ce membre du réseau ?')) {
      await fetch(`/api/admin/members/${id}`, { method: 'DELETE' });
      load();
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>Gestion du Réseau d'Affaires & Membres</h2>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>Gérez les profils visibles dans l'annuaire d'entreprises et d'experts</p>
        </div>
        {!showForm && (
          <button onClick={() => setShowForm(true)} style={{ ...S.btn('#ec4899'), display: 'flex', alignItems: 'center', gap: '6px' }}>
            <IconPlus /> Nouveau Membre / Entreprise
          </button>
        )}
      </div>

      {showForm && (
        <div style={{ ...S.card, borderColor: '#ec489955' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#ec4899' }}>
            {editId ? 'Modifier le membre' : 'Ajouter un membre'}
          </h3>
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={S.formGrid}>
              <div>
                <div style={S.label}>Nom complet du dirigeant / expert *</div>
                <input style={S.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <div style={S.label}>Rôle / Poste *</div>
                <input style={S.input} value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} placeholder="Ex: Directeur Général / Fondateur" required />
              </div>
            </div>

            <div style={S.formGrid}>
              <div>
                <div style={S.label}>Entreprise / Organisation *</div>
                <input style={S.input} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} required />
              </div>
              <div>
                <div style={S.label}>Kategori</div>
                <select style={S.input} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                  <option value="Entreprise">Entreprise</option>
                  <option value="Investisseur">Investisseur</option>
                  <option value="Startup">Startup</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              <div>
                <div style={S.label}>Peyi</div>
                <input style={S.input} value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} required />
              </div>
              <div>
                <div style={S.label}>Drapeau (Emoji)</div>
                <input style={S.input} value={form.flag} onChange={e => setForm({ ...form, flag: e.target.value })} />
              </div>
              <div>
                <div style={S.label}>Ville / Localisation</div>
                <input style={S.input} value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
              </div>
              <div>
                <div style={S.label}>Tags (séparés par virgules)</div>
                <input style={S.input} value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} placeholder="AgriTech, Export, Solaire" />
              </div>
            </div>

            <div>
              <div style={S.label}>Biographie / Présentation de l'activité *</div>
              <textarea style={{ ...S.textarea, minHeight: '80px' }} value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} required />
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#e2e8f0' }}>
                <input type="checkbox" checked={!!form.verified} onChange={e => setForm({ ...form, verified: e.target.checked })} />
                Profil vérifié avec badge de confiance
              </label>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={S.btn('#ec4899')}>Enregistrer</button>
              <button type="button" onClick={reset} style={{ ...S.btn('#475569'), backgroundColor: 'transparent', border: '1px solid #475569' }}>Annuler</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p style={{ color: '#475569', fontSize: '14px' }}>Chargement des membres...</p>
      ) : (
        <div style={{ ...S.card, padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1e293b', backgroundColor: '#07101f' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#64748b' }}>Nom & Poste</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#64748b' }}>Entreprise</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#64748b' }}>Kategori</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: '#64748b' }}>Peyi</th>
                <th style={{ textAlign: 'right', padding: '12px 16px', color: '#64748b' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(m => (
                <tr key={m.id} style={{ borderBottom: '1px solid #1e293b' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: '#f1f5f9' }}>
                    {m.name} {m.verified && <span style={{ color: '#38bdf8' }}>✓</span>}
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{m.role}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>{m.company}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#ec4899', backgroundColor: '#ec489922', padding: '2px 8px', borderRadius: '4px' }}>{m.category}</span>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#94a3b8' }}>{m.flag} {m.country}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button onClick={() => edit(m)} style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', marginRight: '8px' }}><IconEdit /></button>
                    <button onClick={() => del(m.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><IconTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Settings Manager ────────────────────────────────────────────────────────

function SettingsManager() {
  const [data, setData]       = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [msg, setMsg]         = useState('');

  const load = async () => {
    setLoading(true);
    const r = await fetch('/api/admin/settings');
    if (r.ok) setData(await r.json());
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    const r = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (r.ok) {
      setMsg('✓ Paramètres enregistrés avec succès !');
      setTimeout(() => setMsg(''), 4000);
    }
    setSaving(false);
  };

  if (loading || !data) return <p style={{ color: '#475569', fontSize: '14px' }}>Chargement des paramètres...</p>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>Paramètres Généraux du Site</h2>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>Configurez le nom, coordonnées de contact et liens réseaux sociaux</p>
        </div>
        {msg && <span style={{ fontSize: '13px', color: '#10b981', fontWeight: 600, backgroundColor: '#10b98122', padding: '6px 14px', borderRadius: '20px' }}>{msg}</span>}
      </div>

      <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#f97316' }}>Identité de la Plateforme</h3>
          <div style={S.formGrid}>
            <div>
              <div style={S.label}>Nom de la plateforme</div>
              <input style={S.input} value={data.siteName || ''} onChange={e => setData({ ...data, siteName: e.target.value })} required />
            </div>
            <div>
              <div style={S.label}>Slogan principal</div>
              <input style={S.input} value={data.tagline || ''} onChange={e => setData({ ...data, tagline: e.target.value })} required />
            </div>
          </div>
          <div style={{ marginTop: '14px' }}>
            <div style={S.label}>Description globale</div>
            <textarea style={{ ...S.textarea, minHeight: '60px' }} value={data.description || ''} onChange={e => setData({ ...data, description: e.target.value })} />
          </div>
        </div>

        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#38bdf8' }}>Coordonnées de Contact</h3>
          <div style={S.formGrid}>
            <div>
              <div style={S.label}>Email de contact officiel</div>
              <input style={S.input} value={data.contactEmail || ''} onChange={e => setData({ ...data, contactEmail: e.target.value })} />
            </div>
            <div>
              <div style={S.label}>Téléphone / WhatsApp</div>
              <input style={S.input} value={data.contactPhone || ''} onChange={e => setData({ ...data, contactPhone: e.target.value })} />
            </div>
            <div>
              <div style={S.label}>Adresses physiques / Bureaux</div>
              <input style={S.input} value={data.address || ''} onChange={e => setData({ ...data, address: e.target.value })} />
            </div>
            <div>
              <div style={S.label}>Mention Copyright</div>
              <input style={S.input} value={data.copyright || ''} onChange={e => setData({ ...data, copyright: e.target.value })} />
            </div>
          </div>
        </div>

        <div style={S.card}>
          <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 700, color: '#8b5cf6' }}>Réseaux Sociaux</h3>
          <div style={S.formGrid}>
            <div>
              <div style={S.label}>Lien LinkedIn</div>
              <input style={S.input} value={data.socials?.linkedin || ''} onChange={e => setData({ ...data, socials: { ...data.socials, linkedin: e.target.value } })} />
            </div>
            <div>
              <div style={S.label}>Lien Twitter / X</div>
              <input style={S.input} value={data.socials?.twitter || ''} onChange={e => setData({ ...data, socials: { ...data.socials, twitter: e.target.value } })} />
            </div>
            <div>
              <div style={S.label}>Lien Facebook</div>
              <input style={S.input} value={data.socials?.facebook || ''} onChange={e => setData({ ...data, socials: { ...data.socials, facebook: e.target.value } })} />
            </div>
            <div>
              <div style={S.label}>Numéro WhatsApp Business</div>
              <input style={S.input} value={data.socials?.whatsapp || ''} onChange={e => setData({ ...data, socials: { ...data.socials, whatsapp: e.target.value } })} />
            </div>
          </div>
        </div>

        <button type="submit" disabled={saving} style={{ ...S.btn('#f97316'), color: '#fff', fontWeight: 800, padding: '12px 28px', alignSelf: 'flex-start' }}>
          {saving ? 'Enregistrement...' : '💾 Enregistrer les Paramètres'}
        </button>
      </form>
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
