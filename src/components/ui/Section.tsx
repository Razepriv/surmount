import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export function Section({ children, className, id, fullWidth = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
}