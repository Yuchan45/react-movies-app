import axios from 'axios';


const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '612d35ce35f9b346cbfa8fd00595b826';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

const tmdbApi = {
    API_URL: 'https://api.themoviedb.org/3',
    API_KEY: '612d35ce35f9b346cbfa8fd00595b826',
    IMAGE_PATH: 'https://image.tmdb.org/t/p/original',
    URL_IMAGE: 'https://image.tmdb.org/t/p/original',
    
    discover: async(type) =>  {
		// type recieves 'movie' or 'tv'
		try {
			const response = await axios.get(`${API_URL}/discover/${type}`, {
				params: {
					api_key: API_KEY,
					query: "",
					page: 1
				}
			});
			return response.data.results;
		} catch (error) {
			console.error(error);
		}
	},
	searchMovies: async(searchKey) =>  {
		try {
			const response = await axios.get(`${API_URL}/search/movie`, {
				params: {
					api_key: API_KEY,
					query: searchKey
				}
			});
			return response.data.results;
		} catch (error) {
			console.error(error);
		}
	},
	getTrending: async(type, page) =>  {
		try {
			const response = await axios.get(`${API_URL}/trending/${type}/week`, {
				params: {
					api_key: API_KEY,
					page: page
				}
			});
			return response.data.results;
		} catch (error) {
			console.error(error);
		}
	},
    getGenres: async(type) => {
        // type can be (movie or tv)
        try {
			const response = await axios.get(`${API_URL}/genre/${type}/list`, {
				params: {
					api_key: API_KEY
				}
			});
			return response.data.genres;
		} catch (error) {
			console.error(error);
		}
    },
	getPopularMovies: async() =>  {
		try {
			const response = await axios.get(`${API_URL}/movie/popular`, {
				params: {
					api_key: API_KEY,
					page: 1
				}
			});
			return response.data.results;
		} catch (error) {
			console.error(error);
		}
	},
	getPopularTv: async() =>  {
		try {
			const response = await axios.get(`${API_URL}/tv/popular`, {
				params: {
					api_key: API_KEY,
					page: 1
				}
			});
			return response.data.results;
		} catch (error) {
			console.error(error);
		}
	},
    test: () => {
        alert("Hola");
    }
};

export default tmdbApi;