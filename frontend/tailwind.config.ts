import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        'black-main': '#121214',
        'site-blue': "#49D0FF"
      },
      textColor: {
        'black-main': '#121214',
        'site-blue': "#49D0FF",
        'dark-gray': "#303030",
        'light-gray': "#8C8F96"
      }
    },
  },
  plugins: [],
};
export default config;
