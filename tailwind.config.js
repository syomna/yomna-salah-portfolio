/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper:    "#f8f6f1",
        ink:      "#181612",
        "ink-mid": "#4a4540",
        "ink-low": "#9a9088",
        sage:     "#6b7c5e",
        "sage-light": "#eef1ea",
        surface:  "#f2f0ea",
        "dark-bg": "#1a1916",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body:    ['"Lora"', "Georgia", "serif"],
        mono:    ['"DM Mono"', "monospace"],
      },
    },
  },
  plugins: [],
}
