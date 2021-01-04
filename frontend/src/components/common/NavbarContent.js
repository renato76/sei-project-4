import React from 'react'
import { Link } from 'react-router-dom'

import { logout, isAuthenticated } from '../../lib/auth'
import { popupNotification } from '../../lib/notification'

class NavBarContent extends React.Component  {

  handleLogOut() {
    // show a message to user to say goodbye or whatever
    popupNotification('You have signed out!')
    logout()
  }

  render() { 
    return (
      <div className="navbar-end">    
        <Link to="/" className="navbar-item">Home</Link>  
        { isAuthenticated() && <Link to="/movies/new" className="navbar-item">Add A Movie</Link> }
        { !isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link> }
        { !isAuthenticated() && <Link to="/login" className="navbar-item sign-in">Sign In</Link> }
        {/* { isAuthenticated() && <Link to="/profile" className="navbar-item">Profile</Link> } */}
        { isAuthenticated() && <Link to="/" onClick={this.handleLogOut} className="navbar-item">Sign Out</Link> }
      </div> )
  }
}

export default NavBarContent