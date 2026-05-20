import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CardMap from './CardMap';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';
import CardStories from './CardStories';
import { getCard } from '../utils/demoStore';

export default function CardPage({ match }) {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);

    const card = getCard(match.params.id);

    if (!card) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setCardData(card.stories);
    setLoading(false);
  }, [match.params.id]);

  if (notFound) {
    return <Redirect to='/' />;
  }

  return (
    <div className='App'>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <SecondaryHeader />
          <h1 id='card-page-header'>KindCard #{match.params.id}</h1>
          <CardMap markersData={cardData} />
          <CardStories storyData={cardData} />
        </>
      )}
      <Footer />
    </div>
  );
}
