// @ts-nocheck
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "12345"
        ) {
          return { id: "1", name: "Admin", role: "admin" };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" as const },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) session.user.role = token.role;
      return session;
    },
  },
  pages: { signIn: "/auth/signin" },
  secret: process.env.NEXTAUTH_SECRET || "super-secret-pozitivex",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
