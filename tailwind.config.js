/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        libreFranklin: ['Libre Franklin', 'sans-serif'],
      },
      colors: {
        primary: '#884F5D',
        secondary: '#C58E96',
        tertiary: '#F8D4D0',
        'gray-primary': '#8EC3B0',
        'black-primary': '#1A0000',
        'black-secondary': '#1A120B',
        mainBg: '#EFFFFD',
      },
      fontSize: {
        28: '1.75rem',
        32: '2rem',
        40: '2.5rem',
        54: '3.3rem',
      },
      boxShadow: {
        catShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        teamMemberCard: '0px 4px 6px 2px rgba(187, 170, 204, 0.15);',
        teamMemberCardHover: '0px 4px 4px 0px rgba(245, 242, 248, 1)',
        support: ' 0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        dropDown:
          '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.20);',
      },
      screens: {
        xxl: '1366px',
        '3xl': '1920px',
        small: { raw: '(max-height: 660px)' },
      },
      maxWidth: {
        xxs: '17rem',
      },
      backgroundImage: {
        'apple-store': '/assets/images/applestore.webp',
        'play-store': '/assets/images/playstore.webp',
      },
    },
  },
  plugins: [],
};
