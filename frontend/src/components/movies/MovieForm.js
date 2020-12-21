import React from 'react'

const MovieForm = props => {
  const { handleChange, handleSubmit, handleMultiSelect } = props
  const { title, image, description, starring, release, director, duration, age_rating, trailer } = props.formData

  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="column add-movie is-one-third is-offset-one-third box">
        <div className="field">
          <label className="label">Add / Edit A Movie</label>
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
        { <div className="select is-multiple">
          <label className="label">Select 1-3 Genres</label>
          <select multiple={true} size="14" onChange={handleMultiSelect}>           
            <option name="1"value={1}>Comedy</option>
            <option name="2"value={2}>Action</option>
            <option name="3"value={3}>Thriller</option>
            <option name="4"value={4}>Horror</option>
            <option name="5"value={5}>Drama</option>
            <option name="6"value={6}>Documentary</option>
            <option name="7"value={7}>Crime</option>
            <option name="8"value={8}>Animation</option>
            <option name="9"value={9}>Family</option>
            <option name="10"value={10}>Fantasy</option>
            <option name="11"value={11}>Romance</option>
            <option name="12"value={12}>Science Fiction</option>
            <option name="13"value={13}>War</option>
            <option name="14"value={14}>Western</option>
          </select>
        </div> }
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Image URL (required)"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className="input"
              type="text"
              placeholder="Description (required)"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Starring (seperated by commas - required)"
              name="starring"
              value={starring}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              placeholder="Release Year (required)"
              name="release"
              value={release}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              placeholder="Director(required)"
              name="director"
              value={director}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              placeholder="Duration (eg: 1h 45m)"
              name="duration"
              value={duration}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              placeholder="Age Rating (eg. 12A or 18)"
              name="age_rating"
              value={age_rating}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              placeholder="Trailer URL(required)"
              name="trailer"
              value={trailer}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default MovieForm