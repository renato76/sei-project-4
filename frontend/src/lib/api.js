import axios from 'axios'

// MOVIES
export const getSingleMovie = movieId => {
  return axios.get(`/api/movies/${movieId}`)
}

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