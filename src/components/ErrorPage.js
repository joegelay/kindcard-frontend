import React from "react"
import EndPage from "../layouts/EndPage"

const title = "Oops!"
const description = <p>Something went wrong with your request. Please try again in a few minutes.
                        <br></br>
                        <br></br>
                    If your problem persists, please contact us at <a className="a-link" href="mailto:kindcardmap@gmail.com">kindcardmap@gmail.com</a></p>

const linkText = "Go back home"
const linkTo = '/'

export default function ErrorPage() {
    return (
        <EndPage
            title={title}
            description={description}
            linkTo={linkTo}
            linkText={linkText}
        />
    ) 
}
  