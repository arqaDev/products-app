import React from 'react'
import './Navbar.scss'


export const Navbar = () => {

  return (
    <nav className='navbar'>
        <ul>
            <li><a className='nav-link' href='#top'>Men's clothing</a></li>
            <li><a className='nav-link' href='#top'>Women's clothing</a></li>
            <li><a className='nav-link' href='#top'>Jewelery</a></li>
            <li><a className='nav-link' href='#top'>Electronics</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;