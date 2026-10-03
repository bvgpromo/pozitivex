"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle, FontSize, FontFamily, Color } from "@tiptap/extension-text-style";

interface RichEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const btnS = (active = false): React.CSSProperties => ({
  background: active ? "#3b82f6" : "#1e293b",
  color: active ? "#fff" : "#94a3b8",
  border: "none",
  borderRadius: "5px",
  padding: "4px 8px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: 1.2,
  minWidth: "28px",
  transition: "background .1s",
});

const selectS: React.CSSProperties = {
  backgroundColor: "#1e293b",
  color: "#e2e8f0",
  border: "1px solid #334155",
  borderRadius: "5px",
  padding: "4px 7px",
  fontSize: "12px",
  cursor: "pointer",
  outline: "none",
};

const DIV: React.CSSProperties = {
  width: "1px",
  backgroundColor: "#1e293b",
  margin: "0 4px",
  alignSelf: "stretch",
};

const SIZES = [
  { label: "10 px (Très petit)", value: "10px" },
  { label: "11 px", value: "11px" },
  { label: "12 px (Petit)", value: "12px" },
  { label: "13 px", value: "13px" },
  { label: "14 px (Normal)", value: "14px" },
  { label: "16 px (Moyen)", value: "16px" },
  { label: "18 px (Grand)", value: "18px" },
  { label: "20 px", value: "20px" },
  { label: "24 px (Très grand)", value: "24px" },
  { label: "28 px", value: "28px" },
  { label: "32 px (Titre)", value: "32px" },
  { label: "36 px", value: "36px" },
  { label: "48 px (Grand titre)", value: "48px" },
  { label: "64 px", value: "64px" },
  { label: "72 px", value: "72px" },
];

const SIZE_VALUES = ["10px", "11px", "12px", "13px", "14px", "16px", "18px", "20px", "24px", "28px", "32px", "36px", "48px", "64px", "72px"];

