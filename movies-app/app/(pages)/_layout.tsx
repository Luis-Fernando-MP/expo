import { View } from 'react-native'

import { Slot } from 'expo-router'
import type { FC } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Layout: FC = () => {
	const { top } = useSafeAreaInsets()
	return (
		<View className="flex-1 bg-slate-800" style={{ paddingTop: top }}>
			<Slot />
		</View>
	)
}

export default Layout
