/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#123B63',
          dark: '#0C2742',
          light: '#1B528A',
        },
        secondary: {
          DEFAULT: '#16A6A1',
          dark: '#11817D',
          light: '#23C4BF',
        },
        accent: {
          DEFAULT: '#FF785A',
          dark: '#E05D40',
          light: '#FF947D',
        },
        surface: {
          DEFAULT: '#FAFBFD',
          white: '#FFFFFF',
          card: '#FFFFFF',
          muted: '#F0F4F8',
          subtle: '#E8EFF5',
        },
        brandText: {
          main: '#172B3A',
          supporting: '#687786',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 59, 99, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(18, 59, 99, 0.12)',
        'soft-xl': '0 20px 40px -6px rgba(18, 59, 99, 0.16)',
        'card': '0 2px 12px rgba(18, 59, 99, 0.06)',
        'card-hover': '0 12px 28px -4px rgba(18, 59, 99, 0.14)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
