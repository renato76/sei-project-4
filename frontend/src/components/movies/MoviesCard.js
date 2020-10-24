import React from 'react'
import MovieDetails from './MovieDetails'

const MoviesCard = ({ title, image }) => {

  // Currently I am displaying All the movies
  // I need to created a way to display only movies with certain genres
  // for example a row of movies with genres "Action", "Crime"
  // Another row can have "Romantic" "Comedy" etc etc

  return (
    <div className="main">
      <div className="row-posters">
        <div className="row-poster">
          <img src={image} alt={title} />
        </div>
      </div>  
      <MovieDetails /> 
    </div>

  )
}

export default MoviesCard