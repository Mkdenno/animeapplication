import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <div id='navbar'>
        <div>
         <h2>Logo</h2>
        </div>
        <ul className='flex '>
        <li>Home</li>
        <li>Movies</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar