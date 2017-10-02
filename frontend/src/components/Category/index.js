import React from 'react';
import PropTypes from 'prop-types';
import './Category.css'

const Category = (props) => {
  return (
    <div className="category">
      {props.name}
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired
}

export default Category;