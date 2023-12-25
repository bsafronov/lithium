import { auth } from "@/libs/next-auth";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  await auth();

  return <>{children}</>;
}
