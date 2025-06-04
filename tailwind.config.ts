import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { inter: ["var(--font-inter)"] },
      colors: {
        limeBright: "#CBF200",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
