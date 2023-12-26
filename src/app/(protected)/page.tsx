import { PostForm, PostList } from "@/modules/post";
import { Separator } from "@/ui/separator";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Посты</h1>
      <Separator className="mb-8" />
      <PostList />
      <PostForm />
    </div>
  );
}
