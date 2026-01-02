"use client";

import { useLanguage } from "./LanguageProvider";

interface LanguageToggleProps {
    className?: string;
}

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={`
        inline-flex items-center gap-1.5 px-3 py-2
        text-sm font-medium rounded-xl
        bg-surface-light dark:bg-surface-dark
        border border-border-light dark:border-border-dark
        text-text-light dark:text-text-dark
        hover:bg-border-light dark:hover:bg-border-dark
        transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
        ${className}
      `}
            aria-label={`Switch to ${language === "en" ? "Thai" : "English"}`}
        >
            <span className="text-base">{language === "en" ? "🇹🇭" : "🇺🇸"}</span>
            <span>{language === "en" ? "TH" : "EN"}</span>
        </button>
    );
}