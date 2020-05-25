import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import customIcon from '../images/marker-icon-gold.png'
import markerShadow from '../images/marker-shadow.png'

const goldIcon = new Icon({
  iconUrl: customIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

let zoomScale = 2

const mq = window.matchMedia( "(min-width: 500px)" );

  if (mq.matches) {
    zoomScale = 2
  } else {
    zoomScale = 1
  }

export default function CardMap(props) {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <div className="map-container card-page-map">
    <Map center={[19.810, 0]} zoom={zoomScale}>
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
            <h1>{activeStory.location}</h1>
          </div>
        </Popup>)}
    </Map>
    </div>
  );
}