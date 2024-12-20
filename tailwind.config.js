/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       primary:"#F3E4DD",
       secondary:"#000",
      },
    },
  },
  plugins: [],
}
