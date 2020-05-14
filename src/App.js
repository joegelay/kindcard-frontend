import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/homepage'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
