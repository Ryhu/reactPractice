import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsContainer thing="thong"/>


      </div>


    )
  }
}

export default App;
