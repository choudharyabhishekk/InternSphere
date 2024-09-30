/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(104, 46, 228)",
        secondary: "rgba(236, 234, 241)",
        text: "rgba(163, 166, 191)",
      },
    },
  },
  plugins: [],
};
