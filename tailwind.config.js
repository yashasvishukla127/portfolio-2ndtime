/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      grayscale: {
        5: '5%',
        10: '10%',
        20: '20%',
        30: '30%',
        50: '50%',
      }
    },
  },
  plugins: [],
}

