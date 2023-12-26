"use server";

import { auth } from "@/libs/next-auth";
import { db } from "@/libs/prisma";
import { CreatePostSchema } from "./schema";

export async function createPost(data: CreatePostSchema) {
  const authorId = (await auth()).id;

  return await db.post.create({
    data: {
      title: data.title,
      description: data.description,
      authorId,
    },
  });
}
