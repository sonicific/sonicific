import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  icon?: ComponentType<LucideProps>;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  icon: Icon,
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow || Icon ? (
        <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
          {Icon ? (
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-50 text-teal-700 shadow-sm ring-1 ring-teal-100">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
          ) : null}
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase text-teal-700">
              {eyebrow}
            </p>
          ) : null}
        </div>
      ) : null}
      <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950 sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
