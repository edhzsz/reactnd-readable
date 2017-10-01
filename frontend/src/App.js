import React, { Component } from 'react';
import RoundButton from './components/RoundButton';
import CommentsList from './components/CommentsList';
import Votes from './components/Votes';
import './App.css';
import addIcon from './icons/add.svg'

const comments = [
  {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  {
    id: '8tu4bsun805n8un48ve89',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  }
];

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
                    <CommentsList comments={comments} />
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
