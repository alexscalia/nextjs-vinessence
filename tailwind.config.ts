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
          burgundy: '#722F37',  // Wine burgundy (main brand color)
          gold: '#D9AC6F',      // Wine gold accent  
          charcoal: '#111827',  // Wine charcoal (dark text)
        },
      },
    },
  },
} satisfies Config 