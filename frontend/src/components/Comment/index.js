import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css'
import Votes from '../Votes'

const Comment = (props) => {
  const comment = props.comment;

  return (
    <div className="comment">
      <Votes votes={comment.voteScore} onUpvote={props.onUpvote} onDownvote={props.onDownvote} size={20} />
      <div className="comment-content">
        <span className="comment-body">{comment.body}</span>
        <span className="comment-author">{comment.author}</span>
        <span className="comment-timestamp">{comment.timestamp}</span>
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