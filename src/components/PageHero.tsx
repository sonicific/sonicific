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
}

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  tone = "light",
  icon: Icon,
}: PageHeroProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`relative isolate overflow-hidden border-b py-10 sm:py-12 ${
        isDark
          ? "border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f0fdfa_58%,#eef2ff_100%)] text-slate-950"
          : "border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_58%,#f0fdfa_100%)] text-slate-950"
      }`}
    >
      {isDark ? (
        <>
          <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-teal-100/70 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
        </>
      ) : null}
      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2">
            {Icon ? (
              <span
                className={`grid h-9 w-9 place-items-center rounded-lg shadow-sm ${
                  isDark
                    ? "bg-white text-teal-700 ring-1 ring-teal-100"
                    : "bg-white text-teal-700 ring-1 ring-teal-100"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
            ) : null}
            <p className="text-xs font-semibold uppercase text-teal-700">
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        </Reveal>
        {aside ? <Reveal variant="right">{aside}</Reveal> : null}
      </div>
    </section>
  );
}
