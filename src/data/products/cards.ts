import type { Product } from "./types";

export const cardsProducts: Product[] = [
    {
        id: "cards-001",
        name: "Artistic Tarot Deck",
        price: 34.99,
        description:
            "78-card deck with original artwork. Includes guidebook and premium storage box.",
        image: "https://images.unsplash.com/photo-1601287233290-d35ffbddbc4b?w=400&h=400&fit=crop",
        tags: ["cards"],
        featured: true,
        inStock: true,
    },
    {
        id: "cards-002",
        name: "Collector Playing Cards",
        price: 22.99,
        description:
            "Premium playing cards with custom illustrations. Limited edition foil accents.",
        image: "https://images.unsplash.com/photo-1529480780361-0a5d17c6cbe8?w=400&h=400&fit=crop",
        tags: ["cards"],
        inStock: true,
    },
];
