/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {

    extend: {
      colors: {
        background: '#0F232C',
        Togreen: '#1EB500',
        orange: '#F79600',
        blue: '#009AD6',
      }
    },
  },
  plugins: [],
}