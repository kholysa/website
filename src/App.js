import React, { Component } from 'react';
import './style/App.css';
import Header from './Header';
import TheatreImage from './TheatreImage';
import Body from "./Body";
import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
          <TheatreImage/>
          <Header/>
          <Body/>
          <Footer/>
      </div>
    );
  }
}

export default App;
