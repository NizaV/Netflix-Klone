import React, { useState, useEffect } from 'react';
import axios from './axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        // if [] are empty, run once when the row loads, and dont run again, basically only run once on load
        // function fetchData() {
        //     axios.get(fetchUrl, { crossdomain: "true"})
        //     .then(response => setMovies(response.data.results));

        
        // };
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchUrl]); // <-- the dependency would go inside the bracKets
    // console.log("fetchUrl", fetchUrl);
    // console.log("title", title);
    // console.log("movies", movies);
    console.table(movies);
    return (
        <div className="row">
            <h2> {title} </h2>

            <div className="row_posters">
                {movies.map(movie => {
                   return (
                    <img
                    key={movie.id}
                    className="row_poster"
                     src={`${base_url}${movie.poster_path}`} alt={movie.title}/>
                   )
                })}
            </div>
            {/* containers and posters */}
        </div>
    )
};

export default Row;