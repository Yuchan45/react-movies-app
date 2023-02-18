import React, { useState, useEffect } from 'react'
import tmdbApi from '../../apis/tmdbApi'
import './HeroSlider.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function HeroSlider() {
	const [trending, setTrending] = useState([]);

	const fetchTrending = async (type) => {
		const data = await tmdbApi.trending(type, 1);
		setTrending(data.slice(0, 4));
		console.log("Trending >>", data);
	}

	useEffect(() => {
		fetchTrending('all');
	}, []);

	return (
		<div className="hero-slide">
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{
					trending.map((movie, i) => (
						<SwiperSlide key={i}>
							<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
						</SwiperSlide>
					))
				}

				


			</Swiper>
		</div>
	)
}

export default HeroSlider