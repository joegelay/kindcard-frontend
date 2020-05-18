import React from 'react'
import { useForm } from 'react-hook-form'

export default function EntryForm() {
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} id="entryForm">
            <input 
                type="number" 
                placeholder="000" 
                name="cardNumber" 
                ref={register({ required: true, minLength: 3 })} 
            />
            <input 
                type="email" 
                placeholder="you@example.com" 
                name="email" 
                ref={register({ required: true })} 
            />
            <textarea 
                placeholder="Share your story" 
                name="story" 
                ref={register({ required: true, minLength: 8 })} 
                form="entryForm"
            ></textarea>
            {errors.cardNumber && <p>Invalid card number</p>}
            {errors.email && <p>Invalid email</p>}
            {errors.story && <p>Invalid story</p>}
            <input type="submit" />
        </form>
    )
}