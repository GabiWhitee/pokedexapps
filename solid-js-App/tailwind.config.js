/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/*", //se agrega esto
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
