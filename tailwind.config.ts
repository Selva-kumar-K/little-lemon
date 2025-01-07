import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        karla : ["Karla", "serif"],
        markazi : ["Markazi Text", "serif"],
      },
      fontSize:{
        karla : "18",
        markazi_heading : "64",
        markazi_content : "40",
      }
    },
  },
  plugins: [],
} satisfies Config;
