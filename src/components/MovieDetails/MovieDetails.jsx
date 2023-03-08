import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

import { Link } from "react-router-dom";

import tmdbApi from "../../apis/tmdbApi";

import Footer from '../Footer/Footer'

function MovieDetails() {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [movieGenres, setMovieGenres] = useState([]);

	const fetchMovie = async (type, id) => {
		const data = await tmdbApi.getById(type, id);
		setMovie(data);
	};

	const fetchGenres = async (type) => {
		const data = await tmdbApi.getGenres(type);
		setMovieGenres(data);
	}

	useEffect(() => {
		fetchMovie("movie", id);
		fetchGenres('movie');
	}, []);

	const MovieGenres = ({ movie }) => {
		console.log(movie);
		return movie.genres.map((movieGenre, index) => {
			for (let i=0; i < movieGenres.length; i++) {
				if (movieGenres[i].id === movieGenre) {
					return <li key={index}>{movieGenres[i].name}</li>
				}
			}
		})
	}


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
					<img src="" alt="" />
				</div>
				<div className="movie-data">
					<div className="movie-data-top">
						<h1>{movie ? movie.original_title || movie.name || movie.original_name : 'No Title'}</h1>
						<ul>
							{
								movie.genres.map((genre, i) => {
									<li key={i}>{genre.name}</li>
								})
							}
						</ul>
						<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
						eveniet deleniti dignissimos. Dolor numquam facere, dignissimos
						illo provident sapiente fugit vitae amet porro, totam inventore?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieDetails;
