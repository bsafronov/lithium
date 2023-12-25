import { getServerSession } from "next-auth";
import { authOptions } from ".";
import { redirect } from "next/navigation";

export const getServerAuthSession = () => getServerSession(authOptions);

export async function auth() {
  const session = await getServerAuthSession();

  if (!session) {
    return redirect("/auth");
  }
}
