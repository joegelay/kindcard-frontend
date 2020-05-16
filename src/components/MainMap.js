// import React from 'react'
// import L from 'leaflet';
// import customIcon from '../images/marker-icon-gold.png'
// import markerShadow from '../images/marker-shadow.png'

// const goldIcon = new L.Icon({
//   iconUrl: customIcon,
//   shadowUrl: markerShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

// class Map extends React.Component {
//   componentDidMount() {
//     this.map = L.map('map', {
//       center: [19.810, 0],
//       zoom: 2,
//       layers: [
//         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//           attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         }),
//       ]
//     });

//     this.layer = L.layerGroup().addTo(this.map);
//     this.updateMarkers(this.props.markersData);
//   }

//   componentDidUpdate({ markersData }) {
//     if (this.props.markersData !== markersData) {
//       this.updateMarkers(this.props.markersData);
//     }
//   }

//   updateMarkers(markersData) {
//     this.layer.clearLayers();
//     markersData.forEach(story => {
//       L.marker([story.lat, story.lng], {icon: goldIcon}).bindPopup(
//         `
//         <h1>KindCard #${story.number}</h1><br><a href='${
//           window.location.protocol + "//" + window.location.host
//         }/cards/'>Read stories</a>`)
//         .addTo(this.layer);
//       });
//   }
    
//   render() {
//     return <div id="map"></div>
//   }
// }

// export default Map;

import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import customIcon from '../images/marker-icon-gold.png'
import markerShadow from '../images/marker-shadow.png'

export default function MainMap(props) {
  const [activeStory, setActiveStory] = React.useState(null);

  return (
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
  );
}