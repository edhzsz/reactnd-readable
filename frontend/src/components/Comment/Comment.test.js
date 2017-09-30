import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Comment from '.';

const wrapper = shallow(<Comment author="test" content="test comment" votes={2}/>);

describe('Component: Comment', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comment author="test" content="test comment" votes={2}/>, div);
  });

  it('should match its snapshot with required props', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});