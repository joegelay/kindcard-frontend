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
import AdminPage from './components/AdminPage'

class App extends React.Component {
 
  render() {
    return (
      <HashRouter>  
          <Route exact path="/" component={Homepage}/>
          <Route path="/cards/:id" component={CardPage}/>
          <Route path="/share-your-story" component={SubmitPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/thank-you" component={ThankYouPage}/>
          <Route path="/my-map" component={MyMapPage}/>
          <Route path="/error" component={ErrorPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/admin" component={AdminPage}/>
      </HashRouter>
    );
  }
}

export default App;