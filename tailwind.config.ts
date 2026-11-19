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
          // Primary Coral Brand Accent
          coral: '#fd3d4b',
          'coral-hover': '#e42e3c',
          'coral-subtle': 'rgba(253, 61, 75, 0.08)',
          'coral-border': 'rgba(253, 61, 75, 0.25)',

          // Sophisticated Obsidian & Charcoal Foundations
          bg: '#0e1013',
          surface: '#14161b',
          'surface-hover': '#1a1d23',
          'surface-elevated': '#1d2027',
          card: '#15171d',

          // Structural Hairline Borders
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.14)',
          'border-subtle': 'rgba(255, 255, 255, 0.04)',

          // Refined Text Hierarchy
          primary: '#f4f4f6',
          secondary: '#9ea3ae',
          muted: '#686d79',

          // Accent Status Colors
          emerald: '#10b981',
          gold: '#d4af37',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
        modal: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        dropdown: '0 12px 32px 0 rgba(0, 0, 0, 0.55)',
      },
    },
  },
  plugins: [],
};

export default config;
