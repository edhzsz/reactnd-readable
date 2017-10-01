import React from 'react';
import PropTypes from 'prop-types';
import './CommentsList.css'
import Comment from '../Comment'

const CommentsList = (props) => {
  return (
    <div className="comments-list">
      <span>Comments</span>
      <div>
        {props.comments.map(comment => (<Comment comment={comment} key={comment.id} />))}
      </div>
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number,
    voteScore: PropTypes.number,
  }))
}

export default CommentsList;