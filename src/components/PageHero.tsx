import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  tone?: "light" | "dark";
}

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  tone = "light",
}: PageHeroProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`relative isolate overflow-hidden border-b py-14 sm:py-16 ${
        isDark
          ? "border-white/10 bg-slate-950 text-white"
          : "border-slate-200 bg-white text-slate-950"
      }`}
    >
      {isDark ? (
        <>
          <div className="sonic-grid absolute inset-0 opacity-35" />
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl" />
        </>
      ) : null}
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-8">
        <Reveal>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.18em] ${
              isDark ? "text-teal-300" : "text-teal-700"
            }`}
          >
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p
            className={`mt-4 max-w-2xl text-sm leading-6 sm:text-base ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </Reveal>
        {aside ? <Reveal variant="right">{aside}</Reveal> : null}
      </div>
    </section>
  );
}
