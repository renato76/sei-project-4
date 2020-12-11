export const setToken = token => {
  localStorage.setItem('token', token)
}

export const logout = () => {
  return localStorage.removeItem('token')
}

export const getToken = ()  => {
  return localStorage.getItem('token')
}

export const getPayLoad = () => {
  console.log('getting payload')
  const token = getToken()
  if (!token) return false

  const parts = token.split('.')
  if (parts.length < 3) return false
  console.log(parts)

  return JSON.parse(atob(parts[1]))

}

export const isAuthenticated = () => {
  const payload = getPayLoad()

  if (!payload) return false
  const now = Math.floor(Date.now() / 1000)
  console.log(now, payload.exp)
  return now < payload.exp
}
