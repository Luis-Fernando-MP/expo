import { APP } from '@/constants/theme'
import React from 'react'
import { Text as RNText, StyleSheet, TextProps } from 'react-native'

const { colors, fontSizes, fonts } = APP

export type APPColors = keyof typeof colors
export type FontVariants = keyof typeof fontSizes
export type APPFonts = keyof typeof fonts

interface CustomTextProps extends TextProps {
	variant?: FontVariants
	color?: APPColors
}

export const Text: React.FC<CustomTextProps> = ({ variant = 'p', color = 'fn1', style, children, ...props }) => {
	const { size, weight } = fontSizes[variant]

	return (
		<RNText
			style={[
				styles.text,
				{
					fontSize: size,
					fontWeight: weight,
					color: colors[color]
				},
				style
			]}
			{...props}
		>
			{children}
		</RNText>
	)
}

const styles = StyleSheet.create({
	text: {
		includeFontPadding: false,
		fontFamily: fonts.primary
	}
})
