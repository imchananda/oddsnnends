import type { Product } from "./types";

export const lifestyleProducts: Product[] = [
    {
        id: "lifestyle-001",
        name: "Zen Garden Kit",
        price: 27.99,
        description:
            "Mini desktop zen garden with sand, stones, and rake. Perfect for stress relief.",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&h=400&fit=crop",
        tags: ["lifestyle"],
        featured: true,
        inStock: true,
    },
    {
        id: "lifestyle-002",
        name: "Aromatherapy Candle Set",
        price: 35.99,
        description:
            "Set of 3 hand-poured soy candles in calming scents. 40+ hours burn time each.",
        image: "https://images.unsplash.com/photo-1602607753831-ae289e4f3da3?w=400&h=400&fit=crop",
        tags: ["lifestyle"],
        inStock: true,
    },
];
