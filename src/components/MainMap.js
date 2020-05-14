import React from 'react'
import L from 'leaflet';

class Map extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [39.810, -30.988],
      zoom: 2,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

  
    this.layer = L.layerGroup().addTo(this.map);
    this.updateMarkers(this.props.markersData);
  }

  updateMarkers(markersData) {
    this.layer.clearLayers();
    markersData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.title }).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(this.layer);
    });
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;