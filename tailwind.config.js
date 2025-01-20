/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "bottom-left-blue": "-5px 5px 15px rgba(173, 216, 230, 0.5)",
      },
    },
  },
  plugins: [],
};
