"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { GetAllPosts } from "../domain/get-all";

type Props = {
  post: GetAllPosts[number];
};

export function PostItem({ post }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>{post.description}</CardContent>
    </Card>
  );
}
