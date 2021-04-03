import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { popupNotification } from '../../lib/notification'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    },
    loginErrors: {}
  }

  handleChange = event => {
    console.log(event.target)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    const loginErrors = {
      ...this.state.registerErrors,
      [event.target.name]: ''
    }
    console.log(formData)
    this.setState({ 
      formData, loginErrors })
    this.setState({
      formErrors: {}
    })
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
      console.log(err.response)
      this.setState({ loginErrors: err.response.data })
      return
      // popupNotification('Invalid email or password')
    }
  } 

  render() {
    const { email, password, loginErrors } = this.state

    return (
      <section className="section">
        <div className="container">
          <div className="columns  sign-in-form">
            <form onSubmit={this.handleSubmit} className="column is-one-third is-offset-one-third box">
              <div className="field">
                <h2 className="reg-label">Sign In</h2>
                <div className="control">
                  <input
                    className={`input ${loginErrors.detail ? 'is-danger' : ''}`}
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
                    type="password"
                    className={`input ${loginErrors.detail ? 'is-danger' : ''}`}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                { loginErrors.detail && <p className="help is-danger">{loginErrors.detail}</p> }
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login