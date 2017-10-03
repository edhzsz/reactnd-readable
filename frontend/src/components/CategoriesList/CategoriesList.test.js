import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CategoriesList from '.';

const wrapper = shallow(<CategoriesList />);

describe('Component: CategoriesList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoriesList />, div);
  });

  it('should match its snapshot with required props', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});