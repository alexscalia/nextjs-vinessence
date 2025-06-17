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
          50: '#fef7f6',
          100: '#fdf2f0',
          200: '#fbe5e1',
          300: '#f7ccc4',
          400: '#f1a394',
          500: '#e87a6a',
          600: '#d65549',
          700: '#b83e35',
          800: '#9a342d',
          900: '#722f37',
          burgundy: '#722F37',  // Wine burgundy (main brand color)
          gold: '#D9AC6F',      // Wine gold accent  
          charcoal: '#111827',  // Wine charcoal (dark text)
        },
      },
    },
  },
} satisfies Config 