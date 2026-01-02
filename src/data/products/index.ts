// Export types
export * from "./types";

// Export product data by category
export { aespaProducts } from "./aespa";
export { namtanfilmProducts } from "./namtanfilm";
export { plushProducts } from "./plush";
export { booksProducts } from "./books";
export { novelsProducts } from "./novels";
export { cardsProducts } from "./cards";
export { mangaProducts } from "./manga";
export { lifestyleProducts } from "./lifestyle";

// Import all products for combined array
import { aespaProducts } from "./aespa";
import { namtanfilmProducts } from "./namtanfilm";
import { plushProducts } from "./plush";
import { booksProducts } from "./books";
import { novelsProducts } from "./novels";
import { cardsProducts } from "./cards";
import { mangaProducts } from "./manga";
import { lifestyleProducts } from "./lifestyle";
import type { Product, ProductCategory, Category } from "./types";

// Categories configuration (aespa and namtanfilm first)
export const categories: Category[] = [
    { id: "aespa", name: "aespa", icon: "💎" },
    { id: "namtanfilm", name: "namtanfilm", icon: "🎬" },
    { id: "plush", name: "Plush", icon: "🧸" },
    { id: "books", name: "Books", icon: "📚" },
    { id: "novels", name: "Novels", icon: "📖" },
    { id: "cards", name: "Cards", icon: "🎴" },
    { id: "manga", name: "Manga", icon: "📕" },
    { id: "lifestyle", name: "Lifestyle", icon: "🎁" },
];

// Combined products array (auto-generated from all category files)
export const products: Product[] = [
    ...aespaProducts,
    ...namtanfilmProducts,
    ...plushProducts,
    ...booksProducts,
    ...novelsProducts,
    ...cardsProducts,
    ...mangaProducts,
    ...lifestyleProducts,
];

// Helper functions
export const getFeaturedProducts = (): Product[] => {
    return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
    return products.filter((product) => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
    return products.find((product) => product.id === id);
};
