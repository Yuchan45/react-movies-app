import React, { useState, useEffect } from "react";
import './CastSlider.css';

import tmdbApi from "../../apis/tmdbApi";

function CastSlider({ show, id }) {
    const [cast, setCast] = useState([]);

    const fetchMovieCast = async (id) => {
		const data = await tmdbApi.getCastingMembers(id);
		setCast(data);
	};

    useEffect(() => {
		fetchMovieCast(id);
	}, []);

    return (
        <>
            <h3>Casts</h3>
            <ul>
                <li>
                    <img src="" alt="" />
                </li>
            </ul>
        </>
    )
}

export default CastSlider