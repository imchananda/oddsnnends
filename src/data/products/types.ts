export type ProductCategory =
    | "aespa"
    | "namtanfilm"
    | "plush"
    | "books"
    | "novels"
    | "cards"
    | "manga"
    | "lifestyle";

export type ProductStatus = "available" | "sold" | "reserved";

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    images?: string[]; // Multiple images support
    tags: ProductCategory[]; // Multiple categories/tags
    status?: ProductStatus; // Product status (default: available)
    featured?: boolean;
    inStock?: boolean;
}

export interface Category {
    id: ProductCategory;
    name: string;
    icon: string;
}
