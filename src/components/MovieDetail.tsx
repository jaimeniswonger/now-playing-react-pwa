import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { MOVIE_DETAIL } from '../graphql/queries';
import { Movie } from '../model';

import './MovieDetail.css';

function MovieDetail() {
    const { id } = useParams();

    const [movie, setMovie] = useState<Movie | undefined>();
    const [error, setError] = useState<string | undefined>();

    const { loading } = useQuery(MOVIE_DETAIL, {
        variables: { id },
        onCompleted: (data) => {
            //set full list of movies as master list which can be filtered thru and display a subset
            setMovie(data.movie);
            console.log("Got live movie data", data.movie);
            // localStorage.setItem(LS_PREFIX+id, JSON.stringify(data.movie));
            //movieCache(data.movie);
        },
        onError: (err) => {
            // const cachedMovie = localStorage.getItem(LS_PREFIX+id);
            //const cachedMovie = movieCache();
            // if (cachedMovie) {
            // 	const data = JSON.parse(cachedMovie);
            // 	console.log("Got cached movie...", data);
            // 	setMovie(data);
            // } else {
            console.log("No data from api, no data in cache, show error");
            setError("An error occurred getting movies. " + err);
            // }
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;


    return (
        <>
            <h3>Movie Detail</h3>
            <div>{movie?.id}</div>
            <div>{movie?.title}</div>
            <div>{movie?.overview}</div>
            <img src={movie?.posterPath} alt="{movie?.title}" />
        </>
    );
}

export default MovieDetail;
