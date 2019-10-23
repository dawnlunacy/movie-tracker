export const filteredMovieData = movies => {
  return movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    rating: movie.vote_average,
    overview: movie.overview
  }))
}