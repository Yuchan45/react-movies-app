import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

import tmdbApi from '../../apis/tmdbApi'
import './HeroSlider.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';

function HeroSlider() {
	const [trending, setTrending] = useState([]);
	const [movieGenres, setMovieGenres] = useState([]);
	const [tvGenres, setTvGenres] = useState([]);

	const fetchTrending = async (type) => {
		const data = await tmdbApi.getTrending(type, 1);
		setTrending(data.slice(0, 4));
	}

	const fetchGenres = async (type) => {
		const data = await tmdbApi.getGenres(type);
		(type=='movie') ? setMovieGenres(data) : setTvGenres(data);
	}

	useEffect(() => {
		fetchTrending('all');
		fetchGenres('movie');
		fetchGenres('tv');
	}, []);


	const TvMovieGenres = ({ show }) => {
		if (show.media_type == 'tv') {
			return show.genre_ids.map((showGenre, index) => {
				for (let i=0; i < tvGenres.length; i++) {
					if (tvGenres[i].id === showGenre) {
						return <li key={index}>{tvGenres[i].name}</li>
					}
				}
			})
		} else {
			return show.genre_ids.map((showGenre, index) => {
				for (let i=0; i < movieGenres.length; i++) {
					if (movieGenres[i].id === showGenre) {
						return <li key={index}>{movieGenres[i].name}</li>
					}
				}
			})
		}
	}


	return (
		<div className="hero-slide">
			<Swiper
				modules={[Pagination, EffectFade]} 
				effect="fade"
				spaceBetween={0}
				slidesPerView={1}
				onSwiper={(swiper) => console.log(swiper)}
				pagination={{
					clickable: true,
				}}
				loop={true}
			>
				{
					trending.map((show, i) => (
						<SwiperSlide key={i}>
							<img src={`${tmdbApi.IMAGE_PATH + show.backdrop_path}`} alt="" className='hero-slide-img'  />
							<div className="slide-content">
								<div className="information">
									<p className="hero-stars">Rating: {Math.round((show.vote_average) * 10) / 10}</p>
									<h2 className="hero-title">{(show) ? show.original_title || show.name || show.original_name : 'No Title'}</h2>
									<ul className='genres-list'>
										<TvMovieGenres show={show} />
									</ul>
								</div>
								<Link to={`/${show.media_type}/${show.id}`}>
									<button className="hero-trailer">More Info</button>
								</Link>
								
							</div>
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}

export default HeroSlider