import React from 'react';
import './Home.css'
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import ShowsSlider from '../ShowsSlider/ShowsSlider';
import Footer from '../Footer/Footer'

import {Link} from 'react-router-dom';

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
						<Link to="/trending" className='slider-show-more'>Show More</Link>
					</div>
					{/* Trending */}
					<ShowsSlider type={'trending'} />
				</div>

				<div className="show-slide">
					<div className="sliders-top">
						<h2>Discover</h2>
						<Link to="/trending" className='slider-show-more'>Show More</Link>
					</div>
					{/* Discover */}
					<ShowsSlider type={'discover'} />
				</div>

				<div className="show-slide">
					<div className="sliders-top">
						<h2>Popular Tv</h2>
						<Link to="/trending" className='slider-show-more'>Show More</Link>
					</div>
					{/* Popular Movies */}
					<ShowsSlider type={'popularTv'} />
				</div>
			</div>
			<Footer />
		</>
	)
}


export default Home