import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import MainMap from './MainMap'
import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'
import jwt from 'jsonwebtoken'

export default function MyMapPage() {

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const decodedJwt = jwt.decode(localStorage.getItem("token"))
        const userEmail = decodedJwt.email
        
        fetch(`${process.env.REACT_APP_API_URL}/${userEmail}`)
            .then(response => response.json())
            .then(result => {
                if (!result.userCards) {
                    return <Redirect to='/' />
                }

                const allStories = []

                result.userCards.forEach(card => {
                    allStories.push(card.stories)
                })
                setCardData(allStories.flat())
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
                <h2 id="my-map-blurb">This map shows all story locations for cards that you have submitted a story for. <br></br>
                Click a marker to visit that card's page!</h2>
                <Footer />
            </>
            }
        </div> 
    );
}
  