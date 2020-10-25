import axios from 'axios'

// MOVIES
export const getSingleMovie = movieId => {
  return axios.get(`/api/movies/${movieId}`)
}


// AUTH
export const registerUser = formData => {
  return axios.post('/api/auth/register/', formData)
}