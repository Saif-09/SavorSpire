import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Main Colors
        fawn: '#EFAF77',
        apricot: '#FBCEB1',
        'rose-quartz': '#A1919B',

        // Background Colors
        isabelline: '#F8F6F2',
        linen: '#FFF5EB',

        // Gray Colors
        silver: '#A3A3A3',
        'silver-low-opacity':'rgba(163, 163, 163, 0.28)',
        'cadet-gray': '#A1A2A5',

        // Black Colors
        'raisin-black': '#181925',
        'eerie-black': '#222222',
        black: '#060706',
        night: '#151316',
      },
    },
  },
  plugins: [],
};
export default config;
