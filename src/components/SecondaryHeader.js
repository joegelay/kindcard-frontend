import React from 'react'
import {Link} from 'react-router-dom'

export default function SecondaryHeader() {
  const token = localStorage.getItem("token")

      return (
          <div id="header">
            <Link className="header-link-two" to="/">HOME</Link>
            <Link className="header-link-two" to="/about">ABOUT US</Link>
            {token ? <Link className="header-link-two" to="/my-map">MY MAP</Link> : null}
            <Link className="header-link-two" to="/login">{!token ? "LOG IN" : "LOG OUT"}</Link>
          </div> 
      );
  }

  