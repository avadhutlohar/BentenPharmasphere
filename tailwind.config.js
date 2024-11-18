/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Set 'Roboto' as default sans-serif font
        serif: ['Merriweather', 'serif'], // Example for serif font
      },
    },
  },
  plugins: [],
};
