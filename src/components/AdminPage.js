import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';
import AllStories from './AllStories';
import { getCurrentUser, isAdminUser } from '../utils/demoStore';

export default function AdminPage() {
  const [errorRedirect, setErrorRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!isAdminUser(currentUser)) {
      setErrorRedirect(true);
      setLoading(false);
      return;
    }

    setLoading(false);
  }, []);

  if (errorRedirect) {
    return <Redirect to='/error' />;
  }

  return (
    <div className='App'>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <SecondaryHeader />
          <h1 id='admin-header'>Admin</h1>
          <AllStories />
          <Footer />
        </>
      )}
    </div>
  );
}
