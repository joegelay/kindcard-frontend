import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/homepage'
import Footer from './components/footer'
import Header from './components/header'

class App extends React.Component {
  state = { 
    markerPosition: { 
      lat: 49.8419, lng: 24.0315 
    } 
  };

  render() {
    return (
    <div className="App">
      <Header />
      <Homepage markerPosition={this.state.markerPosition}/>
      <Footer />
    </div>
  );
    }
}

export default App;
