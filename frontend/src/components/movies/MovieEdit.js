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
    // const genreItems = this.state.formData.genre.map(genre => genre.id)
    // console.log(genreItems)
    // this.state.formData.genre = genreItems

    const userId = this.state.formData.user
    console.log(userId)
    this.state.formData.user = userId.id

    const likedBy = this.state.formData
    console.log(likedBy)
    this.state.formData.liked_by = likedBy.value

    const movieId = this.props.match.params.id
    // post to /movies via the api axios request
    const response = await updateMovie(movieId, this.state.formData)
    console.log(response)

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
            handleMultiSelect={this.handleMultiSelect}
            formData={this.state.formData}/>
        </div>
      </section>
    )
  }
}

export default MovieEdit