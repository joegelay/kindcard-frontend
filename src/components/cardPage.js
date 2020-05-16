import React from 'react'
import MainMap from './MainMap'

export default function cardPage(props) {
      return (
          <div>
            <h1 id="brand">KindCard - Card Page</h1>
            <h2 id="tagline">Every Act Mapped.</h2>
            <MainMap markersData={props.markersData} />
            <div id="main-button-container">
                <button className="main-button">Enter your card &rarr;</button> 
                <button className="main-button">View random card &rarr;</button>
            </div>
          </div> 
      );
  }

  