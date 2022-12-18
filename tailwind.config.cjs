/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    colors: {
      'kakao-yellow': '#fee600',
      'naver-green': '#00c400',
      red: '#fa0028',
      white: '#ffffff',
      black: '#181818',
      'dark-gray': '#464646',
      'light-gray': '#9e9e9e',
    },
    fontSize: {
      xs: '1rem',
      sm: '1.25rem',
      base: '1.5rem',
      lg: '1.75rem',
      xl: '2rem',
      '2xl': '2.25rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
    },
    fontFamily: {
      'line-seed-sans-kr': 'LINE Seed Sans KR',
    },
    borderRadius: {
      none: '0',
      xs: '0.3125rem',
      sm: '0.4375rem',
      default: '0.5rem',
      lg: '1.5rem',
      xl: '2.5rem',
    },
    extend: {},
  },
  plugins: [],
};
