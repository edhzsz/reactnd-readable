import React from 'react';
import PropTypes from 'prop-types';
import './PostsList.css'
import Post from '../Post'

const PostsList = (props) => {
  const posts = props.posts || [];
  return (
    <div className="posts-list">
      <span>Posts</span>
      <div>
        {posts.map(post => (<Post post={post} key={post.id} />))}
      </div>
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
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
  }))
}

export default PostsList;