import type { Product } from "./types";

export const mangaProducts: Product[] = [
    {
        id: "manga-001",
        name: "Sakura Dreams Vol. 1",
        price: 12.99,
        description:
            "First volume of the beloved manga series. Japanese import with English translation.",
        image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=400&fit=crop",
        tags: ["manga"],
        featured: true,
        inStock: true,
    },
    {
        id: "manga-002",
        name: "Adventure Quest Collection",
        price: 45.99,
        description:
            "Complete box set containing volumes 1-5. Collector's edition with bonus artwork.",
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=400&fit=crop",
        tags: ["manga"],
        inStock: true,
    },
];
