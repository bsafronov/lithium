import { PrismaAdapter } from "@auth/prisma-adapter";
import { DefaultSession, NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { db } from "../prisma";
import DiscordProvider from "next-auth/providers/discord";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // role: UserRole;
      // ...other properties
    } & DefaultSession["user"];
  }

  interface User {
    // role: UserRole;
    // ...other properties
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
};
