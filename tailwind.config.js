// tailwind.config.js
import daisyui from "daisyui"; // Import daisyUI

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Make sure all your React files are included
  theme: {
    extend: {},
  },
  darkMode: "class", // Enable dark mode toggle via the 'class' strategy
  plugins: [daisyui], // Include daisyui
};
