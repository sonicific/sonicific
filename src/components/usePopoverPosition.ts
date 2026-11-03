import { useEffect, useState, type CSSProperties, type RefObject } from "react";

export function usePopoverPosition(
  open: boolean,
  anchor: RefObject<HTMLElement>,
  menu: RefObject<HTMLElement>,
  align: "left" | "right",
) {
  const [style, setStyle] = useState<CSSProperties>({ visibility: "hidden" });
  useEffect(() => {
    if (!open) {
      setStyle({ visibility: "hidden" });
      return;
    }
    let frame = 0;
    const update = () => {
      const rect = anchor.current?.getBoundingClientRect();
      if (!rect) return;
      const width = Math.min(Math.max(rect.width, 224), window.innerWidth - 24);
      const below = window.innerHeight - rect.bottom - 20;
      const above = rect.top - 20;
      const flip =
        below < Math.min(menu.current?.scrollHeight ?? 240, 240) &&
        above > below;
      const maxHeight = Math.max(64, Math.min(320, flip ? above : below));
      const height = Math.min(menu.current?.scrollHeight ?? 240, maxHeight);
      const left = align === "right" ? rect.right - width : rect.left;
      const top = flip ? rect.top - height - 8 : rect.bottom + 8;
      setStyle({
        position: "fixed",
        width,
        left: Math.max(12, Math.min(left, window.innerWidth - width - 12)),
        top: Math.max(12, Math.min(top, window.innerHeight - height - 12)),
        maxHeight,
        visibility: "visible",
        transformOrigin: flip ? "bottom" : "top",
      });
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("resize", schedule);
    window.addEventListener("scroll", schedule, true);
    const observer = new ResizeObserver(schedule);
    if (menu.current) observer.observe(menu.current);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", schedule);
      window.removeEventListener("scroll", schedule, true);
    };
  }, [open, anchor, menu, align]);
  return style;
}
