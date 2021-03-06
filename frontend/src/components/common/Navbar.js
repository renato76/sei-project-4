import React from 'react'
import { withRouter } from 'react-router-dom'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

import { useMediaQuery } from 'react-responsive'


const Navbar = () => { 
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  return (isTabletOrMobileDevice ? <MobileNav /> : <DesktopNav /> )
}
export default withRouter(Navbar)

