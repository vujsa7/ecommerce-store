import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        fw: {
          blue: "#11283D",
          darkblue: "#192630",
          grey: "#F8F8F8",
          darkgrey: "#C1C1C1",
        },
      },
      fontSize: {
        xsm: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
