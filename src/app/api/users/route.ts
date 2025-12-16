import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: Request) {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
export async function POST(request: NextRequest) {
    const body = await request.json();
    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            name: body.name,
            phone: body.phone,
        },
    });
    return new Response(JSON.stringify(user), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}