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
      screens: {
        laptop: "1024px", // Definir un breakpoint personalizado
        mobile: { max: "800px" }, // Otro breakpoint personalizado
      },
    },
  },
  plugins: [],
};
export default config;
