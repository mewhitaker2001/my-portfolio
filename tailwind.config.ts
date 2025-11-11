import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin)'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      },
      colors: {
        'ux-primary': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed', // Main purple
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        'ux-accent': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // Main cyan
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
        },
        
        // Palette app colors (for mockup backgrounds)
        palette: {
          brown: '#6B4035',
          terracotta: '#C87A4A',
          tan: '#EBC99C'
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;