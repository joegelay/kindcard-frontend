import React, { Component } from "react";
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

export default class FormMap extends Component {
  
  customPopup = (SearchInfo) => {
    this.props.setLocation({
        info: SearchInfo,
        latLng: SearchInfo.latLng
    })
   
    return (
      <Popup>
        <div>
          {/* <p>
            latitude and longitude from search component:{" "}
            {SearchInfo.latLng.toString().replace(",", " , ")}
          </p> */}
          <p>{SearchInfo.info}</p>
          {/* <p>
            {SearchInfo.raw &&
              SearchInfo.raw.place_id &&
              JSON.stringify(SearchInfo.raw.place_id)}
          </p> */}
        </div>
        {/* {console.log(SearchInfo.info)}
        {console.log(SearchInfo.latLng)} */}
      </Popup>
    );
  }

  render() {
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
          popUp={this.customPopup}
          closeResultsOnClick={true}
          openSearchOnLoad={true}
          markerIcon={goldIcon}
          autoCollapse={false}
        />
        {this.props.location.latLng ? 
            <Marker position={[this.props.location.latLng.lat, this.props.location.latLng.lng]} icon={goldIcon}>
                <Popup>{this.props.location.info.info}</Popup>
            </Marker> 
        : null }
      </Map>
      </div>
    );
  }
}
