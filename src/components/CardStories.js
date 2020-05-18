import React, { useEffect, useState } from 'react'

export default function CardStories(props) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.storyData.length !== 0) {
            setLoading(false)
        }
    }, [props.storyData])

    return (
        <div id="card-stories-container">
            {loading && 
                <p>Loading...</p>
            }
            {!loading && 
                <>
                    <h1>{props.storyData[0].story}</h1>
                </>
            }
        </div> 
    );
}