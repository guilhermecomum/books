/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/happy-female-student-in-library.jpg')"
      }
    },
  },
  plugins: [],
};
