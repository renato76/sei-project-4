import React from 'react'
import { getSingleMovie, updateMovie } from '../../lib/api'
import MovieForm from './MovieForm'

class MovieEdit extends React.Component {
  state = {
    formData: {
      title: '',
      image: '',
      genre: [1],
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

  // In order to pre-populate the edit form with current data, 
  // I need to make an api request to movie ID 
  // then update the state with that info
  // This is done in componentDidMount
  async componentDidMount() {

    const movieId = this.props.match.params.id
    const response = await getSingleMovie(movieId)
    // console.log(response)
    this.setState({
      formData: response.data
    })
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
    const genreItems = this.state.formData.genre.map(genre => genre.id)
    // console.log(genreItems)
    this.state.formData.genre = genreItems

    const userId = this.state.formData.user
    console.log(userId)
    this.state.formData.user = userId.id

    const likedBy = this.state.formData
    // console.log(likedBy)
    this.state.formData.liked_by = likedBy.value

    const movieId = this.props.match.params.id
    // post to /movies via the api axios request
    const response = await updateMovie(movieId, this.state.formData)
    // console.log(response)

    // redirect user to the new edited movie detail page
    this.props.history.push(`/movies/${movieId}`)

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

export default MovieEdit