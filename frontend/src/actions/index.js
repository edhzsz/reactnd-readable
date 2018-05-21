import * as types from '../constants/ActionTypes';

export function viewCategory({name, path}) {
  return {
    type: types.VIEW_CATEGORY,
    name,
    path
  };
}