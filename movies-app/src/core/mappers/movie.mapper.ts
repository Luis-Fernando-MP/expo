import { MovieResponse } from '../types/movies/movies.response'
import { Movie } from '../types/movies/movies.type'

class MovieMapper {
	static fromResponse(response: MovieResponse): Movie {
		const { id, title, overview, release_date, poster_path, backdrop_path, vote_average } = response
		return {
			id,
			title,
			description: overview,
			releaseDate: new Date(release_date),
			poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
			rating: vote_average
		}
	}
}

export default MovieMapper
