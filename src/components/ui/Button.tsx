import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  asChild?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
    outline:
      "border border-border text-foreground hover:bg-muted/50",
    ghost:
      "text-foreground hover:bg-muted/50",
  };

  const sizeStyles = {
    sm: "h-9 px-4 text-xs rounded-md",
    md: "h-11 px-6 text-sm rounded-lg",
    lg: "h-13 px-8 text-base rounded-xl",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{ className?: string }>,
      {
        className: cn(combinedClasses, (children.props as { className?: string }).className),
      }
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
