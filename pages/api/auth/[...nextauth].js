import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
    FacebookProvider({
      clientId: String(process.env.FACEBOOK_CLIENT_ID),
      clientSecret: String(process.env.FACEBOOK_CLIENT_SECRET),
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
