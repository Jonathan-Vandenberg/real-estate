import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

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
    EmailProvider({
      server: {
        host: "smtp.mailtrap.io",
        port: 587,
        auth: {
          user: process.env.FAKE_EMAIL_USER_NAME,
          pass: process.env.FAKE_EMAIL_PASSWORD,
        },
      },
      from: "from@example.com",
    }),
    {
      name: "password",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authenticate: async ({ email, password }) => {
        // Retrieve user from the database using Prisma client
        const user = await prisma.user({ email });
        // Compare hashed password with the provided password
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          // Return user object if password matches
          return user;
        } else {
          // Return null if password does not match
          return null;
        }
      },
    },
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: "/auth/signin",
  // },
  callbacks: {
    signIn: async (user, account, profile) => {
      return {
        redirectUrl: "/auth/signin",
        user,
      };
    },
    async session({ session, token, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
