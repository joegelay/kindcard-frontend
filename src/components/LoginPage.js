import React from "react"
import { Redirect } from 'react-router-dom'
import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'
import LoginForm from './LoginForm'
import CreateAccountForm from './CreateAccountForm'

const signUpBlurb = `
    Create an account to easily keep track of all your KindCards as they are passed along!
`

export default function LoginPage() {
    const token = localStorage.getItem("token")

    if (!token) {
        return (
            <div id="login-page" className="App">
                <SecondaryHeader />
                <p id="sign-up-blurb">{signUpBlurb}</p>
                <div id="login-form-container">
                <LoginForm />
                <h1 id="or">OR</h1>
                <CreateAccountForm />
                </div>
                <Footer />  
            </div> 
        );
    } else {
        localStorage.removeItem("token")
        return <Redirect to='/' />   
    }
  }

  