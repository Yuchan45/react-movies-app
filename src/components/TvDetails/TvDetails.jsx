import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./TvDetails.css";

import { Link } from "react-router-dom";

import tmdbApi from "../../apis/tmdbApi";

import CastSlider from '../CastSlider/CastSlider';
import ShowsSlider from '../ShowsSlider/ShowsSlider';
import Footer from '../Footer/Footer';

function TvDetails() {
	const { id } = useParams();
	const [tvShow, setTvShow] = useState({});
	

	const fetchTvShow = async (type, id) => {
		const data = await tmdbApi.getById(type, id);
		setTvShow(data);
	};

	useEffect(() => {
		fetchTvShow("tv", id);
	}, []);


	return (
		<div className="movie-details-container">
			<div className="background-container">
				<div className="movie-banner">
					<img src={tvShow.backdrop_path ? `${tmdbApi.IMAGE_PATH + tvShow.backdrop_path}` : '../../images/not-found-banner.png'} alt="../../images/HBO_Max_Logo.png" />
				</div>
				<div className="banner-overlay"></div>
				<div className="banner-bottom"></div>
			</div>
			<div className="movie-information-wrapper">
				<div className="poster-image">
					<img src={tvShow.poster_path ? `${tmdbApi.IMAGE_PATH + tvShow.poster_path}` : '../../images/not-found-banner.png'} alt="" />
				</div>
				<div className="movie-data">
					<div className="movie-data-top">
						<h1>{tvShow ? tvShow.original_title || tvShow.name || tvShow.original_name : 'No Title'}</h1>
						<ul>
							{
								// Por un tema de los ciclos de renderizado, hay que preguntar si el array existe antes.
								// De no hacerlo, creo que trata de hacerf el map sobre el array aun no creado y muere.
								tvShow.genres?.map((genre, i) => {
									return <li key={i}>{genre.name}</li>
								})
							}
						</ul>
						<p>{tvShow ? tvShow.overview : 'No summary'}</p>
					</div>
					<div className="cast-section">
						<CastSlider type={"tv"} showId={id} />
					</div>
				</div>
			</div>
			<div className="show-slide">
				<div className="sliders-top">
					<h2>Trending</h2>
					<Link to="/trending" className='slider-show-more'>Show More</Link>
				</div>
				{/* Trending */}
				<ShowsSlider type={'trending'} />
			</div>
			<Footer />
		</div>
	);
}

export default TvDetails;
