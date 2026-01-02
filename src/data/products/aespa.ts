import type { Product } from "./types";

export const aespaProducts: Product[] = [
    {
        id: "aespa-001",
        name: "aespa Official Light Stick",
        price: 45.99,
        description:
            "Official aespa fan light stick. Bluetooth enabled with multiple light modes.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=800&fit=crop",
        ],
        tags: ["aespa", "cards", "lifestyle"],
        status: "sold",
        featured: true,
        inStock: true,
    },
    {
        id: "aespa-002",
        name: "aespa Drama Album",
        price: 28.99,
        description:
            "4th Mini Album 'Drama' with photobook, photocard set, and exclusive poster.",
        image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&h=800&fit=crop",
        ],
        tags: ["aespa"],
        status: "reserved",
        inStock: true,
    },
    {
        id: "aespa-003",
        name: "aespa Photocard Set",
        price: 15.99,
        description:
            "Complete photocard collection featuring all members. Limited edition holographic finish.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&h=800&fit=crop",
        ],
        tags: ["aespa"],
        status: "available",
        inStock: true,
    },
    {
        id: "aespa-004",
        name: "aespa Concert Merchandise Set",
        price: 89.99,
        description:
            "Exclusive concert bundle including hoodie, cap, and fan badge.",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&h=800&fit=crop",
        ],
        tags: ["aespa"],
        featured: true,
        inStock: true,
    },
];
