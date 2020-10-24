import React from 'react'
import { Link } from 'react-router-dom'

const MoviesCard = ({ title, image, id }) => {


  // 1. I would like each image to link to the Show One Movie from API backend
  // I think the url should be /movies/id



  // 2. Currently I am displaying All the movies
  // I need to create a way to display only movies with certain genres
  // for example a row of movies with genres "Action", "Crime"
  // Another row can have "Romantic" "Comedy" etc etc

  return (
    <div className="main">
      <Link to={`/movies/${id}`} >
        <div className="row-posters">
          <div className="row-poster">
            <img src={image} alt={title} />
          </div>
        </div>  
      </Link>
    </div>

  )
}

export default MoviesCard