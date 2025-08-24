import * as Haptics from 'expo-haptics'
import React, { type FC, ReactNode } from 'react'
import { Pressable, PressableProps, PressableStateCallbackType, View } from 'react-native'
import { type FontVariants } from './Text'

const variants = {
	primary: {
		backgroundClass: 'bg-tn1'
	},
	contained: {
		backgroundClass: 'bg-bg2'
	},
	'text-only': {
		backgroundClass: 'bg-bg3'
	}
} as const

type PressableNoChildren = Omit<PressableProps, 'children'>

interface ButtonProps extends PressableNoChildren {
	variant?: keyof typeof variants
	textVariant?: FontVariants
	textClassName?: string
	children?: ReactNode
	noPadding?: boolean
}

export const Button: FC<ButtonProps> = ({
	variant = 'contained',
	children,
	textVariant = 'h4',
	onPress,
	className = '',
	textClassName = '',
	noPadding = false,
	...props
}) => {
	const { backgroundClass } = variants[variant]

	const baseClasses = 'border border-bg3 self-start'

	const pressableClassName = `${!noPadding && 'py-2 px-4'} ${backgroundClass} ${baseClasses} ${className}`.trim()

	return (
		<Pressable
			className={pressableClassName}
			onPress={(e) => {
				void Haptics.selectionAsync()
				onPress && onPress(e)
			}}
			{...props}
			style={({ pressed }: PressableStateCallbackType) => ({ opacity: pressed ? 0.7 : 1 })}
		>
			<View className="flex-row items-center justify-center gap-4">{children}</View>
		</Pressable>
	)
}
