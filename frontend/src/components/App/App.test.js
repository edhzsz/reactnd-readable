import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import ConnectedApp, { mapStateToProps, App } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: App', () => {

  describe('Map Dispatch To Props', () => {
    it('returns the default state', () => {
      expect(mapStateToProps()).toEqual({
        name: 'Edgar'
      });
    });
  });

  describe('Disconnected component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('should match its empty snapshot', () => {
      const tree = shallow(
        <App />
      );

      expect(toJSON(tree)).toMatchSnapshot();
    });

    it('should render the name prop', () => {
      const tree = shallow(
        <App name='Test'/>
      );

      expect(toJSON(tree)).toMatchSnapshot();
    });
  });

  describe('Connected component', () => {
    it('should be connected', () => {
      const mockStore = configureMockStore();
      const store = mockStore({

      });

      const tree = renderer.create(
        <Provider store={store} >
          <ConnectedApp />
        </Provider>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});