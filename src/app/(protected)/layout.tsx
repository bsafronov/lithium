import { auth } from "@/libs/next-auth";
import { Header } from "@/modules/header";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  await auth();

  return (
    <>
      <Header />
      <main className="container px-2">{children}</main>
    </>
  );
}
