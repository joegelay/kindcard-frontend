import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/Homepage'
import CardPage from './components/CardPage'
import SubmitPage from './components/SubmitPage'
import AboutPage from './components/AboutPage'
import ThankYouPage from './components/ThankYouPage'
import MyMapPage from './components/MyMapPage'
import ErrorPage from './components/ErrorPage'
import LoginPage from './components/LoginPage'

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
          <Route path="/share-your-story" component={SubmitPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/thank-you" component={ThankYouPage}/>
          <Route path="/my-map" component={MyMapPage}/>
          <Route path="/error" component={ErrorPage}/>
          <Route path="/about" component={AboutPage}/>
      </HashRouter>
    );
  }
}

export default App;