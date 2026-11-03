import { english } from "./dictionary";

export type Language = "vi" | "en";
export const languageCookie = "sonic-language";
export function resolveLanguage(value?: string): Language {
  return value === "en" ? "en" : "vi";
}
export function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

const patterns = Object.entries(english)
  .filter(([key]) => key.includes("{"))
  .map(([key, value]) => {
    const names: string[] = [];
    const source = key
      .split(/(\{\w+\})/)
      .map((part) => {
        if (/^\{\w+\}$/.test(part)) {
          names.push(part.slice(1, -1));
          return "(.+?)";
        }
        return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      })
      .join("");
    return { regex: new RegExp(`^${source}$`), names, value };
  });

function translateText(value: string): string {
  const key = normalizeText(value);
  let translated = english[key];
  if (!translated) {
    for (const pattern of patterns) {
      const match = pattern.regex.exec(key);
      if (!match) continue;
      translated = pattern.value.replace(/\{(\w+)\}/g, (_, name: string) =>
        translateText(match[pattern.names.indexOf(name) + 1]),
      );
      break;
    }
  }
  return translated
    ? `${value.match(/^\s*/)?.[0] ?? ""}${translated}${value.match(/\s*$/)?.[0] ?? ""}`
    : value;
}

export function translate<T>(value: T, language: Language): T {
  if (language === "vi") return value;
  if (typeof value === "string") return translateText(value) as T;
  if (Array.isArray(value))
    return value.map((item) => translate(item, language)) as T;
  return value;
}
