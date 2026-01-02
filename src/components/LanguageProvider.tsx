"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
    type ReactNode,
} from "react";
import { translations, type Language } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>("th");

    // Initialize language from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("language") as Language | null;
        if (stored === "en" || stored === "th") {
            setLanguageState(stored);
        } else {
            // Check browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith("th")) {
                setLanguageState("th");
            }
        }
    }, []);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        // Update html lang attribute
        document.documentElement.lang = lang;
    }, []);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === "en" ? "th" : "en");
    }, [language, setLanguage]);

    // Get translations for current language
    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}