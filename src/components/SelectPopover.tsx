import { Check, ChevronDown, type LucideIcon } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export interface SelectOption<T extends string> {
  label: string;
  value: T;
}

interface SelectPopoverProps<T extends string> {
  label: string;
  value: T;
  options: SelectOption<T>[];
  onValueChange: (value: T) => void;
  icon: LucideIcon;
  allValue?: T;
  align?: "left" | "right";
}

export function SelectPopover<T extends string>({
  label,
  value,
  options,
  onValueChange,
  icon: Icon,
  allValue,
  align = "left",
}: SelectPopoverProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const selectedOption = options.find((option) => option.value === value);
  const hasSelection = allValue === undefined || value !== allValue;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`inline-flex h-9 items-center gap-2 rounded-full whitespace-nowrap w-fit border px-3 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
          isOpen || hasSelection
            ? "border-slate-950 bg-slate-950 text-white"
            : "border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700"
        }`}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="menu"
      >
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        <span>
          {hasSelection && selectedOption
            ? `${label}: ${selectedOption.label}`
            : label}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          aria-label={label}
          className={`absolute top-[calc(100%+0.5rem)] z-30 min-w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          <div className="max-h-72 overflow-y-auto">
            {options.map((option) => {
              const active = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => {
                    onValueChange(option.value);
                    setIsOpen(false);
                    buttonRef.current?.focus();
                  }}
                  className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-xs font-semibold transition ${
                    active
                      ? "bg-teal-50 text-teal-800"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <span>{option.label}</span>
                  {active ? (
                    <Check
                      className="h-4 w-4 shrink-0 text-teal-600"
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
