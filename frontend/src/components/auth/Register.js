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
    console.log(formData)
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
      console.log(err.response.data)
      this.setState({ registerErrors: err.response.data })
      return
    }     
  }


  render() {
    const { username, email, profileImage, firstName, lastName, password, passwordConfirmation, registerErrors } = this.state
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-one-third is-offset-one-third box">
              <div className="field">
                <label className="label">Register</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    error={registerErrors.username}
                  />
                </div>
                { this.state.registerErrors.username && <p className="help is-danger">{registerErrors.username}</p> }
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email" 
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="First Name"
                    name="first_name" 
                    value={firstName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="Last Name"
                    name="last_name"
                    value={lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="Profile Image URL"
                    name="profile_image" 
                    value={profileImage}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password" 
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
export default Register