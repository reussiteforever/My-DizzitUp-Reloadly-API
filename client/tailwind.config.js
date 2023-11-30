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
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    colors: {
      'custom-blue': '#20365b', //primary color
      'custom-yellow': '#FFC759', //secondary color
      'primary-color': '#FCFCFB',
      'custom-text': '#878FA4',
      'custom-accent': '#B9B9B9',
      'custom-white': '#FFFFFF',
      'custom-black': '#000000',
      'custom-blue-light': '#B1D5EF',
      // Add more custom colors here
    },
  },
};
export const plugins = [];

