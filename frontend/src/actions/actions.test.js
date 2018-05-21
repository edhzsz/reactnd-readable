import * as actions from '../actions';
import * as types from '../constants/ActionTypes';

describe('Action creator', () => {
  describe('viewCategory', () => {
    it('creates the action with the correct type and parameters', () => {
      const name = 'test name';
      const path = 'udacity';
      const expectedAction = {
        type: types.VIEW_CATEGORY,
        name,
        path
      };

      const result = actions.viewCategory({ name, path});
      expect(result).toEqual(expectedAction);
    });
  });
});