import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RoundButton from '.';

const wrapper = shallow(<RoundButton/>);

describe('(RoundButton) RoundButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RoundButton />, div);
  });


  it('should match its empty snapshot', () => {
    const tree = toJson(wrapper);

    expect(tree).toMatchSnapshot();
  });

});