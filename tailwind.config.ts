import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      screens: { "2x1": { max: "1535px" },
          xl: { max: "1279px" },
          lg: { max: "1023px" },
          md: { max: "767px" },
          sm: { max: "639px" },
          xs: { max: "479px" },
          // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
export default config;
