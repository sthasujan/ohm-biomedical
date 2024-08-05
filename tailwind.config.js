const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#ea0029',
        'brandSecondary': '#130f32',
        'neutralGrey': '#717171',
        'gray900': '#18191F',
      }
    },
  },
  plugins: [
    // require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

