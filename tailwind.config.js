/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Specifies files Tailwind should scan
    theme: {
      extend: {}, // Use this to add custom styles
    },
    plugins: ["prettier-plugin-tailwindcss"], // Add Tailwind plugins here
  };
  