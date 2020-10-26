import React from 'react'
import { createMovie } from '../../lib/api'
import MovieForm from './MovieForm'

class MovieNew extends React.Component {
  state = {
    formData: {
      title: '',
      genre: [1],
      image: '',
      description: '',
      starring: '',
      release: '',
      director: '',
      duration: '',
      age_rating: '',
      trailer: '',
      liked_by: []
    }
  }

  handleChange = event => {
    console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    } 
    console.log(formData)
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    
    // post to /movies via the api axios request
    const response = await createMovie(this.state.formData)
    console.log(response)
    // redirect user to whichever page we want - I guess the show page of the movie they create


  }

  render()  {
    return (
      <section className="section">
        <div className="container">
          <MovieForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            formData={this.state.formData}/>
        </div>
      </section>
    )
  }
}

export default MovieNew