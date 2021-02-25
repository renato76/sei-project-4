import React from 'react'
import { registerUser } from '../../lib/api'
import { popupNotification } from '../../lib/notification'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      profileImage: '',
      password: '',
      passwordConfirmation: ''
    },
    registerErrors: {}
  }
  // a function to take user input and update formdata
  handleChange = event => {
    console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }

    const registerErrors = {
      ...this.state.registerErrors,
      [event.target.name]: ''
    }
    // console.log(formData)
    this.setState({ formData, registerErrors })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await registerUser(this.state.formData)
      console.log(response)
      this.props.history.push('login')
      popupNotification('Welcome, now please log in!')
    } catch ( err ) {
      // console.log(err.response)
      this.setState({ registerErrors: err.response.data })
      return
    }     
  }

  render() {
    const { username, email, profileImage, firstName, lastName, password, passwordConfirmation, registerErrors } = this.state
    return (
      <section className="section">
        <div className="container">
          <div className="columns sign-in-form">
            <form onSubmit={this.handleSubmit} className="column is-one-third is-offset-one-third box">
              <div className="field">
                <h2 className="reg-label">Sign Up</h2>
                <div className="control">
                  <input
                    className={`input ${registerErrors.username ? 'is-danger' : ''}`}
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    error={registerErrors.username}
                  />
                </div>
                { registerErrors.username && <p className="help is-danger">{registerErrors.username}</p> }
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className={`input ${registerErrors.email ? 'is-danger' : ''}`}
                    placeholder="Email"
                    name="email" 
                    value={email}
                    onChange={this.handleChange}
                    error={registerErrors.email}
                  />
                </div>
                { registerErrors.email && <p className="help is-danger">{registerErrors.email}</p> }
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className={`input ${registerErrors.first_name ? 'is-danger' : ''}`}
                    placeholder="First Name"
                    name="first_name" 
                    value={firstName}
                    onChange={this.handleChange}
                    error={registerErrors.first_name}
                  />
                </div>
                { registerErrors.first_name && <p className="help is-danger">{registerErrors.first_name}</p> }
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className={`input ${registerErrors.last_name ? 'is-danger' : ''}`}
                    placeholder="Last Name"
                    name="last_name"
                    value={lastName}
                    onChange={this.handleChange}
                    error={registerErrors.last_name}
                  />
                </div>
                { registerErrors.last_name && <p className="help is-danger">{registerErrors.last_name}</p> }
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className={`input ${registerErrors.profile_image ? 'is-danger' : ''}`}
                    placeholder="Profile Image URL"
                    name="profile_image" 
                    value={profileImage}
                    onChange={this.handleChange}
                    error={registerErrors.profile_image}
                  />
                </div>
                { registerErrors.profile_image && <p className="help is-danger">{registerErrors.profile_image}</p> }
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="password"
                    className={`input ${registerErrors.password ? 'is-danger' : ''}`}
                    placeholder="Password"
                    name="password" 
                    value={password}
                    onChange={this.handleChange}
                    error={registerErrors.password}
                  />
                </div>
                { registerErrors.password && <p className="help is-danger">{registerErrors.password}</p> }
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="password"
                    className={`input ${registerErrors.password_confirmation ? 'is-danger' : ''}`}
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={this.handleChange}
                    error={registerErrors.password_confirmation}
                  />
                </div>
                { registerErrors.password_confirmation && <p className="help is-danger">{registerErrors.password_confirmation}</p> }
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth">Sign Up!</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
export default Register