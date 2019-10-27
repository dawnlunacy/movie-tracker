export const filteredMovieData = movies => {
  return movies.map(movie => ({
    movie_id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_averge: movie.vote_average,
    overview: movie.overview
  }))
}