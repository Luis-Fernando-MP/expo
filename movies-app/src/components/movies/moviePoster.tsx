import { Image, Pressable } from 'react-native'

import type { FC } from 'react'

interface Props {
	id: number
	poster: string
	variant?: 'small' | 'big'
}

const MoviePoster: FC<Props> = ({ id, poster, variant = 'small' }) => {
	return (
		<Pressable className="active:opacity-70">
			<Image
				className="rounded-2xl shadow-lg w-full h-full"
				source={{ uri: poster }}
				resizeMode="cover"
				style={{
					width: variant === 'big' ? 150 : 85,
					height: variant === 'big' ? 250 : 130
				}}
			/>
		</Pressable>
	)
}

export default MoviePoster
