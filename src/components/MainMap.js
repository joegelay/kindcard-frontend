import React from 'react'
import L from 'leaflet';
import goldIcon from '../images/marker-icon-gold.png'
import markerShadow from '../images/marker-shadow.png'

const greenIcon = new L.Icon({
  iconUrl: goldIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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
      L.marker(marker.latLng, {icon: greenIcon}).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(this.layer);
    });
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;