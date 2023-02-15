import React from 'react'
import './Navbar.css';

import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='title'>Navbar</div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/movies">Movies</Link>
      <br />
      <Link to="/series">Series</Link>
      <br />
    </>
  )
}

export default Navbar