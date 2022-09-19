import { Link } from 'react-router-dom';
import { Movie } from '../model';

import './MoviePoster.css';

interface MoviePosterProps {
    movie: Movie
}

function MoviePoster({ movie }: MoviePosterProps) {

    return (
        <Link to={`/movies/${movie.id}`} className="movie-poster">
            <img src={movie.posterPath} alt={movie.title} />
        </Link>
    );
}

export default MoviePoster;