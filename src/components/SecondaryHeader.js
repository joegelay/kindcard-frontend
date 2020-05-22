import React from 'react'
import {Link} from 'react-router-dom'

export default function SecondaryHeader() {
      return (
          <div id="header">
            <Link className="header-link" to="/">HOME</Link>
            <Link className="header-link" to="/about">ABOUT US</Link>
            <Link className="header-link" to="/my-map">MY MAP</Link>
            <Link className="header-link" to="/login">LOG IN</Link>
          </div> 
      );
  }

  