import { useState } from "react";

interface AvatarBadgeProps {
  src: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-9 w-9 text-[11px]",
  md: "h-12 w-12 text-sm",
  lg: "h-20 w-20 text-xl",
};

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function AvatarBadge({ src, name, size = "md" }: AvatarBadgeProps) {
  const [hasError, setHasError] = useState(false);
  const initials = getInitials(name);

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ${sizes[size]} bg-slate-200 font-semibold text-slate-700 shadow-sm ring-1 ring-white/70`}
      aria-label={`Avatar ${name}`}
    >
      {!hasError && src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </span>
  );
}
