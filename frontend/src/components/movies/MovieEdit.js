import React from 'react'
import { getSingleMovie, updateMovie } from '../../lib/api'
import MovieForm from './MovieForm'

class MovieEdit extends React.Component {
  state = {
    formData: {
      title: '',
      image: '',
      genre: [],
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

  // In order to pre-populate the edit form with current data, 
  // I need to make an api request to movie ID 
  // then update the state with that info
  // This is done in componentDidMount
  async componentDidMount() {

    const movieId = this.props.match.params.id
    const response = await getSingleMovie(movieId)
    console.log(response.data)
    
    this.setState({
      formData: response.data
    })
    console.log(response.data.genre)

    // Basically the error said expected PK received a dict, 
    // so the console.log shows an object with arrays inside
    // needed to extract just the ids from the object and save them to the genres array in state

    const genres = response.data.genre.map(genre => genre.id)
    console.log(genres)

    this.state.formData.genre = genres
    
  }
  handleMultiSelect = event => {
    // push the selected values into that array
    const selectedIds =  Array.from(event.target.selectedOptions).map((o) => Number(o.value))
    console.log(selectedIds)

    // now open up formdata and set genres to this array's values
    const formData = {
      ...this.state.formData,
      genre: selectedIds
    }

    // and set state of formdata
    this.setState({ formData })
    console.log(formData)
    
  }

  handleChange = event => {
    
    console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    } 
    // console.log(formData)
    this.setState({ formData })
  }
  

  handleSubmit = async event => {
    event.preventDefault()     
    try {
      const userId = this.state.formData.user
      // console.log(userId)
      this.state.formData.user = userId.id

      const likedBy = this.state.formData
      // console.log(likedBy)
      this.state.formData.liked_by = likedBy.value

      const movieId = this.props.match.params.id

      // post to /movies via the api axios request
      const response = await updateMovie(movieId, this.state.formData)
      console.log(response)

      // redirect user to the new edited movie detail page
      this.props.history.push(`/movies/${movieId}`)
    } catch (err) {
      this.setState({ formErrors: err.response.data })
      return
    }

  }

  render()  {
    return (
      <section className="add-movie-section">
        <div className="container">
          <MovieForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleMultiSelect={this.handleMultiSelect}
            formData={this.state.formData}
            formErrors={this.state.formErrors} />
        </div>
      </section>
    )
  }
}

export default MovieEdit