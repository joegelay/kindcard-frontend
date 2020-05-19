import React from 'react'
import { useForm } from 'react-hook-form'
import FormMap from './FormMap'

export default function EntryForm() {
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div id="formContainer">
            <h1 id="formHeader">SHARE YOUR STORY</h1>
            <form onSubmit={handleSubmit(onSubmit)} id="entryForm">
                <label htmlFor="cardNumber">CARD NUMBER</label>
                <input className="fieldset"
                    id="cardNumber"
                    type="number" 
                    placeholder="000" 
                    name="cardNumber" 
                    ref={register({ required: true, minLength: 3 })} 
                />
                <label htmlFor="email">EMAIL</label>
                <input className="fieldset"
                    id="email"
                    type="email" 
                    placeholder="you@example.com" 
                    name="email" 
                    ref={register({ required: true })} 
                />
                <label htmlFor="story">HOW DID YOU RECEIVE YOUR CARD?</label>
                <textarea className="fieldset"
                    id="story"
                    placeholder="Share your story" 
                    name="story" 
                    ref={register({ required: true, minLength: 5 })} 
                    form="entryForm"
                ></textarea>
                <label htmlFor="map">WHERE DID YOU RECEIVE YOUR CARD?</label>
                <FormMap />
                {errors.cardNumber && <p>Invalid card number</p>}
                {errors.email && <p>Invalid email</p>}
                {errors.story && <p>Invalid story</p>}
                <input className="styledSubmit" type="submit" />
            </form>
        </div>
        
    )
}