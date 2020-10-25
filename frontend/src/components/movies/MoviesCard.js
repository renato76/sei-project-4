import React from 'react'
import { Link } from 'react-router-dom'

const MoviesCard = ({ title, image, id }) => {
  console.log(title)

  // 2. Currently I am displaying All the movies
  // I want to create a way to display only movies with certain genres
  // for example a row of movies with genres "Action", "Crime"
  // Another row can have "Romantic" "Comedy" etc etc
  

  return (
    <div id={id} className="main">
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