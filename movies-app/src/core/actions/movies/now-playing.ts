import moviesApi from '../../api/movies-api'
import MovieMapper from '../../mappers/movie.mapper'
import { MoviesResponse } from '../../types/movies/movies.response'

const nowPlayingAction = async () => {
	try {
		const { data } = await moviesApi.get<MoviesResponse>('/now_playing')
		const movies = data.results.map(MovieMapper.fromResponse)
		return movies
	} catch (error) {
		console.error(error)
		throw new Error('Fail to load now playing movies')
	}
}

export default nowPlayingAction
