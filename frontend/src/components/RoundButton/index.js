import React from 'react';
import PropTypes from 'prop-types';
import './RoundButton.css'

const RoundButton = (props) => {
  return (
    <div className={props.className}>
      <a className={`btn-circle ${ props.type }`} href="#addpost">{props.children}</a>
    </div>
  );
}

RoundButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
}

// Specifies the default values for props:
RoundButton.defaultProps = {
  type: 'primary'
};

export default RoundButton;