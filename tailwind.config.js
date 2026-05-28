/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arena: {
          bg: '#0a0b0f',
          surface: '#11131a',
          'surface-2': '#171a23',
          'surface-3': '#1f232e',
          border: '#242833',
          'border-strong': '#353a48',
          'border-soft': '#1c1f29',
        },
        accent: {
          DEFAULT: '#ff6b3d',
          soft: 'rgba(255,107,61,0.14)',
          edge: 'rgba(255,107,61,0.35)',
        },
        'accent-2': '#ffb547',
        txt: {
          DEFAULT: '#ecedf2',
          dim: '#9098a8',
          faint: '#5a606e',
          mute: '#41464f',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'arena-sm': '6px',
        'arena-md': '10px',
        'arena-lg': '14px',
        'arena-xl': '20px',
      },
      boxShadow: {
        'glow-accent': '0 0 0 1px rgba(255,107,61,0.5), 0 0 24px rgba(255,107,61,0.35)',
        'btn-primary': '0 1px 0 rgba(255,255,255,0.2) inset, 0 6px 18px rgba(255,107,61,0.28)',
        'card': '0 1px 0 rgba(255,255,255,0.03) inset, 0 1px 2px rgba(0,0,0,0.4)',
        'card-hover': '0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 28px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'btn-primary': 'linear-gradient(180deg, #ff7a4d, #ff5a26)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
