/** @type {import('tailwindcss').Config} */

console.log("Tailwind config loaded!");

export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'selector'
}

