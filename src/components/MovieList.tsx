import { Movie } from '../model';
import MoviePoster from './MoviePoster';
import './MovieList.css';

function MovieList(props: { movies: Movie[] }) {

    return (
        <>
            <input placeholder="Filter by title.." type="text" />
            <ul>
                {props.movies.map((movie: Movie) => (
                    <li key={movie.id}>
                        <MoviePoster movie={movie} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MovieList;
