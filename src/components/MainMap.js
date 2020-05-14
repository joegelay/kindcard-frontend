import React from 'react'
import L from 'leaflet';

class Map extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    // this.marker = L.marker(this.props.markerPosition).addTo(this.map);

    this.layer = L.layerGroup().addTo(this.map);
    this.updateMarkers(this.props.markersData);
  }

  updateMarkers(markersData) {
    this.layer.clearLayers();
    markersData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.title }).addTo(this.layer);
    });
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;