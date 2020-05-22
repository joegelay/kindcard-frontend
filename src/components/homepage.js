import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import MainMap from './MainMap'
import Header from './Header'
import Footer from './Footer'

export default function Homepage() {

    const [markersData, setMarkersData] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:4000/stories/`)
            .then(response => response.json())
            .then(stories => {
                setMarkersData(stories.stories)
            })
    }, [])
        
    const cardNumbers = []
    let randomCardNumber = ''
     
    markersData.forEach(marker => {
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
            <MainMap markersData={markersData} />
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