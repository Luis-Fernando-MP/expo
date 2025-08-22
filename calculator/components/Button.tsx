import { APP } from '@/constants/theme'
import * as Haptics from 'expo-haptics'
import React from 'react'
import { Pressable, StyleSheet, TouchableOpacityProps } from 'react-native'
import { Text } from './Text'

const styles = StyleSheet.create({
	button: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: APP.radius.max,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		width: 'auto',
		alignSelf: 'flex-start',
		borderWidth: 1,
		borderColor: APP.colors.bg3
	}
})

const variants = {
	primary: {
		backgroundColor: APP.colors.tn1,
		textColor: APP.colors.fnA
	},
	secondary: {
		backgroundColor: APP.colors.bg2,
		textColor: APP.colors.fn1
	},
	tertiary: {
		backgroundColor: APP.colors.bg3,
		textColor: APP.colors.fn1
	}
} as const

interface ButtonProps extends TouchableOpacityProps {
	variant?: keyof typeof variants
	textVariant?: keyof typeof APP.fontSizes
}

export const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	children,
	textVariant = 'h4',
	style,
	onPress,
	...props
}) => {
	const { backgroundColor, textColor } = variants[variant]

	const buttonStyle = [styles.button, style]

	return (
		<Pressable
			style={({ pressed }) => {
				return [...buttonStyle, { backgroundColor, opacity: pressed ? 0.7 : 1 }]
			}}
			{...props}
			onPress={(e) => {
				Haptics.selectionAsync()
				onPress && onPress(e)
			}}
		>
			<Text variant={textVariant} style={{ color: textColor }}>
				{children}
			</Text>
		</Pressable>
	)
}
