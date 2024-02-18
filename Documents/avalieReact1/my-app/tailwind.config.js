/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'orange-1':'#FC8F22',
        'orange-3':'#726C7A',
        'black-1':'#726C7A',
        'black-2':'#5F5968',
        'black-3':'#7B7585',
        'black-4':'#534C5E',
        'white-1':'#EDE5F1',
      },
    },
  },
  plugins: [],
  
}
