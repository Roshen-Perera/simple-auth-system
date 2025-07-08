import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient();

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
        providers: [
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                    username: { label: "Username", type: "text", placeholder: "John Doe" },
                    password: { label: "Password", type: "password" }
                },
                async authorize(credentials, req) {
    
                }
              })
        ],
        session: {
            strategy: "jwt",
        },
        secret: process.env.NEXTAUTH_SECRET,
        debug: process.env.NODE_ENV === "development",
});



export { handler as GET, handler as POST }