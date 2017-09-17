import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar">
          <h1>Readable</h1>
        </div>
        <div className="main">
          <div className="content">
            Hello World!
            <button type="button" className="primary">
              <span>Primary</span>
            </button>
            <button type="button" className="secondary">
              <span>Secondary</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
