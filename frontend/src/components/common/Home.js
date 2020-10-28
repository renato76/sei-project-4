import React from 'react'
import { getAllMovies } from '../../lib/api'

import MoviesCard from '../movies/MoviesCard'

class Home extends React.Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    const response = await getAllMovies()
    console.log(getAllMovies)
    this.setState({
      movies: response.data
    })
    // console.log('movies array >>>>', response.data)
  }


  render() {
    const movies = this.state.movies
    const comedies = movies.filter(movie => movie.genre.includes(1))
    const thrillers = movies.filter(movie => movie.genre.includes(3))
    

    if ( !this.state.movies ) return null

    return (
      <div className="home-main">
        <div className="hero">
          <div className="title">
            <img className="featured" 
              src="https://free4kwallpapers.com/uploads/originals/2020/05/01/interstellar-wallpaper.jpg" alt="featured-movie"  />
            <a href="https://www.youtube.com/watch?v=zSWdZVtXT7E&t=10s"><h2>Play Trailer</h2></a>
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
            { comedies.map(movie => (
              <MoviesCard key={movie.id} {...movie} />
            ))}
          </div>
          <div className="home-titles">
            <h1>THRILLERS</h1>
          </div>
          <div className="movie-row">       
            { thrillers.map(movie => (
              <MoviesCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
