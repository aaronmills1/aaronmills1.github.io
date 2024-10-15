/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data.json',
  ],
  theme: {
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1180px',
    //   xl: '1440px',
    //   '2xl': '2000px',
    // },

    extend: {
      colors: {
        primary: '#D8CFBC',
        secondary: '#565449',

        text: '#11120D',
        background: '#11120D',
      },

      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
