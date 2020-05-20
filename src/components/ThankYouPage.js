import React from "react"
import EndPage from "../layouts/EndPage"

const title = "Thank you for sharing your story!"
const description = <p>Stay tuned as we continue to add new features to the 
site such as being able to see accolades for the most used cards, 
featured stories, and much more. Until then, 
follow us on <a className="a-link" href="https://www.instagram.com/kindcard_ig/" target='_blank'>Instagram</a> and 
keep spreading the kindness!</p>

const linkText = "Go back home"
const linkTo = '/'

export default function ThankYouForSharingPage() {
    return (
        <EndPage
            title={title}
            description={description}
            linkTo={linkTo}
            linkText={linkText}
        />
    ) 
}
  