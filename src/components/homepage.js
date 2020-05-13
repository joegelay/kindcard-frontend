import React from 'react'
import MainMap from './MainMap'

export default function Homepage() {
      return (
          <div>
            <h1 id="brand">KindCard</h1>
             <h2 id="tagline">Every Act Mapped.</h2>
             <MainMap />
             <div id="main-button-container">
                <button className="main-button">Enter your card &rarr;</button> 
                <button className="main-button">View random card &rarr;</button>
             </div>
          </div> 
      );
  }

  