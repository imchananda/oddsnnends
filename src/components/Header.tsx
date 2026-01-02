"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import LanguageToggle from "./Languagetoggle";
import {
  TwitterIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  CloseIcon,
  HomeIcon,
  ShoppingBagIcon,
} from "./Icons";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home, icon: HomeIcon },
    { href: "/products", label: t.nav.products, icon: ShoppingBagIcon },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-out
        ${isScrolled
          ? "bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg shadow-sm border-b border-border-light dark:border-border-dark"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="
              flex items-center gap-2
              font-display font-bold text-xl md:text-2xl
              text-text-light dark:text-text-dark
              hover:text-primary-light dark:hover:text-primary-dark
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
              rounded-lg
            "
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl md:text-3xl">✨</span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
            <span className="sm:hidden">oddsnnends</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  flex items-center gap-2
                  font-medium text-text-muted-light dark:text-text-muted-dark
                  hover:text-text-light dark:hover:text-text-dark
                  transition-colors duration-200
                  underline-animation
                "
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="
                p-2.5 rounded-xl
                text-text-muted-light dark:text-text-muted-dark
                hover:text-text-light dark:hover:text-text-dark
                hover:bg-surface-light dark:hover:bg-surface-dark
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
              "
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <div className="relative w-5 h-5">
                <SunIcon
                  size={20}
                  className={`
                    absolute inset-0
                    transition-all duration-300
                    ${theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}
                  `}
                />
                <MoonIcon
                  size={20}
                  className={`
                    absolute inset-0
                    transition-all duration-300
                    ${theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}
                  `}
                />
              </div>
            </button>

            {/* Twitter DM CTA */}
            <a
              href={siteConfig.dmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 px-5 py-2.5
                font-medium text-sm rounded-xl
                bg-primary-light text-white
                dark:bg-primary-dark dark:text-white
                hover:bg-primary-hover-light dark:hover:bg-primary-hover-dark
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
              "
            >
              <TwitterIcon size={16} />
              <span>{t.nav.messageUs}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Language Toggle Mobile */}
            <LanguageToggle />

            <button
              onClick={toggleTheme}
              className="
                p-2.5 rounded-xl
                text-text-muted-light dark:text-text-muted-dark
                hover:text-text-light dark:hover:text-text-dark
                hover:bg-surface-light dark:hover:bg-surface-dark
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
              "
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-2.5 rounded-xl
                text-text-light dark:text-text-dark
                hover:bg-surface-light dark:hover:bg-surface-dark
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
              "
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 top-16 z-40
          bg-background-light dark:bg-background-dark
          transition-all duration-300 ease-out
          md:hidden
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="flex flex-col h-full px-6 py-8">
          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center gap-4 p-4 rounded-2xl
                  text-lg font-medium
                  text-text-light dark:text-text-dark
                  hover:bg-surface-light dark:hover:bg-surface-dark
                  transition-all duration-200
                  ${isMenuOpen ? "animate-fade-up" : ""}
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <link.icon size={24} />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Twitter CTA */}
          <div className="mt-auto pt-8 border-t border-border-light dark:border-border-dark">
            <a
              href={siteConfig.dmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3 w-full p-4
                font-semibold text-lg rounded-2xl
                bg-primary-light text-white
                dark:bg-primary-dark dark:text-white
                hover:bg-primary-hover-light dark:hover:bg-primary-hover-dark
                transition-all duration-200
              "
              onClick={() => setIsMenuOpen(false)}
            >
              <TwitterIcon size={20} />
              <span>{t.nav.messageUs}</span>
            </a>

            <p className="mt-4 text-center text-sm text-text-muted-light dark:text-text-muted-dark">
              {siteConfig.contact.twitter}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}