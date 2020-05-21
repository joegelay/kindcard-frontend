import React from "react"
import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
import SecondaryHeader from '../components/SecondaryHeader'


export default function EndPage({ title, description, linkTo, linkText }) {
    return (
        <div className="App">
            <SecondaryHeader />
            <div className="end-content">
                <h1 className="end-title">{title}</h1>
                <p id="end-description">{description}</p>
                <Link id="end-button" to={linkTo}>{linkText}</Link>
            </div>
            <Footer />
        </div>
    )  
}

