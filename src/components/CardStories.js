import React from 'react'

export default function CardStories(props) {

    const stories = props.storyData 
    console.log(stories)

      return (
          <div id="card-stories-container">
            <a className="header-link" href="/about">ABOUT</a>
            <a className="header-link" href="/log-in">LOG IN</a>
          </div> 
      );
  }

  