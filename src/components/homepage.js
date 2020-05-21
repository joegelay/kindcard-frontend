import React, {useEffect, useRef} from 'react'
import { Link } from "react-router-dom";
import MainMap from './MainMap'
import Header from './Header'
import Footer from './Footer'

export default function Homepage(props) {

    const cardNumbers = []
    let randomCardNumber = ''
     
    props.markersData.forEach(marker => {
        cardNumbers.push(marker.number)
    })

    const randomNumber = cardNumbers[Math.floor(Math.random()*cardNumbers.length)]
    randomCardNumber = randomNumber

    return (
        <div className="App">
        <Header />
        <div>
            <h1 id="brand">KindCard</h1>
            <h2 id="tagline">Every Act Mapped.</h2>
        </div>
        <MainMap markersData={props.markersData} />
        <div id="main-button-container">
            <Link to='/share-your-story' className="main-button">
                Enter your card &rarr;
            </Link>
            <Link to={`/cards/${randomCardNumber}`} className="main-button">
                View random card &rarr;
            </Link>
        </div>
        <Footer />
        </div> 
    );
  }

  