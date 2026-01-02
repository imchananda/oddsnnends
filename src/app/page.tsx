"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components";
import { useLanguage } from "@/components/LanguageProvider";
import {
  TwitterIcon,
  SparklesIcon,
  HeartIcon,
} from "@/components/Icons";
import { products, categories, type ProductCategory } from "@/data/products";
import { siteConfig } from "@/lib/config";
import { categoryIcons } from "@/lib/translations";

export default function HomePage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");

  // Get translated category name
  const getCategoryName = (categoryId: string) => {
    return t.categories[categoryId as keyof typeof t.categories] || categoryId;
  };

  // Filter and sort products (sold items go to the end)
  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === "all"
      ? products
      : products.filter((product) => product.tags.includes(selectedCategory));

    // Sort: sold items go to the end
    return filtered.sort((a, b) => {
      if (a.status === "sold" && b.status !== "sold") return 1;
      if (a.status !== "sold" && b.status === "sold") return -1;
      return 0;
    });
  }, [selectedCategory]);

  const handleCategoryChange = (category: ProductCategory | "all") => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative">
      {/* Hero Section - Minimal with Floating Objects */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Floating Objects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating emojis */}
          <div className="absolute top-[15%] left-[10%] text-4xl animate-float opacity-60">🧸</div>
          <div className="absolute top-[25%] right-[15%] text-3xl animate-float animation-delay-200 opacity-50">📚</div>
          <div className="absolute top-[60%] left-[8%] text-3xl animate-float animation-delay-300 opacity-40">💿</div>
          <div className="absolute top-[70%] right-[12%] text-4xl animate-float animation-delay-100 opacity-50">🎴</div>
          <div className="absolute top-[40%] left-[20%] text-2xl animate-float animation-delay-400 opacity-30">✨</div>
          <div className="absolute top-[20%] right-[25%] text-2xl animate-float animation-delay-500 opacity-40">🌸</div>
          <div className="absolute bottom-[20%] left-[25%] text-3xl animate-float animation-delay-200 opacity-40">📖</div>
          <div className="absolute bottom-[30%] right-[20%] text-2xl animate-float animation-delay-400 opacity-30">💫</div>

          {/* Soft gradient blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-light/15 dark:bg-accent-dark/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Simple elegant heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-light dark:text-text-dark tracking-tight animate-fade-up">
            {t.hero.title1}<span className="text-primary-light dark:text-primary-dark">{t.hero.titleHighlight}</span>
          </h1>

          {/* Minimal subtitle */}
          {/* <p className="mt-6 text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto animate-fade-up animation-delay-100">
            {t.hero.subtitle}
          </p> */}

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce opacity-50">
            <svg
              className="w-6 h-6 mx-auto text-text-muted-light dark:text-text-muted-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories - Minimal Pill Style */}
      <section className="relative py-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* Horizontal scrollable pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id as ProductCategory)}
                className={`
                  group relative flex items-center gap-2 px-5 py-2.5 
                  rounded-full font-medium text-sm
                  transition-all duration-300 ease-out
                  animate-fade-up opacity-0
                  hover:scale-105 hover:-translate-y-0.5
                  active:scale-95
                  ${selectedCategory === category.id
                    ? "bg-primary-light text-white dark:bg-primary-dark shadow-lg shadow-primary-light/25 dark:shadow-primary-dark/25"
                    : "bg-white dark:bg-surface-dark text-text-light dark:text-text-dark shadow-sm hover:shadow-md border border-border-light/50 dark:border-border-dark/50"
                  }
                `}
                style={{ animationDelay: `${index * 60}ms`, animationFillMode: "forwards" }}
              >
                {/* Emoji with bounce on hover */}
                <span className="text-lg group-hover:animate-bounce">
                  {categoryIcons[category.id] || "📦"}
                </span>
                <span>{getCategoryName(category.id)}</span>

                {/* Active indicator dot */}
                {selectedCategory === category.id && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Products Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-text-light dark:text-text-dark">
              {selectedCategory === "all" ? t.products.allProducts : t.categories[selectedCategory as keyof typeof t.categories]}
            </h2>
            <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
              {filteredProducts.length} {t.products.items}
            </span>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display font-semibold text-xl text-text-light dark:text-text-dark">
                {t.products.noProducts}
              </h3>
              <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">
                {t.products.tryDifferentCategory}
              </p>
              <button
                onClick={() => handleCategoryChange("all")}
                className="mt-6 px-6 py-3 font-medium rounded-xl bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark hover:opacity-90 transition-all duration-200"
              >
                {t.products.viewAll}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="relative py-16 md:py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary-light/5 via-transparent to-accent-light/5 dark:from-primary-dark/10 dark:via-transparent dark:to-accent-dark/10 border border-border-light dark:border-border-dark rounded-3xl">
            <HeartIcon
              size={48}
              className="mx-auto mb-6 text-accent-light dark:text-accent-dark animate-pulse"
            />
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-text-light dark:text-text-dark">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <a
              href={siteConfig.dmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 font-semibold text-lg rounded-2xl bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark hover:bg-primary-hover-light dark:hover:bg-primary-hover-dark hover:shadow-xl active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
            >
              <TwitterIcon size={20} />
              <span>{t.cta.button}</span>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}