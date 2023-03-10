import React, { useState, useEffect } from "react";
import './CastSlider.css';
import {Link} from 'react-router-dom';

import tmdbApi from "../../apis/tmdbApi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


function CastSlider({ type, showId }) {
    const [cast, setCast] = useState([]);

    const fetchCast = async (type, showId) => {
		const data = await tmdbApi.getCastingMembers(type, showId);
		setCast(data.cast.slice(0, 8));
	};

    useEffect(() => {
        fetchCast(type, showId);
	}, []);

    const SlideImage = ({ actor }) => {
        const url = actor.profile_path ? tmdbApi.IMAGE_PATH + actor.profile_path : require("./images/cast-no-profile.jpg");

		return (
            <div className="actor-slide-card">
                <img src={url} alt="Image Not Found" className='cast-slide-img'  />
                <p className="actor-name">{actor ? actor.name || actor.original_name : 'No name'}</p>
            </div>
		)
	}

    return (
        <div className="cast-slider">
            <h3>Casts</h3>
            <Swiper
				modules={[Pagination]}
				slidesPerView={'auto'}
				spaceBetween={10}
				pagination={false}
				grabCursor={true}
				className="mySwiper"
			>
				{
					cast.map((actor, i) => (
						<SwiperSlide key={i}>
							<SlideImage actor={actor} />
						</SwiperSlide>
					))
				}
			</Swiper>
        </div>
        
    )
}

export default CastSlider