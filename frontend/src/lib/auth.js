export const setToken = token => {
  localStorage.setItem('token', token)
}

export const logout = () => {
  localStorage.removeItem('token')
}

export const getToken = () => {
  localStorage.getItem('token')
}

export const getPayLoad = () => {
  const token = getToken()
  if (!token) return false

  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}

export const isAuthenticated = () => {
  const payload = getPayLoad()
  if (!payload) return false
  const now = Math.floor(Date.now() / 1000)
  return now < payload.exp
}