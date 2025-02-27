import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <div>
        <div className='loop'>
            <h1>alibi</h1>
            <h3>stay in the loop</h3>
            <input type='email' className='adress' placeholder='Email address'/>
            <button>Subscribe</button>
        </div>
        <div className='details'>
            <h1><strong>A Vibrant Haven Of Mixology , Gourmet Foods and an Intimate Ambiance</strong></h1>
            <div className='links'>
                <h2>Links</h2>
                <p>Menu</p>
                <p>Events</p>
                <p>Reservation</p>
                <p>About</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
            <div className='hours'>
            <h2>Links</h2>
                <p>sun</p>
                <p>Mon</p>
                <p>Tue</p>
                <p>Wen</p>
                <p>Thu</p>
                <p>Fri</p>
                <p>Sat</p>
            </div>
            <div className='contact'>
                <h2>Contact</h2>
                <p> 203 E 3rd Street Bethlehem, PA 18015 </p> 
            </div>
        </div>
    </div>
  )
}

export default Footer