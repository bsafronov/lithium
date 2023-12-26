"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { postQueryKeys } from "../queryKeys";
import { createPost } from "./create-post";
import { CreatePostSchema } from "./schema";

type Props = {
  reset: () => void;
};

export function useCreatePost({ reset }: Props) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: postQueryKeys.createPost,
    mutationFn: (data: CreatePostSchema) => createPost(data),
    onSuccess: () => {
      toast.success("Пост создан");
      reset();
    },
    onError: (err) => toast(err.message),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: postQueryKeys.getAll,
      });
    },
  });
}
