import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='t-nav'>
        <div className='logo'>
            <p>Alibi</p>
        </div>
        <div className='navbar'>
            <ul className='nav-links'>
                <li><a >Menu</a></li>
                <li><a >Events</a></li>
                <li><a >Reservation</a></li>
                <li><a >Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar