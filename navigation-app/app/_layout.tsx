import { View } from 'react-native'
import './global.css'

import { useLoadFonts } from '@/hooks/useLoadFonts'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

const Bootstrap = () => {
	const insets = useSafeAreaInsets()
	const fontsLoaded = useLoadFonts()

	if (!fontsLoaded) return null

	return (
		<View className="flex-1 bg-bg1 pb-10">
			<StatusBar style="auto" />
			<SafeAreaProvider style={{ paddingTop: insets.top }}>
				<Slot />
			</SafeAreaProvider>
		</View>
	)
}

export default Bootstrap
