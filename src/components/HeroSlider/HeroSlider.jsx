import React, { useState, useEffect, useRef } from 'react'
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

	const fetchTrending = async (type) => {
		const data = await tmdbApi.trending(type, 1);
		setTrending(data.slice(0, 4));
	}

	useEffect(() => {
		fetchTrending('all');
	}, []);

	return (
		<div className="hero-slide">
			<Swiper
				pagination={true}
				modules={[Pagination, EffectFade]} 
				effect="fade"
				spaceBetween={0}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>

				{
					trending.map((movie, i) => (
						<SwiperSlide key={i}>
							<img src={`${tmdbApi.IMAGE_PATH + movie.backdrop_path}`} alt="" className='hero-slide-img' />
						</SwiperSlide>
					))
				}

				


			</Swiper>
		</div>
	)
}

export default HeroSlider