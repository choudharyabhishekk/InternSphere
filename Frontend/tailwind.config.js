/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "rgba(104, 46, 228)",
        secondary: "rgba(236, 234, 241)",
        text: "rgba(163, 166, 191)",
        background: "rgba(249, 248, 248, 1)", // Light Gray
        primary: "rgb(37, 99, 234)",
        // primary: "rgb(0, 118, 223)", // Primary Blue
        accent: "rgba(255, 152, 0, 1)", // Accent Orange
        error: "rgba(255, 82, 82, 1)", // Red for notifications
      },
    },
  },
  plugins: [],
};
