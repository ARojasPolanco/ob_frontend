/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #EDF3FF, #D6EFFF)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "primary-100": "#00a0d8",
        "primary-200": "#0084ba",
        "primary-300": "#007fb5",
        "accent-100": "#008ac0",
        "accent-200": "#c8ffff",
        "bg-100": "#fffefb",
        "bg-200": "#f5f4f1",
        "bg-300": "#454545",
      }
    },
  },
  plugins: [],
}
