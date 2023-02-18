import axios from 'axios';


export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '612d35ce35f9b346cbfa8fd00595b826';
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
export const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

const tmdbApi = {
    discover: async(type) =>  {
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
    searchTv: async(searchKey) =>  {
		try {
			const response = await axios.get(`${API_URL}/search/tv`, {
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
	trending: async(type, page) =>  {
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
    test: () => {
        alert("Hola");
    }
};

export default tmdbApi;