/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000",
      transparent: "transparent",
      dark: "#010101",
      white: "#FFFFFF",
      grey: "#4F4F4F",
      lightGrey: " #C4C4C4",
      deepGrey: "#181818",
      "grey-100": "#949494",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mobile: { max: "480px" },
        pad: { max: "768px" },
        tablet: { max: "1024px" },
        desktop: { max: "1280px" },
      },
    },
  },
  plugins: [],
};
