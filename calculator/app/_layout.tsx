import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { View } from 'react-native'

import { APP } from '@/constants/theme'
import globalStyles from '@/styles/global'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
	const [loaded] = useFonts({
		[APP.fonts.primary]: require('../assets/fonts/SpaceMono-Regular.ttf')
	})

	if (!loaded) return null

	return (
		<View style={globalStyles.mainContainer}>
			<Slot />
			<StatusBar style="auto" />
		</View>
	)
}
