import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import MainMap from './MainMap'
import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'

export default function MyMapPage() {

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);

    const userEmail = "danlove2020@yahoo.com"
    
    useEffect(() => {
        fetch(`http://localhost:4000/stories/${userEmail}`)
            .then(response => response.json())
            .then(result => {
                if (!result.stories) {
                    return <Redirect to='/' />
                }
                setCardData(result.stories)
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
                    <h2 id="tagline">The map above shows the locations of all cards for which you have submitted a story. <br></br>
                    Click the marker to visit that card's page!</h2>
                </div>
                <Footer />
            </>
            }
        </div> 
    );
}
  