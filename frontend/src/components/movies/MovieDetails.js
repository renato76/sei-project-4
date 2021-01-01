import React from 'react'
import { Link } from 'react-router-dom'
import { getSingleMovie, deleteMovie, getUserProfile } from '../../lib/api'
import { createNewComment, addToWatchlist } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'

import { FaHeart } from 'react-icons/fa'

class MovieDetails extends React.Component {
  state = {
    movie: null,
    formdata: {
      text: '',
      rating: ''
    },
    liked_movies: '',
    currentUserId: ''
  }

  async componentDidMount() {    
    // request single movie by id
    const movieId = this.props.match.params.id
    // console.log(this.props, movieId)
    const response = await getSingleMovie(movieId)
    // console.log(response.data)
    this.setState({
      movie: response.data
    })  


    // So here I am retrieving the loggoed in user details, the id in particular
    // so I can then check if this user has liked this movie
    // if not, then set heart color to grey - if yes then set to pink
    // then onclick toggle the color whilst also adding / removing from like_movies

    const profile = await getUserProfile()
    // console.log(profile.data.id)
    const userId = profile.data.id
    // console.log(userId)
    this.setState({ 
      currentUserId: userId
    })

    console.log(this.state)

    // const likedByArrayIds = this.state.movie.liked_by.map(likedBy = likedBy.id)
    // const isLikedByCurrentUser = likedByArrayIds.includes()


    // const heartColor = isLikedByCurrentUser ? 'pink' : 'grey'

    // this.setState({
    //   heartColor,
    //   liked: isLikedByCurrentUser
    // })

    
  }

  // function that handles the comments formdata, 

  handleChange = event => {
    // console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    } 
    this.setState({ formData })
  }

  // A function to handle submit comment
  handleSubmit = async event => {
    event.preventDefault()
    // add the movieID to the Object formdata
    this.state.formData.movie = this.state.movie.id

    // const response = await createNewComment(this.state.formData)
    // console.log(response)
    await createNewComment(this.state.formData)
    
    console.log(this.state.formData)
    
    const movieId = this.state.movie.id
    this.props.history.push(`/movies/${movieId}`)
  }

  handleDelete = async () => {
    const movieId = this.props.match.params.id
    // console.log(movieId)
    // const response = deleteMovie(movieId)
    await deleteMovie(movieId)
    // console.log(response)
    this.props.history.push('/')
  }

  // handle add to watchlist button
  handleWatchlist = async () => {
    const movieId  = this.props.match.params.id
    await addToWatchlist(movieId)

    // need to set state of heart icon ideally toggle on and off


    // this is just to test if the movie is added to liked_movies
    const responseProfile =  await getUserProfile()
    console.log(responseProfile)
    
  }



  render() {
    const { movie, text, rating } = this.state

    
    if (!movie) return null
    return (
      <div className="show-page">
        <div className="details">
          <div className="poster-view">
            <img src={movie.image} key={movie.image} alt={movie.title} />
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
                  <h4> {movie.genre.map(genre => genre.name).join(', ')} </h4>
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
                  <button className="button"><a href={movie.trailer}>Play Trailer</a></button>
                </div>  
                <div className="like">
                  
                  { isAuthenticated  && <FaHeart size="1.6em" onClick={this.handleWatchlist} /> }
              
                  <h6>Add to Watchlist</h6>
                </div>
                { isAuthenticated() && <div className="edit-buttons">
                  <Link to={`/movies/${movie.id}/edit`} id="edit" className="button">Edit</Link>
                  <button onClick={this.handleDelete} id="delete" className="button">Delete</button>
                </div> }              
              </div> 
            </div>
          </div>
        </div>  
        <div className="next-page">
          { isAuthenticated() && <div className="comments-left">
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
                <button type="submit" className="button is-fullwidth">Submit</button>
              </div>
            </form>
          </div> }
          {/* Add review section end */}
          { !isAuthenticated() && <div className="login-to-review">     
            <h1>Login to rate and review movies</h1>  
            <Link to={'/login'} className="button">Login</Link>        
          </div>
          }  
          <div className="comments-right">
            <div className="comments-box">
              <div className="comments-title">
                <h1>Reviews</h1>
              </div>
              <hr />
              <div className="user-reviews-parent">
                <div className="user-reviews">
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