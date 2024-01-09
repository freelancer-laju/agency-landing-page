import keepPreset from "keep-react/preset";
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",

    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",

    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralGray: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralGrey: "#4D4D4D",
        gray900: "#18191F",
      },
    },

    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "668px",
      // => @media (min-width: 960px) { ... }

      lg: "992px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],

  presets: [keepPreset],
});
