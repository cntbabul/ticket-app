/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      nav: "#18222f",
      page: "#000000",
      card: "#8D8887",
      text: "#000000",
      "progress-bar": "gray",
      "card-hover": "#BB9486", // card hover color
      "default-text": "#f5f5f5", // default text color
      "default-text-hover": "#000000", // default text hover color
      "default-text-active": "#000000",
      "blue-accent": "#0070f3",
      "blue-accent-hover": "#0056b7",
    },
  },
  plugins: [],
};
