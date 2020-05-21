import React from "react"
import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'
import LoginForm from './LoginForm'
import CreateAccountForm from './CreateAccountForm'

export default function LoginPage() {
    return (
        <div id="login-page" className="App">
            <SecondaryHeader />
            <div id="login-form-container">
            <LoginForm />
            <h1 id="or">OR</h1>
            <CreateAccountForm />
            </div>
            <Footer />  
        </div> 
    );
  }

  