import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RoundButton from '.';

const wrapper = shallow(<RoundButton/>);

describe('Component: RoundButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RoundButton />, div);
  });

  it('should match its empty snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('should match its empty snapshot', () => {
    const button = shallow(<RoundButton className="add-post primary">Add a Book</RoundButton>)
    const tree = toJson(button);
    expect(tree).toMatchSnapshot();
  });

});