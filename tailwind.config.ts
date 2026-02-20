import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Lora", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // New design system colors
        "ent-primary": "#5A7C65",
        "ent-secondary": "#A65D43",
        "ent-sage": "#C3D1C2",
        "ent-cream": "#F4F0E6",
        "ent-bg-light": "#FDFBF7",
        "ent-bg-dark": "#1F2923",
        "ent-surface-light": "#F4F0E6",
        "ent-surface-dark": "#2C3A33",
        "ent-text": "#2C3A33",
        "ent-text-dark": "#E8E6E1",
        "ent-text-muted": "#5C6B64",
        "ent-text-muted-dark": "#A3B0AA",
        "ent-forest-dark": "#2D4739",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Custom theme colors for Entelechy
        "forest-green": "#2c5f2d", // Main brand color - dark green
        "sage": {
          50: "#f0f4f1",
          100: "#d9e5da",
          200: "#b9d1bb",
          300: "#93b896",
          400: "#73a477",
          500: "#5a9462",
          600: "#4a7a50",
          700: "#3c6040",
          800: "#304a32",
          900: "#273a28",
          950: "#112111",
        },
        "earth": {
          100: "#f1ebe0",
          200: "#e2d5c0",
          300: "#d4c1a1",
          400: "#c5ac81",
          500: "#b79862",
          600: "#a68149",
          700: "#886b3c",
          800: "#69542f",
          900: "#4b3c22",
          950: "#2d2413",
        },
        "sky": {
          100: "#e0edf7",
          200: "#c0dbef",
          300: "#a1c9e7",
          400: "#81b7df",
          500: "#62a5d7",
          600: "#378cc7",
          700: "#2870a3",
          800: "#1e547a",
          900: "#143951",
          950: "#0a1e29",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(90, 124, 101, 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
