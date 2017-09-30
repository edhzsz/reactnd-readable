import React from 'react';
import PropTypes from 'prop-types';
import './RoundButton.css'

const RoundButton = (props) => {
  const style = {
    width: props.size,
    height: props.size,
    backgroundSize: props.size / 2
  }

  if(props.backgroundImage) {
    style.backgroundImage = `url(${props.backgroundImage})`;
  }

  return (
    <div className={props.className}>
      <button className={`btn-circle ${ props.type }`} style={style} onClick={props.onClick} >{props.children}</button>
    </div>
  );
}

RoundButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  backgroundImage: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func
}

// Specifies the default values for props:
RoundButton.defaultProps = {
  type: 'primary',
  size: 50
};

export default RoundButton;