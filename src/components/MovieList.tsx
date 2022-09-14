import { Movie } from '../model';
import MoviePoster from './MoviePoster';
import './MovieList.css';

function MovieList(props: { movies: Movie[] }) {

    return (
        <ul>
            {props.movies.map((movie: Movie) => (
                <li key={movie.id}>
                    <MoviePoster movie={movie} />
                </li>
            ))}
        </ul>
    );
}

export default MovieList;
