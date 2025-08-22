/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto_400Regular', 'sans-serif'],
				roboto_extra_bold: ['Roboto_800ExtraBold', 'sans-serif'],
				instrument: ['InstrumentSerif_400Regular_Italic', 'serif']
			},
			colors: {
				// Fondos
				bg1: '#121212',
				bg2: '#1E1E1E',
				bg3: '#2A2A2A',

				// Tipografía
				fn1: '#F5F5F5', 
				fn2: '#B3B3B3', 
				// contraste sobre tn1 (texto de botones)
				fnA: '#FFFFFF', 

				// Tono principal
				tn1: {
					DEFAULT: '#FF4D4D', 
					500: '#E64545',
					700: '#CC3C3C'
				}
			}
		}
	},
	plugins: []
}
