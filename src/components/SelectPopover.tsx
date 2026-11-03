import { Check, ChevronDown, type LucideIcon } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n/LanguageProvider";
import { usePopoverPosition } from "./usePopoverPosition";
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
  displayValue?: string;
  triggerClassName?: string;
}
export function SelectPopover<T extends string>({
  label,
  value,
  options,
  onValueChange,
  icon: Icon,
  allValue,
  align = "left",
  displayValue,
  triggerClassName = "",
}: SelectPopoverProps<T>) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const focusLast = useRef(false);
  const menuId = useId();
  const selected = options.find((option) => option.value === value);
  const hasSelection = allValue === undefined || value !== allValue;
  const position = usePopoverPosition(open, buttonRef, menuRef, align);
  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (
        !containerRef.current?.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);
  useEffect(() => {
    if (!open || position.visibility !== "visible") return;
    const items = menuRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="menuitemradio"]',
    );
    const active = menuRef.current?.querySelector<HTMLButtonElement>(
      '[aria-checked="true"]',
    );
    (focusLast.current
      ? items?.[items.length - 1]
      : (active ?? items?.[0])
    )?.focus({ preventScroll: true });
  }, [open, position.visibility]);
  const onMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>(
        '[role="menuitemradio"]',
      ) ?? [],
    );
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const next =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? items.length - 1
            : (index + (event.key === "ArrowDown" ? 1 : -1) + items.length) %
              items.length;
      items[next]?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      close();
    } else if (event.key === "Tab") {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      const trigger = buttonRef.current;
      const scope = trigger?.closest('[role="dialog"]') ?? document;
      const focusable = Array.from(
        scope.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), [tabindex="0"]',
        ),
      ).filter(
        (element) =>
          element.offsetParent !== null && !menuRef.current?.contains(element),
      );
      const current = trigger ? focusable.indexOf(trigger) : -1;
      const next = current + (event.shiftKey ? -1 : 1);
      const target =
        focusable[next] ??
        (scope !== document
          ? focusable[(next + focusable.length) % focusable.length]
          : trigger);
      target?.focus();
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
      const match = [
        ...items.slice(index + 1),
        ...items.slice(0, index + 1),
      ].find((item) =>
        item.textContent
          ?.trim()
          .toLocaleLowerCase()
          .startsWith(event.key.toLocaleLowerCase()),
      );
      match?.focus();
    }
  };
  return (
    <div ref={containerRef} className="select-popover">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          focusLast.current = false;
          setOpen(!open);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            focusLast.current = event.key === "ArrowUp";
            setOpen(true);
          }
        }}
        className={`select-trigger ${open || hasSelection ? "is-selected" : ""} ${triggerClassName}`}
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="menu"
        aria-label={t(
          `${t(label)}${hasSelection && selected ? `: ${t(selected.label)}` : ""}`,
        )}
      >
        <Icon size={14} aria-hidden="true" />
        <span>
          {t(
            displayValue ??
              (hasSelection && selected
                ? `${t(label)}: ${t(selected.label)}`
                : t(label)),
          )}
        </span>
        <ChevronDown
          size={13}
          className={open ? "is-open" : ""}
          aria-hidden="true"
        />
      </button>
      {open &&
        createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label={t(label)}
            data-popover-menu
            className="select-popover-menu"
            style={position}
            onKeyDown={onMenuKeyDown}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                tabIndex={-1}
                aria-checked={option.value === value}
                onClick={() => {
                  onValueChange(option.value);
                  close();
                }}
              >
                <span>{t(option.label)}</span>
                {option.value === value && (
                  <Check size={15} aria-hidden="true" />
                )}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
}
