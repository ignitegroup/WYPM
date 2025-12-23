import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        campari: {
          red: '#ED1C24',
          darkRed: '#B91C1C',
          deepRed: '#7F1D1D',
          gold: '#D4AF37',
          lightGold: '#F5D066',
          cream: '#FFF8E7',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'plane-fly': 'planeFly 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'heart-float': 'heartFloat 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        planeFly: {
          '0%': { transform: 'translate(-100%, 50%) rotate(-15deg)' },
          '50%': { transform: 'translate(50vw, -20%) rotate(-10deg)' },
          '100%': { transform: 'translate(150vw, -50%) rotate(-5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(237, 28, 36, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(237, 28, 36, 0.8)' },
        },
        heartFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '50%': { transform: 'translateY(-30px) scale(1.1)', opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'campari-gradient': 'linear-gradient(135deg, #ED1C24 0%, #B91C1C 50%, #7F1D1D 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #F5D066 50%, #D4AF37 100%)',
      },
    },
  },
  plugins: [],
}

export default config
