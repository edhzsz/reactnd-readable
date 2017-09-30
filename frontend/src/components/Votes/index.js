import React from 'react';
import PropTypes from 'prop-types';
import './Votes.css'
import RoundButton from '../RoundButton';
import downArrowIcon from './icons/down_arrow.svg'

const Votes = (props) => {
  return (
    <div className="votes">
      <RoundButton type="secondary" className="up-vote" backgroundImage={downArrowIcon} size={props.size}>Up Vote</RoundButton>
      <span>{props.votes}</span>
      <RoundButton type="secondary" backgroundImage={downArrowIcon} size={props.size}>Down Vote</RoundButton>
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