import { AuthForm, getServerAuthSession } from "@/libs/next-auth";
import { GradientText } from "@/ui/gradient-text";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerAuthSession();

  if (session) {
    return redirect("/");
  }

  return (
    <>
      <h1 className="text-2xl font-extrabold text-center text-muted-foreground">
        Добро пожаловать!
      </h1>
      <GradientText
        className="from-fuchsia-600 to-fuchsia-600 via-rose-500 via-indigo-500 text-4xl font-bold mb-8"
        animate
        asChild
      >
        <h3>Lithium</h3>
      </GradientText>
      <AuthForm />
    </>
  );
}
