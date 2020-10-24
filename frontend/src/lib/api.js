import axios from 'axios'

export const getSingleMovie = movieId => {
  return axios.get(`/api/movies/${movieId}`)
}

