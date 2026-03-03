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
        "py-24 md:py-32 relative overflow-hidden", 
        className
      )}
    >
      {children}
    </section>
  );
}