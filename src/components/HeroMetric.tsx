import type { ReactNode } from "react";

export function HeroMetric({
  value,
  children,
}: {
  value: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="hero-metric">
      <strong>{value}</strong>
      <span>{children}</span>
    </div>
  );
}
