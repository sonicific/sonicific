import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  applyTheme,
  savedTheme,
  systemTheme,
  themeStorageKey,
  type Theme,
} from "../../lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const sync = () => {
      const next = savedTheme() ?? systemTheme();
      applyTheme(next);
      setTheme(next);
    };
    sync();
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (!savedTheme()) sync();
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === themeStorageKey || event.key === null) sync();
    };
    media.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggle = () => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next, true);
    setTheme(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-label="Giao diện tối"
      aria-checked={theme === "dark"}
      onClick={toggle}
      className="theme-toggle"
      title={
        theme === "dark"
          ? "Chuyển sang giao diện sáng"
          : "Chuyển sang giao diện tối"
      }
    >
      <Moon className="theme-icon-moon" size={17} aria-hidden="true" />
      <Sun className="theme-icon-sun" size={18} aria-hidden="true" />
    </button>
  );
}
