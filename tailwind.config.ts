import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#191919",
        "light-green": "#ACF39D",
        "orange-web": "#F9A620",
      },
    },
  },
  plugins: [],
};
export default config;
