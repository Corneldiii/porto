"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import en from "@/locales/en";
import id from "@/locales/id";

export type Lang = "en" | "id";
type Dict = typeof en;

const locales = { en, id };

interface LangContextType {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "id" : "en"));
  };

  return (
    <LangContext.Provider value={{ lang, t: locales[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
