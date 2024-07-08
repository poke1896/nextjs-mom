import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: '#388E3C',
        antiqueGold: '#B08B2E',
        offWhite: '#F9F6F2',
        charcoal: '#333333',
      },
    },
  },
  plugins: [],
};

export default config;