import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, SUPPORTED_LANGUAGES, TRANSLATIONS, TranslationSchema, LanguageOption } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  supportedLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'helstera_preferred_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      if (saved && TRANSLATIONS[saved]) {
        return saved;
      }
    } catch {
      // Fallback to default
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    if (TRANSLATIONS[lang]) {
      setLanguageState(lang);
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      } catch {
        // Ignore quota/storage errors
      }
    }
  };

  useEffect(() => {
    // Update document html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language] || TRANSLATIONS.en,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
