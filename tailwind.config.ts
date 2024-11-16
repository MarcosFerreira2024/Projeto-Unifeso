import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#006B64",
        foreground: "var(--foreground)",
        title: "#006B64",
        subtitle: "#04887F", 
      },
      fontFamily: {
        roboto: ['var(--font-family-main)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;