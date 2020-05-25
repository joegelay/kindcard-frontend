import React from "react";
import { Map, TileLayer, Popup, withLeaflet, Marker } from "react-leaflet";
import { ReactLeafletSearch } from "react-leaflet-search";
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

export default function FormMap(props) {
  
  const customPopup = (SearchInfo) => {
    props.setLocation({
        info: SearchInfo,
        latLng: SearchInfo.latLng
    })
   
    return (
      <Popup>
        <div>
          <p>{SearchInfo.info}</p>
        </div>
      </Popup>
    );
  }

  const ReactLeafletSearchComponent = withLeaflet(ReactLeafletSearch);

  return (
    <div className="form-map">
      <Map center={[19.810, 0]} zoom={1}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ReactLeafletSearchComponent className="custom-style"
          position="topleft"
          inputPlaceholder="Enter location"
          showMarker={true}
          zoom={5}
          showPopup={true}
          popUp={customPopup}
          closeResultsOnClick={true}
          openSearchOnLoad={true}
          markerIcon={goldIcon}
          autoCollapse={false}
        />
        {props.location.latLng ? 
            <Marker position={[props.location.latLng.lat, props.location.latLng.lng]} icon={goldIcon}>
                <Popup>{props.location.info.info}</Popup>
            </Marker> 
        : null }
      </Map>
      </div>
  );
}

