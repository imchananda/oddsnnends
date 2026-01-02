import type { Product } from "./types";

export const novelsProducts: Product[] = [
    {
        id: "novels-001",
        name: "Whispers in the Wind",
        price: 18.99,
        description:
            "A captivating tale of adventure and discovery. First edition signed by the author.",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop",
        tags: ["novels"],
        featured: true,
        inStock: true,
    },
    {
        id: "novels-002",
        name: "Midnight Chronicles",
        price: 16.99,
        description:
            "A thrilling mystery novel that will keep you on the edge of your seat.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
        tags: ["novels"],
        inStock: true,
    },
];
