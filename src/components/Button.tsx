import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] transition-all duration-500";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-espresso",
  outline: "border border-charcoal/30 text-foreground hover:border-charcoal hover:bg-secondary",
  light: "border border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  variant = "solid",
  to,
  href,
  type = "button",
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
