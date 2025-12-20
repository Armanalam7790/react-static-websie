import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import NavButton from './NavButton'

const Navbar = () => {
  return (
    <div className='nav '>
        <Logo />
        <NavList />
        <NavButton />
    </div>
  )
}

export default Navbar