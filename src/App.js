import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Homepage from './components/homepage'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
