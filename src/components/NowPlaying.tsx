import { useQuery } from '@apollo/client';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import { NOW_PLAYING } from '../graphql/queries';
import { Movie } from '../model';
// import { setAppBadge } from '../pwsUtilities';
import MovieList from './MovieList';
import './NowPlaying.css';
// import UpdateRefreshToast from './UpdateRefreshToast';

function NowPlaying() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | undefined>();

    // const { loading, error, data } = useQuery(NOW_PLAYING);

    const { loading } = useQuery(NOW_PLAYING, {
        onCompleted: (data) => {
            //set full list of movies as master list which can be filtered thru and display a subset
            setMovies(data.nowPlaying);
            // setFilteredMovies(data.nowPlaying);
            // setAppBadge(data.nowPlaying.length);
        },
        onError: (err) => {
            setError("An error occurred querying movies: " + err);
            // setSearchDisabled(true);	//disable search if no movies are returned
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    // const notify = () => toast(UpdateRefreshToast, {
    //     autoClose: false
    // });

    return (
        <>
            <h3>Now Playing</h3>
            {/* <button onClick={notify}>Notify!</button> */}
            <MovieList movies={movies} />
        </>
    );
}

export default NowPlaying;
