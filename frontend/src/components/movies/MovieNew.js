import React from 'react'
import MovieForm from './MovieForm'

class MovieNew extends React.Component {
  state = {
    formData: {
      title: '',
      genre: '',
      image: '',
      description: '',
      starring: '',
      release: '',
      director: '',
      duration: '',
      age_rating: ''
    }
  }
  render()  {
    return (
      <section className="section">
        <div className="container">
          <MovieForm formData={this.state.formData}/>
        </div>
      </section>
    )
  }
}

export default MovieNew