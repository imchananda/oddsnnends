import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Pastel color theme - Blue, Yellow, Cream */
        background: {
          light: "#FFFDF7",  /* Cream white */
          dark: "#1a1f2e",   /* Dark blue-gray */
        },
        surface: {
          light: "#FFF9E8",  /* Light cream */
          dark: "#242a3d",   /* Dark surface */
        },
        primary: {
          light: "#7EC8E3",  /* Pastel blue */
          dark: "#A8D8EA",   /* Light pastel blue */
          hover: {
            light: "#5BB3D5",  /* Darker pastel blue */
            dark: "#C4E4F2",   /* Lighter blue */
          },
        },
        accent: {
          light: "#FFE082",  /* Pastel yellow */
          dark: "#FFF3B0",   /* Light pastel yellow */
          hover: {
            light: "#FFD54F",  /* Deeper yellow */
            dark: "#FFF8C4",   /* Lighter yellow */
          },
        },
        text: {
          light: "#3D4A5D",  /* Soft dark blue-gray */
          dark: "#F5F5F5",   /* Off-white */
          muted: {
            light: "#7A8599",  /* Muted blue-gray */
            dark: "#B8C1D1",   /* Light muted */
          },
        },
        border: {
          light: "#E8E4D9",  /* Cream border */
          dark: "#3D4A5D",   /* Dark border */
        },
      },
      fontFamily: {
        sans: ["'Noto Sans Thai'", "system-ui", "sans-serif"],
        display: ["'Noto Sans Thai'", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        shimmer: "shimmer 2s infinite linear",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
