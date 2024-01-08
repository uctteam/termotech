/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        // smdan keyin font size kichrayadi
        md: "960px",
        lg: "1440px",
        xl: "1536px",
      },
    },
  },
  plugins: [],
};
