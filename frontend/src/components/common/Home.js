import React from 'react'
import MoviesCard from '../movies/MoviesCard'


class Home extends React.Component {

  state = {
    movies: [],
    comedyMovies: ''
  
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

  // function that returns movies with certain genres
  comedyMovies = () => {
    const comedy = 
    this.state.movies.filter(movie => {
      return movie.genre === 1
    })
    this.setState({ comedy })
  }
  

  render() {
    if ( !this.state.movies ) return null
    console.log(this.state)
    return (
      <div className="home-main">
        <div className="hero">
          <div className="title">
            <img className="featured" 
              src="https://free4kwallpapers.com/uploads/originals/2020/05/01/interstellar-wallpaper.jpg" alt="featured-movie"  />
            <h2>Watch Trailer</h2>   
          </div>
          <div className="home-titles">
            <h1>ACTION MOVIES</h1>
          </div>
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
