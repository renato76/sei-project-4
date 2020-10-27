import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      profileImage: '',
      password: '',
      password_confirmation: ''
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
    const { username, email, profileImage, first_name, last_name, password, password_confirmation } = this.state
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
                  />
                </div>
              </div>
              <div className="field">
                {/* <label className="label">Email</label> */}
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
                {/* <label className="label">First Name</label> */}
                <div className="control">
                  <input
                    className="input"
                    placeholder="First Name"
                    name="first_name" 
                    value={first_name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                {/* <label className="label">Last Name</label> */}
                <div className="control">
                  <input
                    className="input"
                    placeholder="Last Name"
                    name="last_name"
                    value={last_name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                {/* <label className="label">Profile Image</label> */}
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
                {/* <label className="label">Password</label> */}
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
                {/* <label className="label">Password Confirmation</label> */}
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={password_confirmation}
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