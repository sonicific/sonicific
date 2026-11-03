import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  tone?: "light" | "dark";
  icon?: ComponentType<LucideProps>;
  compact?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  tone = "light",
  icon: Icon,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero page-hero-${tone}${compact ? " page-hero-compact" : ""}`}
    >
      <div className="page-hero-decoration" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="site-container page-hero-layout">
        <Reveal>
          <p className="eyebrow">
            {Icon && <Icon size={15} aria-hidden="true" />}
            {eyebrow}
            <span className="eyebrow-line" />
          </p>
          <h1>{title}</h1>
          <p className="page-hero-description">{description}</p>
        </Reveal>
        {aside && (
          <Reveal variant="up" delay={120} className="page-hero-aside">
            {aside}
          </Reveal>
        )}
      </div>
    </section>
  );
}
