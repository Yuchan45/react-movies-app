import React, { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import YouTube from 'react-youtube';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Trending from './components/Trending/Trending';
import Search from './components/Search/Search';
import NotFound from './components/NotFound';

import tmdbApi from './apis/tmdbApi'

function App() {
	// Variables de estado
	const [movies, setMovies] = useState([]);
	const [trailer, setTrailer] = useState(null);
	const [playing, setPlaying] = useState(false);


	useEffect(() => {
		const fetchDiscover = async (type) => {
			const data = await tmdbApi.discover(type);
			setMovies(data);
			console.log("Discover >>", data);
		}

		fetchDiscover('movie');

	}, []);


	return (
		<div className="App">
			<div className="app-container">
				<Navbar />
			</div>

			
			{/* En react se utilizan los 'Routes' para decir que cosa cargar segun el link */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/series" element={<Series />} />
				<Route path="/trending" element={<Trending />} />
				<Route path="/search" element={<Search />} />
				<Route path='*' element={<NotFound />}/>
			</Routes>
		</div>
	);
}

export default App;
