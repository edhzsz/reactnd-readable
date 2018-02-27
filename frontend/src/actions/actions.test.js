import * as actions from '../actions'
import * as types from '../constants/ActionTypes'

describe('Action creator', () => {
  describe('viewCategory', () => {
    it('creates the action with the correct type and parameters', () => {
      const name = 'test name';
      const url = 'http://www.test.com/';
      const expectedAction = {
        type: types.VIEW_CATEGORY,
        name,
        url
      };

      const result = actions.viewCategory({ name, url});
      expect(result).toEqual(expectedAction);
    });
  });
});