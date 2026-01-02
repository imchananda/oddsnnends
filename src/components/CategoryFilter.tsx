"use client";

import { categories, type ProductCategory } from "@/data/products";

interface CategoryFilterProps {
  selectedCategory: ProductCategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 -mb-4 scrollbar-hide">
      <div className="flex gap-2 min-w-max">
        {/* All category button */}
        <button
          onClick={() => onCategoryChange("all")}
          className={`
            inline-flex items-center gap-2 px-5 py-2.5
            font-medium text-sm rounded-xl
            whitespace-nowrap
            transition-all duration-200 ease-out
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
            ${selectedCategory === "all"
              ? "bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark shadow-md"
              : "bg-surface-light dark:bg-surface-dark text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark hover:bg-border-light dark:hover:bg-border-dark"
            }
          `}
        >
          <span className="text-base">🎯</span>
          <span>All</span>
        </button>

        {/* Category buttons */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              inline-flex items-center gap-2 px-5 py-2.5
              font-medium text-sm rounded-xl
              whitespace-nowrap
              transition-all duration-200 ease-out
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark
              ${selectedCategory === category.id
                ? "bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark shadow-md"
                : "bg-surface-light dark:bg-surface-dark text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark hover:bg-border-light dark:hover:bg-border-dark"
              }
            `}
          >
            <span className="text-base">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
