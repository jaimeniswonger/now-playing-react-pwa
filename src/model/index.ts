export interface Movie {
    id: string,
    title: string,
    overview: string,
    images: Images
    backdropPathW1280: string,
    voteAverage: number
}

export interface Images {
    posterPath: string,
    backdropPathW1280: string
}