import React from 'react';
import PropTypes from 'prop-types';
import './Votes.css'
import RoundButton from '../RoundButton';
import downArrowIcon from './icons/down_arrow.svg'

const Votes = (props) => {
  return (
    <div className="votes">
      <RoundButton
        type="secondary"
        className="upvote"
        backgroundImage={downArrowIcon}
        size={props.size}
        onClick={props.onUpvote}
        >
        Up Vote
      </RoundButton>
      <span>{props.votes}</span>
      <RoundButton
        type="secondary"
        className="downvote"
        backgroundImage={downArrowIcon}
        size={props.size}
        onClick={props.onDownvote}
        >
        Down Vote
      </RoundButton>
    </div>
  );
}

Votes.propTypes = {
  size: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
}

// Specifies the default values for props:
Votes.defaultProps = {
  size: 30
}

export default Votes;