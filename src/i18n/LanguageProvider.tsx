"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { languageCookie, translate, type Language } from "./translate";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: <T>(value: T) => T;
}
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLanguage = "vi",
  children,
}: {
  initialLanguage?: Language;
  children: ReactNode;
}) {
  const [language, updateLanguage] = useState(initialLanguage);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (next) => {
        document.cookie = `${languageCookie}=${next}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
        document.documentElement.lang = next;
        updateLanguage(next);
      },
      t: <T,>(input: T) => translate(input, language),
    }),
    [language],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
