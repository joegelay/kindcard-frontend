import React from 'react'
import {Link} from 'react-router-dom'

export default function SecondaryHeader() {
  const token = localStorage.getItem("token")

      return (
          <div id="header">
            <Link className="header-link" to="/">HOME</Link>
            <Link className="header-link" to="/about">ABOUT US</Link>
            {token ? <Link className="header-link" to="/my-map">MY MAP</Link> : null}
            <Link className="header-link" to="/login">{!token ? "LOG IN" : "LOG OUT"}</Link>
          </div> 
      );
  }

  