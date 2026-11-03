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
    <div
      className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}
    >
      {(eyebrow || Icon) && (
        <p className="eyebrow">
          {Icon ? (
            <Icon size={14} aria-hidden="true" />
          ) : (
            <span className="status-dot" />
          )}
          {eyebrow}
        </p>
      )}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
