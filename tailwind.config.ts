import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground)",
        mainColor: "#888aff",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "#ff8958",
        softGray: "var(--soft-gray)",
      },
      fontSize: {
        xxl: "var(--font-XXL)",
        xl: "var(--font-XL)",
        l: "var(--font-L)",
        m: "var(--font-M)",
        ml: "var(--font-ML)",
        s: "var(--font-S)",
        xs: "var(--font-XS)",
        ms: "var(--font-MS)",
        mss: "var(--font-MSS)",
      },
      letterSpacing: {
        "5": "8px",
      },
      fontFamily: {
        sans: "var(--font-dmSans)",
        ppHatton: ["PPHatton", "sans-serif"],
        nunito: "var(--font-nunitoSans)",
      },
      animation: {
        smoke: "smoke 30s infinite ",
        move: "move 6s infinite ease-in-out",
        moveReverse: "move-reverse 6s infinite ease-in-out",
        "water-motion": "wave 8s infinite linear",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        smoke: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "10%": { transform: "translate(-10px, 15px) scale(1.05)" },
          "20%": { transform: "translate(25px, -20px) scale(1.5)" },
          "30%": { transform: "translate(-30px, 10px) scale(0.95)" },
          "40%": { transform: "translate(15px, 25px) scale(1.15)" },
          "50%": { transform: "translate(-20px, -25px) scale(1.35)" },
          "60%": { transform: "translate(30px, 15px) scale(1)" },
          "70%": { transform: "translate(-25px, -10px) scale(1.4)" },
          "80%": { transform: "translate(20px, -15px) scale(0.9)" },
          "90%": { transform: "translate(-15px, 30px) scale(1.4)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        move: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -15px) scale(1.1)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        moveReverse: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-20px, 15px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50px)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        laptop: { max: "1400px" },
        mobile: { max: "800px" },
      },
      boxShadow: {
        custom: "0px 0px 20px 0.2em rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "water-effect":
          "radial-gradient(circle, rgba(105,105,105,0.5) 20%, rgba(0,0,0,0.7) 80%)",
      },
      perspective: {
        "1000": "1000px",
      },
      translate: {
        "z-300": "300px",
      },
      rotate: {
        "y-0": "0deg",
        "y-90": "90deg",
        "y-180": "180deg",
        "y-270": "270deg",
        "y-360": "360deg",
      },
      transformStyle: {
        preserve: "preserve-3d",
      },
    },
  },
  plugins: [],
};

export default config;
