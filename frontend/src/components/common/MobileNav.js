import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import NavBarContent from './NavbarContent'


class MobileNav extends React.Component {
  state = {
    menuOpen: false
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  handleStateChange (state) {
    this.setState({ menuOpen: state.isOpen })  
  }
  toggleMenu () {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
   
    return ( 
      <div className="mobile-navbar">
        <a className="mobile-logo" href="/">
          <img id="logo" className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="formula1" width="160" height="50" />
        </a>
        <Menu  isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>         
          <div className="mobile-nav" onClick={() => this.closeMenu()}>
            <NavBarContent />
          </div>
        </Menu> 
      </div>
    )
  }
}

export default MobileNav