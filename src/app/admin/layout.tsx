"use client";

import { SessionProvider } from "next-auth/react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" style={{ colorScheme: 'dark' }}>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#060d1a', color: '#e2e8f0', fontFamily: 'Inter, sans-serif' }}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
