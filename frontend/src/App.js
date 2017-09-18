import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Readable</h1>
        </div>
        <div className="main">
          <div className="side-bar">
            <h2 className="title">Categories</h2>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Udacity</li>
              <li>+ Add Category</li>
            </ul>
          </div>
          <div className="content">
            <div className="post-list">
              <div className="post">
                <div className="post-header">
                  <span>Udacity is the best place to learn React</span>
                </div>
                <div className="post-contents">
                  <div className="post-main">
                    Everyone says so after all.
                  </div>
                  <div className="comments-list">
                    Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">

        </div>
      </div>
    );
  }
}

export default App;
