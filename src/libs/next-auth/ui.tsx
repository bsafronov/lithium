"use client";

import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { BuiltInProviderType } from "next-auth/providers/index";
import { LiteralUnion, signIn } from "next-auth/react";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type AuthButtonProps = {
  icon: React.ReactNode;
  provider: LiteralUnion<BuiltInProviderType>;
};

const providers: AuthButtonProps[] = [
  {
    provider: "discord",
    icon: <FaDiscord className="h-6 w-6 text-indigo-500" />,
  },
  {
    provider: "google",
    icon: <FcGoogle className="h-6 w-6" />,
  },
];

function AuthButton({ icon, provider }: AuthButtonProps) {
  return (
    <Button
      onClick={() => void signIn(provider)}
      variant="outline"
      className="gap-2 justify-start"
    >
      {icon}
      <span>
        Войти через <span className="capitalize">{provider}</span>
      </span>
    </Button>
  );
}

export function AuthForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Авторизация</CardTitle>
        <CardDescription>Войдите через OAuth</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {providers.map((item) => (
          <AuthButton key={item.provider} {...item} />
        ))}
      </CardContent>
    </Card>
  );
}
