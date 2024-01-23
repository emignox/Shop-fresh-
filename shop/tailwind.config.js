/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#e11c37",
        "custom-black": "#080101",
      },
    },
  },
  plugins: [],
};
