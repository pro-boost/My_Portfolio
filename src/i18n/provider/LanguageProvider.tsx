import { createContext, useContext, useEffect, useState } from "react";
import { Language } from "../translations/types";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "portfolio-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  );

  useEffect(() => {
    // Here you can add any language-specific logic
    // For example, updating document lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
