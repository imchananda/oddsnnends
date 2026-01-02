import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our curated collection of plush dolls, books, manga, collectibles, mugs, and lifestyle items. Shop via Twitter DM for a personal experience.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
