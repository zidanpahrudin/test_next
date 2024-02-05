import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lmsi': "0 0 6px 0 rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        "Fira Code": ["Fira Code"],
        'roboto': ["Roboto", "sans-serif"],
        'Oswald': ["Oswald"],
      },
      colors: {
        'primary': "#ccff99",
        'secondary': "#045F8C",
        'base': "#FFFFFF",
        'text': "#43484E",
        'accentFirst': "#FAFAD2",
        'accentSecond': "#E6E6FA",
        'accentThird': "#4A5489",
        'opacityNavbar': "rgba(255, 0, 0, 0.5)",
      },
      boxShadowColor: {
        'basic': "0px 0px 6px 0px rgba(0, 0, 0, 0.15)",
        'primary': "0px 4px 25px 2px rgba(141, 199, 61, 0.50)",
      },
      dropShadow: {
        'primary': "0px 4px 10px rgba(141, 199, 61, 0.50)",
        'secondary': "0px 4px 10px rgba(230, 230, 255, 0.5)",
        'third': "0px 4px 10px rgba(4, 95, 140, 0.5)",
      },
      backgroundImage: {
        
        "home": 'url("../assets/images/lm00.png")',
        "home-mobile": 'url("../assets/images/lm00-mobile.png")',
        "mm1": 'url("../assets/images/mm1.jpg")',
        "mm2": 'url("../assets/images/mm2.jpg")',
        "mm3": 'url("../assets/images/mm3.jpg")',
      },
      screens: {
        // Smaller Mobile
        'ssm': "360px",

        // Mobile
        'sm': "425px",

        // Tablet
        'md': "768px",

        // Laptop
        'lg': "1024px",

        // Laptop Large
        'xl': "1440px",

        // 4K / Desktop
        "2xl": "2560px",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
export default config;
