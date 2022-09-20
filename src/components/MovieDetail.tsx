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
            setMovie(data.movie);
        },
        onError: (err) => {
            setError("An error occurred querying a movie: " + err);
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
            <div>{movie?.voteAverage}</div>
            <img src={movie?.images.posterPath} alt="{movie?.title}" />
            <img src={movie?.images.backdropPathW1280} alt="{movie?.title}" />
        </>
    );
}

export default MovieDetail;
