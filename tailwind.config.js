/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/App.tsx'],
  theme: {
    extend: {
      bg: '#1b0029',
      bg2: '#290140',
      bg3: '#340e49',
    },
  },
  plugins: [],
}
