/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    
  },
  daisyui: {
    themes: [""],
  },
    plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}
