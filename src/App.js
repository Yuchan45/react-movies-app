import React, { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import YouTube from 'react-youtube';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Trending from './components/Trending/Trending';
import NotFound from './components/NotFound';

function App() {
	const API_URL = 'https://api.themoviedb.org/3';
	const API_KEY = '612d35ce35f9b346cbfa8fd00595b826';
	const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
	const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

	// Variables de estado
	const [movies, setMovies] = useState([]);
	const [searchKey, setsearchKey] = useState("");
	const [trailer, setTrailer] = useState(null);
	const [movie, setMovie] = useState({title: "Loading Movies" });
	const [playing, setPlaying] = useState(false);


	// Funcion para realizar get a la API.
	const discoverMovies = async() =>  {
		try {
			const response = await axios.get(`${API_URL}/discover/movie`, {
				params: {
					api_key: API_KEY,
					query: ""
				}
			});
			console.log(response.data.results);
			setMovies(response.data.results);
		} catch (error) {
			console.error(error);
		}
	}
	const searchMovies = async() =>  {
		try {
			const response = await axios.get(`${API_URL}/search/movie`, {
				params: {
					api_key: API_KEY,
					query: searchKey
				}
			});
			console.log(response);
			setMovies(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		discoverMovies();

	}, []);


	return (
		<div className="App">
			<div className="app-container">
				<Navbar />
				<Home />
			</div>

			{/* En react se utilizan los 'Routes' para decir que cosa cargar segun el link */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/series" element={<Series />} />
				<Route path="/trending" element={<Trending />} />
				<Route path='*' element={<NotFound />}/>
			</Routes>
		</div>
	);
}

export default App;
