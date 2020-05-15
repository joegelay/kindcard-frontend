import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/homepage'
import cardPage from './components/cardPage'

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
      <HashRouter>  
        <div className="App">

          <Route path="/" render={props => 
            (<Homepage {...props} markersData={this.state.markersData}/>)
          }/>
          <Route path="/cardPage" component={cardPage}/>
          
        </div>
      </HashRouter>
  );
}
}



{/* <Homepage markersData={this.state.markersData}/> */}

export default App;
