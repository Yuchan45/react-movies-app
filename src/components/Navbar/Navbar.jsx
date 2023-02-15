import React from 'react'
import { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';

import './Navbar.css';

import {Link} from 'react-router-dom';

function Navbar({ bgRef }) {
  const navRef = useRef();
  
  function showNavBar() {
    navRef.current.classList.toggle("overlay-nav");
    bgRef.current.classList.toggle("overlay-visible");
  }

  return (
    <div className='navbar-container'>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>

      <nav ref={navRef}>
        <Link to="/" className='overlay-link'>Home</Link>
        <Link to="/movies" className='overlay-link'>Movies</Link>
        <Link to="/series" className='overlay-link'>Series</Link>
        <Link to="/trending" className='overlay-link'>Trending</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

      <div className='logo-container'>
        <img src="./images/HBO_MAX_LOGO.png" alt="" />
      </div>

      <div className="avatar-container">
        <Avatar
          alt="Not found"
          src="./images/chandler-avatar.jpg"
          sx={{
            width: 30,
            height: 30,
            border: 1,
            borderColor: 'secondary.main'
          }}
        />
      </div>
    </div>
  )
}

export default Navbar