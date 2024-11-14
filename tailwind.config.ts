import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      tab: "910px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        "charcoal-black": "#121212",
        "light-green": "#ACF39D",
        "orange-web": "#F9A620",
      },
    },
  },
  plugins: [],
};
export default config;
