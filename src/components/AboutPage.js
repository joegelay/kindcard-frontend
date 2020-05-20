import React from "react"
import EndPage from "../layouts/EndPage"

const title = "About Us"
const description = <p>
    How much impact can a single act of kindness have? 
    This is the question we created KindCard to answer.
    <br></br><br></br>
    People do nice things for each other every day - 
    paying for the person's coffee behind them in line, 
    or stopping to help someone carry their groceries. 
    It's easy to go about our days and never think twice about these events, but 
    it's true that even the smallest act of kindness can create a ripple effect that 
    positively affects the lives of many.
    <br></br><br></br>
    KindCard aims to track these interactions to show the 
    true power of a single random act of kindness.
    <br></br><br></br>
    Email us at <a className="a-link" href="mailto:kindcardmap@gmail.com">kindcardmap@gmail.com</a> to 
    request your own KindCards, or just to say hello!
    </p>

const linkText = "Go back home"
const linkTo = '/'

export default function AboutPage() {
    return (
        <EndPage
            title={title}
            description={description}
            linkTo={linkTo}
            linkText={linkText}
        />
    ) 
}
  