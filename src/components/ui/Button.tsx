import { ReactNode } from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// Note: I will need to create the `cn` utility in `@/lib/utils` next.

const buttonVariants = cva(
  "inline-flex items-center justify-center font-sans font-medium transition-transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-surmount-red)]",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-surmount-red)] text-white hover:bg-[#B91217] shadow-md hover:shadow-lg",
        cta: "bg-[var(--color-cta-gold)] text-[var(--color-summit-black)] hover:bg-[#D49A12] shadow-lg hover:shadow-xl font-semibold",
        secondary: "bg-[var(--color-summit-black)] text-white hover:bg-[var(--color-deep-charcoal)]",
        outline: "border border-[var(--color-summit-black)] text-[var(--color-summit-black)] hover:bg-[var(--color-summit-black)]/5",
        ghost: "text-[var(--color-summit-black)] hover:text-[var(--color-surmount-red)] hover:bg-[var(--color-surmount-red)]/5",
        link: "text-[var(--color-surmount-red)] hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
        icon: "h-11 w-11",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  loading?: boolean;
}

export function Button({ 
  className, 
  variant, 
  size, 
  fullWidth, 
  href, 
  loading, 
  children, 
  ...props 
}: ButtonProps) {
  const Component = href ? Link : "button";
  
  // Handling Link specifically requires href to always be present if Component is Link
  const linkProps = href ? { href } : {};

  return (
    // @ts-ignore - Dynamic component type issue with specific Link props vs button props
    <Component
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...linkProps}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Component>
  );
}