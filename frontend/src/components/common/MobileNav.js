import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import NavBarContent from './NavbarContent'
import { FaCross } from 'react-icons/fa'

// create a function that does something when you click the burger menu
// like open up and display a list of links
// and turns into X to close the menu / toggle feature


class MobileNav extends React.Component {
  // navbar() {
  // }

  render() {
    return <Menu>
      <div className="mobile-nav">
        <NavBarContent />
      </div>
    </Menu>
  }
}

export default MobileNav