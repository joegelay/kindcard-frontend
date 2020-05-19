import React, { Component } from "react";
import { Map, TileLayer, Popup, withLeaflet } from "react-leaflet";
import { ReactLeafletSearch } from "react-leaflet-search";


export default class FormMap extends Component {
  
  customPopup(SearchInfo) {
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
      </Popup>
    );
  }

  render() {
    const ReactLeafletSearchComponent = withLeaflet(ReactLeafletSearch);

    return (
    <div className="form-map">
      <Map
        center={[19.810, 0]} zoom={1}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ReactLeafletSearchComponent
          position="topleft"
          inputPlaceholder="Enter location"
          search={[33.100745405144245, 46.48315429687501]}
          showMarker={true}
          zoom={5}
          showPopup={true}
          popUp={this.customPopup}
          closeResultsOnClick={true}
          openSearchOnLoad={true}
        />
      </Map>
      </div>
    );
  }
}
