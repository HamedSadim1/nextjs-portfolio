import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuratie voor de portfolio website.
 * Definieert dark mode strategie, content paths voor purging,
 * theme extensies en plugins.
 */
const config: Config = {
  // Gebruik class-based dark mode voor handmatige theme switching
  darkMode: "class",
  // Specificeer welke bestanden Tailwind classes bevatten voor optimalisatie
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extra background gradients voor speciale effecten
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // Plugins voor extra functionaliteit
  plugins: [require("tailwindcss-animate")],
};
export default config;
