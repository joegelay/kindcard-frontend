import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/Homepage'
import CardPage from './components/CardPage'
import SubmitPage from './components/SubmitPage'

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
      
          <Route exact path="/" render={props => 
            (<Homepage {...props} markersData={this.state.markersData}/>)
          }/>
          <Route path="/cards/:id" component={CardPage}/>
          <Route path="/share-your-story/" component={SubmitPage}/>
          
      </HashRouter>
    );
  }
}

export default App;