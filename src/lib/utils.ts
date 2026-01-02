import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  // Simple implementation without external dependencies
  return inputs
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ")
    .split(" ")
    .filter(Boolean)
    .filter((value, index, self) => self.indexOf(value) === index)
    .join(" ");
}

/**
 * Format price to currency string (Thai Baht)
 */
export function formatPrice(price: number, currency: string = "THB"): string {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Generate Twitter DM link
 */
export function generateTwitterDMLink(
  twitterHandle: string,
  productName?: string
): string {
  const baseUrl = `https://twitter.com/messages/compose?recipient_id=${twitterHandle.replace("@", "")}`;

  if (productName) {
    const message = encodeURIComponent(
      `Hi! I'm interested in purchasing: ${productName}`
    );
    return `${baseUrl}&text=${message}`;
  }

  return baseUrl;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Check if we're on the client side
 */
export const isClient = typeof window !== "undefined";

/**
 * Get initial theme from localStorage or system preference
 */
export function getInitialTheme(): "light" | "dark" {
  if (!isClient) return "light";

  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
