import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { Platform, View } from 'react-native'

import { APP } from '@/constants/theme'
import globalStyles from '@/styles/global'
import { StatusBar } from 'expo-status-bar'

import * as NavigationBar from 'expo-navigation-bar'

const isAndroid = Platform.OS === 'android'
if (isAndroid) NavigationBar.setBackgroundColorAsync(APP.colors.bg1)

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
