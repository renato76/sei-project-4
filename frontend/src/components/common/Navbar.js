import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { logout, isAuthenticated } from '../../lib/auth'
import { popupNotification } from '../../lib/notification'
import MobileNav from './MobileNav'

const Navbar = () => {

  const handleLogOut = () => {
    // show a message to user to say goodbye or whatever
    popupNotification('You have logged out!')
    logout()
  }

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            <img id="logo" className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="formula1" width="160" height="50" />
          </a>
          <Link to="/" className="navbar-item">Home</Link>         
        </div>
        <div className="navbar-end">
          { isAuthenticated() && <Link to="/movies/new" className="navbar-item">Add A Movie</Link> }
          { !isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link> }
          { !isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link> }
          { isAuthenticated() && <Link to="/" onClick={handleLogOut} className="navbar-item">Logout</Link> }
        </div>  
        <MobileNav />     
      </div>
    </nav>
  )
}

export default withRouter(Navbar)

