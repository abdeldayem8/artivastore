/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       primary:"#7DA0CA",
       secondary:"#5A7A96",
      },
    },
  },
  plugins: [],
}
