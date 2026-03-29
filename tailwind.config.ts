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
        // Surface hierarchy (darkest → lightest)
        "surface-tint": "#f0a45d",
        "surface-container-highest": "#3a2f27",
        "surface-container-high": "#2d2520",
        "surface-container": "#231d19",
        "surface-container-low": "#1a1715",
        "surface-container-lowest": "#110f0e",
        "surface-variant": "#3f332c",
        "surface-bright": "#463a31",
        "surface-dim": "#111111",
        surface: "#111111",
        background: "#111111",
        // On-surface
        "on-surface": "#eee7dd",
        "on-surface-variant": "#bcaea0",
        "on-background": "#eee7dd",
        // Primary (ember / copper)
        "primary-fixed": "#f6c994",
        "primary-fixed-dim": "#f0a45d",
        primary: "#e7a35b",
        "primary-container": "#c96b27",
        "on-primary": "#24140a",
        "on-primary-fixed": "#2a1406",
        "on-primary-fixed-variant": "#6a3614",
        "on-primary-container": "#fff0e1",
        "inverse-primary": "#b85c2e",
        // Secondary
        "secondary-fixed": "#e6ccb0",
        "secondary-fixed-dim": "#d2b08a",
        secondary: "#d5b48f",
        "secondary-container": "#8a6542",
        "on-secondary": "#22150b",
        "on-secondary-fixed": "#1d1108",
        "on-secondary-fixed-variant": "#5a3d22",
        "on-secondary-container": "#fff2e6",
        // Tertiary
        "tertiary-fixed": "#d8deb1",
        "tertiary-fixed-dim": "#bdc48d",
        tertiary: "#bcc48a",
        "tertiary-container": "#69713f",
        "on-tertiary": "#15190c",
        "on-tertiary-fixed": "#101407",
        "on-tertiary-fixed-variant": "#434a22",
        "on-tertiary-container": "#f6fadc",
        // Error
        error: "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6",
        // Misc
        outline: "#6e5847",
        "outline-variant": "#40342c",
        "inverse-surface": "#eee7dd",
        "inverse-on-surface": "#312822",
      },
      fontFamily: {
        headline: ["Avenir Next", "Trebuchet MS", "Segoe UI", "sans-serif"],
        body: ["Avenir Next", "Segoe UI", "system-ui", "sans-serif"],
        label: ["Avenir Next", "Segoe UI", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.25rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      letterSpacing: {
        tighter: "-0.04em",
      },
      boxShadow: {
        glow: "0 0 48px rgba(240,164,93,0.08)",
        "glow-md": "0 0 48px rgba(240,164,93,0.14)",
        "glow-lg": "0 0 64px rgba(240,164,93,0.2)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg, #f2b36e 0%, #e0893d 55%, #b85c2e 100%)",
        "primary-gradient-subtle":
          "linear-gradient(135deg, rgba(242,179,110,0.16) 0%, rgba(224,137,61,0.14) 55%, rgba(184,92,46,0.12) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "draw-line": "drawLine 1.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
