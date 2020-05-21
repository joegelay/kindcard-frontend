import React from "react"
import SecondaryHeader from './SecondaryHeader'
import Footer from './Footer'
import LoginForm from './LoginForm'
import CreateAccountForm from './CreateAccountForm'

export default function LoginPage() {
    return (
        <div className="App">
            <SecondaryHeader />
            <div id="login-form-container">
            <LoginForm />
            <CreateAccountForm />
            </div>
            <Footer />  
        </div> 
    );
  }

  