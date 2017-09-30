import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css'
import Votes from '../Votes'

const Comment = (props) => {
  return (
    <div className="comment">
      <Votes votes={props.votes} onUpvote={props.onUpvote} onDownvote={props.onDownvote} size={20} />
      <div className="comment-wrapper">
        <span className="comment-content">{props.content}</span>
        <span className="comment-author">{props.author}</span>
      </div>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
}

export default Comment;