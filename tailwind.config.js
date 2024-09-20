/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      blur: {
        xs: '1px',
      },
      backgroundImage: {
        hero: "url('https://biznesua.com.ua/wp-content/uploads/2016/05/profesiya-yurist.jpg')",
      },
      width: {
        screenUp: '102vw',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '1px 1px 2px #000',
          '-1px -1px 2px #000',
          '0 1px 2px #000',
          '0 -1px 2px #000',
        ],
      },
    },
  },
  plugins: [],
};
