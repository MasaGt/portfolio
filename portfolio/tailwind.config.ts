import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#E2E2E2",
        "about-text": "#D2DED4",
      },
      backgroundImage: {
        "dot-mask":
          "radial-gradient(rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0.15) 31%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "dot-mask": "2px 2px",
      },
      backdropBlur: {
        xs: "2px",
      },
      gridTemplateColumns: {
        pc: "repeat(auto-fit, minmax(15rem, 1fr))",
        mb: "repeat(auto-fit, minmax(10rem, 1fr))",
      },
      width: {
        "100": "25rem",
        "125": "31.25rem",
        "178": "712",
        "9/10": "90%",
      },
      padding: {
        "30": "7.5rem",
      },
      keyframes: {
        apperFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        disappearToLeft: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
      },
      animation: {
        appear: "apperFromLeft 0.5s forwards",
        disappear: "disappearToLeft 1s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
