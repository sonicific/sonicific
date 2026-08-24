import type { LucideProps } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  icon: ComponentType<LucideProps>;
  variant?: "dark" | "light" | "ghost";
  className?: string;
  external?: boolean;
}

const variants = {
  dark: "bg-slate-950 text-white shadow-soft hover:bg-slate-800",
  light:
    "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300",
  ghost: "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15",
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "dark",
  className = "",
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 whitespace-nowrap text-xs font-semibold transition ${variants[variant]} ${className}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}
