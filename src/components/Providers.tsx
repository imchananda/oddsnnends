"use client";

import { ThemeProvider } from "./ThemeProvider";
import { LanguageProvider } from "./LanguageProvider";
import Header from "./Header";
import Footer from "./Footer";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow pt-16 md:pt-20">{children}</main>
                    <Footer />
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}