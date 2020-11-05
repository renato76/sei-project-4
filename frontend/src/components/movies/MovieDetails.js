import React from 'react'
import { Link } from 'react-router-dom'
import { getSingleMovie, deleteMovie } from '../../lib/api'
import { createNewComment } from '../../lib/api'

// import { FaThumbsUp, FaHeart } from 'react-icons/fa'

class MovieDetails extends React.Component {
  state = {
    movie: null,
    formdata: {
      text: '',
      rating: ''
    }
  }

  async componentDidMount() {    
    // request single movie by id
    const movieId = this.props.match.params.id
    // console.log(this.props, movieId)
    const response = await getSingleMovie(movieId)
    // console.log(response)

    this.setState({
      movie: response.data
    })
  }

  // function that handles the comments formdata, 

  handleChange = event => {
    // console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    } 
    // console.log(formData)
    this.setState({ formData })
  }

  // A function to handle submit comment
  handleSubmit = async event => {
    event.preventDefault()
    // add the movieID to the Object formdata
    this.state.formData.movie = this.state.movie.id
    const movieId = this.state.movie.id
    const response = await createNewComment(this.state.formData)
    console.log(response)
    
    this.props.history.push(`/movies/${movieId}`)
  }

  handleDelete = async () => {
    const movieId = this.props.match.params.id
    // console.log(movieId)
    const response = deleteMovie(movieId)
    await deleteMovie(movieId)
    console.log(response)
    this.props.history.push('/')
  }

  render() {
    const { movie, text, rating } = this.state
    console.log(this.state)
    // console.log(movie)
    

    if (!movie) return null
    return (
      <div className="show-page">
        <div className="details">
          <div className="poster-view">
            <img src={movie.image} key={movie.title} alt={movie.title} />
          </div>
          <div className="main-right">
            <div className="right-box">
              <div className="movie-title">
                <h1>{movie.title}&nbsp;</h1>
                <h2>({movie.release})</h2>       
              </div>
              <div className="movie-info">
                <h3>{movie.age_rating}&nbsp;</h3>
                <div className="genres">
                  <h4> {movie.genre.map(genre => genre.name)} </h4>
                </div>
                <div className="duration">
                  <h4>{movie.duration}</h4>
                </div>
              </div>
              <div className="overview">
                <h1>Overview</h1>
                <div className="description">
                  <h2>{movie.description}</h2>
                </div>
              </div>
              <div className="cast">
                <div className="director">
                  <h5>Director</h5>
                  <h4>{movie.director}</h4>                
                </div>            
                <div className="starring">
                  <h5>Starring</h5>
                  <h4>{movie.starring}</h4>
                </div>
              </div>   
              <div className="trailer-parent">
                <div className="trailer">      
                  <button><a href={movie.trailer}>Play Trailer</a></button>
                </div>  
                {/* <div className="like">
                  <FaThumbsUp size="2em" onClick={this.addLike} />
                  <h5>Likes: {this.state.likes}</h5>
                </div>
                <div className="favourite">
                  <FaHeart size="2em"/>
                </div> */}
                <div className="edit-buttons">
                  <Link to={`/movies/${movie.id}/edit`} className="button">Edit</Link>
                  <button onClick={this.handleDelete} className="button">Delete</button>
                </div> 
                
              </div> 
            </div>
          </div>
        </div>  
        <div className="next-page">
          <div className="comments-left">
            <form onSubmit={this.handleSubmit} className="review-column is-two-thirds is-offset-one-quarter box">
              <div className="field">
                <label className="label">Add A Review</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="comments"
                    name="text"
                    value={text}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Rating</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Choose 1-5"
                    name="rating" 
                    value={rating}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-dark">Submit</button>
              </div>
            </form>
          </div>
          <div className="comments-right">
            <div className="comments-box">
              <div className="comments-title">
                <h1>Reviews</h1>
              </div>
              <hr />
              <div className="user-reviews-parent">
                <div className="user-reviews">
                  {/* display comments using a map method */}
                  {movie.comments.map(comment => (
                    <>
                      <div className="comment-text">
                        <h3>User: {comment.user.username}</h3>
                        <p>Comment: {comment.text}</p>
                      </div>
                      <div className="comment-rating">
                        <p>Rating: {comment.rating}</p>
                      </div>
                      <div className="comment-rating">
                        <p>Created at: {comment.created_at}</p>
                      </div>
                      <hr />
                    </>
                  ))}
                </div>              
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default MovieDetails