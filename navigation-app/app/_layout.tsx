import { View } from 'react-native'
import './global.css'

import { useLoadFonts } from '@/hooks/useLoadFonts'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomDrawer from '../components/Drawer'

const Bootstrap = () => {
	const insets = useSafeAreaInsets()
	const fontsLoaded = useLoadFonts()

	if (!fontsLoaded) return null

	return (
		<View className="flex-1 bg-bg1">
			<StatusBar style="auto" />
			{/* <CustomStack> */}
			<CustomDrawer>
				<SafeAreaProvider style={{ paddingTop: insets.top }}>
					<Slot />
				</SafeAreaProvider>
			</CustomDrawer>
			{/* </CustomStack> */}
		</View>
	)
}

export default Bootstrap
