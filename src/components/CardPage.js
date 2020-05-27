import React, { useEffect, useState } from "react";
import {Redirect} from 'react-router-dom'
import CardMap from './CardMap'
import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'
import CardStories from './CardStories'

export default function CardPage({ match }) {

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/cards/${match.params.id}`)
            .then(response => response.json())
            .then(result => {
                if (!result.card) {
                    return <Redirect to='/' />
                }
                setCardData(result.card.stories)
            })
            .then(setLoading(false))

            return () => setLoading(true)
    }, [match.params.id])

    return (
        <div className="App">
            {loading && 
                <p>Loading...</p>
            }
            {!loading && 
                <>
                    <SecondaryHeader />
                    <h1 id="card-page-header">KindCard #{match.params.id}</h1>
                    <CardMap markersData={cardData}/>
                    <CardStories storyData={cardData}/>
                </>
            }
            <Footer />
        </div> 
    );
  }

  