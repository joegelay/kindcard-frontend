import React from 'react'
import { useForm } from 'react-hook-form'

export default function EntryForm() {
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div id="formContainer">
            <h1 id="formHeader">SHARE YOUR STORY</h1>
            <form onSubmit={handleSubmit(onSubmit)} id="entryForm">
                <input className="fieldset"
                    type="number" 
                    placeholder="000" 
                    name="cardNumber" 
                    ref={register({ required: true, minLength: 3 })} 
                />
                <input className="fieldset"
                    type="email" 
                    placeholder="you@example.com" 
                    name="email" 
                    ref={register({ required: true })} 
                />
                <textarea className="fieldset"
                    placeholder="Share your story" 
                    name="story" 
                    ref={register({ required: true, minLength: 5 })} 
                    form="entryForm"
                ></textarea>
                {errors.cardNumber && <p>Invalid card number</p>}
                {errors.email && <p>Invalid email</p>}
                {errors.story && <p>Invalid story</p>}
                <input className="styledSubmit" type="submit" />
            </form>
        </div>
        
    )
}