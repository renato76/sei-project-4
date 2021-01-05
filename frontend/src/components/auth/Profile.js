import React from 'react'
import { getUserProfile } from '../../lib/api'
import MoviesCard from '../movies/MoviesCard'

class Profile extends React.Component {
  state = {
    liked_movies: [],
    created_movies: []
  }
  async componentDidMount() {     
    const profile = await getUserProfile()
    // console.log(profile.data)
    this.setState({
      liked_movies: profile.data.liked_movies,
      created_movies: profile.data.created_movies
    })
    // console.log('watchlist array >>>>', profile.data.liked_movies)

  }
  render() {
    const watchlist = this.state.liked_movies
    const createdMovies = this.state.created_movies
    console.log(createdMovies)
    return (
      <div className="profile-container">
        <div className="watchlist">
          <h1>Watchlist</h1>
          <div className="movie-row">{watchlist.map(movie => (
            <MoviesCard key={movie.id} {...movie} />
          ))}
          </div>
        </div>
        <div className="profile-comments">
          <h1>Created Movies</h1>
          <div className="movie-row">{createdMovies.map(movie => (
            <MoviesCard key={movie.id} {...movie} />
          ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
