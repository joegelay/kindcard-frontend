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
                    {props.storyData.map(storyDetail => (
                        <div key={storyDetail.id} className="card-story">
                            <h2 className="card-story-number">#{storyDetail.number}</h2>
                            <h2 className="card-story-date">{storyDetail.created_at.getFullYear()}</h2>
                            <p className="card-story-content">{storyDetail.story}</p>



                        </div>
                    ))}
                </>
            }
        </div> 
    );
}