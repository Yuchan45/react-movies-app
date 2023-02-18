import React, { useState } from 'react';
import tmdbApi from '../../apis/tmdbApi';

function Search() {
    const [searchKey, setSearchKey] = useState("");
    const [movies, setMovies] = useState({title: "Loading Movies" });

    const fetchSearchMovies = async () => {
        const data = await tmdbApi.searchMovies(searchKey);
        setMovies(data);
    }

    const handleSubmit = (e) =>  {
		e.preventDefault();
		fetchSearchMovies();
	}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchInput" onChange={(e) => setSearchKey(e.target.value)} />
            <button>Search</button>
        </form> 
    )
}

export default Search