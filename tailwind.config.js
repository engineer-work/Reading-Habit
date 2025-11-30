
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
      },
      colors: {
        theme: {
          main: 'var(--bg-main)',
          surface: 'var(--bg-surface)',
          input: 'var(--bg-input)',
          border: 'var(--border-color)',
          text: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          accent: 'var(--accent-color)',
        }
      }
    },
  },
  plugins: [],
}
