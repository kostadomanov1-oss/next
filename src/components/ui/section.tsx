import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { Container } from "./container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export function Section({
  className,
  container = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)} {...props}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}
