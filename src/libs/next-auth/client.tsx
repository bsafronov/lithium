"use client";

import { SessionProvider, useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function useAuth() {
  const session = useSession();

  return session.data?.user;
}
