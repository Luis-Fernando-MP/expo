import { InstrumentSerif_400Regular_Italic, useFonts as useInstrumentalFonts } from '@expo-google-fonts/instrument-serif'
import { Roboto_400Regular, Roboto_800ExtraBold, useFonts as useRobotoFonts } from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export const useLoadFonts = () => {
	const [instrumentalLoaded, instrumentalError] = useInstrumentalFonts({
		InstrumentSerif_400Regular_Italic
	})

	const [robotoLoaded, robotoError] = useRobotoFonts({
		Roboto_400Regular,
		Roboto_800ExtraBold
	})

	useEffect(() => {
		if (robotoError || instrumentalError) {
			throw new Error('Failed to load fonts')
		}
		if (instrumentalLoaded && robotoLoaded) {
			SplashScreen.hideAsync()
		}
	}, [robotoError, instrumentalError, instrumentalLoaded, robotoLoaded])

	return instrumentalLoaded && robotoLoaded
}
