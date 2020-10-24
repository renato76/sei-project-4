import React from 'react'
import MoviesCard from '../movies/MoviesCard'

class Home extends React.Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/movies')
      const movies = await response.json()
      console.log(movies)
      this.setState({ movies })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if ( !this.state.movies ) return null
    console.log(this.state)
    return (
      <div className="home-main">
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                <img className="featured" 
                  src="https://free4kwallpapers.com/uploads/originals/2020/05/01/interstellar-wallpaper.jpg" alt="featured-movie"  />
              </p>
            </div>
          </div>
          <h1>ACTION MOVIES</h1>
          <div className="main-page">
            
            { this.state.movies.map(movie => (
              <MoviesCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
