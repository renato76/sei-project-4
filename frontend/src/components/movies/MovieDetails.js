import React from 'react'
import { getSingleMovie } from '../../lib/api'

class MovieDetails extends React.Component {
  state = {
    movie: null
  }

  async componentDidMount() {
    // request single movie by id
    const response = await (getSingleMovie)
    const data = await response.json()
    console.log(data)

    this.setState({
      movie: response.data
    })
  }

  render() {
    const { movie } = this.state

    if (!movie) return null
    return (
      <div className="details">
        <h2>App Is Running</h2>
        <h2>{movie.title}</h2>
      </div>
    )
  }
}

export default MovieDetails