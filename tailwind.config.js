

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Jakarta: ["Plus Jakarta Sans", "sans-serif"]
      },

    
    },
  },
  plugins: [],
};
