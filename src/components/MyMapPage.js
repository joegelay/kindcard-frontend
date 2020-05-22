import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import MainMap from './MainMap'
import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'

export default function MyMapPage() {

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetch(`http://localhost:4000/cards/009`)
            .then(response => response.json())
            .then(result => {
                if (!result.card) {
                    return <Redirect to='/' />
                }
                setCardData(result.card.stories)
            })
            .then(setLoading(false))

            return () => setLoading(true)
    }, [])

    return (
        <div className="App">
            {loading && 
                <p>Loading...</p>
            }
            {!loading && 
            <>
                <SecondaryHeader />
                <div>
                    <h1 id="brand">My Map</h1>
                </div>
                <MainMap markersData={cardData}/>
                <div id="main-button-container">
                    <h2 id="tagline">The map above shows all locations of cards for which you have submitted a story.</h2>
                </div>
                <Footer />
            </>
            }
        </div> 
    );
}
  