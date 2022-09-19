import { useState } from 'react';
import { Movie } from '../model';
import MoviePoster from './MoviePoster';

import './MovieList.css';

interface MovieListProps {
    movies: Movie[];
}
function MovieList({ movies }: MovieListProps) {

    const [searchText, setSearchText] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const search = (e: any) => {
        const filterText = e.target.value;
        setSearchText(filterText);
        if (movies && movies.length) {
            const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filterText.toLowerCase()));
            setFilteredMovies(filteredMovies);
        }
    };

    return (
        <div className="movie-container">
            <input value={searchText} onChange={search} placeholder="Filter by title.." type="text" />
            <ul>
                {filteredMovies.map((movie: Movie) => (
                    <li key={movie.id}>
                        <MoviePoster movie={movie} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
