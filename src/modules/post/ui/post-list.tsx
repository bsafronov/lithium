"use client";

import { useQuery } from "@tanstack/react-query";
import { getAll } from "../domain";
import { PostItem } from "./post-item";

export function PostList() {
  const { data: posts } = useQuery({
    queryKey: ["get-all-posts"],
    queryFn: () => getAll(),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
