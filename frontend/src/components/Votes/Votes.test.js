import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Votes from '.';

const wrapper = shallow(<Votes votes={2}/>);

describe('Component: Votes', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Votes votes={2}/>, div);
  });

  it('should match its snapshot with required props', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});