import React from 'react'

const MoviesCard = ({ title, image }) => {

  return (
    <div className="main">
      <div className="row-posters">
        <div className="row-poster">
          <img src={image} alt={title} />
        </div>
      </div>   
    </div>

  )
}

export default MoviesCard