import React from "react"
import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'
import LoginForm from '../layouts/LoginForm'

export default function LoginPage() {
    return (
        <div className="App">
            <SecondaryHeader />
            <div id="login-form-container">
            <LoginForm header="LOG IN" password="Enter password"/>
            <LoginForm header="CREATE ACCOUNT" password="Password must be at least 8 characters"/>
            </div>
            <Footer />  
        </div> 
    );
  }

  