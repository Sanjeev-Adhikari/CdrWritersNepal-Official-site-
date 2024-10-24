
export default {
  content: [
     "./src/**/*.ejs",
     "./views/**/*.ejs",
  "./src/views/**/*.ejs",
   
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'Arial', 'sans-serif'],  
      },
      colors: {
        customRed: '#B71C1C', // Adding your custom red shade
      },
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 3px 6px rgba(0, 0, 0, 0.15)',
        'lg': '0 10px 20px rgba(0, 0, 0, 0.2)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      },
      clipPath: {
        'zigzag': 'polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0% 100%, 0% 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 3px 6px rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-xl': {
          textShadow: '0 20px 25px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },

    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-zigzag': {
          clipPath: 'polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0% 100%, 0% 100%)',
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

