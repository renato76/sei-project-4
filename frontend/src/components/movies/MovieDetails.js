import React from 'react'
import { getSingleMovie } from '../../lib/api'


class MovieDetails extends React.Component {
  state = {
    movie: null
  }

  async componentDidMount() {
    // request single movie by id
    const movieId = this.props.match.params.id
    console.log(this.props, movieId)
    const response = await getSingleMovie(movieId)
    console.log(response)

  }

  render() {
    // const { movie } = this.state

    // if (!movie) return null
    return (
      <div className="details">
        <h2>App Is Running</h2>
      </div>
    )
  }
}

export default MovieDetails