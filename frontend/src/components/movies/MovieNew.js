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
      trailer: ''
    }
  }

  // handleMultiSelect = event => {
  //   console.log(event.target.value)
  //   // create a const with empty array
  //   const selectedIds = []
  //   // push the selected values into that array
  //   selectedIds.push(event.target.value[0])
  //   console.log(selectedIds)

  //   // now open up formdata and set genres to this array's values
  //   const formData = {
  //     ...this.state.formData,
  //     genre: selectedIds
  //   }

  //   // and set state of formdata
  //   this.setState({ formData })
  //   console.log(formData)
    
  // }

  handleChange = event => {
    // console.log(event.target)
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
    this.props.history.push(`/movies/${response.data.id}`)

  }

  render()  {
    return (
      <section className="section">
        <div className="container">
          <MovieForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            // handleMultiSelect={this.handleMultiSelect}
            formData={this.state.formData}/>
        </div>
      </section>
    )
  }
}

export default MovieNew