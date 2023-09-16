/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'montserrat' : ['var(--font-montserrat)'],
        'lato' : ['var(--font-lato)'],
        'poppins' : ['var(--font-poppins)'],
        'figtree' : ['var(--font-figtree)']
      },
    },
  },
  plugins: [],
}

