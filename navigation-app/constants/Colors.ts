import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

type Colors = {
	bg1: string
	bg2: string
	bg3: string

	fn1: string
	fn2: string
	fnA: string

	tn1: {
		DEFAULT: string
		500: string
		700: string
	}
}

const fullConfig = resolveConfig(tailwindConfig)
export const COLORS = fullConfig.theme.colors as any as Colors
