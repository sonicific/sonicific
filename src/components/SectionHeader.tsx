import type { LucideProps } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

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
    <div className={align === "center" ? "mx-auto text-center" : "w-full"}>
      {eyebrow || Icon ? (
        <div
          className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
        >
          {Icon ? (
            <div className="flex items-center space-x-2 py-1 px-3 rounded-full bg-teal-50 text-teal-700 shadow-sm ring-1 ring-teal-100">
              <Icon className="h-3 w-3" aria-hidden="true" />
              {eyebrow ? (
                <span className="text-xs font-semibold text-teal-700">
                  {eyebrow}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
