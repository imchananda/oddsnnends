# oddsnnends - Product Showcase Website

A minimalist, elegant product showcase website built with Next.js 14, React, and Tailwind CSS. Designed to allow customers to purchase items via Twitter (X) Direct Messages.

## ✨ Features

- **Minimalist Design**: Clean, modern UI with friendly and trustworthy aesthetics
- **Dark Mode**: Full dark mode support with system preference detection and localStorage persistence
- **Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Subtle hover effects and page transitions
- **Accessible**: WCAG compliant with proper focus states and semantic HTML
- **SEO Optimized**: Meta tags, semantic HTML, and Next.js metadata API

## 🛍️ Product Categories

- Plush Dolls
- Books
- Novels
- Mugs
- Collectibles
- Cards
- Manga
- Lifestyle Items

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
shop-showcase/
├── src/
│   ├── app/
│   │   ├── products/
│   │   │   ├── page.tsx       # Products listing page
│   │   │   └── layout.tsx     # Products layout with metadata
│   │   ├── globals.css        # Global styles & Tailwind imports
│   │   ├── layout.tsx         # Root layout with ThemeProvider
│   │   ├── page.tsx           # Home page
│   │   ├── loading.tsx        # Loading UI
│   │   ├── error.tsx          # Error boundary
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   ├── Button.tsx         # Reusable button component
│   │   ├── CategoryFilter.tsx # Category filtering component
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Icons.tsx          # SVG icon components
│   │   ├── ProductCard.tsx    # Product display card
│   │   ├── ThemeProvider.tsx  # Dark mode context provider
│   │   └── index.ts           # Component exports
│   ├── data/
│   │   └── products.ts        # Mock product data & types
│   └── lib/
│       ├── config.ts          # Site configuration
│       └── utils.ts           # Utility functions
├── public/
│   └── images/                # Static images
├── tailwind.config.ts         # Tailwind configuration with custom tokens
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design Tokens

Custom semantic color tokens are defined in `tailwind.config.ts`:

```typescript
colors: {
  background: {
    light: "#ffffff",
    dark: "#0b1220",
  },
  surface: {
    light: "#f8fafc",
    dark: "#111827",
  },
  primary: {
    light: "#2563eb",
    dark: "#60a5fa",
  },
  accent: {
    light: "#facc15",
    dark: "#fde68a",
  },
  text: {
    light: "#0f172a",
    dark: "#e5e7eb",
  },
  border: {
    light: "#e2e8f0",
    dark: "#1f2937",
  },
}
```

## 🌙 Dark Mode Implementation

Dark mode uses Tailwind's `class` strategy:

1. **System Preference**: Respects `prefers-color-scheme` on first load
2. **Manual Toggle**: Users can switch themes via header toggle
3. **Persistence**: Preference saved to localStorage
4. **No Flash**: Script in `<head>` prevents FOUC

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## ⚙️ Configuration

### Twitter Handle

Update the Twitter handle in `src/lib/config.ts`:

```typescript
export const siteConfig = {
  twitterHandle: "@YourHandle",
  twitterUrl: "https://twitter.com/YourHandle",
  dmUrl: "https://twitter.com/messages/compose?recipient_id=YourHandle",
  // ...
};
```

### Products

Add or modify products in `src/data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: "unique-id",
    name: "Product Name",
    price: 29.99,
    description: "Product description",
    image: "https://example.com/image.jpg",
    category: "plush",
    featured: true,
    inStock: true,
  },
  // ...
];
```

## 📱 Pages

### Home Page (`/`)
- Hero section with store name and tagline
- Category quick links
- Featured products grid
- How it works section
- Call-to-action section

### Products Page (`/products`)
- Category filter bar
- Responsive product grid
- URL-based category filtering (`/products?category=plush`)
- Empty state handling

## 🎯 Key Components

### ProductCard
Displays individual products with:
- Product image with hover zoom
- Category badge
- Featured badge (optional)
- Name and price
- Description (2-line clamp)
- "Buy via Twitter DM" button

### CategoryFilter
Horizontal scrolling category filter with:
- "All" option
- Category icons
- Active state styling
- URL sync

### ThemeProvider
React context for theme management:
- `theme`: Current theme ("light" | "dark")
- `toggleTheme()`: Switch between themes
- `setTheme(theme)`: Set specific theme

## 📄 License

MIT License - feel free to use this project for your own product showcase!

---

Built with ❤️ for collectors everywhere
