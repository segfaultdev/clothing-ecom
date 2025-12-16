// Example function to fetch all users

import { PrismaClient } from "@/generated/prisma/client";

export const prisma = new PrismaClient();



export async function getAllUsers() {
    return prisma.user.findMany();
}