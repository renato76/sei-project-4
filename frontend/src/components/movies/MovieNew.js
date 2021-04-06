import React from 'react'
import { createMovie } from '../../lib/api'
import MovieForm from './MovieForm'

class MovieNew extends React.Component {
  state = {
    formData: {
      title: '',
      genre: [],
      image: '',
      description: '',
      starring: '',
      release: '',
      director: '',
      duration: '',
      age_rating: '',
      trailer: '',
      liked_by: []
    },
    formErrors: {}
  }

  handleMultiSelect = event => {
    // push the selected values into that array
    const selectedIds =  Array.from(event.target.selectedOptions).map((genre) => Number(genre.value))
    console.log(selectedIds)

    // now open up formdata and set genres to this array's values
    const formData = {
      ...this.state.formData,
      genre: selectedIds
    }

    // and set state of formdata
    this.setState({ formData })
    // console.log(formData)   
  }

  handleChange = event => {
    // console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    } 
    // console.log(formData)
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault() 
    // post to /movies via the api axios request
    try {
      const response = await createMovie(this.state.formData)
      // redirect user to the movie they created
      this.props.history.push(`/movies/${response.data.id}`)
    } catch (err) {
      console.log(err.response)
      this.setState({ formErrors: err.response.data })
      return
    }
  }

  render()  {
    console.log(this.state)
    return (
      <section className="add-movie-section">
        <div className="container">
          <MovieForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleMultiSelect={this.handleMultiSelect}
            formData={this.state.formData}
            formErrors={this.state.formErrors}/>
        </div>
      </section>
    )
  }
}

export default MovieNew