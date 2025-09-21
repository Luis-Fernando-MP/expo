/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}','./app/**/*.{js,jsx,ts,tsx}'],
   presets: [require('nativewind/preset')], 
   theme: {
      extend: {
         fontFamily: {
            roboto: ['Roboto_400Regular', 'sans-serif'],
            roboto_extra_bold: ['Roboto_800ExtraBold', 'sans-serif'],
            instrument: ['InstrumentSerif_400Regular_Italic', 'serif']
         },
         colors: {
            // Fondos cálidos (arena/desierto)
            bg1: '#F9F6F1', // arena clara
            bg2: '#F0E6D2', // beige cálido
            bg3: '#E6D7AF', // tono más tostado
            
            // Textos
            fn1: '#2C2C2C',  // casi negro para contraste
            fn2: '#5A4E36',  // marrón suave (como tierra)
            
            // Botones, acentos (sol/naranja desierto)
            fnA: { 
               DEFAULT: '#E9A64D', // dorado cálido
               500: '#D98E2B',
               700: '#B86B15'
            },
            
            // Color principal (verde cactus)
            tn1: { 
               DEFAULT: '#3B7D5D',
               500: '#2E6A4F',
               700: '#24533D'
            }
         }
      }
   },
   plugins: []
}
