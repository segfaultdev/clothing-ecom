import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    console.log('User ID:', id);

    const user = await prisma.user.findUnique({
        where: { id },
    });

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
}


export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const body = await request.json();
    try {
        const user = await prisma.user.update({
            where: { id },
            data: body,
        });
        return NextResponse.json(user, { status: 200 });
    } catch {
        return NextResponse.json({ error: 'User not found or update failed' }, { status: 404 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        await prisma.user.delete({ where: { id } });
        return NextResponse.json({ message: 'User deleted' }, { status: 200 });
    } catch {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
}