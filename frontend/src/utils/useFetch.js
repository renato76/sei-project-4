import React, { useEffect } from 'react'

const initialState = {
  data: null,
  error: null
}

function useFetch(request,  params = null) {
  const [state, setState] = React.useState(initialState)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await request(params)
        setState({ data, error: null })
      } catch (err) {
        setState({ error: true , data: null })
      }
    }
    getData()
  }, [request, params])

  return state
}

export default useFetch