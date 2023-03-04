import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

import { Link } from "react-router-dom";

import tmdbApi from "../../apis/tmdbApi";

function MovieDetails() {
	const { id } = useParams();
	const [movie, setMovie] = useState({});

	const fetchMovie = async (type, id) => {
		const data = await tmdbApi.getById(type, id);
		console.log("data >>: ", data);
		setMovie(data);
	};

	useEffect(() => {
		fetchMovie("movie", id);
	}, []);

	return (
		<div className="movie-details-container">
			<div className="background-container">
				<div className="movie-banner">
					<img src={`${tmdbApi.IMAGE_PATH + movie.backdrop_path}`} alt="" />
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
						<h1>Title</h1>
						<ul>
						<li>Genre1</li>
						<li>Genre2</li>
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
