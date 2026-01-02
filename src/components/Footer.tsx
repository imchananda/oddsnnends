"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { TwitterIcon, HeartIcon } from "./Icons";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        border-t border-border-light dark:border-border-dark
        bg-surface-light dark:bg-surface-dark
      "
    >
      {/* Decorative gradient */}
      <div
        className="
          absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent via-primary-light dark:via-primary-dark to-transparent
        "
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <Link
                href="/"
                className="
                  flex items-center gap-2
                  font-display font-bold text-xl
                  text-text-light dark:text-text-dark
                  hover:text-primary-light dark:hover:text-primary-dark
                  transition-colors duration-200
                "
              >
                <span className="text-2xl">✨</span>
                <span>{siteConfig.name}</span>
              </Link>
              {/* <p className="text-sm text-text-muted-light dark:text-text-muted-dark text-center md:text-left max-w-xs">
                {t.footer.tagline}
              </p> */}
            </div>

            {/* Quick links */}
            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className="
                  text-sm font-medium
                  text-text-muted-light dark:text-text-muted-dark
                  hover:text-text-light dark:hover:text-text-dark
                  transition-colors duration-200
                  underline-animation
                "
              >
                {t.nav.home}
              </Link>
              <Link
                href="/products"
                className="
                  text-sm font-medium
                  text-text-muted-light dark:text-text-muted-dark
                  hover:text-text-light dark:hover:text-text-dark
                  transition-colors duration-200
                  underline-animation
                "
              >
                {t.nav.products}
              </Link>
            </nav>

            {/* Twitter CTA */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <a
                href={siteConfig.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-5 py-2.5
                  font-medium text-sm rounded-xl
                  border-2 border-text-light dark:border-text-dark
                  text-text-light dark:text-text-dark
                  hover:bg-text-light hover:text-background-light
                  dark:hover:bg-text-dark dark:hover:text-background-dark
                  transition-all duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
                "
              >
                <TwitterIcon size={16} />
                <span>{t.footer.followOn}</span>
              </a>
              {/* <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                {siteConfig.contact.twitter}
              </p> */}
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-border-light dark:bg-border-dark" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted-light dark:text-text-muted-dark">
            <p>
              © {currentYear} {siteConfig.name}. {t.footer.allRights}
            </p>
            <p className="flex items-center gap-1.5">
              {t.footer.madeWith}
              <HeartIcon size={14} className="text-accent-light dark:text-accent-dark animate-pulse" />
              {t.footer.forCollectors}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}