import React from 'react'

import { getSingleMovie } from '../../lib/api'

class MovieDetails extends React.Component {
  state = {
    movie: null
  }
  async componentDidMount() {
    //request a single movie by id
    const response = await getSingleMovie()
    this.setState({
      movie: response.data
    })
  }


  render() {

    return (
      <h1>Show Single Movie Details</h1>
    )
  }

}

export default MovieDetails