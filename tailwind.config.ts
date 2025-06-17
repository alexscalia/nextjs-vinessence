import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fefbf7',      // Cream white
          100: '#fdf5e6',     // Light cream
          200: '#f7e6d3',     // Warm beige
          300: '#e8d5b7',     // Light gold
          400: '#d4b896',     // Medium gold
          500: '#c19a6b',     // Warm gold
          600: '#a67c52',     // Deep gold
          700: '#8b6142',     // Bronze
          800: '#6d4c35',     // Dark bronze
          900: '#523929',     // Deep brown
          charcoal: '#2d2d2d', // Sophisticated dark gray
          gold: '#c19a6b',     // Primary gold
          cream: '#fdf5e6',    // Cream background
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Montserrat', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.2em',
        'ultra-wide': '0.3em',
      },
    },
  },
} satisfies Config 