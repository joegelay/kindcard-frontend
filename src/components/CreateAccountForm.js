import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {Redirect} from 'react-router-dom'

export default function CreateAccountForm() {
    const {register, handleSubmit, errors, reset} = useForm()

    const [errorRedirect, setErrorRedirect] = useState(false);
    const [requestMessage, setRequestMessage] = useState(null);


    const onSubmit = (formData) => {
        const data = {
            email: formData.email,
            password: formData.password
        }

        fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            setRequestMessage(data.message)
        })
        .catch((error) => {
            setErrorRedirect(true)
        });  

        reset()
    }

    if (errorRedirect) {
        return <Redirect to='/error' />
    }

    return(
        <div className="login-form">
            <h1 className="formHeader">CREATE ACCOUNT</h1>
            <form onSubmit={handleSubmit(onSubmit)} id="entryForm">
            <label htmlFor="email">EMAIL</label>
                <input className="fieldset"
                    id="email"
                    type="email" 
                    placeholder={errors.email ? "Invalid email" : "you@example.com"} 
                    name="email" 
                    ref={register({ required: true })} 
                />
                <label htmlFor="password">PASSWORD</label>
                <input className="fieldset"
                    id="password"
                    type="password" 
                    placeholder={errors.password ? "Invalid password" : "Password must be at least 8 characters"} 
                    name="password" 
                    ref={register({ required: true, minLength: 8 })} 
                />
            <h2 id="login-form-message">{requestMessage ? requestMessage : ""}</h2>
            <input className="styledSubmit" type="submit" />
            </form>
        </div>
    )
}