import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { getSingleMovie, deleteMovie, getUserProfile } from '../../lib/api'
import { createNewComment, addToWatchlist, removeFromWatchlist } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'
import { popupNotification } from '../../lib/notification'

import { FaHeart } from 'react-icons/fa'

const MovieDetails = (props) => {
  const { match } = props

  const [movie, setMovie] = useState('')
  const [formData, setFormdata] = useState({ text: '', rating: '' })
  const [currentUserId, setCurrentUserId] = useState('')
  const [heartColor, setHeartColor] = useState('grey')
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const movieId = match.params.id
      const response = await getSingleMovie(movieId)
      const movie = response.data
      setMovie(movie)
      // console.log({ movie, response })

      // Get user profile details and update state
      const profile = await getUserProfile()
      const userId = profile.data.id
      setCurrentUserId(userId)

      const likedByArrayIds = movie.liked_by.map(user => user.id)
      const isLikedByCurrentUser = likedByArrayIds.includes(currentUserId)
      const heartColor = isLikedByCurrentUser ? 'crimson' : 'grey'
      setHeartColor(heartColor)
      setLiked(isLikedByCurrentUser)
    }
    getData()
  }, [currentUserId])

  const handleChange = event => {
    const { name, value } = event.target
    setFormdata({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const newFormData = JSON.parse(JSON.stringify(formData))
      newFormData.movie = movie.id

      await createNewComment(newFormData)
      popupNotification('Thanks for your comment and rating!')
      props.history.push('/')
    } catch (err) {
      console.log(err.response)
      popupNotification('Please add a review and rating 1-5')
    }
  }

  const handleDelete = async () => {
    const movieId = match.params.id
    await deleteMovie(movieId)
    popupNotification('Movie has been deleted!')
    props.history.push('/')
  }

  const getAverageRating = () => {
    const sum = (acc, curr) => acc + curr
    const ratings = movie.comments.map(comment => comment.rating)
    if (ratings.length > 0) {
      return ((ratings.reduce(sum) * 20) / ratings.length).toFixed(0)
    } else {
      return (50).toFixed(0)
    }
  }

  const handleWatchlist = async () => {
    const movieId = props.match.params.id

    if (!liked) {
      await addToWatchlist(movieId)
      setLiked(liked)
    } else {
      await removeFromWatchlist(movieId)
      setLiked(!liked)
    }
    setHeartColor(!liked ? 'crimson' : 'grey')
    popupNotification(!liked ? 'Added to Watchlist!' : 'Removed from Watchlist!')
  }

  const { text, rating } = formData
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
                <h4>{movie.genre.map(genre => genre.name).join(', ')}</h4>
              </div>
              <div className="duration">
                <h4>{movie.duration}</h4>
              </div>
            </div>
            <div className="rating-container">
              <div className="average-rating">
                <h4>User Rating</h4>
                <h5>{getAverageRating()}%</h5>
              </div>
            </div>
            <div className="overview">
              <h1>Overview</h1>
              <div className="description">
                <p>{movie.description}</p>
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
                {isAuthenticated() && <FaHeart className="heart" onClick={handleWatchlist} color={heartColor} />}
                {/* Add to Watchlist */}
              </div>
              {isAuthenticated() && <div className="edit-buttons">
                <Link to={`/movies/${movie.id}/edit`} id="edit" className="button">Edit</Link>
                <button onClick={handleDelete} id="delete" className="button">Delete</button>
              </div>}
            </div>
          </div>
        </div>
      </div>
      {/* Add review section START */}
      <div className="next-page">
        {isAuthenticated() && <div className="comments-left">
          <form onSubmit={handleSubmit} className="review-column is-two-thirds is-offset-one-quarter box">
            <div className="field">
              <label className="label">Add A Review</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="comments"
                  name="text"
                  value={text}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth">Submit</button>
            </div>
          </form>
        </div>}
        {/* Add review section END */}
        {!isAuthenticated() && <div className="login-to-review">
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
                {movie.comments.map((comment, id) => (
                  <>
                    <div key={id} className="comment-text">
                      <h2>A review by {comment.user.username}</h2>
                      <h3>Written on: {moment(comment.created_at).format('Do MMM YY')}</h3>
                      <div className="comment-rating">
                        <p><span>{comment.rating}.0</span></p>
                      </div>
                      <p>{comment.text}</p>
                    </div>
                    <div className="comment-rating">
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

export default MovieDetails