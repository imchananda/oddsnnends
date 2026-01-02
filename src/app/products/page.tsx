"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard, CategoryFilter } from "@/components";
import { FilterIcon, SparklesIcon } from "@/components/Icons";
import { products, type ProductCategory } from "@/data/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">(
    categoryParam || "all"
  );

  // Update category when URL params change
  useEffect(() => {
    if (categoryParam && categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam, selectedCategory]);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter((product) => product.tags.includes(selectedCategory));
  }, [selectedCategory]);

  const handleCategoryChange = (category: ProductCategory | "all") => {
    setSelectedCategory(category);
    // Update URL without navigation
    const url = new URL(window.location.href);
    if (category === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }
    window.history.pushState({}, "", url.toString());
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-surface-light dark:bg-surface-dark">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/10 dark:bg-primary-dark/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-full animate-fade-up">
              <SparklesIcon size={16} className="text-accent-light dark:text-accent-dark" />
              <span className="text-text-muted-light dark:text-text-muted-dark">
                {filteredProducts.length} items available
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-light dark:text-text-dark leading-tight animate-fade-up animation-delay-100">
              Our Collection
            </h1>

            <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark animate-fade-up animation-delay-200">
              Browse our curated selection of unique treasures.
              <br className="hidden sm:block" />
              Each item hand-picked with care for collectors like you.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FilterIcon size={20} className="text-text-muted-light dark:text-text-muted-dark" />
              <h2 className="font-medium text-text-light dark:text-text-dark">
                Filter by Category
              </h2>
            </div>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
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
                No products found
              </h3>
              <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">
                Try selecting a different category
              </p>
              <button
                onClick={() => handleCategoryChange("all")}
                className="mt-6 px-6 py-3 font-medium rounded-xl bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark hover:opacity-90 transition-all duration-200"
              >
                View All Products
              </button>
            </div>
          )}

          {/* Results count */}
          {filteredProducts.length > 0 && (
            <div className="mt-12 text-center text-sm text-text-muted-light dark:text-text-muted-dark">
              Showing {filteredProducts.length} of {products.length} products
              {selectedCategory !== "all" && (
                <span>
                  {" "}in{" "}
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className="text-primary-light dark:text-primary-dark hover:underline"
                  >
                    {selectedCategory}
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-light dark:border-primary-dark border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-muted-light dark:text-text-muted-dark">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
