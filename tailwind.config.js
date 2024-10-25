/** @type {import('tailwindcss').Config} */
const fs = require("fs");
const path = require("path");

const theme = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), "src/constants/themes.json"),
    "utf-8"
  )
);

const generateColorUtilities = (themeColors) => {
  const colorUtilities = {};
  Object.entries(themeColors).forEach(([colorName, colorShades]) => {
    colorUtilities[colorName] = colorShades;
  });
  return colorUtilities;
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: generateColorUtilities(theme.colors),
      maxWidth: {
        "screen-1.5xl": "1440px",
      },
      fontSize: {
        "2.5xl": ["28px", { lineHeight: "38px" }],
        "3.5xl": ["32px", { lineHeight: "44px" }],
        "4.5xl": ["40px", { lineHeight: "60px" }],
        "5.5xl": ["56px", { lineHeight: "80px" }],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 17s linear infinite",
      },
    },
  },
  plugins: [],
};
