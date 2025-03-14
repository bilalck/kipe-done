import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "#0070f3",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "var(--background)",
          foreground: "var(--foreground)",
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#666666",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;