/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#e11c37",
        "custom-black": "#080101",
        "custom-yellow": "#e9b226",
        "custom-canarino": "#f0c043",
      },
    },
  },
  plugins: [],
};
