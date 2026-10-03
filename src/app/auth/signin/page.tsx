"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.ok) {
      router.push("/admin");
    } else {
      setError("Identifiant ou mot de passe incorrect.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#060d1a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        padding: "0 16px",
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#3b82f6" }}>POZITIV</span>
            <span style={{ color: "#f97316" }}>EX+</span>
          </div>
          <div style={{ fontSize: "13px", color: "#475569", marginTop: "6px" }}>
            Panneau d&apos;administration
          </div>
        </div>

        {/* Card */}
        <div style={{
          backgroundColor: "#0d1829",
          border: "1px solid #1e293b",
          borderRadius: "16px",
          padding: "32px",
        }}>
          <h1 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: 700, color: "#f1f5f9" }}>
            Connexion
          </h1>
          <p style={{ margin: "0 0 24px", fontSize: "13px", color: "#475569" }}>
            Accédez au panneau admin
          </p>

          {error && (
            <div style={{
              backgroundColor: "#ef444422",
              border: "1px solid #ef444444",
              borderRadius: "8px",
              padding: "10px 14px",
              color: "#fca5a5",
              fontSize: "13px",
              marginBottom: "16px",
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "11px", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>
                Identifiant
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                placeholder="admin"
                style={{
                  width: "100%",
                  backgroundColor: "#111827",
                  border: "1px solid #1e293b",
                  borderRadius: "8px",
                  padding: "11px 14px",
                  color: "#e2e8f0",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "11px", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{
                  width: "100%",
                  backgroundColor: "#111827",
                  border: "1px solid #1e293b",
                  borderRadius: "8px",
                  padding: "11px 14px",
                  color: "#e2e8f0",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: loading ? "#1d4ed8" : "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                marginTop: "4px",
                transition: "background .15s",
              }}
            >
              {loading ? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>
        </div>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "12px", color: "#1e293b" }}>
          POZITIVEX+ Admin &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
