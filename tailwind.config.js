/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0A0A', // Fondo oscuro nórdico
          purple: '#8B5CF6', // El morado de tu logo
          light: '#E2E8F0', // Texto principal (slate-200)
          muted: '#94A3B8', // Texto secundario (slate-400)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}