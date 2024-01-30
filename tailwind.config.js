/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
  ],

  theme: {
    extend: {
      colors: {
        'default': '#dedede',
        'primary': '#3f45e3',
        'secondary': '#1b8311',
      },
      lineHeight: {
        '20px': '20px',
      },
    },
  },
  plugins: [],
}