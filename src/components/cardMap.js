import React, { useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import customIcon from '../images/marker-icon-gold.png'
import markerShadow from '../images/marker-shadow.png'

// const cardNumber = window.location.hash.replace("#/cards/", "")

const goldIcon = new Icon({
  iconUrl: customIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function CardMap(props) {
  // const [markersData, setMarkersData] = useState([]);
  const [activeStory, setActiveStory] = useState(null);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/cards/${cardNumber}`)
  //     .then(response => response.json())
  //     .then(result => {
  //       setMarkersData(result.card.stories)
  //     })
  // }, [])

  return (
    <div className="map-container">
    <Map center={[19.810, 0]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {props.markersData.map(story => (
        <Marker 
          key={story.id} 
          position={[story.lat, story.lng]} 
          onClick={() => {
            setActiveStory(story)
          }}
          icon={goldIcon}
          />
      ))}

      {activeStory && (
        <Popup 
          position={[activeStory.lat, activeStory.lng]} 
          onClose={() => {
            setActiveStory(null)
          }}
        >
          <div>
            <h1>KindCard #{activeStory.number}</h1>
          </div>
        </Popup>)}
    </Map>
    </div>
  );
}