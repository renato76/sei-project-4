import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      profileImage: '',
      password: '',
      passwordConfirmation: ''
    }

  }
  // a function to take user input and update formdata
  handleChange = event => {
    console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    console.log(formData)
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const response = await registerUser(this.state.formData)
    console.log(response)
    this.props.history.push('login')
  }


  render() {
    const { username, email, profileImage, password, passwordConfirmation } = this.state
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
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
                <label className="label">Profile Image</label>
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
                <label className="label">Password</label>
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
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password Confirmation"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-dark">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

}
export default Register