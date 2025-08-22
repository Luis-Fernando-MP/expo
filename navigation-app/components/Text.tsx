import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

export type FontVariants = keyof typeof fontVariants

const fontVariants = {
	p: 'text-base',
	small: 'text-sm',
	tiny: 'text-xs',

	h1: 'text-5xl',
	h2: 'text-4xl',
	h3: 'text-3xl',
	h4: 'text-2xl',
	h5: 'text-xl',
	h6: 'text-lg',

	label: 'text-sm uppercase',
	caption: 'text-xs'
} as const

interface CustomTextProps extends TextProps {
	variant?: FontVariants
}

export const Text: React.FC<CustomTextProps> = ({ variant = 'p', className = '', children, ...props }) => {
	const variantClasses = fontVariants[variant]

	return (
		<RNText className={`${className} ${variantClasses}`} {...props}>
			{children}
		</RNText>
	)
}
