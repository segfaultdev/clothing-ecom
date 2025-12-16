import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        if (!users || users.length === 0) {
            return NextResponse.json({ error: 'No users found' }, { status: 404 });
        }
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                phone: body.phone,
                password: body.password
            }
        });
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
        }
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}