import React from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
  return  (
    <div>
      {[ ...Array(5)].map(star => {
        return <FaStar key={star} size={25} />
      })}
      
    </div>
  )
}

export default StarRating