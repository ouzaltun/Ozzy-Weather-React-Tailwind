/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-color": "rgba(196, 195, 193, 0.4)",
        "nav-color": "#C4C3C1",
      },
    },
    backgroundImage: {
      mainImage: "url('main-bg.jpg')",
    },
    borderRadius: {
      priv: "27.244px",
    },
    fontFamily: {
      inter: ["Inter", "sans"],
    },
  },
  plugins: [],
};
