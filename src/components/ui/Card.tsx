"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

export function Card({ children, className, variant = "default", ...props }: CardProps) {
  const variants = {
    default: "bg-white shadow-sm border border-[var(--color-cloud-white)] hover:shadow-lg hover:border-[var(--color-terrain-beige)]",
    outline: "bg-transparent border border-[var(--color-summit-black)] hover:bg-[var(--color-summit-black)]/5",
    ghost: "bg-transparent hover:bg-[var(--color-cloud-white)]",
  };

  return (
    <motion.div
      className={cn(
        "p-6 md:p-8 rounded-none transition-all duration-300", 
        variants[variant],
        className
      )}
      whileHover={{ y: -4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
