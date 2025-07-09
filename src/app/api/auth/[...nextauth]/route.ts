import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
        providers: [
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                    name: { label: "Username", type: "text", placeholder: "John Doe" },
                    password: { label: "Password", type: "password" },
                    email: { label: "Email", type: "email", placeholder: "johndoe@ gmail.com"}
                },
                async authorize(credentials) {
                    if(!credentials?.email || !credentials?.password) {
                        return null;
                    }

                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email
                        }
                    });

                    if (!user) {
                        throw new Error("No user found with the email");
                    }

                    const passwordMatch = await bcrypt.compare(
                        credentials.password,
                        user.password || ""
                    );

                    if (!passwordMatch) {
                        throw new Error("Invalid password");
                    }
                    return user;
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