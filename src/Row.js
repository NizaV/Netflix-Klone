import React, { useState, useEffect } from 'react';
import axios from './axios'
import './styles/Row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
             const urlParams = new URLSearchParams(new URL(url).search);
             console.log("params", urlParams);
             setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };
    
    return (
        <div className="row">
            <h2> {title} </h2>

            <div className="row_posters">
                {movies.map(movie => {
                   return (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title}/>
                   )
                })}
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
};

export default Row;