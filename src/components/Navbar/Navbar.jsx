import React from 'react'
import { useRef } from 'react'
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';

import './Navbar.css';

import {Link} from 'react-router-dom';

function Navbar() {
	const navRef = useRef();
	const bgRef = useRef();
  
	function showNavBar() {
	navRef.current.classList.toggle("overlay-nav");
	bgRef.current.classList.toggle("overlay-visible");
	}

	return (
		<>
			<div className='navbar-container'>
				<button className="nav-btn" onClick={showNavBar}>
					<FaBars />
				</button>

				<div className='logo-container'>
					<Link to="/">
						<img src={require("../../images/HBO_Max_Logo_White.png")} alt="" />
					</Link>
				</div>
				
				<div className="search-avatar-wrapper">
					<div className="search-container">
						<Link to="/search">
							<FaSearch />
						</Link>
					</div>
					<div className="avatar-container">
						<Avatar
							alt="Not found"
							src={require("../../images/chandler-avatar.jpg")}
							sx={{
							width: 30,
							height: 30,
							}}
							style={{
								border: '0.1px solid #f85dff'
							}}
						/>
					</div>
				</div>
			</div>
			<div className="bg-overlay-blur" ref={bgRef}></div>
			<nav ref={navRef} className='nav-aside'>
				<div className="nav-wrapper">
					<button className="nav-btn nav-close-btn" onClick={showNavBar}>
						<FaTimes />
					</button>
					<div className="links-container">
						<Link to="/" className='overlay-link'>Inicio</Link>
						<Link to="/movies" className='overlay-link'>Movies</Link>
						<Link to="/series" className='overlay-link'>Series</Link>
						<Link to="/trending" className='overlay-link'>Trending</Link>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar