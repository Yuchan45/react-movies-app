import React, {useState, useEffect} from 'react';
import './Home.css'
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import ShowsSlider from '../ShowsSlider/ShowsSlider';

function Home() {


	return (
		/* Top Rated Movies */
		/* Top Rated TV */
		<>
			<HeroSlider />
			<div className="home-sliders">
				<div className="show-slide">
					<div className="sliders-top">
						<h2>Trending</h2>
						<p>Show More</p>
					</div>
					{/* Trending */}
					<ShowsSlider />
				</div>

				<div className="show-slide">
					<div className="sliders-top">
						<h2>Discover</h2>
						<p>Show More</p>
					</div>
					{/* Trending */}
					<ShowsSlider />
				</div>



			</div>
		</>
	)
}
		// <div className="home-container">
		// 	<img src={require("../../images/banners/snk-banner.jpeg")} alt="" />
		// </div>

export default Home