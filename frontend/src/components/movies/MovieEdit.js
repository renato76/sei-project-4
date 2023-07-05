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
    this.setState({
      formData: response.data
    })
    const genres = response.data.genre.map(genre => genre.id)
    console.log(genres)
    this.state.formData.genre = genres
  }
  handleMultiSelect = event => {
    const selectedIds =  Array.from(event.target.selectedOptions).map((o) => Number(o.value))
    const formData = {
      ...this.state.formData,
      genre: selectedIds
    }
    this.setState({ formData })
    console.log(formData)
  }

  handleChange = event => {
    
    console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    } 
    this.setState({ formData })
    this.setState({
      formErrors: {}
    })
  }
  
  handleSubmit = async event => {
    event.preventDefault()  
    try {
      const formData = {
        ...this.state.formData,
        [event.target.name]: event.target.value
      } 
      this.setState({ formData })
      const userId = this.state.formData.user
      this.state.formData.user = userId.id

      const likedBy = this.state.formData
      this.state.formData.liked_by = likedBy.value

      const movieId = this.props.match.params.id      
      await updateMovie(movieId, this.state.formData)

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