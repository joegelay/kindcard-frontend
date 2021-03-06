import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import FormMap from './FormMap'

export default function EntryForm() {
    const {register, handleSubmit, errors} = useForm()

    const [location, setLocation] = useState({});
    const [successRedirect, setSuccessRedirect] = useState(false);
    const [errorRedirect, setErrorRedirect] = useState(false);

    const onSubmit = (formData) => {
        if (location.info) {
            const data = {
                number: formData.cardNumber,
                email: formData.email,
                location: location.info.info,
                story: formData.story,
                lat: location.latLng.lat,
                lng: location.latLng.lng
            }
    
            fetch(`${process.env.REACT_APP_API_URL}/stories`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                setSuccessRedirect(true)
            })
            .catch((error) => {
                setErrorRedirect(true)
            });  
        } else {
            alert("Please select a location where you received your card!")
        }
    }

    if (successRedirect) {
        return <Redirect to='/thank-you' />
    }

    if (errorRedirect) {
        return <Redirect to='/error' />
    }

    return(
        <div className="formContainer">
            <h1 className="formHeader">SHARE YOUR STORY</h1>
            <form onSubmit={handleSubmit(onSubmit)} id="entryForm">
                <label htmlFor="cardNumber">CARD NUMBER</label>
                <input className="fieldset"
                    id="cardNumber"
                    type="number" 
                    placeholder={errors.cardNumber ? "Invalid card number" : "000"} 
                    name="cardNumber" 
                    ref={register({ required: true, minLength: 3 })} 
                />
                <label htmlFor="email">EMAIL</label>
                <input className="fieldset"
                    id="email"
                    type="email" 
                    placeholder={errors.email ? "Invalid email" : "you@example.com"} 
                    name="email" 
                    ref={register({ required: true })} 
                />
                <label htmlFor="story">HOW DID YOU RECEIVE YOUR CARD?</label>
                <textarea className="fieldset"
                    id="story"
                    placeholder={errors.story ? "Share your story" : "Share your story"} 
                    name="story" 
                    ref={register({ required: true })} 
                    form="entryForm"
                ></textarea>
                <label htmlFor="map">WHERE DID YOU RECEIVE YOUR CARD?</label>
                <FormMap location={location} setLocation={setLocation}/>
                <input className="styledSubmit" type="submit" />
            </form>
        </div>
        
    )
}