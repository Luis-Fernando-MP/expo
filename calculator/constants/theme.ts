export const APP = {
	colors: {
		bg1: 'rgb(25, 26, 27)',
		bg2: 'rgb(32, 33, 34)',
		bg3: 'rgb(58, 59, 61)',

		fn1: 'rgb(235, 235, 235)',
		fn2: 'rgb(170, 172, 174)',
		fnA: 'rgb(255, 255, 255)',
		tn1: 'rgb(32, 108, 255)'
	},
	padding: 10,
	radius: {
		min: 5,
		max: 10
	},
	fontSizes: {
		xl: {
			size: 36, // 3.5rem ≈ 36px
			weight: '900'
		},
		h1: {
			size: 24, // 1.6rem ≈ 24px
			weight: '700'
		},
		h2: {
			size: 22, // 1.4rem ≈ 20px
			weight: '600'
		},
		h3: {
			size: 20, // 1.2rem ≈ 18px
			weight: '500'
		},
		h4: {
			size: 18, // 1rem ≈ 16px
			weight: '400'
		},
		p: {
			size: 16, // 1rem ≈ 16px
			weight: '400'
		}
	},
	fonts: {
		primary: 'SpaceMono',
		medium: 'SpaceMono-Medium',
		bold: 'SpaceMono-Bold'
	}
} as const
