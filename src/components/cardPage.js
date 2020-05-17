import React, { useEffect, useState } from "react";
import CardMap from './CardMap'
import Header from './header'
import Footer from './footer'
import CardStories from './CardStories'

const cardNumber = window.location.hash.replace("#/cards/", "")

export default function CardPage() {

    const [markersData, setMarkersData] = useState([]);
    
    useEffect(() => {
    fetch(`http://localhost:4000/cards/${cardNumber}`)
        .then(response => response.json())
        .then(result => {
            setMarkersData(result.card.stories)
        })
    }, [])

      return (
          <div className="App">
            <Header />
            <h1 id="brand">KindCard #{cardNumber}</h1>
            <CardMap markersData={markersData}/>
            <CardStories storyData={markersData}/>
            <Footer />
          </div> 
      );
  }

  