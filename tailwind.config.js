// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'custom-gradient': 'linear-gradient(rgb(253, 233, 242) 0%, rgb(253, 240, 232) 100%)', // Custom gradient
      },
      colors: {
        // 'custom-light-blue': '#EDEAFF', // Custom color
      },
    },
  },
  plugins: [],
}
