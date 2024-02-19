import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-2.5": "1400px"
      },
      colors: {
        "primary": "#9c19e0",
        "secondary": "#da05d3",
      },
      height: {
        "97": "44rem",
        "98": "350px"
      },
      width: {
        "1/13": "35%",
        "1/14": "90%",
        "1/15": "65%",
      },
      spacing: {
        "17": "4.6rem",
        "15": "3.6rem"
      }
    },
  },
  plugins: [],
} satisfies Config

