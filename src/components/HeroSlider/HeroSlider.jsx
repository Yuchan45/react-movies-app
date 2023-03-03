import React, { useState, useEffect } from 'react'
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
	const [genres, setGenres] = useState([]);

	const fetchTrending = async (type) => {
		const data = await tmdbApi.getTrending(type, 1);
		setTrending(data.slice(0, 4));
	}

	const fetchGenres = async (type) => {
		const data = await tmdbApi.getGenres(type);
		setGenres(data);
	}

	useEffect(() => {
		fetchTrending('movie');
		fetchGenres('movie');
	}, []);

	return (
		<div className="hero-slide">
			<Swiper
				modules={[Pagination, EffectFade]} 
				effect="fade"
				spaceBetween={0}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				pagination={{
					clickable: true,
				}}
				loop={true}
			>
				{
					trending.map((movie, i) => (
						<SwiperSlide key={i}>
							<img src={`${tmdbApi.IMAGE_PATH + movie.backdrop_path}`} alt="" className='hero-slide-img'  />
							<div className="slide-content">
								<div className="information">
									<p className="hero-stars">Rating: {Math.round((movie.vote_average) * 10) / 10}</p>
									<h2 className="hero-title">{movie.original_title}</h2>
									<ul className='genres-list'>
										{
										movie.genre_ids.map((movieGenre, i) => {
											{
												for (let i=0; i < genres.length; i++) {
													if (genres[i].id === movieGenre) {
														return <li key={i}>{genres[i].name}</li>
													}
												}
											}
										})
										}
									</ul>
								</div>
								<button className="hero-trailer">Watch Trailer</button>
							</div>
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}

export default HeroSlider