import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-start">
          <a className="navbar-item" href="/"></a>
          <Link to="/" className="navbar-item">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

