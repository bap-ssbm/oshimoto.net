/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'AnonymousPro':['AnonymousPro', 'sans-serif'],
        'AbrilFatFace':['AbrilFatFace', 'sans-serif'],
        'BrandonGrotesque':['BrandonGrotesque', 'sans-serif'],
        'Geologica':['Geologica', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'black-950':'#111216',
        'black-900':'#171717',
        'black-800':'#252525',
        'black-700':'#333333',
        'black-600':'#FDF2F2',
        'black-500':'#F4F5F7',
        'black-400':'#929292'
      },
    },
  },
  plugins: [],
}
