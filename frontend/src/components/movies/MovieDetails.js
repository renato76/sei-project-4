import React from 'react'
import { getSingleMovie } from '../../lib/api'
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

class MovieDetails extends React.Component {
  state = {
    movie: null
  }

  async componentDidMount() {
    // request single movie by id
    const movieId = this.props.match.params.id
    // console.log(this.props, movieId)
    const response = await getSingleMovie(movieId)
    // console.log(response)

    this.setState({
      movie: response.data
    })


  }

  render() {
    const { movie } = this.state
    console.log(movie)
    if (!movie) return null
    return (
      <div className="details">
        <div className="poster-view">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="main-right">
          <div className="movie-title">
            <h1>{movie.title}&nbsp;</h1>
            <h2>({movie.release})</h2>       
          </div>
          <div className="movie-info">
            <h3>{movie.age_rating}&nbsp;</h3>
            <div className="genres">
              <h4> {movie.genre.map(genre => genre.name)} </h4>
            </div>
            <div className="duration">
              <h4>{movie.duration}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails