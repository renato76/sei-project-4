import React from 'react'
import { Link } from 'react-router-dom'

const MoviesCard = ({ title, image, id }) => {

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