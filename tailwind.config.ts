import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#006B64",
          dark: "#374151",
        },
        title: {
          DEFAULT: "#006B64",
          dark: "#F3F4F6",
        },
        subtitle: {
          DEFAULT: "#04887F",
          dark: "#D1D5DB",
        },
        pagina: {
          DEFAULT: "#FFFFFF",
          dark: "#111827",
        },
      },
      fontFamily: {
        roboto: ["var(--font-family-main)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;