import React, { useEffect, useState } from 'react'
import moment from 'moment'


export default function AllStories() {

    const [loading, setLoading] = useState(true);
    const [storyData, setStoryData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/stories')
            .then(response => response.json())
            .then(storiesObj => {
                const storyResults = storiesObj.stories
                
                const allStories = []
                storyResults.forEach(story => {
                    allStories.push(story)
                })
                setStoryData(allStories)
            })
            .then(setLoading(false))

        return () => setLoading(true)
    }, [])

    const deleteStory = (storyId) => {
        let newStoryData = storyData.filter(story => story.id !== storyId)
        setStoryData(newStoryData)

        const jwt = localStorage.getItem("token")
        
        fetch(`http://localhost:4000/story/${storyId}`, {
            method: 'DELETE', 
            headers: {
                    'Authorization': jwt
                }
        })
    }

    return (
        <div id="card-stories-container">
            {loading && 
                <p>Loading...</p>
            }
            {!loading && 
                <>
                    {storyData.map(storyDetail => (
                        <div key={storyDetail.id} className="card-story">
                            <header className="card-story-header">
                                <h2 className="card-story-location">{storyDetail.location}</h2>
                                <h2 className="card-story-date">{moment(storyDetail.created_at).format("MM/DD/YYYY")}</h2>
                            </header>
                            <p className="card-story-content">{storyDetail.story}</p>
                            <button className="admin-delete" onClick={(event) => {
                                deleteStory(storyDetail.id)
                            }}>REMOVE STORY</button>
                        </div>
                    ))}
                </>
            }
        </div> 
    );
}