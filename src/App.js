import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BandsCollection from './components/BandsCollection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bands collection</h1>
        </header>
        <main>
          <BandsCollection />
        </main>
        <footer>Blah</footer>
      </div>
    );
  }
}

export default App;
