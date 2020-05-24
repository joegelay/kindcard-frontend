import React, { useEffect } from 'react'

import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'
import jwt from 'jsonwebtoken'

export default function MyMapPage() {

    
    // useEffect(() => {
    //     const jwt = localStorage.getItem("token")
        
    //     fetch(`http://localhost:4000/stories/${u}`)
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log(result)
    //         })      
    // }, [])

    return (
        <div className="App">
            <SecondaryHeader />
         
            <h1 id="brand">Admin</h1>

            <Footer />     
        </div> 
    );
}
  