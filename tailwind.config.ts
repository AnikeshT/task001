import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          coral: '#fd3d4b',
          'coral-hover': '#e6313f',
          cream: '#fafaf7',
          warmWhite: '#fdfdfc',
          sand: '#f3f2ed',
          stone: '#e8e6df',
          charcoal: '#18191c',
          dark: '#0f1013',
          card: '#16181d',
          border: 'rgba(255, 255, 255, 0.08)',
          gold: '#c9a84d',
          emerald: '#10b981',
          forest: '#1f3a2f',
          textMuted: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        elevated: '0 12px 36px -4px rgba(0, 0, 0, 0.16)',
        luxury: '0 24px 60px -8px rgba(0, 0, 0, 0.28)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
