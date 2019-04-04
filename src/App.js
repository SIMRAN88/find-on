import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gradients from './assets/js/gradients';

class App extends Component {
  render() {
    const numColor = Math.floor( Math.random() * ( gradients.length ) );
    const color = gradients[numColor].colors;
    const backgroundGradient = {
      background: `linear-gradient( to right, ${color} )`,
    };
    return (
      <div className="App">
        <header className="App-header" style={backgroundGradient}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={ refreshPage }>Discover more gradiants</button>
        </header>
      </div>
    );
    function refreshPage(params) {
    window.location.reload()
    }
  }
  
}

export default App;
