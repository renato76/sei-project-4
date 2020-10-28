import axios from 'axios'

// MOVIES

// GET ALL MOVIES
export const getAllMovies = () =>  {
  return axios.get('/api/movies/')
}

// GET ONE MOVIE
export const getSingleMovie = movieId => {
  return axios.get(`/api/movies/${movieId}`)
}

// CREATE A MOVIE
export const createMovie = formData => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  // console.log(formData, headers)
  return axios.post('/api/movies/', formData, headers)
}

// UPDATE A MOVIE
export const updateMovie = (id, formData) => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  // console.log(formData, headers)
  return axios.put(`/api/movies/${id}/`, formData, headers)
}

// DELETE A MOVIE
export const deleteMovie = id => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.delete(`/api/movies/${id}`, headers)
}



// AUTH
export const registerUser = formData => {
  return axios.post('/api/auth/register/', formData)
}

export const loginUser = formData => {
  return axios.post('/api/auth/login/', formData)
}

// Will need another export const here to handle new comments
export const createNewComment = formData => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.post('/api/comments/', formData, headers)
}