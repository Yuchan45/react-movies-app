import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
// import YouTube from 'react-youtube';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Tv from './components/Tv/Tv';
import Trending from './components/Trending/Trending';
import Search from './components/Search/Search';
import NotFound from './components/NotFound';

function App() {



	return (
		<div className="App">
			<div className="app-container">
				<Navbar />
				
			</div>

			
			{/* En react se utilizan los 'Routes' para decir que cosa cargar segun el link */}
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/movie" element={<Movies />} />
				<Route path="/movie/:id" element={<MovieDetails />} />
				
				<Route path="/tv" element={<Movies />} />
				<Route path="/tv/:id" element={<Tv />} />

				<Route path="/trending" element={<Trending />} />
				<Route path="/search" element={<Search />} />
				<Route path='*' element={<NotFound />}/>
			</Routes>
		</div>
	);
}

export default App;
