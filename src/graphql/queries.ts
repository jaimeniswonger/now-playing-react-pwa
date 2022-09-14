import { gql } from '@apollo/client';

export const NOW_PLAYING = gql`
	query fetchNowPlaying {
		nowPlaying {
			id,
			title,
			posterPath
		}
	}
`;

export const MOVIE_DETAIL = gql`
	query fetchMovie($id: ID!) {
	  movie(id: $id) {
	    id
	    title
	    overview
	    posterPath,
	  }
	}
`;