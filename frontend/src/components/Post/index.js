import React from 'react';
import PropTypes from 'prop-types';
import './Post.css'
import Votes from '../Votes';
import CommentsList from '../CommentsList'

const Post = ({post}) => {
  return (
    <div className="post">
      <div className="post-title base">
        <span>{post.title}</span>
      </div>
      <div className="post-contents">
        <div className="post-votes">
          <Votes votes={post.voteScore} />
        </div>
        <div className="post-main">
          <div className="post-body">
            {post.body}
          </div>
          <CommentsList comments={post.comments} />
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number,
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    voteScore: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.number,
      voteScore: PropTypes.number,
    }))
  }).isRequired
}

export default Post;