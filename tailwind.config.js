/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src//*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#f97316', // orange-500
        accent: '#10b981', // emerald-500
        background: '#f9fafb',
        foreground: '#111827',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.05)',
        button: '0 2px 6px rgba(37, 99, 235, 0.3)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}