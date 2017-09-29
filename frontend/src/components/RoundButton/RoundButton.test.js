import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
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

  it('should use the className and children', () => {
    const button = shallow(<RoundButton className="add-post">Add a Book</RoundButton>)
    const tree = toJson(button);
    expect(tree).toMatchSnapshot();
  });

  it('should use the size and background properties for the inner span style', () => {
    const button = mount(<RoundButton backgroundImage="./test.jpg" size={30} />)
    const tree = toJson(button);
    expect(tree).toMatchSnapshot();
  });

});