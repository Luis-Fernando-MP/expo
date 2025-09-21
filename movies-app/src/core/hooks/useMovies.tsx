import { useQuery } from '@tanstack/react-query'
import nowPlayingAction from '../actions/movies/now-playing'

const useMovies = () => {
	const nowPlayingQuery = useQuery({
		queryKey: ['movies', 'now-playing'],
		queryFn: nowPlayingAction,
		staleTime: 1000 * 60 * 60 * 24 // 20h para refrescar la data
	})

	return { nowPlayingQuery }
}

export default useMovies
