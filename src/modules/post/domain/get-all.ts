"use server";

import { db } from "@/libs/prisma";

export async function getAll() {
  return await db.post.findMany();
}

export type GetAllPosts = Awaited<ReturnType<typeof getAll>>;
