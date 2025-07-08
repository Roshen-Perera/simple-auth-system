import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { username, email, password } = body;

        // ✅ simulate a user creation or database save
        // await createUser(email, password);
        console.log('Received registration data :', {
            username,
            email,
            password
        });
        
        return NextResponse.json(
            { message: 'User registered successfully.' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error in /api/register:', error);
        return NextResponse.json(
            { message: 'Internal Server Error.' },
            { status: 500 }
        );
    }
  }

