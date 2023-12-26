import { ThemeSwitcher } from "@/libs/next-themes";
import { GradientText } from "@/ui/gradient-text";

export function Header() {
  return (
    <header className="h-16 border-b flex items-center w-full mb-8">
      <div className="container px-2 flex justify-between items-center">
        <GradientText
          animate
          className="from-sky-500 to-sky-500 via-fuchsia-500 text-lg font-bold"
        >
          Lithium
        </GradientText>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
