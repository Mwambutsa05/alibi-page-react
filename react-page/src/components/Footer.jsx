import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footerr">
      <div className="loop">
        <h1>alibi</h1>
        <h3>stay in the loop</h3>
        <div className="loop-i">
          <input type="email" className="address" placeholder="Email address" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
      <div className="details">
        <div className="links">
          <h2>Links</h2>
          <p>Menu</p>
          <p>Events</p>
          <p>Reservation</p>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="hours">
          <h2>Links</h2>
          <p>sun</p>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wen</p>
          <p>Thu</p>
          <p>Fri</p>
          <p>Sat</p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p> 203 E 3rd Street Bethlehem, PA 18015 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
