import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../../lib/auth'

// create a function that does something when you click the burger menu
// like open up and display a list of links
// and turns into X to close the menu / toggle feature




const MobileNav = () => {
  return (
    <div className="navbar-brand">
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    

  )
}


export default withRouter(MobileNav)