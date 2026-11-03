export type Theme = "light" | "dark";
export const themeStorageKey = "sonic-theme";

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

export function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function savedTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(themeStorageKey);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

export function applyTheme(theme: Theme, persist = false) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  if (persist) {
    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      /* Storage may be disabled; the current session still works. */
    }
  }
}

// Runs before the first paint, independently of React hydration.
export const themeInitScript = `(()=>{let t;try{t=localStorage.getItem(${JSON.stringify(themeStorageKey)})}catch{}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t})()`;
