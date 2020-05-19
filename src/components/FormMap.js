import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
// import customIcon from '../images/marker-icon-gold.png'
// import markerShadow from '../images/marker-shadow.png'

// const goldIcon = new Icon({
//   iconUrl: customIcon,
//   shadowUrl: markerShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

export default function FormMap() {
      return (
        <div className="form-map">
            <Map center={[19.810, 0]} zoom={1}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
             </Map>
      </div>
      );
  }