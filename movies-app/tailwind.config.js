/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./components/**/*.{js,jsx,ts,tsx}','./app/**/*.{js,jsx,ts,tsx}'],
   presets: [require('nativewind/preset')],
   theme: {
      extend: {
         fontFamily: {
            roboto: ['Roboto_400Regular', 'sans-serif'],
            roboto_extra_bold: ['Roboto_800ExtraBold', 'sans-serif'],
            instrument: ['InstrumentSerif_400Regular_Italic', 'serif']
         },
         colors: {
            // Fondo
            bg1: '#1D2021',
            bg2: '#1A1A1A',
            bg3: '#262626',
				// Textos
            fn1: '#EFEFEF', 
            fn2: '#E6D7AF', 
            // Botones, acentos
            fnA: { 
               DEFAULT: '#FFB86C',
               500: '#FF9933',
               700: '#E68A00'
            },
				// Color principal, para elementos activos, focus, etc.
            tn1: { 
               DEFAULT: '#7AA2F7',
               500: '#5C8EF5',
               700: '#477BE3'
            }
         }
      }
   },
   plugins: []
}