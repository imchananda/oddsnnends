import type { Product } from "./types";

export const plushProducts: Product[] = [
    {
        id: "plush-001",
        name: "Cozy Bear Plushie",
        price: 29.99,
        description:
            "Super soft and cuddly bear plush, perfect for collectors and gift-giving. Made with premium materials.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        tags: ["plush"],
        featured: true,
        inStock: true,
    },
    {
        id: "plush-002",
        name: "Bunny Dream Companion",
        price: 34.99,
        description:
            "Adorable bunny plush with floppy ears. A comforting friend for all ages.",
        image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=400&h=400&fit=crop",
        tags: ["plush"],
        inStock: true,
    },
];
