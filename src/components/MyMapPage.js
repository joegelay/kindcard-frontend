import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import MainMap from './MainMap';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';
import { getCurrentUser, getStoriesForEmail } from '../utils/demoStore';

export default function MyMapPage() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notAuthenticated, setNotAuthenticated] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!currentUser || !currentUser.email) {
      setNotAuthenticated(true);
      setLoading(false);
      return;
    }

    setCardData(getStoriesForEmail(currentUser.email));
    setLoading(false);
  }, []);

  if (notAuthenticated) {
    return <Redirect to='/login' />;
  }

  return (
    <div className='App'>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <SecondaryHeader />
          <div>
            <h1 id='brand'>My Map</h1>
          </div>
          <MainMap markersData={cardData} />
          <h2 id='my-map-blurb'>
            This map shows all story locations for cards that you have submitted
            a story for. <br></br>
            Click a marker to visit that card's page!
          </h2>
          <Footer />
        </>
      )}
    </div>
  );
}
