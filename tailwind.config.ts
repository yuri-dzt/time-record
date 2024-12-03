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
        light: '#f2f2f2',
        gray: '#dddddd',
        darkGray: '#333333',
        blue: '#007bff'
      },
    },
  },
  plugins: [],
};
export default config;
