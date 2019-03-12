import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footers/Header';
import Features from './components/features/index';
import VenueInfo from './components/VenueInfo/index';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
       <Header/>
       <Features/>
       <VenueInfo/>
      </div>
    );
  }
}

export default App;
