import axios from 'axios'

const moviesApi = axios.create({
	baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
	params: {
		language: 'es-PE',
		api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY
	}
})

export default moviesApi
