import React from 'react'
import L from 'leaflet';
import customIcon from '../images/marker-icon-gold.png'
import markerShadow from '../images/marker-shadow.png'

const goldIcon = new L.Icon({
  iconUrl: customIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

class Map extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [19.810, 0],
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

  componentDidUpdate({ markersData }) {
    if (this.props.markersData !== markersData) {
      this.updateMarkers(this.props.markersData);
    }
  }

  updateMarkers(markersData) {
    this.layer.clearLayers();
    markersData.forEach(story => {
      L.marker([story.lat, story.lng], {icon: goldIcon}).bindPopup(`
      <h1>KindCard #${story.number}</h1><br><a href='http://localhost:4000/stories/${story.id}' target=_blank>Read stories</a>`)
      .addTo(this.layer);
    });
  }
  

  render() {
    return <div id="map"></div>
  }
}

export default Map;