import React, { Component } from 'react';
import RoundButton from './components/RoundButton';
import Votes from './components/Votes';
import './App.css';
import addIcon from './icons/add.svg'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Readable</h1>
        </div>
        <div className="main">
          <div className="side-bar">
            <h2 className="title base">Categories</h2>
            <ul>
              <li>All</li>
              <li>React</li>
              <li>Redux</li>
              <li>Udacity</li>
              <li>+ Add Category</li>
            </ul>
          </div>
          <div className="content">
            <div className="post-list">
              <div className="post">
                <div className="post-header base">
                  <span>Udacity is the best place to learn React</span>
                </div>
                <div className="post-contents">
                  <div className="post-votes">
                    <Votes votes={6} />
                  </div>
                  <div className="post-wrapper">
                    <div className="post-main">
                      Everyone says so after all.
                    </div>
                    <div className="comments-list">
                      <span className="title">Comments</span>
                      <ul>
                        <li>
                        <div>
                            <span className="comment-content">Hi there! I am a COMMENT.</span>
                            <span className="comment-author">thingtwo</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span className="comment-content">Comments. Are. Cool.</span>
                            <span className="comment-author">thingone</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RoundButton className="add-post" backgroundImage={addIcon} size={50}>Add a Book</RoundButton>
        </div>
        <div className="footer">

        </div>
      </div>
    );
  }
}

export default App;
