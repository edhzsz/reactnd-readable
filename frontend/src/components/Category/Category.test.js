import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Category from '.';

const wrapper = shallow(<Category name="React"/>);

describe('Component: Category', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Category name="React" />, div);
  });

  it('should match its snapshot with required props', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});