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
        // New color scheme
        'purple-primary': '#4413F4',
        // Legacy blueprint colors (for other components)
        blueprint: {
          bg: "#042048",
          cyan: "#00FFFF",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Work Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      transitionTimingFunction: {
        'power4': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
