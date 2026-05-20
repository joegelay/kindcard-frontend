import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainMap from './MainMap';
import Header from './Header';
import Footer from './Footer';
import { getStories } from '../utils/demoStore';

export default function Homepage() {
  const [markersData, setMarkersData] = useState([]);

  useEffect(() => {
    setMarkersData(getStories());
  }, []);

  const cardNumbers = [];
  let randomCardNumber = '';

  markersData.forEach((marker) => {
    cardNumbers.push(marker.number);
  });

  const randomNumber =
    cardNumbers.length > 0
      ? cardNumbers[Math.floor(Math.random() * cardNumbers.length)]
      : null;
  randomCardNumber = randomNumber;

  return (
    <div className='App'>
      <Header />
      <div>
        <h1 id='brand'>KindCard</h1>
        <h2 id='tagline'>Every Act Mapped.</h2>
      </div>
      <MainMap markersData={markersData} />
      <div id='main-button-container'>
        <Link to='/share-your-story' className='main-button'>
          Enter your card &rarr;
        </Link>
        <Link
          to={
            randomCardNumber
              ? `/cards/${randomCardNumber}`
              : '/share-your-story'
          }
          className='main-button'
        >
          View random card &rarr;
        </Link>
      </div>
      <Footer />
    </div>
  );
}
