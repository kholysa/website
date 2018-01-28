import React, { Component } from 'react';
import './Style/App.css';
import Header from './Header';
import TheatreImage from './TheatreImage';
import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
          <TheatreImage/>
          <Header/>
          <Footer/>
      </div>
    );
  }
}

export default App;
