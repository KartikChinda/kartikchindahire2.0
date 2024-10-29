import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1550px',
        'ipad-pro-portrait': { 'raw': '(min-width: 1024px) and (max-width: 1024px) and (orientation: portrait)' },
      },
      fontFamily : {
        "hero-heading": ["Bebas Neue"],
        "loader-text": ["Fascinate"],
        "subtext-heebo": ["Heebo"],
        "subtext-lora": ['Lora'],
        "heading-playfair": ['Playfair Display']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundWhite: "#EEEEEE",
        backgroundPeach: "#FFF8F0",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
