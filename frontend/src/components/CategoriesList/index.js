import React from 'react';
import PropTypes from 'prop-types';
import './CategoriesList.css'
import Category from '../Category'

const CategoriesList = (props) => {
  return (
    <div className="categories-list">
      <div className="category">All</div>
      <Category name="React" isSelected={true} />
      <Category name="Redux" />
      <Category name="Udacity" />
      <div className="category">+ Add Category</div>
    </div>
  );
}

CategoriesList.propTypes = {

}

export default CategoriesList;