import React from 'react'
import { getSingleMovie } from '../../lib/api'

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
      <div className="show-page">
        <div className="details">
          <div className="poster-view">
            <img src={movie.image} alt={movie.title} />
          </div>
          <div className="main-right">
            <div className="right-box">
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
              <div className="overview">
                <h1>Overview</h1>
                <div className="description">
                  <h2>{movie.description}</h2>
                </div>
              </div>
              <div className="cast">
                <div className="director">
                  <h5>Director</h5>
                  <h4>{movie.director}</h4>
                  
                </div>
                <div className="starring">
                  <h5>Starring</h5>
                  <h4>{movie.starring}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>  
        <div className="next-page">
          <div className="comments-left">
            <h2>Comments</h2>
            <article className="media">
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" placeholder="Add a comment..."></textarea>
                  </p>
                </div>
                <nav className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <a className="button is-info">Submit</a>
                    </div>
                  </div>
                </nav>
              </div>
            </article>
          </div>
          <div className="comments-right">

          </div>
        </div> 
      </div>
    )
  }
}

export default MovieDetails