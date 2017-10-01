import React from 'react';
import PropTypes from 'prop-types';
import './PostsList.css'
import Post from '../Post'
import RoundButton from '../RoundButton';
import addIcon from './icons/add.svg'


const PostsList = (props) => {
  const posts = props.posts || [];
  return (
    <div className="posts-list">
      {posts.map(post => (<Post post={post} key={post.id} />))}
      <RoundButton className="add-post" backgroundImage={addIcon} size={50}>Add a Post</RoundButton>
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