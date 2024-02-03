
/** @type {import('tailwindcss').Config} */
export default ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
      },
    },
  },
  plugins: [],
});




