import React, { useEffect, useState } from 'react'
import moment from 'moment'


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
                            <header className="card-story-header">
                                <h2 className="card-story-location">{storyDetail.location}</h2>
                                <h2 className="card-story-date">{moment(storyDetail.created_at).format("MM/DD/YYYY")}</h2>
                            </header>
                            <p className="card-story-content">{storyDetail.story}</p>
                        </div>
                    ))}
                </>
            }
        </div> 
    );
}