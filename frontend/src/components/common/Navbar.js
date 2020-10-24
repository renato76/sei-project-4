import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            <img id="logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=41" alt="formula1" width="112" height="30" />
          </a>
          <Link to="/" className="navbar-item">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

