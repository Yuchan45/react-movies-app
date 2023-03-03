import React, { useState, useEffect, useRef } from 'react';
import './ShowsSlider.css';
import tmdbApi from '../../apis/tmdbApi';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


function ShowsSlider({type}) {
	const [shows, setShows] = useState([]);

	const fetchTrending = async (type) => {
		const data = await tmdbApi.getTrending(type, 1);
		setShows(data.slice(0, 8));
	}

	const fetchDiscover = async (type) => {
		const data = await tmdbApi.discover(type);
		setShows(data.slice(0, 8));
	}

	const fetchPopularTv = async () => {
		const data = await tmdbApi.getPopularTv();
		setShows(data.slice(0, 8));
	}

	const selectType = (type) => {
		switch (type) {
			case 'trending':
				fetchTrending('all');
			  	break;
			case 'discover':
				fetchDiscover('movie');
			  	break;
			case 'popularTv':
				fetchPopularTv();
				break;
			default:
			  	console.log('Error while selecting showSliders type');
				return -1;
		  }
	}

	useEffect(() => {
		selectType(type);
	}, []);

  
	return (
		<div className="shows-list">
			<Swiper
				modules={[Pagination]}
				slidesPerView={'auto'}
				spaceBetween={10}
				pagination={false}
				grabCursor={true}
				className="mySwiper"
			>
				{
					shows.map((show, i) => (
						<SwiperSlide key={i}>
							<img src={`${tmdbApi.IMAGE_PATH + show.poster_path}`} alt="" className='shows-slide-img'  />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}

export default ShowsSlider