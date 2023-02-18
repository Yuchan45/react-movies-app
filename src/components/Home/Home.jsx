import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css'

function Home() {

	// async function getUser() {
	// 	try {
	// 		const response = await axios.get('https://api.themoviedb.org/3/movie/76341?api_key=612d35ce35f9b346cbfa8fd00595b826');
	// 		console.log(response);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	// useEffect(() => {
	// 	getUser();
		
	// }, []);


	return (
		<div className="home-container">
			<img src={require("../../images/banners/snk-banner.jpeg")} alt="" />
		</div>
	)
}

export default Home