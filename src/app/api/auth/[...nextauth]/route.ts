import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// @ts-nocheck

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.username === "admin" && credentials?.password === "12345") {
          return { id: "1", name: "Admin", role: "admin" };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.role = token.role;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "super-secret-pozitivex",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
