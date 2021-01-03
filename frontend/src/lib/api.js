import axios from 'axios'

// MOVIES

// helper function as I need to repeatedly get token and headers etc
const getAuthHeaders = () => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return headers
}

// GET ALL MOVIES
export const getAllMovies = () =>  {
  return axios.get('/api/movies/')
}

// GET ONE MOVIE
export const getSingleMovie = movieId => {
  return axios.get(`/api/movies/${movieId}/`)
}

// CREATE A MOVIE
export const createMovie = formData => {
  // console.log(formData, headers)
  return axios.post('/api/movies/', formData, getAuthHeaders())
}


// UPDATE A MOVIE
export const updateMovie = (id, formData) => {
  return axios.put(`/api/movies/${id}/`, formData, getAuthHeaders())
}

// DELETE A MOVIE
export const deleteMovie = id => {
  return axios.delete(`/api/movies/${id}/`, getAuthHeaders())
}

// longer version with headers etc

// export const deleteMovie = id => {
//   const token = localStorage.getItem('token')
//   const headers = {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   }
//   return axios.delete(`/api/movies/${id}/`, headers())
// }



// AUTH

export const registerUser = formData => {
  return axios.post('/api/auth/register/', formData)
}

export const loginUser = formData => {
  return axios.post('/api/auth/login/', formData)
}

// Create New Comment
export const createNewComment = formData => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.post('/api/comments/', formData, headers)
}

// Add Movie to Watchlist

export const addToWatchlist = (movieId, formData) => {
  console.log(`Adding movie ${movieId} to my Watchlist`)
  return axios.post(`/api/movies/${movieId}/likes/`, formData, getAuthHeaders())
}

// remove Movie from Watchlist

export const removeFromWatchlist = (movieId) => {
  console.log(`Removing movie ${movieId} from my Watchlist`)
  return axios.delete(`/api/movies/${movieId}/likes/`, getAuthHeaders())
}


// User Profile

export function getUserProfile(){
  return axios.get('/api/auth/profile/', getAuthHeaders())
}