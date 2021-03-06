import React from 'react'

const MovieForm = props => {
  const { handleChange, handleSubmit, handleMultiSelect, formErrors } = props
  const { title, image, description, starring, release, director, duration, age_rating: ageRating, trailer } = props.formData
  console.log(props)
  return (
    <div className="add-movie">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
        <div className="field">
          <label className="label">Add / Edit A Movie</label>
          <div className="control">
            <input
              className={`input ${formErrors.title ? 'is-danger' : ''}`}
              placeholder="Title (Required)" 
              name="title"
              value={title}
              onChange={handleChange}
              error={formErrors.title}
            />
          </div>
          { formErrors.title && <p className="help is-danger">{formErrors.title}</p> }
        </div>
        { <div className={`select is-multiple ${formErrors.genre ? 'is-danger' : ''}`}
          error={formErrors.genre}>
          <label className="label">Select 1 or more genres</label>
          { formErrors.genre && <p className="help is-danger">{formErrors.genre}</p> }
          <select multiple={true} className="multiple" size="14" onChange={handleMultiSelect}>           
            <option name="1"value={1} className="option">Comedy</option>
            <option name="2"value={2} className="option">Action</option>
            <option name="3"value={3} className="option">Thriller</option>
            <option name="4"value={4} className="option">Horror</option>
            <option name="5"value={5} className="option">Drama</option>
            <option name="6"value={6} className="option">Documentary</option>
            <option name="7"value={7} className="option">Crime</option>
            <option name="8"value={8} className="option">Animation</option>
            <option name="9"value={9} className="option">Family</option>
            <option name="10"value={10} className="option">Fantasy</option>
            <option name="11"value={11} className="option">Romance</option>
            <option name="12"value={12} className="option">Science Fiction</option>
            <option name="13"value={13} className="option">War</option>
            <option name="14"value={14} className="option">Western</option>
          </select>       
        </div> }
        <div className="field">
          <div className="control">
            <input
              className={`input ${formErrors.image ? 'is-danger' : ''}`}
              type="text"
              placeholder="Image URL (required)"
              name="image"
              value={image}
              onChange={handleChange}
              error={formErrors.image}
            />
          </div>
          { formErrors.image && <p className="help is-danger">{formErrors.image}</p> }
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className={`input ${formErrors.description ? 'is-danger' : ''}`}
              type="text"
              placeholder="Description (required)"
              name="description"
              value={description}
              onChange={handleChange}
              error={formErrors.description}
            />
          </div>
          { formErrors.description && <p className="help is-danger">{formErrors.description}</p> }
        </div>
        <div className="field">
          <div className="control">
            <input
              className={`input ${formErrors.starring ? 'is-danger' : ''}`}
              type="text"
              placeholder="Starring (seperated by commas - required)"
              name="starring"
              value={starring}
              onChange={handleChange}
              error={formErrors.starring}
            />
          </div>
          { formErrors.starring && <p className="help is-danger">{formErrors.starring}</p> }
        </div>
        <div className="field">
          <div className="control">
            <input
              className={`input ${formErrors.release ? 'is-danger' : ''}`}
              placeholder="Release Year (required)"
              name="release"
              value={release}
              onChange={handleChange}
              error={formErrors.release}
            />
          </div>
          { formErrors.release && <p className="help is-danger">{formErrors.starring}</p> }
        </div>
        <div className="field">
          <div className="control">
            <input
              className={`input ${formErrors.director ? 'is-danger' : ''}`}
              placeholder="Director(required)"
              name="director"
              value={director}
              onChange={handleChange}
              error={formErrors.director}
            />
          </div>
          { formErrors.director && <p className="help is-danger">{formErrors.director}</p> }
        </div>
        <div className="field">
          <div className="control">
            <input
              className={`input ${formErrors.duration ? 'is-danger' : ''}`}
              placeholder="Duration (eg: 1h 45m)"
              name="duration"
              value={duration}
              onChange={handleChange}
              error={formErrors.duration}
            />
          </div>
          { formErrors.duration && <p className="help is-danger">{formErrors.duration}</p> }
        </div>
        <div className="field">
          <div className="control">
            <input
              className={`input ${formErrors.age_rating ? 'is-danger' : ''}`}
              placeholder="Age Rating (eg. 12A or 18)"
              name="age_rating"
              value={ageRating}
              onChange={handleChange}
              error={formErrors.age_rating}
            />
          </div>
          { formErrors.age_rating && <p className="help is-danger">{formErrors.age_rating}</p> }
        </div>
        <div className="field">
          <div className="control">
            <input
              className={`input ${formErrors.trailer ? 'is-danger' : ''}`}
              placeholder="Trailer URL(required)"
              name="trailer"
              value={trailer}
              onChange={handleChange}
              error={formErrors.trailer}
            />
          </div>
          { formErrors.trailer && <p className="help is-danger">{formErrors.trailer}</p> }
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default MovieForm