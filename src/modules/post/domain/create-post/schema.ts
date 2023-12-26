import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
