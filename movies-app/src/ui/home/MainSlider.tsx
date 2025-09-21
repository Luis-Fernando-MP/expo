import { useWindowDimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import MoviePoster from '@/src/components/movies/moviePoster'
import { Movie } from '@/src/core/types/movies/movies.type'
import type { FC } from 'react'

interface Props {
	movies: Movie[]
}

const MainSlider: FC<Props> = ({ movies }) => {
	const { width } = useWindowDimensions()

	return (
		<View className="h-[250px] w-full">
			<Carousel
				autoPlay
				autoPlayInterval={2000}
				data={movies}
				renderItem={({ item }) => <MoviePoster variant="big" id={item.id} poster={item.poster} />}
				width={200}
				height={350}
				loop
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 50
				}}
				style={{
					width,
					height: 350,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			/>
		</View>
	)
}

export default MainSlider
