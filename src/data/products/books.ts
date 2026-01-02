import type { Product } from "./types";

export const booksProducts: Product[] = [
    {
        id: "books-001",
        name: "The Art of Mindfulness",
        price: 24.99,
        description:
            "A beautifully illustrated guide to mindful living. Hardcover edition with premium paper.",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
        tags: ["books"],
        featured: true,
        inStock: true,
    },
    {
        id: "books-002",
        name: "Creative Photography Guide",
        price: 32.99,
        description:
            "Master the art of photography with this comprehensive guide. Full-color illustrations throughout.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
        tags: ["books"],
        inStock: true,
    },
];
