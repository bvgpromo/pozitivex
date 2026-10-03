"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle, FontSize } from "@tiptap/extension-text-style";

interface RichEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const btnS = (active = false): React.CSSProperties => ({
  background: active ? "#3b82f6" : "#1e293b",
  color: active ? "#fff" : "#94a3b8",
  border: "none", borderRadius: "5px",
  padding: "4px 8px", cursor: "pointer",
  fontSize: "12px", fontWeight: 600, lineHeight: 1.2,
  minWidth: "28px", transition: "background .1s",
});

const DIV: React.CSSProperties = {
  width: "1px", backgroundColor: "#1e293b",
  margin: "0 4px", alignSelf: "stretch",
};

const SIZES = [
  { label: "Petit",      value: "12px" },
  { label: "Normal",     value: "14px" },
  { label: "Grand",      value: "18px" },
  { label: "Très grand", value: "24px" },
  { label: "Titre",      value: "32px" },
];

export default function RichEditor({ value, onChange, placeholder, minHeight = "160px" }: RichEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontSize,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: value,
    onUpdate({ editor }) { onChange(editor.getHTML()); },
    editorProps: {
      attributes: {
        style: `min-height:${minHeight};outline:none;color:#e2e8f0;font-size:14px;line-height:1.8;`,
      },
    },
  });

  if (!editor) return null;

  const curSize = (editor.getAttributes("textStyle") as any).fontSize || "14px";

  return (
    <div style={{ backgroundColor: "#111827", border: "1px solid #1e293b", borderRadius: "8px", overflow: "hidden" }}>
      {/* Toolbar */}
      <div style={{
        display: "flex", gap: "4px", flexWrap: "wrap", alignItems: "center",
        padding: "8px 10px", backgroundColor: "#0d1829", borderBottom: "1px solid #1e293b",
      }}>
        {/* Taille */}
        <select
          value={curSize}
          onChange={e => (editor.chain().focus() as any).setFontSize(e.target.value).run()}
          style={{ backgroundColor: "#1e293b", color: "#94a3b8", border: "none", borderRadius: "5px", padding: "4px 6px", fontSize: "12px", cursor: "pointer", outline: "none" }}
          title="Taille du texte"
        >
          {SIZES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <div style={DIV} />
        {/* Format */}
        <button type="button" title="Gras (Ctrl+B)" onClick={() => editor.chain().focus().toggleBold().run()}
          style={{ ...btnS(editor.isActive("bold")), fontWeight: 900 }}>B</button>
        <button type="button" title="Italique (Ctrl+I)" onClick={() => editor.chain().focus().toggleItalic().run()}
          style={{ ...btnS(editor.isActive("italic")), fontStyle: "italic" }}>I</button>
        <button type="button" title="Souligné" onClick={() => editor.chain().focus().toggleUnderline().run()}
          style={{ ...btnS(editor.isActive("underline")), textDecoration: "underline" }}>U</button>
        <button type="button" title="Barré" onClick={() => editor.chain().focus().toggleStrike().run()}
          style={{ ...btnS(editor.isActive("strike")), textDecoration: "line-through" }}>S</button>
        <div style={DIV} />
        {/* Titres */}
        <button type="button" title="Titre 1" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          style={btnS(editor.isActive("heading", { level: 1 }))}>H1</button>
        <button type="button" title="Titre 2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          style={btnS(editor.isActive("heading", { level: 2 }))}>H2</button>
        <button type="button" title="Titre 3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          style={btnS(editor.isActive("heading", { level: 3 }))}>H3</button>
        <div style={DIV} />
        {/* Listes */}
        <button type="button" title="Liste à puces" onClick={() => editor.chain().focus().toggleBulletList().run()}
          style={btnS(editor.isActive("bulletList"))}>• —</button>
        <button type="button" title="Liste numérotée" onClick={() => editor.chain().focus().toggleOrderedList().run()}
          style={btnS(editor.isActive("orderedList"))}>1.</button>
        <div style={DIV} />
        {/* Alignement */}
        <button type="button" title="Gauche" onClick={() => editor.chain().focus().setTextAlign("left").run()}
          style={btnS(editor.isActive({ textAlign: "left" }))}>◀</button>
        <button type="button" title="Centre" onClick={() => editor.chain().focus().setTextAlign("center").run()}
          style={btnS(editor.isActive({ textAlign: "center" }))}>▬</button>
        <button type="button" title="Droite" onClick={() => editor.chain().focus().setTextAlign("right").run()}
          style={btnS(editor.isActive({ textAlign: "right" }))}>▶</button>
        <div style={DIV} />
        {/* Extras */}
        <button type="button" title="Citation" onClick={() => editor.chain().focus().toggleBlockquote().run()}
          style={btnS(editor.isActive("blockquote"))}>❝</button>
        <button type="button" title="Code" onClick={() => editor.chain().focus().toggleCode().run()}
          style={{ ...btnS(editor.isActive("code")), fontFamily: "monospace" }}>&lt;/&gt;</button>
        <button type="button" title="Séparateur" onClick={() => editor.chain().focus().setHorizontalRule().run()}
          style={btnS()}>—</button>
        <div style={DIV} />
        <button type="button" title="Annuler (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()} style={btnS()}>↩</button>
        <button type="button" title="Rétablir (Ctrl+Y)" onClick={() => editor.chain().focus().redo().run()} style={btnS()}>↪</button>
      </div>

      {/* Zone de saisie */}
      <div style={{ padding: "12px 14px", position: "relative" }}>
        {editor.isEmpty && placeholder && (
          <div style={{ position: "absolute", top: "12px", left: "14px", color: "#334155", fontSize: "14px", pointerEvents: "none", userSelect: "none" }}>
            {placeholder}
          </div>
        )}
        <style>{`
          .ProseMirror h1{font-size:1.8em;font-weight:800;color:#f1f5f9;margin:.4em 0}
          .ProseMirror h2{font-size:1.4em;font-weight:700;color:#e2e8f0;margin:.4em 0}
          .ProseMirror h3{font-size:1.15em;font-weight:600;color:#cbd5e1;margin:.3em 0}
          .ProseMirror ul{padding-left:1.4em;list-style:disc}
          .ProseMirror ol{padding-left:1.4em;list-style:decimal}
          .ProseMirror blockquote{border-left:3px solid #3b82f6;padding-left:12px;color:#94a3b8;margin:8px 0;font-style:italic}
          .ProseMirror code{background:#1e293b;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.85em;color:#7dd3fc}
          .ProseMirror hr{border:none;border-top:1px solid #1e293b;margin:12px 0}
          .ProseMirror p{margin:.25em 0}
          .ProseMirror:focus{outline:none}
        `}</style>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
