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
        // Wayfare-Inspired Natural Linen & Charcoal Palette
        canvas: '#f5efe4',
        'canvas-card': '#fcf9f3',
        'canvas-deep': '#ece3d3',
        'canvas-border': '#e0d6c4',
        'canvas-border-subtle': '#ede6d8',

        ink: {
          DEFAULT: '#211d16',
          deep: '#14120e',
          soft: '#4e493f',
          muted: '#857e70',
          faint: '#a9a190',
        },

        gold: {
          star: '#ffc94a',
          badge: '#ffd978',
          text: '#8a6a32',
        },

        terracotta: {
          DEFAULT: '#b54a28',
          hover: '#8c381c',
          subtle: 'rgba(181, 74, 40, 0.08)',
        },

        brand: {
          coral: '#fd3d4b',
          'coral-hover': '#e42e3c',
          emerald: '#1b332c',
        },
      },
      fontFamily: {
        display: [
          '"Clash Grotesk"',
          'Fraunces',
          'system-ui',
          'sans-serif',
        ],
        sans: [
          '"General Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
