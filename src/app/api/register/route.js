import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        const existingUser = await prisma.user.findUnique({
            where: { 
                email : email 
            }
        });

        if (existingUser) {
            return NextResponse.json(
                { message: 'User already exists.' },
                { status: 409 } 
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }   
        });

        console.log('Received registration data :',newUser);
        
        return NextResponse.json(newUser);
    } catch (error) {
        console.error('Error in /api/register:', error);
        return NextResponse.json(
            { message: 'Internal Server Error.' },
            { status: 500 }
        );
    }
  }

