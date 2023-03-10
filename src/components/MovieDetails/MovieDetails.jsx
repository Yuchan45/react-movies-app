import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

import YouTube from 'react-youtube';

import "./MovieDetails.css";
import tmdbApi from "../../apis/tmdbApi";

import CastSlider from '../CastSlider/CastSlider';
import ShowsSlider from '../ShowsSlider/ShowsSlider';
import Footer from '../Footer/Footer';

function MovieDetails() {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	

	const fetchMovie = async (type, id) => {
		const data = await tmdbApi.getById(type, id);
		setMovie(data);
	};

	useEffect(() => {
		fetchMovie("movie", id);
	}, []);


	return (
		<div className="movie-details-container">
			<div className="background-container">
				<div className="movie-banner">
					<img src={movie.backdrop_path ? `${tmdbApi.IMAGE_PATH + movie.backdrop_path}` : '../../images/not-found-banner.png'} alt="../../images/HBO_Max_Logo.png" />
				</div>
				<div className="banner-overlay"></div>
				<div className="banner-bottom"></div>
			</div>
			<div className="movie-information-wrapper">
				<div className="poster-image">
					<img src={movie.poster_path ? `${tmdbApi.IMAGE_PATH + movie.poster_path}` : '../../images/not-found-banner.png'} alt="" />
				</div>
				<div className="movie-data">
					<div className="movie-data-top">
						<h1>{movie ? movie.original_title || movie.name || movie.original_name : 'No Title'}</h1>
						<ul>
							{
								// Por un tema de los ciclos de renderizado, hay que preguntar si el array existe antes.
								// De no hacerlo, creo que trata de hacerf el map sobre el array aun no creado y muere.
								movie.genres?.map((genre, i) => {
									return <li key={i}>{genre.name}</li>
								})
							}
						</ul>
						<p>{movie ? movie.overview : 'No summary'}</p>
					</div>
					<div className="cast-section">
						<CastSlider type={"movie"} showId={id} />
					</div>
				</div>
			</div>
			<div className="bottom-content">
				<YouTube 
					videoId="eFYUX9l-m5I"
				/>
				<div className="show-slide">
					<div className="sliders-top">
						<h2>Trending</h2>
						<Link to="/trending" className='slider-show-more'>Show More</Link>
					</div>
					{/* Trending */}
					<ShowsSlider type={'trending'} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default MovieDetails;
