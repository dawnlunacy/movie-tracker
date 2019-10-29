import React from 'react';


export const SelectedMovie = ({ title, overview, vote_average, release_date }) => {
  return (
      <main>
        <h1>in selectedmovie</h1>
        {/* <img className="poster-img" alt="Movie Poster" src = {`https://image.tmdb.org/t/p/original/${poster_path}`}/>
        <section className="selected-movie-info">
          <h4>{title}</h4>
          <p>Synopsis:{overview}</p>
          <p>Rating: {vote_average}/10</p>
          <p>Released: {release_date}</p> */}
        {/* </section> */}
      </main>
  )
}