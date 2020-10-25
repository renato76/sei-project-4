import React from 'react'

const MovieForm = props => {
  const { handleChange, handleSubmit } = props
  const { title, genre, image, description, starring, release, director, duration, age_rating } = props.formData

  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              placeholder="Title (Required)" 
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Genre</label>
          <div className="control">
            <input
              className="input"
              placeholder="Genre (Required. Multiple values seprated by comma)"
              name="genre"
              value={genre}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Image(Required)"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Description (Required)"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Starring</label>
          <div className="control">
            <input
              className="input"
              placeholder="Starring (Required)"
              name="starring"
              value={starring}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Release</label>
          <div className="control">
            <input
              className="input"
              placeholder="Release Year (Required)"
              name="release"
              value={release}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Director</label>
          <div className="control">
            <input
              className="input"
              placeholder="Director(Required)"
              name="director"
              value={director}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Duration</label>
          <div className="control">
            <input
              className="input"
              placeholder="Duration (eg: 1h 45m)"
              name="duaration"
              value={duration}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Age Rating</label>
          <div className="control">
            <input
              className="input"
              placeholder="Age Rating (eg. PG or 18)"
              name="age_rating"
              value={age_rating}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth is-dark">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default MovieForm