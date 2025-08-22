import { View } from 'react-native'
import './global.css'

import { useLoadFonts } from '@/hooks/useLoadFonts'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

const Bootstrap = () => {
	const insets = useSafeAreaInsets()
	const fontsLoaded = useLoadFonts()

	if (!fontsLoaded) return null

	return (
		<View className="flex-1 bg-bg1">
			<StatusBar style="auto" />
			<Stack screenOptions={{ animation: 'ios_from_right' }}>
				<Stack.Screen name="(pages)" />
				<Stack.Screen name="auth/index" />

				<SafeAreaProvider style={{ paddingTop: insets.top }}>
					<Slot />
				</SafeAreaProvider>
			</Stack>
		</View>
	)
}

export default Bootstrap
