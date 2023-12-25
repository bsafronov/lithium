import { cn } from "@/libs/utils";
import { Slot } from "@radix-ui/react-slot";

type Props = {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  animate?: boolean;
};

export const GradientText = ({
  asChild,
  className,
  animate,
  ...props
}: Props) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        className,
        animate && "animate-background-pan bg-[size:200%]"
      )}
      {...props}
    />
  );
};