const FONTS = [
  { label: "Police : Par défaut", value: "" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Times New Roman", value: "'Times New Roman', serif" },
  { label: "Courier New", value: "'Courier New', monospace" },
  { label: "Verdana", value: "Verdana, sans-serif" },
  { label: "Trebuchet MS", value: "'Trebuchet MS', sans-serif" },
];

const COLORS = [
  { label: "Couleur", value: "" },
  { label: "Blanc", value: "#ffffff" },
  { label: "Gris", value: "#94a3b8" },
  { label: "Bleu", value: "#3b82f6" },
  { label: "Vert", value: "#10b981" },
  { label: "Jaune", value: "#eab308" },
  { label: "Orange", value: "#f97316" },
  { label: "Rouge", value: "#ef4444" },
  { label: "Violet", value: "#8b5cf6" },
];

export default function RichEditor({
  value,
  onChange,
  placeholder,
  minHeight = "160px",
}: RichEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontSize,
      FontFamily,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        style: `min-height:${minHeight};outline:none;color:#e2e8f0;font-size:14px;line-height:1.8;`,
      },
    },
  });

  if (!editor) return null;

  const curSize = (editor.getAttributes("textStyle") as any).fontSize || "14px";
  const curFont = (editor.getAttributes("textStyle") as any).fontFamily || "";
  const curColor = (editor.getAttributes("textStyle") as any).color || "";

  const stepSize = (delta: number) => {
    let idx = SIZE_VALUES.indexOf(curSize);
    if (idx === -1) idx = SIZE_VALUES.indexOf("14px");
    const nextIdx = Math.max(0, Math.min(SIZE_VALUES.length - 1, idx + delta));
    (editor.chain().focus() as any).setFontSize(SIZE_VALUES[nextIdx]).run();
  };

  return (
    <div
      style={{
        backgroundColor: "#111827",
        border: "1px solid #1e293b",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Barre d'outils */}
      <div
        style={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "8px 10px",
          backgroundColor: "#0d1829",
          borderBottom: "1px solid #1e293b",
        }}
      >
        {/* Police de caractères */}
        <select
          value={curFont}
          onChange={(e) => {
            if (e.target.value) {
              (editor.chain().focus() as any).setFontFamily(e.target.value).run();
            } else {
              (editor.chain().focus() as any).unsetFontFamily().run();
            }
          }}
          style={selectS}
          title="Police d'écriture"
        >
          {FONTS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>

        {/* Taille de police */}
        <select
          value={curSize}
          onChange={(e) =>
            (editor.chain().focus() as any).setFontSize(e.target.value).run()
          }
          style={selectS}
          title="Taille de la police"
        >
          {SIZES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        {/* Boutons A- et A+ pour ajuster rapidement */}
        <button
          type="button"
          title="Diminuer la taille (A-)"
          onClick={() => stepSize(-1)}
          style={{ ...btnS(), fontWeight: 700 }}
        >
          A⁻
        </button>
        <button
          type="button"
          title="Agrandir la taille (A+)"
          onClick={() => stepSize(1)}
          style={{ ...btnS(), fontWeight: 700 }}
        >
          A⁺
        </button>

        {/* Couleur du texte */}
        <select
          value={curColor}
          onChange={(e) => {
            if (e.target.value) {
              (editor.chain().focus() as any).setColor(e.target.value).run();
            } else {
              (editor.chain().focus() as any).unsetColor().run();
            }
          }}
          style={selectS}
          title="Couleur du texte"
        >
          {COLORS.map((c) => (
            <option key={c.value} value={c.value} style={{ color: c.value || "#e2e8f0" }}>
              {c.label}
            </option>
          ))}
        </select>

        <div style={DIV} />

        {/* Format du texte */}
        <button
          type="button"
          title="Gras (Ctrl+B)"
          onClick={() => editor.chain().focus().toggleBold().run()}
          style={{ ...btnS(editor.isActive("bold")), fontWeight: 900 }}
        >
          B
        </button>
        <button
          type="button"
          title="Italique (Ctrl+I)"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          style={{ ...btnS(editor.isActive("italic")), fontStyle: "italic" }}
        >
          I
        </button>
        <button
          type="button"
          title="Souligné (Ctrl+U)"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          style={{
            ...btnS(editor.isActive("underline")),
            textDecoration: "underline",
          }}
        >
          U
        </button>
        <button
          type="button"
          title="Barré"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          style={{
            ...btnS(editor.isActive("strike")),
            textDecoration: "line-through",
          }}
        >
          S
        </button>

        <div style={DIV} />

        {/* Titres */}
        <button
          type="button"
          title="Titre 1 (H1)"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          style={btnS(editor.isActive("heading", { level: 1 }))}
        >
          H1
        </button>
        <button
          type="button"
          title="Titre 2 (H2)"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          style={btnS(editor.isActive("heading", { level: 2 }))}
        >
          H2
        </button>
        <button
          type="button"
          title="Titre 3 (H3)"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          style={btnS(editor.isActive("heading", { level: 3 }))}
        >
          H3
        </button>

        <div style={DIV} />

        {/* Listes */}
        <button
          type="button"
          title="Liste à puces"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          style={btnS(editor.isActive("bulletList"))}
        >
          • Liste
        </button>
        <button
          type="button"
          title="Liste numérotée"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          style={btnS(editor.isActive("orderedList"))}
        >
          1. Liste
        </button>

        <div style={DIV} />

        {/* Alignement */}
        <button
          type="button"
          title="Aligner à gauche"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          style={btnS(editor.isActive({ textAlign: "left" }))}
        >
          ⇤ Gauche
        </button>
        <button
          type="button"
          title="Centrer"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          style={btnS(editor.isActive({ textAlign: "center" }))}
        >
          ≡ Centre
        </button>
        <button
          type="button"
          title="Aligner à droite"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          style={btnS(editor.isActive({ textAlign: "right" }))}
        >
          ⇥ Droite
        </button>

        <div style={DIV} />

        {/* Extras */}
        <button
          type="button"
          title="Citation"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          style={btnS(editor.isActive("blockquote"))}
        >
          ❝ Citation
        </button>
        <button
          type="button"
          title="Code"
          onClick={() => editor.chain().focus().toggleCode().run()}
          style={{ ...btnS(editor.isActive("code")), fontFamily: "monospace" }}
        >
          &lt;/&gt;
        </button>
        <button
          type="button"
          title="Ligne horizontale"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          style={btnS()}
        >
          — Ligne
        </button>

        <div style={DIV} />

        {/* Historique */}
        <button
          type="button"
          title="Annuler (Ctrl+Z)"
          onClick={() => editor.chain().focus().undo().run()}
          style={btnS()}
        >
          ↩ Annuler
        </button>
        <button
          type="button"
          title="Rétablir (Ctrl+Y)"
          onClick={() => editor.chain().focus().redo().run()}
          style={btnS()}
        >
          ↪ Rétablir
        </button>
      </div>

      {/* Zone de saisie */}
      <div style={{ padding: "12px 14px", position: "relative" }}>
        {editor.isEmpty && placeholder && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "14px",
              color: "#334155",
              fontSize: "14px",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {placeholder}
          </div>
        )}
        <style>{`
          .ProseMirror h1 { font-size: 1.8em; font-weight: 800; color: #f1f5f9; margin: 0.4em 0; }
          .ProseMirror h2 { font-size: 1.4em; font-weight: 700; color: #e2e8f0; margin: 0.4em 0; }
          .ProseMirror h3 { font-size: 1.15em; font-weight: 600; color: #cbd5e1; margin: 0.3em 0; }
          .ProseMirror ul { padding-left: 1.4em; list-style: disc; }
          .ProseMirror ol { padding-left: 1.4em; list-style: decimal; }
          .ProseMirror blockquote { border-left: 3px solid #3b82f6; padding-left: 12px; color: #94a3b8; margin: 8px 0; font-style: italic; }
          .ProseMirror code { background: #1e293b; border-radius: 4px; padding: 2px 6px; font-family: monospace; font-size: 0.85em; color: #7dd3fc; }
          .ProseMirror hr { border: none; border-top: 1px solid #1e293b; margin: 12px 0; }
          .ProseMirror p { margin: 0.25em 0; }
          .ProseMirror:focus { outline: none; }
        `}</style>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
