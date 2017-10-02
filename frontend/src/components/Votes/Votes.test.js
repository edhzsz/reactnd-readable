import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
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

  it('should dispatch action when clicking upvote and downvote', () => {
    const onUpvoteButtonClick = jest.fn();
    const onDownvoteButtonClick = jest.fn();
    const wrapper = mount(<Votes votes={2} onUpvote={onUpvoteButtonClick} onDownvote={onDownvoteButtonClick}/>)

    wrapper.find('.upvote button').simulate('click')
    wrapper.find('.downvote button').simulate('click')

    expect(onUpvoteButtonClick.mock.calls.length).toBe(1);
    expect(onDownvoteButtonClick.mock.calls.length).toBe(1);
  });
});