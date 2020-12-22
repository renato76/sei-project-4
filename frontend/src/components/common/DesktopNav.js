import React from 'react';
import NavBarContent from './NavbarContent'
import { Link } from 'react-router-dom'

class DesktopNav extends React.Component {
  render(){ 
    return (
    
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              <img id="logo" className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="formula1" width="160" height="50" />
            </a>
            <Link to="/" className="navbar-item">Home</Link>         
          </div>  
          <NavBarContent />
        </div>
      </nav>
    )
  }
}

export default DesktopNav