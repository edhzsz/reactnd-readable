import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Comment from '.';

const testComment = {
  id: '894tuq4ut84ut8v4t8wun89g',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1468166872634,
  body: 'Hi there! I am a COMMENT.',
  author: 'thingtwo',
  voteScore: 6,
  deleted: false,
  parentDeleted: false
};

const wrapper = shallow(<Comment comment={testComment}/>);

describe('Component: Comment', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comment comment={testComment}/>, div);
  });

  it('should match its snapshot with required props', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});