/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      '2xs': [
        '0.675rem',
        {
          lineHeight: 'normal',
          letterSpacing: '0.1125rem',
          fontWeight: '400',
        },
      ],
      '1xs': [
        '0.75rem',
        {
          lineHeight: 'normal',
          letterSpacing: ' 0.125rem',
          fontWeight: '400',
        },
      ],
      xs: [
        '0.8125rem',
        {
          lineHeight: 'normal',
          letterSpacing: '0.125rem',
          fontWeight: 400,
        },
      ],
      small: [
        '0.875rem',
        {
          lineHeight: '1.3125rem',
          fontWeight: '400',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.3125rem',

          fontWeight: '400',
        },
      ],
      large: [
        '1.125rem',
        {
          fontWeight: '400',
        },
      ],
      xl: ['1.25rem'],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '1.9375rem',
          fontWeight: '400',
        },
      ],
      '3xl': [
        '2.5rem',
        {
          lineHeight: 'normal',
          fontWeight: '400',
        },
      ],
      '4xl': ['3.125rem', '3.5rem'],
      '5xl': ['3.75rem'],
      '6xl': ['5.625rem', '5.625rem'],
    },
    extend: {
      colors: {
        primary: '#4CB5C3',
        secondary: '#465160',
        dark: '#212020',
        'dark-blue': '#06698F',
        brown: '#4A3D0B',
        gray: '#464646',
        'light-gray': '#757575',
        'medium-gray': '#3A3A3A',
        'gray-black': '#2b2b2b',
        'muted-gray': '#2A2A2A',
        yellow: ' #FFEB04',
      },
    },
  },
  plugins: [],
};
