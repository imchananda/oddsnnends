"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16 md:pt-20">{children}</main>
            <Footer />
        </div>
    );
}