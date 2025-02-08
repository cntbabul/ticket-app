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
      
        'slate-700': '#4f46e5',
        'green-200': '#34c759',
        'yellow-200': '#f7dc6f',
        'red-200': '#ff3b3f',
        'gray-bar-hover': '#121110',
      nav: "#18222f",
      page: "#000000",
      card: "#8D8887",
      text: "#000000",
      "progress-bar": "#121110",
      "progress-bar-hover": "#0070f3",
      "card-hover": "#BB9486", // card hover color
      
      "card-hover": "#808080", // card hover color
      "default-text": "#f5f5f5", // default text color
      "default-text-hover": "#000000", // default text hover color
      "default-text-active": "#000000",
      "blue-accent": "#0070f3",
      "blue-accent-hover": "#0056b7",
      "red-accent": "#dc3545",
      "red-accent-hover": "#c82333",
      "slate-accent": "#8D8887",
    },
  },
  plugins: [],
};
