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
  dark: "button-dark",
  light: "button-light",
  ghost: "button-ghost",
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
      className={`sonic-button ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="button-icon">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
    </a>
  );
}
