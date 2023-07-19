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

        'dark-gradient': 'var(--dark-gradient)',
        'light-gradient': 'var(--light-gradient)',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        placeholder: 'var(--placeholder)',
        warning: 'var(--warning)',
        navigation: 'var(--navigation)',
      },
      fontFamily: {
        heading: 'var(--font-ibm-plex-sans), sans-serif',
        body: 'var(--font-nunito), sans-serif',
      },
    },
  },
  plugins: [],
};
