import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'
import AllStories from './AllStories';


export default function MyMapPage() {

    const [errorRedirect, setErrorRedirect] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const jwt = localStorage.getItem("token")
        
        fetch('http://localhost:4000/admin', {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': jwt
                }
            })
            .then(response => response.json())
            .catch((error) => {
                setErrorRedirect(true)
            });  

            return () => setLoading(true)
    }, [])

    if (errorRedirect) {
        return <Redirect to='/error' />
    }

    return (
        <div className="App">
            {loading && 
                <p>Loading...</p>
            }
            {!loading &&
            <>
                <SecondaryHeader />
            
                <h1 id="brand">Admin</h1>
                <AllStories />
                <Footer />     
            </>
            }
        </div> 
    );
}
