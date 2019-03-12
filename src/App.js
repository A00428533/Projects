import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footers/Header';
import Features from './components/features/index';
import VenueInfo from './components/VenueInfo/index';
import Highlights from './components/Highlights/Index';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'white'}}>
       <Header/>
       <Features/>
       <VenueInfo/>
       <Highlights/>
      </div>
    );
  }
}

export default App;
