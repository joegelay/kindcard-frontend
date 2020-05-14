import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/homepage'
import Footer from './components/footer'
import Header from './components/header'

class App extends React.Component {
  state = { 
    markersData: [
      { latLng: { lat: 49.8419, lng: 24.0315 }, title: 1 }, 
      { latLng: { lat: 49.8419, lng: 24.1315 }, title: 2 }, 
    ] 
  };

  render() {
    return (
    <div className="App">
      <Header />
      <Homepage markersData={this.state.markersData}/>
      <Footer />
    </div>
  );
    }
}

export default App;
