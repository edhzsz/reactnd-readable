import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello { this.props.name }!
        </p>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    name: 'Edgar'
  }
}

export default connect(mapStateToProps)(App);
