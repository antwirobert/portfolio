/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#FAFAF7",
          100: "#F2F1EC",
          200: "#E2E1DA",
          300: "#B8B6AD",
          400: "#7C7A72",
          500: "#4A4944",
          600: "#2D2C29",
          700: "#1B1B1E",
          800: "#141417",
          900: "#0B0B0E",
        },
        accent: {
          DEFAULT: "#B8E986",
          dark: "#A5D670",
          soft: "#D4F0A8",
          muted: "#6B8A4A",
        },
        signal: {
          DEFAULT: "#E8B86D",
          muted: "#8A6D3B",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
        prose: "680px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "cursor-blink": "cursorBlink 1.1s steps(2, end) infinite",
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
