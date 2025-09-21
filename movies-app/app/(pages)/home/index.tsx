import { ActivityIndicator, View } from 'react-native'

import { Text } from '@/src/components/Text'
import useMovies from '@/src/core/hooks/useMovies'
import MainSlider from '@/src/ui/home/MainSlider'
import type { FC } from 'react'

const Home: FC = () => {
	const { nowPlayingQuery } = useMovies()
	const { data, isLoading, isFetching } = nowPlayingQuery

	if (isLoading || isFetching /* Para cuando haya data en cache */) {
		return (
			<View className="justify-center items-center flex-1">
				<ActivityIndicator size={30} color={'#000'} />
			</View>
		)
	}

	return (
		<View className="bg-bg1 flex-1">
			<Text variant="h2" className="m-5">
				<Text className="color-fn1" variant="h2">
					HAUI&nbsp;
				</Text>
				<Text className="color-tn1 font-black " variant="h2">
					Movies
				</Text>
			</Text>
			<MainSlider movies={data ?? []} />
		</View>
	)
}

export default Home
