/** @type {import('tailwindcss').Config} */

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    backgroundColor: {
      offwhite: '#f5f5fa',
      darkButNotBlack: '#13131a',
    },
    colors: {
      offwhite: '#f5f5fa',
      darkButNotBlack: '#13131a',
    },
    boxShadow: {
      input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
    },
  },
};

export const plugins = [
  require('tailwindcss-3d')({ legacy: true }),
  require('tailwind-clip-path'),
];
