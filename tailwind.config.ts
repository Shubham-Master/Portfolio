import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface hierarchy (darkest → lightest) — graphite-blue panels
        "surface-tint": "#2FE28C",
        "surface-container-highest": "#2B3444",
        "surface-container-high": "#212836",
        "surface-container": "#1A2029",
        "surface-container-low": "#141920",
        "surface-container-lowest": "#0B0E13",
        "surface-variant": "#2A323F",
        "surface-bright": "#333D4C",
        "surface-dim": "#0B0E13",
        surface: "#0F131A",
        background: "#0F131A",
        // On-surface
        "on-surface": "#E7EAF0",
        "on-surface-variant": "#8892A3",
        "on-background": "#E7EAF0",
        // Primary — the single signal-green accent
        "primary-fixed": "#8FF5C4",
        "primary-fixed-dim": "#2FE28C",
        primary: "#2FE28C",
        "primary-container": "#15854F",
        "on-primary": "#052A19",
        "on-primary-fixed": "#052A19",
        "on-primary-fixed-variant": "#0E5C38",
        "on-primary-container": "#D9FBE9",
        "inverse-primary": "#15854F",
        // Secondary — collapsed to graphite neutrals, no second hue
        "secondary-fixed": "#C3CAD6",
        "secondary-fixed-dim": "#8892A3",
        secondary: "#8892A3",
        "secondary-container": "#2A323F",
        "on-secondary": "#0F131A",
        "on-secondary-fixed": "#0F131A",
        "on-secondary-fixed-variant": "#3A4453",
        "on-secondary-container": "#E7EAF0",
        // Tertiary — same graphite treatment
        "tertiary-fixed": "#C3CAD6",
        "tertiary-fixed-dim": "#8892A3",
        tertiary: "#8892A3",
        "tertiary-container": "#2A323F",
        "on-tertiary": "#0F131A",
        "on-tertiary-fixed": "#0F131A",
        "on-tertiary-fixed-variant": "#3A4453",
        "on-tertiary-container": "#E7EAF0",
        // Error
        error: "#FF9B93",
        "error-container": "#4A1515",
        "on-error": "#2A0808",
        "on-error-container": "#FFD9D9",
        // Misc — the hairline border tokens
        outline: "#3A4453",
        "outline-variant": "#232A36",
        "inverse-surface": "#E7EAF0",
        "inverse-on-surface": "#1A2029",
      },
      fontFamily: {
        headline: ["var(--font-plex-sans)", "IBM Plex Sans", "system-ui", "sans-serif"],
        body: ["var(--font-plex-sans)", "IBM Plex Sans", "system-ui", "sans-serif"],
        label: ["var(--font-plex-mono)", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.625rem",
        "2xl": "0.75rem",
        full: "9999px",
      },
      letterSpacing: {
        tighter: "-0.03em",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
