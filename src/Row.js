import React, { useState, useEffect } from 'react';
import axios from './axios'

function Row( {title, fetchUrl} ) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // if [] are empty, run once when the row loads, and dont run again, basically only run once on load
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchUrl]); // <-- the dependency would go inside the bracKets
 
    return (
        <div>
            <h2> {title} </h2>

            {/* containers and posters */}
        </div>
    )
};

export default Row;