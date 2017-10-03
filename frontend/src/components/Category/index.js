import React from 'react';
import PropTypes from 'prop-types';
import './Category.css'

const Category = (props) => {
  const className = "category" + (props.isSelected ? " selected" : "");

  return (
    <div className={className}>
      {props.name}
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
}

export default Category;