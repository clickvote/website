import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        gradient1: 'linear-gradient(0deg, #FFFFFF 10.01%, #AF47FF 81.27%)',
        gradient2: 'linear-gradient(218.77deg, #AF46FF 31.03%, #950AFF 99.96%)',
        gradient3: 'linear-gradient(0deg, #AF47FF -21%, #FFFFFF 70.96%)',
        gradient4:
          'linear-gradient(180deg, #AF46FF -260.61%, rgba(175, 70, 255, 0) 117.42%)',
        gradient5:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.22) -35.25%, rgba(255, 255, 255, 0) 111.48%)',
        gradient6:
          'linear-gradient(180deg, rgba(148, 0, 255, 0.22) -35.25%, rgba(148, 0, 255, 0) 111.48%)',
        gradient7:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
        gradient8:
          'linear-gradient(180deg, rgba(7, 7, 7, 0.38) 0%, rgba(255, 255, 255, 0.09) 0.01%, rgba(255, 255, 255, 0) 133.03%)',
        gradient9:
          'linear-gradient(180deg, rgba(7, 7, 7, 0.38) 0%, rgba(255, 255, 255, 0.09) 0.01%, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0) 133.03%)',
        gradient10:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.22) -35.25%, rgba(255, 255, 255, 0) 111.48%)',
        gradient11: `linear-gradient(218.77deg, #AF46FF 31.03%, #950AFF 99.96%)`,
        gradient12: `linear-gradient(147.52deg, #AF46FF -53.06%, #AF46FF -53.04%, #570DA7 64.06%)`,
        gradient13:
          'linear-gradient(180deg, rgba(7, 7, 7, 0.38) 0%, rgba(255, 255, 255, 0.04) 0.01%, rgba(255, 255, 255, 0.08) 100%)',
        gradient14: `linear-gradient(180deg, #AF46FF 31.03%, #950AFF 99.96%)`,
        gradientRect:
          'linear-gradient(180deg, rgba(175, 70, 255, 0.77) 0%, rgba(175, 70, 255, 0) 100%)',
        gradientRect1:
          'linear-gradient(180deg, rgba(175, 70, 255, 0.53) 0%, rgba(175, 70, 255, 0) 44.79%)',
        maskGradient:
          'radial-gradient(ellipse 90% 80% at 48% 78%, black 40%, transparent 50%)',
      },
      textColor: {
        transparent: 'transparent',
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
        black: '#070707',
        white: '#fff',
      },
      screens: {
        sm: '576px',
        'sm-max': { max: '576px' },
        md: '768px',
        'md-max': { max: '768px' },
        lg: '992px',
        'lg-max': { max: '992px' },
        xl: '1200px',
        'xl-max': { max: '1200px' },
        '2xl': '1320px',
        '2xl-max': { max: '1320px' },
        '3xl': '1600px',
        '3xl-max': { max: '1600px' },
        '4xl': '1850px',
        '4xl-max': { max: '1850px' },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      backgroundPosition: {
        '0': '0%',
        '100': '100%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
