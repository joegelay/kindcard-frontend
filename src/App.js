import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/homepage'
import Footer from './components/footer'
import Header from './components/header'

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
      <Header />
      <Homepage markersData={this.state.markersData}/>
      <Footer />
    </div>
  );
    }
}

export default App;
