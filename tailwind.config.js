/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',         // Orange main brand color
        'primary-dark': '#EA580C',  // Darker orange for hover, gradients
        background: '#FFFFFF',      // White background
        surface: '#F9FAFB',         // Off-white / light surface
        text: '#000000ff',            // Almost black text
        'text-light': '#000000ff',    // Gray for secondary text
      },
    },
  },
  plugins: [],
};
