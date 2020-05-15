import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/homepage'

class App extends React.Component {
  state = { 
    markersData: []
  };

  componentDidMount(){
    fetch('http://localhost:4000/stories')
      .then(response => response.json())
      .then(stories => {
        this.setState({
          markersData: stories.stories
        })
      })
  }

  render() {
    return (
    <div className="App">
      <Homepage markersData={this.state.markersData}/>
    </div>
  );
    }
}

export default App;
