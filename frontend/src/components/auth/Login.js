import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { popupNotification } from '../../lib/notification'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  }

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
    try {
      const response = await loginUser(this.state.formData)
      popupNotification(`${response.data.message}`)
      console.log(response)
      setToken(response.data.token)
      this.props.history.push('/')
    } catch ( err ) {
      popupNotification('Invalid email or password')
    }
  } 

  render() {
    const { email, password } = this.state

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-one-third is-offset-one-third box">
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
                <button type="submit" className="button is-fullwidth">Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login