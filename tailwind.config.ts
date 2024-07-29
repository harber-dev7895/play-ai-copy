import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        play: ["Prompt", "sans-serif"],
      },
      backgroundImage: {
        "g-white": "linear-gradient(180deg, #ffffff, #ffffff)",
        "side-bar": "linear-gradient(180deg, #72ceff, #30c0fe)",
        "side-bar-active": "linear-gradient(180deg, #ff8081, #fe2f2d)",
        "box-content": "linear-gradient(180deg, #9adcff, #53c7ff)",
        "red-main": "linear-gradient(180deg,#ED2530,#ED2530)",
        "box-overview": "linear-gradient(180deg, #d6f2ff, #d6f2ff)",
        "btn-withdrawn": "linear-gradient(180deg, #c22949, #c53551)",
      },
      colors: {
        menu_icon: "#017ab7",
      },
      screens: {
        xs: "398px",
      },
    },
  },
  plugins: [],
};
export default config;
