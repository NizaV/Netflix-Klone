import React, { useState, useEffect } from 'react';
import axios from './axios'

function Row( {title, fetchUrl} ) {
    const [movies, setMovies] = useState([]);
    const base_url = "hhtps://image.tmdb.org/t/p/original/";

    useEffect(() => {
        // if [] are empty, run once when the row loads, and dont run again, basically only run once on load
        function fetchData() {
            axios.get(fetchUrl)
            .then(response => setMovies(response.data.results));
        
        };
        // async function fetchData() {
        //     var config = {
        //         headers: {'Access-Control-Allow-Origin': '*'}
        //     };
        //     const request = await axios.get(fetchUrl, config);
        //     console.log(request.data.results);
        //     setMovies(request.data.results);
        //     return request;
        // };
        fetchData();
    }, [fetchUrl]); // <-- the dependency would go inside the bracKets
    console.log("fetchUrl", fetchUrl);
    console.log("title", title);
    console.log("movies", movies);

    return (
        <div className="row">
            <h2> {title} </h2>

            <div className="row_posters">
                {movies.map( movie => {
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                })}
            </div>
            {/* containers and posters */}
        </div>
    )
};

export default Row;