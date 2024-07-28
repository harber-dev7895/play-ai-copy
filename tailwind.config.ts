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
        "side-bar": "linear-gradient(180deg, #72ceff, #30c0fe)",
        "side-bar-active": "linear-gradient(180deg, #ff8081, #fe2f2d)",
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
