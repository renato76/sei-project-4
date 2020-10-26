import React from 'react'
import MoviesCard from '../movies/MoviesCard'


class Home extends React.Component {

  state = {
    movies: [],
    comedyMovies: '',
    comedy: ''
  
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

  // // function that returns movies with certain genres
  // comedyMovies = () => {
  //   const comedy = 
  //   this.state.movies.filter(movie => {
  //     return movie.genre.id === 1
  //   })
  //   this.setState({ comedy })
  // }
  

  render() {
    // const { comedyMovies } = this.state
    if ( !this.state.movies ) return null
    console.log(this.state)
    return (
      <div className="home-main">
        <div className="hero">
          <div className="title">
            <img className="featured" 
              src="https://free4kwallpapers.com/uploads/originals/2020/05/01/interstellar-wallpaper.jpg" alt="featured-movie"  />
            <a href="https://www.youtube.com/watch?v=zSWdZVtXT7E&t=10s"><h2>Watch Trailer</h2></a>
          </div>
          <div className="home-titles">
            <h1>MOST POPULAR</h1>
          </div>
          <div className="movie-row">       
            { this.state.movies.map(movie => (
              <MoviesCard key={movie.id} {...movie} />
            ))}
          </div>
          <div className="home-titles">
            <h1>COMEDIES</h1>
          </div>
          <div className="movie-row">       
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
