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
    },
  },
  plugins: [],
};
