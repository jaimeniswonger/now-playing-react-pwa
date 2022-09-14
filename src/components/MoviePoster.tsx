import { Link } from 'react-router-dom';
import { Movie } from '../model';

import './MoviePoster.css';

function MoviePoster(props: { movie: Movie }) {

    return (
        <Link to={`/movies/${props.movie.id}`}>
            <h3>Movie Poster for {props.movie.id}</h3>
        </Link>
    );
}

export default MoviePoster;