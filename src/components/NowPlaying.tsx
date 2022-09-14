import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { NOW_PLAYING } from '../graphql/queries';
import { Movie } from '../model';
import MovieList from './MovieList';
import './NowPlaying.css';

function NowPlaying() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | undefined>();

    // const { loading, error, data } = useQuery(NOW_PLAYING);

    const { loading } = useQuery(NOW_PLAYING, {
        onCompleted: (data) => {
            //set full list of movies as master list which can be filtered thru and display a subset
            setMovies(data.nowPlaying);
            // setFilteredMovies(data.nowPlaying);
            console.log("Got live data", data.nowPlaying);
            // localStorage.setItem(LS_PREFIX+'movies', JSON.stringify(data.nowPlaying));
            // setBadge(data.nowPlaying.length);
        },
        onError: (err) => {
            // const cachedNowPlaying = localStorage.getItem(LS_PREFIX+'movies');
            // if (cachedNowPlaying) {
            // const data = JSON.parse(cachedNowPlaying);
            // console.log("Got cached results...", data);
            // setMovies(data);
            // setFilteredMovies(data);
            // setBadge(data.length);
            // } else {
            console.log("No results from api, no data in cache, show error");
            setError("An error occurred getting movies. " + err);
            // setSearchDisabled(true);	//disable search if no movies are returned
            // }
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
        <>
            <h3>Now Playing</h3>
            <MovieList movies={movies} />
        </>
    );
}

export default NowPlaying;
