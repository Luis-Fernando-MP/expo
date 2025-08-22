import { Stack } from 'expo-router'
import type { FC } from 'react'

const StackLayout: FC = () => {
	return <Stack screenOptions={{ headerShown: false, animation: 'ios_from_right' }}></Stack>
}

export default StackLayout
