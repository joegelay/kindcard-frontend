import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'


export default function MyMapPage() {

    const [errorRedirect, setErrorRedirect] = useState(false);

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
            .then(result => {
                console.log(result)
            })
            .catch((error) => {
                setErrorRedirect(true)
            });  
    }, [])

    if (errorRedirect) {
        return <Redirect to='/error' />
    }

    return (
        <div className="App">
            <SecondaryHeader />
         
            <h1 id="brand">Admin</h1>

            <Footer />     
        </div> 
    );
}