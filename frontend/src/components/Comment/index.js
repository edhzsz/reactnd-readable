import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css'
import Votes from '../Votes'
import Timestamp from 'react-timestamp';

const Comment = ({comment, onUpvote, onDownvote}) => {
  return (
    <div className="comment">
      <Votes votes={comment.voteScore} onUpvote={onUpvote} onDownvote={onDownvote} size={20} />
      <div className="comment-content">
        <span className="comment-body">{comment.body}</span>
        <span className="comment-author">{comment.author}</span>
        <Timestamp className="comment-timestamp" time={comment.timestamp/1000} format='full' />
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number,
    voteScore: PropTypes.number,
  }).isRequired,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
}

export default Comment;