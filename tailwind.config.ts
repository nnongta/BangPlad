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
        'baseorange': '#DF7E54',
        'brown': '#4F3C31',
        'cream': '#FAD59B',
        'gray': '#D5D0CF',
        clipPath: {
          "half-ellipse": "ellipse(100% 50% at 50% 0)",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "Noto Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
} satisfies Config;
