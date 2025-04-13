import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "main" | "article" | "aside" | "header" | "footer";
  children: React.ReactNode;
}

export function Container({
  as: Component = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[var(--container-width)] px-[var(--container-padding)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
} 