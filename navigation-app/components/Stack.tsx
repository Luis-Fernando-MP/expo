import { Stack } from 'expo-router'
import type { FC, ReactElement } from 'react'

interface Props {
	children?: ReactElement | ReactElement[]
}

const CustomStack: FC<Props> = ({ children }) => {
	return (
		<Stack screenOptions={{ animation: 'ios_from_right' }}>
			<Stack.Screen name="(pages)" />
			<Stack.Screen name="auth/index" />
			{children}
		</Stack>
	)
}

export default CustomStack
